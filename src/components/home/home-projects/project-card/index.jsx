'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({ title, desc, link, tags, images }) {

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [images]);

    const goTo = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
        },
        exit: (dir) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
        }),
    };

    return (
        <div className="bg-white flex flex-col md:flex-row border-b border-gray-300 pb-6 md:pb-10">

            {/* Left Column */}
            <div className="md:w-1/3 md:px-8 pt-8">

                <span className="text-xs md:text-sm text-gray-500 tracking-widest uppercase flex items-center gap-2 font-mono font-semibold mt-3">
                    <span className="w-2 h-2 rounded-full border border-gray-500 inline-block" />
                    {desc}
                </span>

            </div>


            {/* Right Column */}
            <div className="md:w-2/3 pt-8 pb-8 flex flex-col gap-6">

                {/* Title + View Case */}
                <div className="flex flex-col md:flex-row justify-between gap-6">

                    <h1 className="text-xl md:text-3xl font-medium font-lato text-gray-900 md:leading-normal max-w-xl">
                        {title}
                    </h1>

                    {link && (
                        <Link
                            href={link}
                            className="text-sm text-gray-500 border-b border-gray-400 hover:text-gray-900 whitespace-nowrap font-mono w-max h-max"
                        >
                            View Case 
                            <MdArrowOutward className="inline-block ml-1 mb-0.5" />
                        </Link>
                    )}

                </div>


                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags?.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-300 text-xs md:text-sm text-gray-600 font-mono font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


                {/* Image Slider */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-stone-100 aspect-video">

                    <AnimatePresence custom={direction} initial={false}>
                        <motion.img
                            key={current}
                            src={images?.[current]}
                            alt={`Slide ${current + 1}`}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                        />
                    </AnimatePresence>

                    {/* Dots */}
                    {images?.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === current
                                            ? "w-5 h-1.5 bg-white"
                                            : "w-1.5 h-1.5 bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}
