'use client'

import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef, useState, useEffect } from "react"
import { Autoplay } from "swiper/modules"
import { useInView } from "framer-motion"

import "swiper/css"

export default function ServicesMainCard({ id, title, desc, images, features }) {

    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)
    const containerRef = useRef(null)

    // 👇 detect if component is visible
    const isInView = useInView(containerRef, {
        margin: "-100px", // trigger slightly early
        once: false
    })

    const isEven = id % 2 === 0

    // 👇 control autoplay based on visibility
    useEffect(() => {
        if (!swiperRef.current) return

        if (isInView) {
            swiperRef.current.autoplay?.start()
        } else {
            swiperRef.current.autoplay?.stop()
        }
    }, [isInView])

    const TextContent = (
        <div className="space-y-10">
            <div className="space-y-4">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-bold font-cormorant-garamond">
                    {title}
                </h3>
                <p className="font-poppins text-neutral-500">{desc}</p>

                {features?.length > 0 && (
                    <ul className="space-y-2 pt-2">
                        {features.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 font-poppins text-sm md:text-base text-neutral-500">
                                <span className="size-1.5 bg-black/30 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <Link href="/contact">
                    <button className="px-4 py-2 font-poppins border border-black/30 hover:bg-[#111111] hover:text-white transition cursor-pointer flex items-center gap-3">
                        Get in touch
                        <MdArrowOutward />
                    </button>
                </Link>
            </div>
        </div>
    )

    const ImageSlider = (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-2xl bg-stone-100 aspect-video"
        >
            <Swiper
                key={images?.length}
                modules={[Autoplay]}
                loop={images?.length > 1}
                autoplay={
                    images?.length > 1
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true, // 🔥 UX boost
                        }
                        : false
                }
                observer={true}
                observeParents={true}
                watchSlidesProgress={true}
                grabCursor={true}
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
                            loading={i === 0 ? "eager" : "lazy"} // 🔥 key optimization
                            decoding="async"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Dots */}
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
    )

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 border-b border-black/15 py-10">
            {isEven ? (
                <>
                    {ImageSlider}
                    {TextContent}
                </>
            ) : (
                <>
                    {TextContent}
                    {ImageSlider}
                </>
            )}
        </div>
    )
}
