'use client'

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const SERVICES = [
    {
        number: "01",
        image: "/images/services/residential.jpg",
        title: "Residential Interiors",
        desc: "Thoughtfully designed living spaces tailored for modern homes, blending comfort, functionality, and refined aesthetics to create environments that truly feel personal."
    },
    {
        number: "02",
        image: "/images/services/appartment.jpg",
        title: "Luxury Apartments & Penthouses",
        desc: "Sophisticated interior solutions for premium apartments and penthouses, focusing on spatial elegance, custom finishes, and elevated living experiences."
    },
    {
        number: "03",
        image: "/images/services/corporate.png",
        title: "Commercial & Corporate Spaces",
        desc: "Purpose-driven interiors for offices and commercial environments designed to enhance productivity, reflect brand identity, and create inspiring workspaces."
    },
    {
        number: "04",
        image: "/images/services/building.jpg",
        title: "Large-Scale Building Projects",
        desc: "Comprehensive interior planning and execution for multi-unit developments and large residential projects, ensuring design consistency and construction precision."
    },
    {
        number: "05",
        image: "/images/services/renovation.png",
        title: "Interior Renovation & Styling",
        desc: "Transformative renovation services that reimagine existing spaces through thoughtful design, material upgrades, and refined finishing details."
    }
];

const data = {

    title: "• Services we offer",
    bottom_desc: "Every space tells a story. From residential homes and luxury apartments to large commercial interiors, we combine thoughtful design, quality materials, and expert craftsmanship to create spaces that feel refined, functional, and built to last.",

}

const GAP = 8;

const getVisible = (width) => {
    if (width >= 1024) return 3;  // lg
    if (width >= 768) return 2;   // md
    return 1;                      // sm and below
};

export default function CardCarousel() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3);
    const maxIndex = SERVICES.length - visible;
    const cardRef = useRef(null);
    const controls = useAnimation();
    const dragX = useMotionValue(0);
    const isDragging = useRef(false);

    // sync visible count + snap back if index is now out of bounds
    useEffect(() => {
        const update = () => {
            const v = getVisible(window.innerWidth);
            setVisible(v);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // clamp index and re-snap whenever visible or maxIndex changes
    useEffect(() => {
        const clamped = Math.min(index, maxIndex);
        if (clamped !== index) setIndex(clamped);
        controls.start({
            x: getTargetX(clamped),
            transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
        });
    }, [visible, maxIndex]);

    const getCardWidth = () =>
        cardRef.current ? cardRef.current.offsetWidth + GAP : 0;

    const getTargetX = (i) => -(i * getCardWidth());

    const go = useCallback((i) => {
        const clamped = Math.max(0, Math.min(i, maxIndex));
        setIndex(clamped);
        controls.start({
            x: getTargetX(clamped),
            transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
        });
    }, [maxIndex, controls]);

    const handleDragEnd = (_, info) => {
        const cardW = getCardWidth();
        const threshold = cardW * 0.2;
        const { x: velocity } = info.velocity;
        const { x: offset } = info.offset;

        let newIndex = index;

        if (offset < -threshold || velocity < -300) newIndex = index + 1;
        else if (offset > threshold || velocity > 300) newIndex = index - 1;

        go(newIndex);
    };

    const cardWidthClass =
        visible === 3 ? "w-1/3" :
        visible === 2 ? "w-1/2" :
        "w-full";

    return (
        <section className="py-20">
            <Container>
                <div className="space-y-10">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-300">
                        <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase">
                            {data.title}
                        </h2>
                        <div className="flex gap-3">
                            <button
                                onClick={() => go(index - 1)}
                                disabled={index === 0}
                                className="p-2 border border-black/20 hover:bg-black hover:text-white transition disabled:opacity-30 cursor-pointer"
                            >
                                <MdArrowBack size={20} />
                            </button>
                            <button
                                onClick={() => go(index + 1)}
                                disabled={index === maxIndex}
                                className="p-2 border border-black/20 hover:bg-black hover:text-white transition disabled:opacity-30 cursor-pointer"
                            >
                                <MdArrowForward size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Track */}
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
                        <motion.div
                            className="flex gap-1"
                            animate={controls}
                            drag="x"
                            dragConstraints={{
                                left: getTargetX(maxIndex) - 40,
                                right: 40,
                            }}
                            dragElastic={0.08}
                            dragMomentum={false}
                            onDragStart={() => { isDragging.current = true; }}
                            onDragEnd={handleDragEnd}
                            style={{ x: dragX }}
                            whileDrag={{ cursor: "grabbing" }}
                        >
                            {SERVICES.map((card, i) => (
                                <div
                                    key={i}
                                    ref={i === 0 ? cardRef : null}
                                    className={`flex-none ${cardWidthClass} min-h-[440px] bg-[#111] border border-white/8
                                                flex flex-col gap-4 p-6 hover:bg-[#161616] transition-colors duration-300`}
                                    onClickCapture={(e) => {
                                        if (isDragging.current) {
                                            e.stopPropagation();
                                            isDragging.current = false;
                                        }
                                    }}
                                >
                                    <span className="text-lg tracking-widest text-white/40">
                                        {card.number}
                                    </span>
                                    <div className="overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-48 object-cover rounded pointer-events-none"
                                        />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <h3 className="font-cormorant-garamond text-2xl font-medium text-white mb-3 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm font-poppins text-white/50 leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                    
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 mt-5">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === index ? "bg-black/70" : "bg-black/20"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <p className="text-gray-600 font-poppins max-w-200">{data.bottom_desc}</p>
                        <Link href="/services">
                            <button className="px-6 py-3 font-poppins border border-black/30 hover:bg-black hover:text-white transition cursor-pointer flex items-center gap-3">
                                View All Services
                                <MdArrowOutward size={18} />
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}