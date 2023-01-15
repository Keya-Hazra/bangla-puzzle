import React from "react";
import bg2 from "../../src/images/bg2.webp";
import CheckIn from "../components/CheckIn";
import Navbar from "../components/Navbar";

const Landing = () => {
	return (
		<div className="relative">
			<div className="sticky top-0 ">
				<div className="absolute w-full ">
					<Navbar />
					<CheckIn />
					<div className="flex justify-center items-center pt-40">
						<div className="space-y-4 text-lg">
							<p className="font-semibold">Not sure where to go? Perfect.</p>
							<button className="bg-white rounded-3xl shadow-2xl px-6 py-3 text-purple-800 font-semibold">
								I'm flexible
							</button>
						</div>
					</div>
				</div>
			</div>
			<img src={bg2} alt="" className="w-full h-full object-fit-cover" />
		</div>
	);
};

export default Landing;
