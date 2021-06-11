import React from "react";
import "../styles/details.css";
import rick from "../assets/images/rick.svg";

const QuoteDetail = () => {
	return (
		<div className='quotes__details'>
			<div className='quotes__details-episode'>
				<h3 className='character__name'>- Rick Sanchez</h3>
				<div>
					<p className='season__no'>
						Season no :<span>1</span>
					</p>
					<p className='episode__no'>
						Episode no <span>1</span>
					</p>
					<p className='episode__name'>
						Episode name : <span>pilot</span>
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
