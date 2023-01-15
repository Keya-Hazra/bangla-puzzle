import React, { useEffect, useState } from "react";
import { FaAirbnb, FaBars } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
	const [color, setColor] = useState("#ffff");
	const [color1, setColor1] = useState("#ffff");
	const [bgColor, setBgColor] = useState("");
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	const changeColor = () => {
		if (window.scrollY >= 60) {
			setColor("#E91E63");
			setColor1("#808080");
			setBgColor("#ffff");
		} else {
			setColor("#ffff");
			setColor1("#ffff");
			setBgColor("");
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeColor);
	});
	return (
		<div>
			<div
				className="flex justify-around px-4 py-3 text-center lg:px-20"
				style={{ backgroundColor: bgColor }}
			>
				<div className="flex" style={{ color: color }}>
					<FaAirbnb size={40} />
					<p className="mt-1 text-xl font-bold">airbnb</p>
				</div>
				<div className="hidden mt-1 space-x-6 text-xl lg:flex" style={{ color: color1 }}>
					<p>Places to Stay</p>
					<p>Experiences</p>
					<p>Online Experiences</p>
				</div>
				<div className="flex mt-1 space-x-6 text-xl" style={{ color: color1 }}>
					<p className="hidden lg:flex">Become a host</p>
					<div className="flex space-x-6">
						<p className="mt-2">
							<TbWorld size={20} />
						</p>
						<div className="flex p-3 space-x-4 text-[#808080] bg-white border border-gray-100 rounded-full hover:shadow-xl">
							<FaBars size={20} />
							<button onClick={handleOpen} className="focus:outline-none">
								<CgProfile size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex justify-end w-full py-4 pr-20">
				{open ? (
					<ul className="py-4 bg-white shadow-2xl w-60 rounded-2xl">
						<li className="px-6 py-2 text-start hover:bg-gray-100">
							<button>Sign Up</button>
						</li>
						<li className="px-6 py-2 text-start hover:bg-gray-100">
							<button>Log In</button>
						</li>
						<div className="my-2 border border-gray-200"></div>
						<li className="px-6 py-2 text-start hover:bg-gray-100">
							<button>Host your home</button>
						</li>
						<li className="px-6 py-2 text-start hover:bg-gray-100">
							<button>Host an experience</button>
						</li>
						<li className="px-6 py-2 text-start hover:bg-gray-100">
							<button>Help</button>
						</li>
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;
