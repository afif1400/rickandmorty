import "../styles/quote.css";
import React from "react";

type QuoteProps = {
	quotetext: string;
};
const Quote: React.FC<QuoteProps> = ({ quotetext }) => {
	return (
		<div className='quote'>
			<p>{quotetext}</p>
		</div>
	);
};

export default Quote;
