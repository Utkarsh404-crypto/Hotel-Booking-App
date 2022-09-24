import React from "react";
import {
	faHotel,
	faPlane,
	faBed,
	faTaxi,
	faCalendarDays,
	faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

const Header = () => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: "selection"
		}
	]);

	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faHotel} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flight</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Car Rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Taxi</span>
					</div>
				</div>
				<h1 className="headerTitle">Go For It</h1>
				<p className="headerDesc">
					Book your hotel--Get discount--Earn rewards--Enjoy!
				</p>
				<button className="headerBtn">Sign in</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faHotel} />
						<input
							type="text"
							placeholder="Check-in"
							className="headerSearchInput"
						/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faCalendarDays} />
						<span className="headerSearchText">date to date</span>
						<DateRange
							editableDateInputs={true}
							onChange={(item) => setDate([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={date}
						/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faPerson} />
						<span className="headerSearchText">2 adults 2 children 1 room</span>
					</div>
					<div className="headerSearchItem">
						<button className="headerBtn">Search</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
