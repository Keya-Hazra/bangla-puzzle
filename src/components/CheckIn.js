import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";

const CheckIn = () => {
	const [open, setOpen] = React.useState(false);
	const [openCheckIn, setOpenCheckIn] = React.useState(false);
	const [openCheckOut, setOpenCheckOut] = React.useState(false);
	const [counter, setCounter] = useState(0);
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [openCalendar, setOpenCalendar] = useState(true);
	const [openFlexible, setOpenFlexible] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	const handleOpenCheckIn = () => {
		setOpenCheckIn(!openCheckIn);
	};
	const handleOpenCheckOut = () => {
		setOpenCheckOut(!openCheckOut);
	};
	const handleOpenCalendar = () => {
		setOpenCalendar(!openCalendar);
	};
	const handleOpenFlexible = () => {
		setOpenFlexible(!openFlexible);
	};
	const handleClick1 = () => {
		setCounter(counter + 1);
	};

	const handleClick2 = () => {
		setCounter(counter - 1);
	};
	const handleClick3 = () => {
		setCounter1(counter1 + 1);
	};

	const handleClick4 = () => {
		setCounter1(counter1 - 1);
	};
	const handleClick5 = () => {
		setCounter2(counter2 + 1);
	};

	const handleClick6 = () => {
		setCounter2(counter2 - 1);
	};

	// checkin Checkout

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(null);
	const onChange = (dates) => {
		const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
	};

	const checkInDate = moment(startDate).format("MMM DD YYYY");
	const checkOutDate = moment(endDate).format("MMM DD YYYY");

	// Iam flexible
	const [flexible, setFlexible] = useState("");

	const handleFlexible = (e) => {
		setFlexible(e.target.value);
	};
	console.log(flexible);

	return (
		<div>
			<div className="flex items-center justify-center w-full px-2 pt-6">
				<div className="flex px-2 py-2 space-x-2 bg-gray-100 rounded-full lg:px-4 lg:space-x-10 text-start">
					<button className="px-4 py-1 hover:bg-white hover:shadow-2xl hover:rounded-full">
						<p className="text-sm font-semibold lg:text-lg">Location</p>
						<p className="hidden text-gray-500 lg:inline">
							Where are you going?
						</p>
					</button>
					<span className="border border-gray-200"></span>
					<button
						onClick={handleOpenCheckIn}
						className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 focus:outline-none ${
							openCheckIn && "bg-white shadow-2xl rounded-full px-4 py-1"
						}`}
					>
						<p className="text-sm font-semibold lg:text-lg">Check in</p>
						{openCheckIn ? (
							checkInDate
						) : (
							<p className="hidden text-gray-500 lg:inline">Add dates</p>
						)}
					</button>
					<span className="border border-gray-200"></span>
					<button
						onClick={handleOpenCheckOut}
						className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 focus:outline-none ${
							openCheckOut && "bg-white shadow-2xl rounded-full px-4 py-1"
						}`}
					>
						<p className="text-sm font-semibold lg:text-lg">Check out</p>
						{openCheckOut ? (
							checkOutDate
						) : (
							<p className="hidden text-gray-500 lg:inline">Add dates</p>
						)}
					</button>
					<span className="border border-gray-200"></span>
					<button
						onClick={handleOpen}
						className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 focus:outline-none ${
							open && "bg-white shadow-2xl rounded-full px-4 py-1"
						}`}
					>
						<p className="text-sm font-semibold lg:text-lg">Guests</p>
						{open ? (
							<div className="flex space-x-2 ">
								{counter ? (
									<p className="text-gray-500">{counter} guest</p>
								) : (
									""
								)}
								{counter1 ? (
									<p className="text-gray-500">
										{counter ? "," : ""}
										{counter1} children
									</p>
								) : (
									""
								)}
								{counter2 ? (
									<p className="text-gray-500">
										{counter1 ? "," : ""}
										{counter2} infants
									</p>
								) : (
									""
								)}
							</div>
						) : (
							<p className="hidden text-gray-500 lg:inline">Add guests</p>
						)}
					</button>
					<div className="flex items-center justify-center w-10 h-10 mt-2 text-white bg-pink-500 rounded-full shrink-0">
						<BiSearch size={20} />
					</div>
				</div>
			</div>
			<div className="absolute flex justify-center w-full py-4 pr-0 lg:justify-end lg:pr-28">
				{open && (
					<div className="py-4 space-y-4 bg-white shadow-2xl w-80 rounded-2xl ">
						<div className="flex justify-between px-6 py-4 space-x-6 border border-t-0 border-b-1">
							<div className="text-start">
								<p className="font-semibold ">Adults</p>
								<p className="text-gray-500">Ages 13 or above</p>
							</div>
							<div className="flex mb-2 space-x-4">
								<button
									className="w-10 border rounded-full"
									onClick={handleClick2}
								>
									<span className="flex items-center justify-center">
										<AiOutlineMinus />
									</span>
								</button>
								<p className="mt-2">{counter}</p>
								<button
									className="w-10 border rounded-full"
									onClick={handleClick1}
								>
									<span className="flex items-center justify-center">
										<AiOutlinePlus />
									</span>
								</button>
							</div>
						</div>
						<div className="flex justify-between px-6 py-4 space-x-6 border border-t-0 border-b-1">
							<div className="text-start">
								<p className="font-semibold ">Children</p>
								<p className="text-gray-500">Ages 2-12</p>
							</div>
							<div className="flex mb-2 space-x-4">
								<button
									className="w-10 border rounded-full"
									onClick={handleClick4}
								>
									<span className="flex items-center justify-center">
										<AiOutlineMinus />
									</span>
								</button>
								<p className="mt-2">{counter1}</p>
								<button
									className="w-10 border rounded-full"
									onClick={handleClick3}
								>
									<span className="flex items-center justify-center">
										<AiOutlinePlus />
									</span>
								</button>
							</div>
						</div>
						<div className="flex justify-between px-6 py-4 space-x-6 border border-t-0 border-b-1">
							<div className="text-start">
								<p className="font-semibold ">Infants</p>
								<p className="text-gray-500">Under 2</p>
							</div>
							<div className="flex mb-2 space-x-4">
								<button
									className="w-10 border rounded-full"
									onClick={handleClick6}
								>
									<span className="flex items-center justify-center">
										<AiOutlineMinus />
									</span>
								</button>
								<p className="mt-2">{counter2}</p>
								<button
									className="w-10 border rounded-full"
									onClick={handleClick5}
								>
									<span className="flex items-center justify-center">
										<AiOutlinePlus />
									</span>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="flex items-center justify-center py-4">
				{openCheckIn && (
					<div className="w-auto p-4 space-y-4 bg-white shadow-2xl rounded-2xl ">
						<div className="flex items-center justify-center px-10 py-2 space-x-20 bg-gray-100 rounded-full text-start">
							<div>
								<button
									onClick={handleOpenCalendar}
									className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 focus:outline-none ${
										openCalendar && "bg-white shadow-2xl rounded-full px-4 py-1"
									}`}
								>
									Calendar
								</button>
							</div>
							<div>
								<button
									onClick={handleOpenFlexible}
									className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 focus:outline-none ${
										openFlexible && "bg-white shadow-2xl rounded-full px-4 py-1"
									}`}
								>
									I'm flexible{" "}
								</button>
							</div>
						</div>
						{openCalendar ? (
							<DatePicker
								selected={startDate}
								onChange={onChange}
								startDate={startDate}
								endDate={endDate}
								monthsShown={2}
								selectsRange
								inline
							/>
						) : (
							openFlexible && (
								<div>
									<div className="space-y-4">
										<p>
											Stay for a{" "}
											<span className="font-semibold">
												{flexible === "weekend" ? "weekend" : ""}{" "}
												{flexible === "week" ? "week" : ""}{" "}
												{flexible === "month" ? "month" : ""}
											</span>
										</p>
										<div className="px-4 space-x-4">
											<div>
												<input
													id="1"
													name="Weekend"
													value="weekend"
													labelText="weekend"
													checked={flexible === "weekend"}
													onChange={handleFlexible}
													type="radio"
													// className="hidden"
												/>
												<label>Weekend</label>
											</div>

											<div>
												<input
													id="2"
													name="week"
													value="week"
													labelText="week"
													checked={flexible === "week"}
													onChange={handleFlexible}
													type="radio"
												/>
												<label>Week</label>
											</div>

											<div>
												<input
													id="3"
													name="month"
													value="month"
													labelText="month"
													checked={flexible === "month"}
													onChange={handleFlexible}
													type="radio"
												/>
												<label>Month</label>
											</div>
										</div>

										<div>
											Go in {},{}
										</div>
									</div>
								</div>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default CheckIn;
