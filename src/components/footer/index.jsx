export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white w-full">

            {/* Top section */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] border-t border-white/10">

                {/* Left column */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 py-8 flex md:justify-center">

                    <div className="flex flex-col gap-4">
                        <h3 className="text-[11px] tracking-[0.25em] uppercase text-white/60">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#projects" className="hover:opacity-70 transition">
                                Projects
                            </a>
                            <a href="#services" className="hover:opacity-70 transition">
                                Services
                            </a>
                        </div>
                    </div>
                    

                </div>


                {/* Center column */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center py-12 gap-2 text-center px-6">

                    <a
                        href="tel:+918074730610"
                        className="text-2xl font-lato md:text-4xl font-medium tracking-wide leading-none hover:opacity-70 transition"
                    >
                        +91 9871 243 804
                    </a>

                    <a
                        href="mailto:hello@renova.studio"
                        className="text-xl md:text-2xl font-light tracking-wide leading-none hover:opacity-70 transition"
                    >
                        thewillowcasa@gmail.com
                    </a>

                </div>


                {/* Right column */}
                <div className="border-b md:border-b-0 border-white/10 px-8 py-8 flex justify-end md:justify-center">

                    <div className="flex flex-col gap-4">

                        <h3 className="text-[11px] tracking-[0.25em] uppercase text-white/60">
                            Studio
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#about" className="hover:opacity-70 transition">
                                About Us
                            </a>
                            <a href="#contact" className="hover:opacity-70 transition">
                                Contact
                            </a>
                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom section */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] border-t border-white/10">

                {/* Address */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 py-6 text-center md:text-left">
                    <p className="text-[10px] tracking-[0.15em] leading-relaxed uppercase text-white/80">
                        5, 3rd Floor Invento<br />
                        Sector 12,<br />
                        Dwarka New Delhi 110075
                    </p>
                </div>

                {/* Tagline */}
                <div className="border-b md:border-b-0 md:border-r border-white/10 flex items-end justify-center px-8 py-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/80">
                        Timeless Design. Lasting Spaces.
                    </p>
                </div>

                {/* Copyright */}
                <div className="flex items-end justify-center md:justify-end px-8 py-6 text-center md:text-right">
                    <p className="text-[10px] tracking-[0.15em] leading-relaxed uppercase text-white/80">
                        2026 The Willow Casa.<br />
                        All Rights Reserved.
                    </p>
                </div>

            </div>

        </footer>
    );
}
