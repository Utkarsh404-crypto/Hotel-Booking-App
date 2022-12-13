import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}>
					{" "}
					<span className="logo"> Booking </span>{" "}
				</Link>{" "}
				{user ? (
					<div className="loggedIn">
						<span> {user.username} </span>{" "}
						<span
							onClick={handleLogout}
							id="logout">
							Logout{" "}
						</span>{" "}
					</div>
				) : (
					<div className="navItems">
						<Link to="/register">
							<button className="navButton"> Register </button>{" "}
						</Link>{" "}
						<Link to="/login">
							<button className="navButton"> Login </button>{" "}
						</Link>{" "}
					</div>
				)}{" "}
			</div>{" "}
		</div>
	);
};

export default Navbar;
