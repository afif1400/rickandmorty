import React from "react";
import Quote from "../components/Quote";
import QuoteDetail from "../components/QuoteDetail";

const LandingPage: React.FC = (): JSX.Element => {
	return (
		<div
			style={{
				position: "relative",
				marginTop: "40px",
				paddingTop: "40px",
				minHeight: "calc(100vh - 40px)",
				background: "#B9B7B7",
			}}
		>
			<Quote />
			<QuoteDetail />
		</div>
	);
};

export default LandingPage;
