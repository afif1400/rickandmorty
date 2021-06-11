import {
	Handler,
	HandlerEvent,
	HandlerContext,
	HandlerResponse,
} from "@netlify/functions";
import { MongoClient } from "mongodb";

const getData = async () => {
	let client;
	try {
		client = new MongoClient("mongodb://localhost:27017/rickandmorty", {
			useUnifiedTopology: true,
		});
		await client.connect();
		const index = Math.random() * 1000;
		const data = await client
			.db("rickandmorty")
			.collection("quotes")
			.find({ name: "Rick" })
			.limit(-1)
			.skip(index)
			.next();
		return { data: data };
	} catch (error) {
		console.log(error.message);
		return {
			error: error.message,
		};
	} finally {
		await client?.close();
	}
};

const handler: Handler = async (
	event: HandlerEvent,
	context: HandlerContext
): Promise<HandlerResponse> => {
	const { data, error } = await getData();

	if (error) {
		return {
			statusCode: 400,
			body: JSON.stringify(error),
		};
	}
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};

export { handler };
