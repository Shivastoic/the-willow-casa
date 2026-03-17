import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "./project-card";

const data = {

    title: "• Projects",
    desc: "A Thoughfully Curated Space where Natural Materials and Quite Design Coexist.",

}

const projectData = [
    {
        id: 1,
        title: "Quiet Growth: A Warm Home Shaped by Greenery and Gentle Moments",
        desc: "Home of Xiaoming and Dazi",
        link: "/cases/xiaoming-dazi",
        tags: ["Oriental", "Natural", "Family", "Calm"],
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
            "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
        ],
    },
    {
        id: 2,
        title: "Still Waters: A Minimalist Retreat Defined by Light and Shadow",
        desc: "Studio of Lena and Marco",
        link: "/cases/lena-marco",
        tags: ["Minimalist", "Nordic", "Couple", "Serene"],
        images: [
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6d349c8b?w=1200&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
        ],
    },
    {
        id: 3,
        title: "Urban Zen: A High-Rise Sanctuary Softened by Texture and Ritual",
        desc: "Penthouse of Aryan and Priya",
        link: "/cases/aryan-priya",
        tags: ["Urban", "Zen", "Luxury", "Textured"],
        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
        ],
    },
];

export default function HomeProjects() {

    return(

        <section className="px-2 md:px-4">
            <div className="md:px-4 py-20 bg-cream/50 rounded-3xl">
                <Container>
                    <div className="space-y-8">
                        <div className="space-y-8 border-b border-gray-300 pb-8">
                            <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase">
                                {data.title}
                            </h2>
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <p className="text-xl md:text-4xl text-neutral-800 font-medium font-poppins max-w-150 leading-normal">
                                    {data.desc}
                                </p>
                                <div className="flex items-end">
                                    <Link href="/contact">
                                        <button className="px-4 py-2 md:px-6 md:py-3 font-poppins border border-black/30 hover:bg-white bg-[#111111] hover:text-black text-white transition cursor-pointer flex items-center gap-3">
                                            Collections
                                            <MdArrowOutward size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-8">
                            {projectData.map((project, i) => (
                                <ProjectCard key={i} {...project} />
                            ))}

                        </div>
                    </div>
                </Container>
            </div>
        </section>

    )

}
