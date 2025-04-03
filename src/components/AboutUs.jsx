import AboutUsImages from "./AboutUsImages";

function AboutUs() {
    return (
        <div
            className="rounded-lg flex flex-col items-center justify-center relative overflow-hidden pb-40"
            id="about-us"
        >
            <div className="absolute inset-0 bg-[url('/assets/images/hemmiPattern3.png')] bg-contain bg-center opacity-[0.1] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>

            {/* Text Content */}
            <p className="text-2xl z-10 text-center mb-10 px-32">
                About Us
            </p>
            <AboutUsImages />
            <p className=" font-normal z-10 text-center text-xl md:px-32 px-6 mt-10 text-pretty">
                Hemisphere Bridge Group is a research firm established in November 2014 in Addis Ababa, Ethiopia. The firm comprises a dedicated team of experts committed to providing high-quality and meaningful insights to businesses and organizations, enabling them maximize the impact of each decision they make. Our mission is to serve as a key facilitator in linking individuals, information, and resources, acting as a bridge to deliver valuable insights that promote ethical resource utilization and distribution, thereby enhancing societal value. Upholding core values of integrity and quality, the firm endeavors to offer exceptional services with the goal of fostering a better world.
                <br />
                <br />
                <span className="text-xl font-medium">
                    Our hallmark in all research services we offer is a commitment to integrity and quality.
                </span>
            </p>
        </div>
    )
}

export default AboutUs