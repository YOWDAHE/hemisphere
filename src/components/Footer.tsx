import React from "react";
const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white p-12 md:px-30 px-8 mt-20 leading-tight tracking-[1px] flex flex-col md:items-center md:justify-center relative">
			<div className="absolute inset-0 bg-[url('/assets/images/hemmiPattern3.png')] bg-center opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] bg-cover"></div>
			<div className="absolute inset-0 bg-black/80"></div>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
				{/* Contact Section */}
				<div className="mb-6 md:mb-0">
					<h3 className="text-lg font-semibold mb-4">Contact</h3>
					<div className="space-y-2">
						<a
							href="tel:+251911258385"
							className="block hover:text-gray-300 transition-colors"
						>
							+251 911 258385
						</a>
						<a
							href="tel:+251911058957"
							className="block hover:text-gray-300 transition-colors"
						>
							+251 911 058957
						</a>
					</div>
				</div>

				{/* Address Section */}
				<div className="mb-6 md:mb-0">
					<h3 className="text-lg font-semibold mb-4">Address</h3>
					<p className="text-gray-300">
						HQ
						<br />
						Addis Ababa, Bole, Shegere
						<br />
						House, 5th floor #508
					</p>
				</div>

				{/* Email Section */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Email</h3>
					<div className="space-y-2">
						<a
							href="mailto:tadesse.tilaye@hemispherebridgegroup.com"
							className="block hover:text-gray-300 transition-colors"
						>
							tadesse.tilaye<br className="md:hidden"/>@hemispherebridgegroup.com
						</a>
						<a
							href="mailto:bethelhem.demisse@hemispherebridgegroup.com"
							className="block hover:text-gray-300 transition-colors"
						>
							bethelhem.demisse<br className="md:hidden"/>@hemispherebridgegroup.com
						</a>
					</div>
				</div>
			</div>

			{/* Copyright/Extra Info */}
			<div className="mt-8 pt-6 border-t border-gray-400 text-center text-gray-300 w-full z-10">
				<p>
					&copy; {new Date().getFullYear()} Hemisphere Bridge Group. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
