import React, { useState, useEffect } from "react";
import Quote from "../components/Quote";
import QuoteDetail from "../components/QuoteDetail";
import axios from "axios";

const LandingPage: React.FC = (): JSX.Element => {
	const [quote, setQuote] = useState({
		line: "",
	});

	useEffect(() => {
		axios
			.get("http://localhost:8888/,netlify/functions/getquote")
			.then((response) => {
				console.log(response.data);
				setQuote(response.data);
			});
	}, []);
	return (
		<div className='landing'>
			{quote ? <Quote quotetext={quote.line} /> : <h1>loading...</h1>}
			<QuoteDetail quote={quote} />
		</div>
	);
};

export default LandingPage;
