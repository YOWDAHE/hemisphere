import { useState } from "react"
import { services } from "../data/services"
import pattern2 from "/assets/images/hemmiPattern2.png"
import pattern3 from "/assets/images/hemmiPattern3.png"
import ServiceList from "../../components/serviceList"


function Services() {
    const [marketInsight, showMarketInsight] = useState(true)
    const [social, showSocial] = useState(true)
    return (
        <div className="mt-20 relative">
            <div className="absolute -top-[100px] -right-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#2b56a0_40%,_transparent_100%)] opacity-90 rounded-full blur-3xl"></div>
            <div className="absolute top-[300px] -left-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#006d77_40%,_transparent_100%)] opacity-80 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[100px] -right-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#37383d_40%,_transparent_100%)] opacity-80 rounded-full blur-3xl"></div>
            
            <div className="text-xl font-medium text-center">Services We Provide</div>
            <div className="relative px-12">
                <div className="absolute inset-0 bg-[url('/assets/images/hemmiPattern3.png')] bg-contain bg-center opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
                <div className="flex flex-col items-center gap-10 pt-40 relative">
                    <div className="flex gap-4 w-[90%] px-20 py-10 rounded-[40px] relative items-center justify-center bg-gray-200/40">
                        <p className="font-black text-6xl text-end">MARKET INSIGHTS</p>
                        <p className="border-black border-l-2 px-4 text-lg">We help businesses gain a deeper and better understanding of their customers and provide data on market trends, to enable them make informed business decisions and maximize product/service quality and revenue.</p>
                    </div>
                    <div className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40">
                        <div className="grid grid-cols-3 gap-16 mb-4">
                            <ServiceList title="Concept Testing" description="Gathering valuable customer feedback before launching a product minimizes the risk of failure and boosts the chances of success." />
                            <ServiceList title="Brand Health Study" description="Gather data on essential brand metrics such as awareness, perception, loyalty, and preference." />
                            <ServiceList title="Product Testing" description="Assessment of a product to ensure it meets predetermined standards for quality, safety, reliability, and performance before hitting the market." />
                        </div>
                        <div className="grid grid-cols-2 gap-16 justify-center">
                            <ServiceList title="Retail Audit" description="Evaluation of actual performance of brands and SKUs at the point of sale, setting fact-based targets for commercial plans, and monitoring progress. It also tracks trade performance and key market indicators on a regular basis." />
                            <ServiceList title="Consumer Insights" description="Insights that enhance the understanding of customer needs by monitoring comments, messages, reviews, and other feedback. This data can be compiled into reports that highlight recurring complaints and frequently praised aspects, categorized by keywords, products, and other criteria." />
                        </div>
                    </div>


                    <div className="flex gap-4 w-[90%] px-20 py-4 rounded-[40px] relative items-center justify-center bg-gray-200/40 mt-20">
                        <p className="font-black text-6xl text-end">SOCIAL AND DEVELOPMENT REASERCH</p>
                        <p className="border-black border-l-2 px-4 text-lg">We help organizations in gaining insights and learning at various stages of project and program implementation to best meet objectives and enhance impact.</p>
                    </div>
                    <div className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40">
                        <div className="grid grid-cols-3 gap-16 mb-4">
                            <ServiceList title="Formative Studies" description="An insight that occurs prior to designing or implementing a project or program, or during its implementation, to help shape or adjust the project or program." />
                            <ServiceList title="Monitoring" description="A collection of regular data that measures progress toward achieving the objectives of a project or program." />
                            <ServiceList title="Evaluations" description="Systematic collection and analysis of data on program activities and outcomes, specifically measuring impact and learning through baseline and end line studies." />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services