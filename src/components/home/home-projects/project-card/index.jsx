"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Link from "next/link";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({ title, desc, link, tags, images }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);

    return (
        <div className="bg-white flex flex-col md:flex-row gap-4 rounded-2xl p-4 md:p-8">

            {/* Left Column */}
            <div className="md:w-1/3">

                <span className="text-xs md:text-sm text-gray-500 tracking-widest uppercase flex items-center gap-2 font-mono font-semibold mt-3">
                    <span className="w-2 h-2 rounded-full border border-gray-500 inline-block" />
                    {desc}
                </span>

            </div>


            {/* Right Column */}
            <div className="md:w-2/3 flex flex-col gap-6">

                {/* Title + View Case */}
                <div className="flex flex-col md:flex-row justify-between gap-6">

                    <h1 className="text-xl md:text-3xl font-medium font-lato text-gray-900 md:leading-normal max-w-xl">
                        {title}
                    </h1>

                    {link && (
                        <Link
                            href={link}
                            className="ml-1 text-xs md:text-sm text-gray-500 border-b border-gray-400 hover:text-gray-900 whitespace-nowrap font-mono w-max h-max"
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

                    <Swiper
                        modules={[Autoplay]}
                        loop={images?.length > 1}
                        autoplay={
                            images?.length > 1
                                ? {
                                      delay: 3500,
                                      disableOnInteraction: false,
                                  }
                                : false
                        }
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="w-full h-full"
                    >
                        {images?.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt={`Slide ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Dots */}
                    {images?.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">

                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => swiperRef.current?.slideToLoop(i)}
                                    className={`transition-all duration-300 rounded-full ${
                                        activeIndex === i
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
