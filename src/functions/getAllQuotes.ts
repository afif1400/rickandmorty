import {
	Handler,
	HandlerEvent,
	HandlerContext,
	HandlerResponse,
} from "@netlify/functions";

const handler: Handler = (
	event: HandlerEvent,
	context: HandlerContext
): HandlerResponse => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello world" }),
	};
};

export { handler };
