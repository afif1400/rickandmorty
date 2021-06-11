import React from "react";
import "../styles/details.css";
import rick from "../assets/images/rick.svg";

const QuoteDetail = ({ quote }: any) => {
	return (
		<div className='quotes__details'>
			<div className='quotes__details-episode'>
				<h3 className='character__name'>- {quote.name}</h3>
				<div>
					<p className='season__no'>
						Season no :<span>{quote.seasonno}</span>
					</p>
					<p className='episode__no'>
						Episode no <span>{quote.episodeno}</span>
					</p>
					<p className='episode__name'>
						Episode name : <span>{quote.episodename}</span>
					</p>
				</div>
			</div>
			<div className='quotes__details-imgBx'>
				<img src={rick} alt='character' />
			</div>
		</div>
	);
};

export default QuoteDetail;
