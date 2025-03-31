import ServiceList from "./ServiceList"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import serviceData from "../data/serviceText.json"
import customerInsight from "/assets/images/customerInsignt.jpg"
import reserchImage from "/assets/images/research.jpg"
import shakingHand from "/assets/images/shaking-hands.jpg"

function Services() {
    const marketRef = useRef(null)
    const researchRef = useRef(null)
    const servicesRef = useRef(null)
    const researchServicesRef = useRef(null)
    const b2bRef = useRef(null)
    const b2bServicesRef = useRef(null)
    const isMarketInView = useInView(marketRef, { once: true, margin: "-100px" })
    const isResearchInView = useInView(researchRef, { once: true, margin: "-100px" })
    const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
    const isResearchServicesInView = useInView(researchServicesRef, { once: true, margin: "-100px" })
    const isB2bInView = useInView(b2bRef, { once: true, margin: "-100px" })
    const isB2bServicesInView = useInView(b2bServicesRef, { once: true, margin: "-100px" })

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
        <div className="mt-20 relative" id="services">
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
                className="absolute  top-[1000px] -right-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#2b56a0_40%,_transparent_100%)] opacity-90 rounded-full blur-3xl"
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
                className="absolute top-[1600px] -left-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#006d77_80%,_transparent_100%)] opacity-100 rounded-full blur-3xl"
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
                className="absolute  bottom-[600px] -left-[400px] w-[1000px] h-[1000px] bg-[radial-gradient(circle_closest-side,#2b56a0_40%,_transparent_100%)] opacity-90 rounded-full blur-3xl"
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
                        className="flex gap-4 w-[90%] px-6 py-14 rounded-[40px] relative items-center justify-center bg-gray-200/40 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={isMarketInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${customerInsight})` }}
                        ></div>
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-60 bg-black"
                        ></div>
                        <motion.div
                            className="font-black text-4xl text-end whitespace-pre-line relative z-10 text-white"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isMarketInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            BUSINESS TO
                            CONSUMER (B2C)
                            SERVICE
                        </motion.div>
                        <motion.p
                            className="border-white border-l-2 px-4 text-lg relative z-10 text-white"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isMarketInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >{serviceData.b2c.description}</motion.p>
                    </motion.div>

                    <motion.div 
                        ref={servicesRef}
                        className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="grid grid-cols-2 gap-8 mb-4"
                            variants={containerVariants}
                        >
                            {serviceData.b2c.services.slice(0, 2).map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-8 justify-center"
                            variants={containerVariants}
                        >
                            {serviceData.b2c.services.slice(2, 4).map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-1 gap-8 justify-center -mt-10"
                            variants={containerVariants}
                        >
                            {serviceData.b2c.services.slice(4).map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={b2bRef}
                        className="flex gap-4 w-[90%] px-6 py-14 rounded-[40px] relative items-center justify-center bg-gray-200/40 mt-20 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${shakingHand})` }}
                        ></div>

                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60 bg-black"
                        ></div>
                        <motion.div
                            className="font-black text-4xl text-end whitespace-pre-line z-10 text-white"
                            initial={{ y: 100, opacity: 0 }}
                            animate={isMarketInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            BUSINESS TO
                            BUSINESS (B2B)
                            SERVICE
                        </motion.div>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isB2bInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="border-white border-l-2 px-4 text-lg z-10 text-white">
                            {serviceData.b2b.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        ref={b2bServicesRef}
                        className="flex flex-col gap-8 px-20 py-16 rounded-[40px] relative items-center justify-center bg-gray-200/40"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isB2bServicesInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="grid grid-cols-3 gap-16 mb-4 z-10"
                            variants={containerVariants}
                        >
                            {serviceData.b2b.services.slice(0, 3).map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-3 gap-16 z-10"
                            variants={containerVariants}
                        >
                            {serviceData.b2b.services.slice(3).map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={researchRef}
                        className="flex flex-col gap-4 w-[90%] px-20 py-10 rounded-[40px] relative items-center justify-center bg-gray-200/40 mt-20 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${reserchImage})`, backgroundSize: "cover" }}
                        ></div>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-70 bg-black"
                        ></div>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isResearchInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="font-black text-4xl text-center z-10 text-white">
                            {serviceData.research.title}
                        </motion.p>
                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={isResearchInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="border-white border-t-2 px-4 text-lg text-center mt-2 pt-8 z-10 text-white">
                            {serviceData.research.description}
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
                            className="grid grid-cols-3 gap-8 mb-4"
                            variants={containerVariants}
                        >
                            {serviceData.research.services.map((service, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <ServiceList title={service.title} description={service.description} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default Services