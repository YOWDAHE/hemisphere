import React, { useState, useEffect, useRef } from "react";
import hemiPattern from "/assets/images/hemiPattern.png";

function Hero() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [inside, setInside] = useState(false);
    const spotlightDivRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!inside) return;
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [inside]);

   
    useEffect(() => {
        if (spotlightDivRef.current) {
            const size = 10;
            const mask = `
        radial-gradient(
          circle ${size / 2}px at ${cursorPosition.x - 60}px ${cursorPosition.y - 90}px,
          white ${size / 2}px,
          transparent ${size / 2 + 100}px
        )
      `;
            spotlightDivRef.current.style.maskImage = mask;
            spotlightDivRef.current.style.webkitMaskImage = mask;
        }
    }, [cursorPosition]);

    return (
        <div
            className="bg-black h-[calc(100vh-150px)] rounded-lg flex flex-col items-center justify-center relative overflow-hidden cursor-none"
            onMouseEnter={()=>setInside(true)}
            onMouseLeave={()=>setInside(false)}
        >
            <div
                className="absolute text-white inset-0 opacity-5 bg-contain"
                style={{ backgroundImage: `url(${hemiPattern})` }}
            ></div>

            <div
                ref={spotlightDivRef}
                className="absolute text-white inset-0 opacity-30 bg-contain"
                style={{
                    backgroundImage: `url(${hemiPattern})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                }}
            ></div>

            {/* Text Content */}
            <p className="text-white text-[45px] font-light z-10 text-center">
                Bridging the Gap
            </p>
            {/* <p className="text-white text-[25px] font-light z-10 text-center">
                Hemisphere Bridge Group
            </p> */}
            <p className="text-white text-base font-light z-10 text-center w-[60%] mt-4">
                We are committed to providing high-quality and meaningful insights to businesses and organizations, enabling them optimize every decision they undertake.
            </p>
        </div>
    );
}

export default Hero;