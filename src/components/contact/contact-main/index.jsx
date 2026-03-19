'use client'

import Container from "@/components/container"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { MdArrowOutward } from "react-icons/md"

/* ── real contact channels ── */
const CHANNELS = [
    {
        id: "01",
        label: "Email Us",
        value: "Vikas@willowcasa.in",
        sub: "We respond within 24 hours",
        href: "mailto:Vikas@willowcasa.in",
        accent: "#c8a96e",
        image: "/images/projects/paralax/1.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
            </svg>
        ),
    },
    {
        id: "02",
        label: "Call / WhatsApp",
        value: "+91 98732 55071",
        sub: "Mon – Sat, 10am – 7pm IST",
        href: "https://wa.me/919873255071",
        accent: "#9e7c5a",
        image: "/images/projects/paralax/2.jpeg",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
        ),
    },
    {
        id: "03",
        label: "Instagram",
        value: "@willowcasa",
        sub: "See our latest projects & updates",
        href: "https://instagram.com/willowcasa",
        accent: "#b5975e",
        image: "/images/projects/paralax/3.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
        ),
    },
    {
        id: "04",
        label: "Visit Our Studio",
        value: "SF-204, The Peach Tree Complex",
        sub: "Block-C, Sushant Lok Phase-1, Sector-43, Gurgaon — 122002",
        href: "https://maps.google.com/?q=Sushant+Lok+Phase+1+Sector+43+Gurgaon",
        accent: "#a08060",
        image: "/images/projects/paralax/4.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
            </svg>
        ),
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
    }),
}

/* ── individual channel card ── */
function ChannelCard({ channel, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })

    return (
        <motion.a
            ref={ref}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group relative flex flex-col overflow-hidden"
            style={{
                borderRadius: "1.25rem",
                border: `1px solid ${channel.accent}28`,
                textDecoration: "none",
                background: "#faf9f6",
                transition: "box-shadow 0.45s ease, border-color 0.45s ease",
                minHeight: "340px",
            }}
            whileHover={{
                boxShadow: `0 0 0 1px ${channel.accent}55, 0 24px 64px -12px rgba(158,124,90,0.2)`,
            }}
        >
            {/* offset frame — appears on hover */}
            <div style={{
                position: "absolute", inset: 0,
                borderRadius: "1.25rem",
                border: `1px solid ${channel.accent}33`,
                transform: "translate(7px, 7px)",
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 0.4s ease",
                zIndex: 0,
            }}
            className="group-hover:opacity-100"
            />

            {/* ── IMAGE TOP HALF ── */}
            <div style={{
                position: "relative",
                height: "158px",
                overflow: "hidden",
                borderRadius: "1.25rem 1.25rem 0 0",
                flexShrink: 0,
            }}>
                <Image
                    src={channel.image}
                    alt={channel.label}
                    width={1000}
                    height={1000}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {/* warm tinted gradient */}
                <div style={{ position:"absolute", inset:0, background:`linear-gradient(160deg, ${channel.accent}18 0%, rgba(28,21,16,0.58) 100%)` }} />

                {/* id badge */}
                <div style={{
                    position:"absolute", top:"13px", left:"13px",
                    width:"30px", height:"30px", borderRadius:"50%",
                    background:"rgba(255,255,255,0.88)", backdropFilter:"blur(6px)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                    <span style={{ fontFamily:"var(--font-lato)", fontSize:"9px", fontWeight:700, letterSpacing:"0.06em", color:channel.accent }}>
                        {channel.id}
                    </span>
                </div>

                {/* icon chip — top right */}
                <div style={{
                    position:"absolute", top:"13px", right:"13px",
                    padding:"7px", background:"rgba(28,21,16,0.48)",
                    backdropFilter:"blur(8px)", borderRadius:"8px",
                    color:"#e8d9b8", display:"flex", alignItems:"center",
                }}>
                    {channel.icon}
                </div>

                {/* label chip — bottom left over image */}
                <div style={{
                    position:"absolute", bottom:"13px", left:"13px",
                    fontFamily:"var(--font-lato)", fontSize:"9px",
                    letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:600,
                    color:"#e8d9b8", background:"rgba(28,21,16,0.52)",
                    backdropFilter:"blur(6px)", padding:"4px 11px", borderRadius:"100px",
                }}>
                    {channel.label}
                </div>

                {/* corner accent glow */}
                <div style={{
                    position:"absolute", top:0, right:0,
                    width:"120px", height:"120px",
                    background:`radial-gradient(circle at top right, ${channel.accent}30, transparent 70%)`,
                    pointerEvents:"none",
                }} />
            </div>

            {/* ── TEXT BODY ── */}
            <div style={{ padding:"20px 22px 22px", flex:1, display:"flex", flexDirection:"column", justifyContent:"space-between", gap:"14px" }}>

                <div>
                    {/* LABEL — above the rule */}
                    <p style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "10px",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: channel.accent,
                        fontWeight: 700,
                        marginBottom: "10px",
                    }}>
                        {channel.label}
                    </p>

                    {/* gradient rule */}
                    <div style={{
                        height: "1px",
                        background: `linear-gradient(to right, ${channel.accent}99, transparent)`,
                        marginBottom: "14px",
                    }} />

                    {/* MAIN VALUE — Lato bold, clean and prominent */}
                    <p style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "clamp(0.92rem, 1.5vw, 1.1rem)",
                        fontWeight: 700,
                        color: "#2c2318",
                        letterSpacing: "0.01em",
                        lineHeight: 1.4,
                        marginBottom: "6px",
                    }}>
                        {channel.value}
                    </p>

                    {/* sub */}
                    <p style={{
                        fontFamily: "var(--font-lato)",
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        color: "#a08060",
                        letterSpacing: "0.02em",
                        lineHeight: 1.65,
                    }}>
                        {channel.sub}
                    </p>
                </div>

                {/* bottom cta row */}
                <div style={{
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    paddingTop:"12px",
                    borderTop:`1px solid ${channel.accent}22`,
                }}>
                    <span style={{
                        fontFamily:"var(--font-lato)", fontSize:"9px",
                        letterSpacing:"0.22em", textTransform:"uppercase",
                        color:channel.accent, fontWeight:700,
                        opacity:0, transition:"opacity 0.35s ease",
                    }}
                    className="group-hover:opacity-100"
                    >
                        Open ↗
                    </span>
                    <div style={{
                        width:"28px", height:"28px", borderRadius:"50%",
                        border:`1px solid ${channel.accent}44`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        color:channel.accent,
                        transition:"background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
                    }}
                    className="group-hover:bg-[#2c2318] group-hover:border-[#2c2318] group-hover:text-[#c8a96e]"
                    >
                        <MdArrowOutward size={13} />
                    </div>
                </div>
            </div>
        </motion.a>
    )
}

export default function ContactMain() {
    const cardsRef = useRef(null)
    const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" })
    const closingRef = useRef(null)
    const closingInView = useInView(closingRef, { once: true, margin: "-60px" })

    return (
        <>
            <style>{`
                .contact-section {
                    background: #f7f4ef;
                    position: relative;
                    overflow: hidden;
                }
                .contact-section::before {
                    content: '';
                    position: absolute; inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none; z-index: 0;
                }
                .hero-band {
                    background: #1c1510;
                    border-radius: 1.75rem;
                    position: relative;
                    overflow: hidden;
                }
                .hero-band::before {
                    content: '';
                    position: absolute; inset: 0; border-radius: inherit;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
                    pointer-events: none; z-index: 1;
                }
            `}</style>

            <section className="contact-section pt-36 pb-28">

                {/* ── SECTION AMBIENT ORBS ── */}
                <div style={{ position:"absolute", top:"-100px", right:"-150px", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle, rgba(200,169,110,0.13) 0%, transparent 70%)", filter:"blur(90px)", pointerEvents:"none", zIndex:0 }} />
                <div style={{ position:"absolute", top:"45%", left:"-120px", width:"440px", height:"440px", borderRadius:"50%", background:"radial-gradient(circle, rgba(158,124,90,0.10) 0%, transparent 70%)", filter:"blur(80px)", pointerEvents:"none", zIndex:0 }} />
                <div style={{ position:"absolute", bottom:"8%", right:"6%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(200,169,110,0.09) 0%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none", zIndex:0 }} />

                {/* faint ruled lines top-right */}
                <div style={{ position:"absolute", top:"110px", right:"52px", width:"140px", opacity:0.055, zIndex:0, pointerEvents:"none" }}>
                    {[0,1,2,3].map(i => <div key={i} style={{ height:"1px", background:"#6b5c45", marginBottom:"16px" }} />)}
                </div>

                {/* large faint circle outlines */}
                <div style={{ position:"absolute", width:"800px", height:"800px", borderRadius:"50%", border:"1px solid rgba(200,169,110,0.07)", bottom:"-300px", left:"-220px", pointerEvents:"none", zIndex:0 }} />
                <div style={{ position:"absolute", width:"550px", height:"550px", borderRadius:"50%", border:"1px solid rgba(200,169,110,0.05)", bottom:"-190px", left:"-90px", pointerEvents:"none", zIndex:0 }} />

                <Container>
                    <div className="relative z-10 space-y-14">

                        {/* ── DARK HERO BAND ── */}
                        <div className="hero-band">

                            {/* blurred bg image */}
                            <div style={{ position:"absolute", inset:0, borderRadius:"inherit", overflow:"hidden", zIndex:0 }}>
                                <Image
                                    src="/images/contact-bg.jpg"
                                    alt=""
                                    style={{ width:"100%", height:"100%", objectFit:"cover", opacity:0.1, filter:"saturate(0.5)" }}
                                    width={1000}
                                    height={1000}
                                />
                            </div>

                            {/* inner orb */}
                            <div style={{ position:"absolute", top:"-80px", right:"-60px", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(200,169,110,0.16) 0%, transparent 70%)", filter:"blur(70px)", pointerEvents:"none", zIndex:1 }} />

                            {/* concentric rings */}
                            <div style={{ position:"absolute", width:"620px", height:"620px", borderRadius:"50%", border:"1px solid rgba(200,169,110,0.07)", bottom:"-260px", right:"-160px", pointerEvents:"none", zIndex:1 }} />
                            <div style={{ position:"absolute", width:"420px", height:"420px", borderRadius:"50%", border:"1px solid rgba(200,169,110,0.05)", bottom:"-170px", right:"-70px", pointerEvents:"none", zIndex:1 }} />

                            {/* vertical gold line */}
                            <div style={{ position:"absolute", left:"clamp(32px,6vw,50px)", top:"40px", bottom:"40px", width:"1px", background:"linear-gradient(to bottom, transparent, rgba(200,169,110,0.25), transparent)", pointerEvents:"none", zIndex:2 }} />

                            {/* HERO GRID: left text | right images */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] relative z-10">

                                {/* LEFT: text */}
                                <div style={{ padding:"clamp(48px,7vw,88px) clamp(32px,5vw,64px)" }}>

                                    <motion.div
                                        initial={{ opacity:0, y:16 }}
                                        animate={{ opacity:1, y:0 }}
                                        transition={{ duration:0.7 }}
                                        style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"28px" }}
                                    >
                                        <div style={{ display:"flex", gap:"6px" }}>
                                            {[0,1,2].map(i => <div key={i} style={{ width:5, height:5, borderRadius:"50%", background:"#c8a96e", opacity:1 - i*0.28 }} />)}
                                        </div>
                                        <p style={{ fontFamily:"var(--font-lato)", fontSize:"11px", letterSpacing:"0.26em", textTransform:"uppercase", color:"#7a6a58", fontWeight:500 }}>
                                            Contact Willow Casa
                                        </p>
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity:0, y:28 }}
                                        animate={{ opacity:1, y:0 }}
                                        transition={{ duration:0.9, delay:0.1, ease:[0.22,1,0.36,1] }}
                                        style={{ fontFamily:"var(--font-cormorant-garamond)", fontSize:"clamp(2.8rem,5.5vw,5rem)", fontWeight:300, color:"#e8ddd0", lineHeight:1.1, letterSpacing:"-0.02em", marginBottom:"22px" }}
                                    >
                                        Let's build something{" "}
                                        <em style={{ color:"#c8a96e", fontStyle:"italic" }}>remarkable.</em>
                                    </motion.h1>

                                    <motion.div
                                        initial={{ scaleX:0 }}
                                        animate={{ scaleX:1 }}
                                        transition={{ duration:1.0, delay:0.3 }}
                                        style={{ height:"1px", background:"linear-gradient(to right, #c8a96e66, transparent)", transformOrigin:"left", marginBottom:"22px", maxWidth:"320px" }}
                                    />

                                    <motion.p
                                        initial={{ opacity:0, y:20 }}
                                        animate={{ opacity:1, y:0 }}
                                        transition={{ duration:0.8, delay:0.35 }}
                                        style={{ fontFamily:"var(--font-poppins)", fontSize:"0.9rem", color:"#7a6a58", lineHeight:1.85, maxWidth:"420px" }}
                                    >
                                        Whether you're planning a new home, a luxury apartment, or a large-scale
                                        development — we'd love to hear your vision. Reach out directly through
                                        any channel below.
                                    </motion.p>

                                    {/* company identity tag */}
                                    <motion.div
                                        initial={{ opacity:0, y:14 }}
                                        animate={{ opacity:1, y:0 }}
                                        transition={{ duration:0.7, delay:0.5 }}
                                        style={{ display:"flex", alignItems:"center", gap:"12px", marginTop:"36px", paddingTop:"26px", borderTop:"1px solid rgba(200,169,110,0.14)" }}
                                    >
                                        <div style={{ width:"34px", height:"34px", borderRadius:"50%", border:"1px solid rgba(200,169,110,0.38)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                                            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#c8a96e" }} />
                                        </div>
                                        <div>
                                            <p style={{ fontFamily:"var(--font-oswald)", fontSize:"0.82rem", letterSpacing:"0.13em", textTransform:"uppercase", color:"#e8ddd0", fontWeight:300 }}>
                                                Willow Casa Pvt Ltd
                                            </p>
                                            <p style={{ fontFamily:"var(--font-lato)", fontSize:"9px", color:"#7a6a58", letterSpacing:"0.16em", textTransform:"uppercase", marginTop:"2px" }}>
                                                Architecture · Interiors · Turnkey · Landscape
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* RIGHT: stacked project images */}
                                <motion.div
                                    initial={{ opacity:0, x:24 }}
                                    animate={{ opacity:1, x:0 }}
                                    transition={{ duration:1, delay:0.25, ease:[0.22,1,0.36,1] }}
                                    className="hidden lg:flex flex-col"
                                    style={{ gap:"14px", padding:"20px 20px 20px 0" }}
                                >
                                    {[
                                        { src:"/images/projects/geetika/1.png", label:"Residential · Lucknow" },
                                        { src:"/images/projects/paonta/2.png", label:"Farmhouse · Gurgaon" },
                                    ].map((img, i) => (
                                        <div key={i} style={{ position:"relative", flex:1, borderRadius:"0.875rem", overflow:"hidden", minHeight:"130px" }}>
                                            <Image src={img.src} alt={img.label} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"saturate(0.9)" }} width={1000} height={1000} />
                                            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(28,21,16,0.62) 0%, transparent 60%)" }} />
                                            {/* accent corner */}
                                            <div style={{ position:"absolute", top:0, right:0, width:"100px", height:"100px", background:"radial-gradient(circle at top right, rgba(200,169,110,0.22), transparent 70%)" }} />
                                            <p style={{ position:"absolute", bottom:"10px", left:"12px", fontFamily:"var(--font-lato)", fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(232,217,184,0.72)", fontWeight:600 }}>
                                                {img.label}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* ── SECTION LABEL ── */}
                        <div ref={cardsRef}>
                            <motion.div
                                custom={0}
                                variants={fadeUp}
                                initial="hidden"
                                animate={cardsInView ? "visible" : "hidden"}
                                style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"28px" }}
                            >
                                <p style={{ fontFamily:"var(--font-lato)", fontSize:"11px", letterSpacing:"0.26em", textTransform:"uppercase", color:"#b09070", fontWeight:500, whiteSpace:"nowrap" }}>
                                    Our Channels
                                </p>
                                <div style={{ flex:1, height:"1px", background:"linear-gradient(to right, #c8a96e44, transparent)" }} />
                                <div style={{ width:6, height:6, background:"#c8a96e", transform:"rotate(45deg)", opacity:0.55 }} />
                            </motion.div>

                            {/* ── 2×2 CARD GRID ── */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {CHANNELS.map((channel, i) => (
                                    <ChannelCard key={channel.id} channel={channel} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* ── CLOSING BAR ── */}
                        <motion.div
                            ref={closingRef}
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate={closingInView ? "visible" : "hidden"}
                            style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"20px", paddingTop:"28px", borderTop:"1px solid rgba(200,169,110,0.18)" }}
                        >
                            <p style={{ fontFamily:"var(--font-oswald)", fontSize:"clamp(1rem,2.2vw,1.3rem)", fontWeight:300, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2c2318" }}>
                                Willow Casa — Sector 43, Gurgaon
                            </p>
                            <p style={{ fontFamily:"var(--font-lato)", fontSize:"0.78rem", color:"#b09070", letterSpacing:"0.05em" }}>
                                Architecture · Interiors · Turnkey · Landscape
                            </p>
                        </motion.div>

                    </div>
                </Container>
            </section>
        </>
    )
}
