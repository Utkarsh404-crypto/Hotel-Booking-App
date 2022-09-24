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
import { format } from "date-fns";

const Header = ({ type }) => {
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 2,
		room: 1
	});
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection"
		}
	]);

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1
			};
		});
	};

	return (
		<div className="header">
			<div
				className={
					type === "list" ? "headerContainer listMode" : "headerContainer"
				}>
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
				{type !== "list" && (
					<>
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
								<span
									onClick={() => setOpenDate(!openDate)}
									className="headerSearchText">{`${format(
									date[0].startDate,
									"dd/MM/yyyy"
								)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
										minDate={new Date()}
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faPerson} />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
								{openOptions && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button
													disabled={options.adult <= 1}
													className="optionCounterButton"
													onClick={() => handleOption("adult", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adult}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("adult", "i")}>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													disabled={options.children === 0}
													className="optionCounterButton"
													onClick={() => handleOption("children", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("children", "i")}>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button
													disabled={options.room <= 1}
													className="optionCounterButton"
													onClick={() => handleOption("room", "d")}>
													-
												</button>
												<span className="optionCounterNumber">
													{options.room}
												</span>
												<button
													className="optionCounterButton"
													onClick={() => handleOption("room", "i")}>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="headerBtn">Search</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
