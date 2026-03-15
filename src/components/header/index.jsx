'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
    { name: "Projects", link: "#projects" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" }
]

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {

        let lastScroll = window.scrollY

        const handleScroll = () => {
            const currentScroll = window.scrollY

            setScrolled(currentScroll > 10)

            if (currentScroll > lastScroll && currentScroll > 100) {
                setHidden(true)
            } else {
                setHidden(false)
            }

            lastScroll = currentScroll
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <>
            <motion.header
                initial={{ y: 0 }}
                animate={{ y: hidden ? -120 : 0 }}
                transition={{ duration: 0.35 }}
                className={`fixed top-0 left-0 w-full z-50 px-6 py-3 border-b border-white/20 transition-colors duration-500 ${
                    scrolled ? "bg-primary-brown" : "bg-transparent"
                }`}
            >

                {scrolled && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
                    </div>
                )}

                <div className="flex items-center justify-between relative z-10">

                    {/* Logo */}
                    <Link href="#home">
                        <Image
                            src="/logos/logo.png"
                            alt="logo"
                            width={1000}
                            height={1000}
                            className="h-14 lg:h-20 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center">

                        <div className="flex items-center gap-10 px-10 border-l border-white/20 h-full">
                            {NAV_LINKS.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <button className="text-white/60 text-sm hover:text-white transition-colors duration-300 uppercase">
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center justify-center px-10 h-full border-l border-white/20">
                            <button className="text-white hover:text-white/70 transition-colors duration-300 border-b">
                                CONTACT US
                            </button>
                        </div>

                    </div>

                    {/* Burger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
                    >
                        <motion.span
                            animate={
                                menuOpen
                                    ? { rotate: 45, y: 8, width: "100%" }
                                    : { rotate: 0, y: 0, width: "50%" }
                            }
                            className="h-[2px] bg-cream block"
                        />

                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-[2px] bg-cream block"
                        />

                        <motion.span
                            animate={
                                menuOpen
                                    ? { rotate: -45, y: -14, width: "100%", alignSelf: "center" }
                                    : { rotate: 0, y: 0, width: "50%", alignSelf: "flex-end" }
                            }
                            className="h-[2px] bg-cream block"
                        />
                    </button>

                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-black z-40 flex flex-col justify-center px-10 gap-10"
                    >

                        {NAV_LINKS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="text-white text-2xl uppercase">
                                    {item.name}
                                </div>
                            </Link>
                        ))}

                        <button className="text-white text-2xl border-b w-fit">
                            CONTACT US
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
