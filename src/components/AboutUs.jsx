import hemiPattern from "/assets/images/hemiPattern.png";

function AboutUs() {
    return (
        <div
            className="bg-black rounded-lg flex flex-col items-center justify-center relative overflow-hidden cursor-none px-40 py-32"
        >
            <div
                className="absolute text-white inset-0 opacity-5 bg-contain"
                style={{ backgroundImage: `url(${hemiPattern})` }}
            ></div>

            {/* Text Content */}
            <p className="text-white text-xl font-medium z-10 text-center">
                About Us
            </p>
            <p className="text-white font-light z-10 text-center mt-10">
                Hemisphere Bridge Group is a market and social research firm founded by three Economists in November 2014 in Addis Ababa, Ethiopia. The group constitutes highly specialized team of professionals and is engaged in delivering market and social research inputs and outputs to government, non-governmental organizations, research agencies, public and private businesses, institutions, national and international firms and individuals.
            </p>
        </div>
    )
}

export default AboutUs