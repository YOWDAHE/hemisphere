import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import pic1 from "/assets/images/aboutUs/pic1.jpg";
import pic2 from "/assets/images/aboutUs/pic2.jpg";
import pic3 from "/assets/images/aboutUs/pic3.jpg";
import pic4 from "/assets/images/aboutUs/pic4.jpg";
import pic5 from "/assets/images/aboutUs/pic5.jpg";
import pic6 from "/assets/images/aboutUs/pic6.jpg";

import "./style/aboutUs.css";
import Autoplay from 'embla-carousel-autoplay';


function AboutUsImages() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            containScroll: 'trimSnaps',
            dragFree: true
        },
        [Autoplay({ delay: 3000, stopOnInteract: false, speed: 1 })]
    )

    // useEffect(() => {
    //     if (emblaApi) {
    //         emblaApi.on('select', () => {
    //             // Optional: Handle slide selection
    //         })
    //     }
    // }, [emblaApi])

    return (
        <div className="w-full mx-auto h-auto overflow-hidden">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex gap-4">
                    {[pic1, pic2, pic3, pic4, pic5, pic6].map((pic, index) => (
                        <div key={index} className={`embla__slide flex-[0_0_330px] min-w-0`}>
                            <div className="flex items-center justify-center w-[500px]">
                                <img
                                    src={pic}
                                    alt="partner image"
                                    className={`object-cover h-56 transform transition-all hover:scale-105`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUsImages