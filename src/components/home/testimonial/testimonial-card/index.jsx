"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdArrowBack, MdArrowForward } from "react-icons/md"

export default function TestimonialSlider({ testimonials }) {

    const [[index, direction], setIndex] = useState([0, 0])

    const next = () => {
        setIndex(([prev]) => [(prev + 1) % testimonials.length, 1])
    }

    const prev = () => {
        setIndex(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1])
    }

    const item = testimonials[index]

    /* Auto slide */
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 5000)

        return () => clearInterval(interval)
    }, [index])

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%"
        }),
        center: {
            x: 0
        },
        exit: (direction) => ({
            x: direction > 0 ? "-100%" : "100%"
        })
    }

    return (

        <div className="relative w-full">

            {/* Slider viewport */}
            <div className="overflow-hidden">

                <AnimatePresence initial={false} custom={direction} mode="wait">

                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="flex flex-col justify-between gap-8 md:gap-10"
                    >

                        {/* Testimonial */}
                        <div className="flex gap-3 md:gap-4 min-h-[220px] md:min-h-[180px]">

                            <span className="text-4xl md:text-5xl leading-none text-black/80">
                                “
                            </span>

                            <p className="text-xl md:text-2xl lg:text-3xl font-medium font-lato leading-relaxed text-black/90 max-w-5xl">
                                {item.testimonial}
                            </p>

                        </div>

                        {/* User */}
                        <div className="flex items-center gap-3 md:gap-4">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                            />

                            <div className="flex flex-col">

                                <span className="text-sm md:text-base font-medium text-black">
                                    {item.name}
                                </span>

                                <span className="text-xs md:text-sm text-black/60">
                                    {item.title}
                                </span>

                            </div>

                        </div>

                    </motion.div>

                </AnimatePresence>

            </div>

            {/* Controls */}
            <div className="absolute bottom-0 right-0 flex items-center gap-2 md:gap-3">

                <button
                    onClick={prev}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-black/20 hover:bg-black hover:text-white transition"
                >
                    <MdArrowBack size={18} />
                </button>

                <button
                    onClick={next}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-black/20 hover:bg-black hover:text-white transition"
                >
                    <MdArrowForward size={18} />
                </button>

            </div>

        </div>

    )

}
