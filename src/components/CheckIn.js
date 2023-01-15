import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const CheckIn = () => {
	// const [open, setOpen] = React.useState(false);
	const [openCheckIn, setOpenCheckIn] = React.useState(false);
	// const [openCheckOut, setOpenCheckOut] = React.useState(false);
	const [counter, setCounter] = useState(0);
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	// const handleOpen = () => {
	// 	setOpen(!open);
	// };
	const handleOpenCheckIn = () => {
		setOpenCheckIn(!openCheckIn);
	};
	// const handleOpenCheckOut = () => {
	// 	setOpenCheckOut(!openCheckOut);
	// };
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
	return (
		<div>
			<div className="flex justify-center items-center ">
				<div className="flex space-x-20 bg-gray-100 rounded-full px-10 py-2 text-start">
					<div className="hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1">
						<p className="font-semibold ">Location</p>
						<p className="text-gray-500">Where are you going?</p>
					</div>
					<button
						onClick={handleOpenCheckIn}
						className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 ${
							openCheckIn && "bg-white shadow-2xl rounded-full px-4 py-1"
						}`}
					>
						<p className="font-semibold">Check in</p>
						<p className="text-gray-500">Add dates</p>
					</button>
					<button
						// onClick={handleOpenCheckOut}
						className="hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1"
					>
						<p className="font-semibold">Check out</p>
						<p className="text-gray-500">Add dates</p>
					</button>
					{/* <button
						onClick={handleOpen}
						className={`hover:bg-white hover:shadow-2xl hover:rounded-full px-4 py-1 ${
							open && "bg-white shadow-2xl rounded-full px-4 py-1"
						}`}
					>
						<p className="font-semibold">Guests</p>
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
							<p className="text-gray-500">Add guests</p>
						)}
					</button> */}
					<div className="bg-pink-500 w-10 h-10 rounded-full flex justify-center items-center text-white mt-2">
						<BiSearch size={20} />
					</div>
				</div>
			</div>
			{/* <div className="flex justify-end py-4 pr-28">
				{open && (
					<div className="py-4 bg-white shadow-2xl w-80 rounded-2xl space-y-4 ">
						<div className="flex justify-between space-x-6 px-6 border border-b-1 border-t-0 py-4">
							<div className="text-start">
								<p className="font-semibold ">Adults</p>
								<p className="text-gray-500">Ages 13 or above</p>
							</div>
							<div className="flex space-x-4 mb-2">
								<button
									className="w-10 rounded-full border"
									onClick={handleClick2}
								>
									-
								</button>
								<p>{counter}</p>
								<button
									className="w-10 rounded-full border"
									onClick={handleClick1}
								>
									+
								</button>
							</div>
						</div>
						<div className="flex justify-between space-x-6 px-6 border border-b-1 border-t-0 py-4">
							<div className="text-start">
								<p className="font-semibold ">Children</p>
								<p className="text-gray-500">Ages 2-12</p>
							</div>
							<div className="flex space-x-4 mb-2">
								<button
									className="w-10 rounded-full border"
									onClick={handleClick4}
								>
									-
								</button>
								<p>{counter1}</p>
								<button
									className="w-10 rounded-full border"
									onClick={handleClick3}
								>
									+
								</button>
							</div>
						</div>
						<div className="flex justify-between space-x-6 px-6 border border-b-1 border-t-0 py-4">
							<div className="text-start">
								<p className="font-semibold ">Infants</p>
								<p className="text-gray-500">Under 2</p>
							</div>
							<div className="flex space-x-4 mb-2">
								<button
									className="w-10 rounded-full border"
									onClick={handleClick6}
								>
									-
								</button>
								<p>{counter2}</p>
								<button
									className="w-10 rounded-full border"
									onClick={handleClick5}
								>
									+
								</button>
							</div>
						</div>
					</div>
				)}
			</div> */}
			<div className="flex justify-center py-4">
				{openCheckIn && (
					<div className="py-4 bg-white shadow-2xl w-80 rounded-2xl space-y-4 ">
						calendaryfyhhhhhhhhhhhhhhhhhhhhhhhhhhg
					</div>
				)}
			</div>
			{/* <div className="flex justify-end py-4 pr-28">
				{openCheckOut && (
					<div className="py-4 bg-white shadow-2xl w-80 rounded-2xl space-y-4 ">
						calendar
					</div>
				)}
			</div> */}
		</div>
	);
};

export default CheckIn;
