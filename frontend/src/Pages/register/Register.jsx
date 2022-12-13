import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./register.css";

const Register = () => {
	const [credentials, setCredentials] = useState({
		username: undefined,
		email: undefined,
		password: undefined
	});
	const [error, setError] = useState("");
	const [cp, setCp] = useState(undefined);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};
	const handlePass = (e) => {
		setCp(e.target.value);
	};
	const handleClick = async (e) => {
		e.preventDefault();

		try {
			if (credentials.password === cp) {
				const res = await axios.post(
					"http://localhost:8080/api/auth/register",
					credentials
				);
				navigate("/login");
			} else {
				setError("Password does not match");
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="login">
			<div className="lContainer">
				<input
					type="text"
					placeholder="username"
					id="username"
					onChange={handleChange}
					className="lInput"
				/>
				<input
					type="email"
					placeholder="email"
					id="email"
					onChange={handleChange}
					className="lInput"
				/>
				<input
					type="password"
					placeholder="password"
					id="password"
					onChange={handleChange}
					className="lInput"
				/>
				<input
					type="password"
					placeholder="Confirm password"
					id="password"
					onChange={handlePass}
					className="lInput"
				/>
				<button
					onClick={handleClick}
					className="lButton">
					Register
				</button>
				{error && <span style={{ color: "red" }}>{error}</span>}
			</div>
		</div>
	);
};

export default Register;
