'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image"

const PROPERTIES = [
    {
        id: 1,
        name: "AURORA\nRESIDENCE",
        image: "/images/home-hero/picture1.jpg",
        thumb: "/images/home-hero/picture1.jpg"
    },
    {
        id: 2,
        name: "THAILIVING\nRESIDENCE",
        image: "/images/home-hero/picture2.jpeg",
        thumb: "/images/home-hero/picture2.jpeg",
    },
    {
        id: 3,
        name: "NOVA\nRESIDENCE",
        image: "/images/home-hero/picture3.webp",
        thumb: "/images/home-hero/picture3.webp",
    },
]

function Crosshair({ visible }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
            <div className="relative w-10 h-10">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/70 -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/70 -translate-x-1/2" />
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/70" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/70" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/70" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/70" />
            </div>
        </motion.div>
    )
}

export default function Hero() {

    const [phase, setPhase] = useState("initial")
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {

        const timers = [
            setTimeout(() => setPhase("blurReveal"), 200),
            setTimeout(() => setPhase("imageReveal"), 900),
            setTimeout(() => setPhase("thumbnailsReveal"), 1600),
            setTimeout(() => setPhase("done"), 2200),
        ]

        const slider = setInterval(() => {
            setActiveIndex((i) => (i + 1) % PROPERTIES.length)
        }, 5000) // slide every 5 seconds

        return () => {
            timers.forEach(clearTimeout)
            clearInterval(slider)
        }

    }, [])

    const showImage = ["imageReveal", "thumbnailsReveal", "done"].includes(phase)
    const showThumbs = ["thumbnailsReveal", "done"].includes(phase)
    const showMeta = phase === "done"

    const prev = () =>
        setActiveIndex((i) => (i - 1 + PROPERTIES.length) % PROPERTIES.length)

    const next = () =>
        setActiveIndex((i) => (i + 1) % PROPERTIES.length)

    const active = PROPERTIES[activeIndex]
    const thumbs = PROPERTIES.filter((_, i) => i !== activeIndex)

    return (

        <section className="relative w-full min-h-screen pt-36 pb-12 md:pb-20 bg-primary-brown text-white overflow-hidden">

            {/* GOLDEN GRADIENT BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">

                <div className="absolute w-[600px] h-[600px] bg-amber-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />

                <div className="absolute w-[700px] h-[700px] bg-amber-400/10 blur-[180px] rounded-full bottom-[-250px] right-[-200px]" />

                <div className="absolute w-[500px] h-[500px] bg-yellow-300/10 blur-[150px] rounded-full top-[40%] left-[30%]" />

            </div>




            <div className="relative h-[80vh] max-w-[1500px] mx-auto overflow-hidden z-10">

                {/* LEFT TEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: phase !== "initial" ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute left-6 lg:left-10 top-[30%] text-xs sm:text-sm text-white/60 leading-relaxed max-w-[220px] hidden lg:block"
                >
                    A world of comfort, security,
                    <br />
                    and personalized service await
                </motion.p>


                {/* MAIN IMAGE SLIDER DESKTOP */}
                <div className="hidden lg:block absolute left-[45%] w-[clamp(260px,22vw,350px)] h-[clamp(420px,50vw,550px)] top-0 bottom-0 z-20">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0 }}
                            animate={showImage ? { opacity: 1 } : { opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute inset-0 overflow-hidden rounded-xl"
                        >
                            <Image
                                src={active.image}
                                alt={active.name}
                                width={1000}
                                height={1000}
                                className="w-full h-full rounded-xl object-cover"
                            />
                        </motion.div>

                    </AnimatePresence>

                    <Crosshair visible={showImage} />

                    <div className="absolute bottom-6 w-full text-center text-[10px] tracking-[0.25em]">

                        {active.name.split("\n").map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}

                    </div>

                </div>


                {/* HEADINGS */}

                <motion.h1
                    initial={{ filter: "blur(24px)", opacity: 0.3 }}
                    animate={{ filter: phase === "initial" ? "blur(24px)" : "blur(0)", opacity: 1 }}
                    className="max-sm:text-center lg:absolute left-4 lg:left-0 bottom-[70%] text-7xl sm:text-9xl md:text-[8rem] font-cormorant-garamond pl-2 lg:pl-8 z-30 uppercase font-semibold text-cream"
                >
                    Elegant
                </motion.h1>

                <motion.h1
                    initial={{ filter: "blur(24px)", opacity: 0.3 }}
                    animate={{ filter: phase === "initial" ? "blur(24px)" : "blur(0)", opacity: 1 }}
                    className="max-sm:text-center lg:absolute right-2 lg:right-0 bottom-[45%] text-7xl sm:text-9xl md:text-[8rem] italic font-cormorant-garamond pr-2 lg:pr-8 z-30 uppercase font-semibold text-cream"
                >
                    Living
                </motion.h1>


                {/* RIGHT TEXT */}
                <motion.p
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: showMeta ? 1 : 0, x: 0 }}
                    className="absolute right-6 lg:right-8 bottom-[40%] text-right text-xs sm:text-sm text-white/60 max-w-[240px] hidden lg:block"
                >
                    A collection of exclusive homes
                    <br />
                    designed for those who value privacy
                </motion.p>

                
                {/* MOBILE BACKGROUND SLIDER */}
                <div className="lg:hidden m-6 rounded-xl overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={active.id}
                            src={active.image}
                            className="w-full h-full object-cover brightness-80 aspect-square"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                    </AnimatePresence>

                </div>


                {/* THUMBNAILS DESKTOP */}
                <AnimatePresence mode="popLayout">
                    {thumbs.map((prop, i) => (

                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0 }}
                            animate={showThumbs ? { opacity: 1 } : { opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.08 }}
                            className="hidden lg:block absolute bottom-8 w-[220px] xl:w-[270px] h-[220px] xl:h-[270px] rounded-lg overflow-hidden border border-white/10 cursor-pointer group"
                            style={{ left: i === 0 ? "2rem" : "24%" }}
                            onClick={() =>
                                setActiveIndex(PROPERTIES.findIndex((p) => p.id === prop.id))
                            }
                        >

                            <img
                                src={prop.thumb}
                                alt={prop.name}
                                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute bottom-3 w-full text-center text-[9px] tracking-[0.2em] text-white/60">

                                {prop.name.split("\n").map((line, idx) => (
                                    <div key={idx}>{line}</div>
                                ))}

                            </div>

                        </motion.div>

                    ))}
                </AnimatePresence>


                {/* ARROWS */}
                <div className="absolute bottom-6 right-6 flex gap-3">

                    <button
                        onClick={prev}
                        className="size-10 lg:size-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={next}
                        className="size-10 lg:size-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
                    >
                        <FaArrowRight />
                    </button>

                </div>

            </div>

        </section>

    )
}
