import ServiceList from "./ServiceList"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


function Services() {
    const marketRef = useRef(null)
    const researchRef = useRef(null)
    const servicesRef = useRef(null)
    const researchServicesRef = useRef(null)
    const isMarketInView = useInView(marketRef, { once: true, margin: "-100px" })
    const isResearchInView = useInView(researchRef, { once: true, margin: "-100px" })
    const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
    const isResearchServicesInView = useInView(researchServicesRef, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="mt-20 relative">
            <motion.div
                className="absolute -top-[100px] -right-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#2b56a0_40%,_transparent_100%)] opacity-90 rounded-full blur-3xl"
                initial={{
                    y: 0,
                    x: 0,
                    opacity: 1
                }}
                animate={{
                    y: [0, -100, 0],
                    x: [0, 0, -300, 0],
                    opacity: [0.9, 1, 0.5, 0.9]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            <motion.div
                className="absolute top-[300px] -left-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#006d77_80%,_transparent_100%)] opacity-100 rounded-full blur-3xl"
                initial={{
                    x: 0,
                    size: 0,
                }}
                animate={{
                    x: [0, 200, 700, 300, 0],
                    size: [0, 10, 3, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            <motion.div
                className="absolute -bottom-[100px] -right-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#37383d_40%,_transparent_100%)] opacity-80 rounded-full blur-3xl"
                initial={{
                    y: 0,
                    x: 0,
                    opacity: 1
                }}
                animate={{
                    y: [0, -100, 0, 0, 100, 0],
                    x: [0, 0, -300, 0, -150, 0],
                    opacity: [0.9, 1, 0.2, 0.9]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>

            <div className="text-xl font-medium text-center">Services We Provide</div>
            <div className="relative px-12">
                <div className="absolute inset-0 bg-[url('/assets/images/hemmiPattern3.png')] bg-contain bg-center opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
                <div className="flex flex-col items-center gap-10 pt-40 relative">
                    <motion.div
                        ref={marketRef}
                        className="flex gap-4 w-[90%] px-20 py-10 rounded-[40px] relative items-center justify-center bg-gray-200/40 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={isMarketInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.p
                            className="font-black text-6xl text-end"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isMarketInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >MARKET INSIGHTS</motion.p>
                        <motion.p
                            className="border-black border-l-2 px-4 text-lg"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isMarketInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >We help businesses gain a deeper and better understanding of their customers and provide data on market trends, to enable them make informed business decisions and maximize product/service quality and revenue.</motion.p>
                    </motion.div>
                    <motion.div 
                        ref={servicesRef}
                        className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "hidden"}
                    >
                        <motion.div 
                            className="grid grid-cols-3 gap-16 mb-4"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Concept Testing" description="Gathering valuable customer feedback before launching a product minimizes the risk of failure and boosts the chances of success." />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Brand Health Study" description="Gather data on essential brand metrics such as awareness, perception, loyalty, and preference." />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Product Testing" description="Assessment of a product to ensure it meets predetermined standards for quality, safety, reliability, and performance before hitting the market." />
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="grid grid-cols-2 gap-16 justify-center"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Retail Audit" description="Evaluation of actual performance of brands and SKUs at the point of sale, setting fact-based targets for commercial plans, and monitoring progress. It also tracks trade performance and key market indicators on a regular basis." />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Consumer Insights" description="Insights that enhance the understanding of customer needs by monitoring comments, messages, reviews, and other feedback. This data can be compiled into reports that highlight recurring complaints and frequently praised aspects, categorized by keywords, products, and other criteria." />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={researchRef}
                        className="flex gap-4 w-[90%] px-20 py-4 rounded-[40px] relative items-center justify-center bg-gray-200/40 mt-20 overflow-hidden">
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isResearchInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="font-black text-6xl text-end">
                            SOCIAL AND DEVELOPMENT RESEARCH
                        </motion.p>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isResearchInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="border-black border-l-2 px-4 text-lg">
                            We help organizations in gaining insights and learning at various stages of project and program implementation to best meet objectives and enhance impact.
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        ref={researchServicesRef}
                        className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isResearchServicesInView ? "visible" : "hidden"}
                    >
                        <motion.div 
                            className="grid grid-cols-3 gap-16 mb-4"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Formative Studies" description="An insight that occurs prior to designing or implementing a project or program, or during its implementation, to help shape or adjust the project or program." />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Monitoring" description="A collection of regular data that measures progress toward achieving the objectives of a project or program." />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ServiceList title="Evaluations" description="Systematic collection and analysis of data on program activities and outcomes, specifically measuring impact and learning through baseline and end line studies." />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Services