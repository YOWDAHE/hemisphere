import hemiPattern from "/assets/images/hemiPattern.png";

function AboutUs() {
    return (
        <div
            className="bg-black rounded-lg flex flex-col items-center justify-center relative overflow-hidden px-40 py-32"
        >
            <div
                className="absolute text-white inset-0 opacity-5 bg-contain"
                style={{ backgroundImage: `url(${hemiPattern})` }}
            ></div>

            {/* Text Content */}
            <p className="text-white text-xl font-mediumcd .. z-10 text-center">
                About Us
            </p>
            <p className="text-white font-light z-10 mt-10 text-center">
                Hemisphere Bridge Group is a research firm established in November 2014 in Addis Ababa, Ethiopia. The firm comprises a dedicated team of experts committed to providing high-quality and meaningful insights to businesses and organizations, enabling them maximize the impact of each decision they make. Our mission is to serve as a key facilitator in linking individuals, information, and resources, acting as a bridge to deliver valuable insights that promote ethical resource utilization and distribution, thereby enhancing societal value. Upholding core values of integrity and quality, the firm endeavors to offer exceptional services with the goal of fostering a better world.
                <br />
                <br />
                <span className="text-lg font-medium">
                    Our hallmark in all research services we offer is a commitment to integrity and quality.
                </span>
            </p>
        </div>
    )
}

export default AboutUs