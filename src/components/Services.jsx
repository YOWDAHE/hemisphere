import { useState } from "react"
import { services } from "../data/services"


function Services() {
    const [marketInsight, showMarketInsight] = useState(false)
    const [social, showSocial] = useState(false)
    return (
        <div className="">
            <div className="text-xl font-medium text-center">Services We Provide</div>
            <div className="flex flex-col gap-40 pt-40 relative">
                <div className="absolute inset-0 flex justify-center">
                    <span className="w-[2px] h-full bg-black self-stretch" />
                </div>
                <div className={marketInsight ? `flex border-[0.5px] border-gray-200 p-3 rounded-lg bg-white z-10` : 'p-3 flex items-center'}>
                    <div className="flex flex-col gap-4 w-[50%] pr-12 relative">
                        {!marketInsight && <section className="absolute top-[50%] right-[-5px] w-[10px] h-[10px] rounded-full bg-black"></section>}
                        <p className="font-medium text-lg text-end">Market Insights</p>
                        <p className=" text-end">We help businesses gain a deeper and better understanding of their customers and provide data on market trends, to enable them make informed business decisions and maximize product/service quality and revenue.</p>
                        <button className="flex justify-end text-sm opacity-70 cursor-pointer" onClick={() => showMarketInsight((prev) => !prev)}>{!marketInsight ? `Read More` : `Show Less`}</button>
                    </div>
                    {!marketInsight && <div className="h-full px-20 "> <img src="/assets/Icons/Magnify.svg" alt="lense" /></div>}
                    {marketInsight &&
                        <div className="flex flex-col gap-4 w-[50%] pl-12 relative border-l-[0.5px] border-gray-200">
                            {/* Brand Health Study */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Brand Health Study</h3>
                                <p className="text-gray-700 text-sm">
                                    Gather data on essential brand metrics such as awareness, perception, loyalty, and preference.
                                </p>
                            </div>

                            {/* Concept Testing */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Concept Testing</h3>
                                <p className="text-gray-700 text-sm">
                                    Gathering valuable customer feedback before launching a product minimizes the risk of failure and boosts the chances of success.
                                </p>
                            </div>

                            {/* Product Testing */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Product Testing</h3>
                                <p className="text-gray-700 text-sm">
                                    Assessment of a product to ensure it meets predetermined standards for quality, safety, reliability, and performance before hitting the market.
                                </p>
                            </div>

                            {/* Retail Audit */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Retail Audit</h3>
                                <p className="text-gray-700 text-sm">
                                    Evaluation of actual performance of brands and SKUs at the point of sale, setting fact-based targets for commercial plans, and monitoring progress. It also tracks trade performance and key market indicators on a regular basis.
                                </p>
                            </div>

                            {/* Consumer Insights */}
                            <div>
                                <h3 className="text-lg font-medium mb-2">Consumer Insights</h3>
                                <p className="text-gray-700 text-sm">
                                    Insights that enhance the understanding of customer needs by monitoring comments, messages, reviews, and other feedback. This data can be compiled into reports that highlight recurring complaints and frequently praised aspects, categorized by keywords, products, and other criteria.
                                </p>
                            </div>
                        </div>
                    }
                </div>
                <div className={social ? `flex justify-end border-[0.5px] border-gray-200 p-3 rounded-lg bg-white z-10 self-end` : 'flex items-center justify-end p-3'}>
                    {!social && <div className="h-full px-20 "> <img src="/assets/Icons/Note.svg" alt="lense" /></div>}
                    {social &&
                        <div className="flex flex-col gap-4 w-[50%] pr-12 relative border-r-[0.5px] border-gray-200">
                            {/*Formative Studies */}
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-end">Formative Studies</h3>
                                <p className="text-gray-700 text-sm text-end">
                                    An insight that occurs prior to designing or implementing a project or program, or during its implementation, to help shape or adjust the project or program.
                                </p>
                            </div>

                            {/* Monitoring  */}
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-end">Monitoring </h3>
                                <p className="text-gray-700 text-sm text-end">
                                    A collection of regular data that measures progress toward achieving the objectives of a project or program.
                                </p>
                            </div>

                            {/* Evaluations */}
                            <div>
                                <h3 className="text-lg font-medium mb-2 text-end">Evaluations</h3>
                                <p className="text-gray-700 text-sm text-end">
                                    Systematic collection and analysis of data on program activities and outcomes, specifically measuring impact and learning through baseline and end line studies.
                                </p>
                            </div>
                        </div>
                    }
                    <div className="flex flex-col items-start gap-4 w-[50%] relative pl-12">
                        {!social && <section className="absolute top-[50%] left-[-5px] w-[10px] h-[10px] rounded-full bg-black"></section>}
                        <p className="font-medium text-lg">Social and Development Research</p>
                        <p className="">We help organizations in gaining insights and learning at various stages of project and program implementation to best meet objectives and enhance impact.</p>
                        <button className="flex justify-start text-sm opacity-70 cursor-pointer" onClick={() => showSocial((prev) => !prev)}>{!social ? `Read More` : `Show Less`}</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services