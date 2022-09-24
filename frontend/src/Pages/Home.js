import React from "react";
import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Navbar from "../components/navbar/Navbar";
import Property from "../components/property/Property";
import "./home.css";

const Home = () => {
	return (
		<div>
			{" "}
			<Navbar /> <Header />
			<div className="homeContainer">
				<Featured />
				<h1 className="homeTitle"> Browse by property type </h1>
				<Property />
				<h1 className="homeTitle"> Homes Guests Love</h1>
				<FeaturedProperties />
				<MailList />
			</div>{" "}
		</div>
	);
};

export default Home;
