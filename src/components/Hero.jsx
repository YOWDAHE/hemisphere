import { useState, useEffect, useRef } from "react";
import hemiPattern from "/assets/images/hemiPattern.png";
import hemisperBridge from "/assets/images/hemisperBridge.svg";

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
          circle ${size / 2}px at ${cursorPosition.x - 60}px ${
        cursorPosition.y - 90
      }px,
          white ${size / 2}px,
          transparent ${size / 2 + 100}px
        )
      `;
      spotlightDivRef.current.style.maskImage = mask;
      spotlightDivRef.current.style.webkitMaskImage = mask;
    }
  }, [cursorPosition]);

  return (
    // <div
    //     className="bg-black/40 lg:h-[calc(100vh-150px)] h-[90vh] rounded-xl lg:rounded-3xl flex flex-col items-center justify-center relative overflow-hidden cursor-none lg:mx-12 mx-3 mt-4 md:mt-0"
    //     onMouseEnter={() => setInside(true)}
    //     onMouseLeave={() => setInside(false)}
    // >
    <div
      className="bg-black/95 lg:h-[calc(100vh-150px)] h-[90vh] rounded-xl lg:rounded-3xl flex flex-col items-center justify-center relative overflow-hidden cursor-none lg:mx-12 mx-3 mt-4 md:mt-0 "
      
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
    >
      <div
        className="absolute inset-0 bg-contain flex items-end lg:opacity-20 opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hemiPattern})`,
        }}
      >
        <img
          src={hemisperBridge}
          alt="Bridge"
          className="w-fit object-contain opacity-100 hidden lg:inline-block"
        />
      </div>

      <div
        ref={spotlightDivRef}
        className="absolute text-white inset-0 opacity-80 bg-contain flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hemiPattern})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <img
          src={hemisperBridge}
          alt="Bridge"
          className="h-fit object-contain hidden lg:inline-block"
        />
      </div>

      {/* Text Content */}
      {/* <p className="text-white/80 md:hidden text-center mb-4">
                HEMISPHERE BRIDGE GROUP
            </p> */}
      <p className="text-white lg:text-[45px] text-4xl z-10 text-center">
        Bridging the Gap
      </p>
      <p className="text-white font-light z-10 text-center lg:w-[60%] w-[80%] mt-4 lg:text-xl">
        We are committed to providing high-quality and meaningful insights to
        businesses and organizations, enabling them optimize every decision they
        undertake.
      </p>
    </div>
  );
}

export default Hero;
