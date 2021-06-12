import React, { useState, useEffect } from "react";
import Quote from "../components/Quote";
import QuoteDetail from "../components/QuoteDetail";
import axios from "axios";

const Morty = () => {
	const [quote, setQuote] = useState({
		line: "",
	});

	useEffect(() => {
		axios
			.get("http://localhost:8888/,netlify/functions/getQuoteMorty")
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

export default Morty;
