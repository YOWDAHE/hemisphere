import React, { JSX } from "react";

type ServiceType = {
    icon: JSX.Element; // Store JSX instead of a string
    title: string;
    description: string;
};

export const services: ServiceType[] = [
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/Magnify.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Qualitative Research",
        description:
            "Focus Group Discussion (FGD), In-Depth Interview (IDI), Ethnographic Observation, Central Location Testing, Longitudinal Studies.",
    },
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/calculator.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Quantitative Research",
        description:
            "Face to Face Interview(F2F), Telephone Interview, Mobile Marketing Research, Sensory Testing, In-Home Product Placements",
    },
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/checkList.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Feasibility Studies",
        description:
            "Our Market Feasibility analysis experts provides a 360 degree research service that covers the full spectrum of global market assessment.",
    },
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/Note.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Instore Audit",
        description:
            "Our In-store audit service provides you the chance to gather information on your brand's sales volume, sales trends, stock levels, effectiveness of in-store display and promotion efforts, and other associated aspect.",
    },
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/shop 1.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Mystery Shopping",
        description:
            "We perform specific tasks such as purchasing a product, asking questions, registering complaints or behaving in a certain way, and then provide you with detailed reports or feedback about our experiences.",
    },
    {
        icon: React.createElement(
            "img",
            { src: "/assets/Icons/School.svg", alt: "Magnify Icon", className: "w-10 h-10" }
        ),
        title: "Help & Support",
        description: "We also provide 24/7 support for all our services.",
    },
];