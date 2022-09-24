import React from "react";
import "./mailList.css";

const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mailTitle"> Enjoy </h1>
			<span className="mailDesc"></span>
			<div className="mailInputContainer">
				<input
					type="text"
					placeholder="Your email"
				/>
				<button>Subscribe</button>
			</div>
		</div>
	);
};

export default MailList;
