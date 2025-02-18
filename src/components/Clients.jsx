
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import react-slick styles
import "slick-carousel/slick/slick-theme.css";

function Clients() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5,
        cssEase: 'linear',
        

        responsive: [
            {
                breakpoint: 1024, // Adjust for smaller screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="w-full text-center mb-16 font-medium text-lg">Our Clients</div>

            <Slider {...settings} className="carousel-container">
                <div className="carousel-item">
                    <img src="/assets/partners/BAJAJ.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/Bill&Melinda.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/CocaCola.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/GeoPoll.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/huawei.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/nielsen.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/philips.png" alt="partner image" width={150} />
                </div>
                <div className="carousel-item">
                    <img src="/assets/partners/USAID.png" alt="partner image" width={150} />
                </div>
            </Slider>
        </div>
    );
}

export default Clients;