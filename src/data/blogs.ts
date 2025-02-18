import React, { JSX } from "react";

type blog = {
    thumbnail: JSX.Element;
    title: string;
    description: string;
    link: string;
};

export const blogs: blog[] = [
    {
        thumbnail: React.createElement(
            "img",
            { src: "/assets/images/QualitativeReaserchBlog.jpg", alt: "Magnify Icon", className: " h-[200px] rounded-md object-cover" }
        ),
        title: "Why Use Qualitative Research for your Business",
        description: "Discover how qualitative research reveals customer insights, drives smarter decisions, and fuels business growth. Learn key methods like interviews and focus groups to uncover deeper motivations and gain a competitive edge.",
        link: "#"
    },
    {
        thumbnail: React.createElement(
            "img",
            { src: "/assets/images/FeasibilityBlog.jpg", alt: "Magnify Icon", className: " h-[200px] rounded-md object-cover" }
        ),
        title: "What is the benefit of feasibility study for your Business?",
        description: "Research and Development is one of the most significant and crucial parts of each and every organization irrespective of the industry domain.",
        link: "#"
    },
    {
        thumbnail: React.createElement(
            "img",
            { src: "/assets/images/MysteryShopping.jpg", alt: "Magnify Icon", className: " h-[200px] rounded-md object-cover" }
        ),
        title: "5 Advantages of Mystery Shopping for Your Business",
        description: "Industries that use mystery shoppers are mostly from the retail sector. Restaurants and brick-and-mortar shops are the usual clients, but there are also those that come from the hospitality industry like hotels and similar service-oriented businesses.",
        link: "#"
    },
]