import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import ProjectCard from "@/components/home/home-projects/project-card/index";

const data = {

    title: "• Projects",
    desc: "A Thoughfully Curated Space where Natural Materials and Quite Design Coexist.",

}

const projectData = [
    {
        id: 1,
        title: "Luxury Villa Homestay: Surrounded by Greenery and Gentle Mountains.",
        desc: "Barefoot Bungalow, Mussoorie",

        tags: ["Oriental", "Natural", "Bungalow", "Homestay"],
        images: [
            "/images/projects/barefoot/1.webp",
            "/images/projects/barefoot/2.webp",
            "/images/projects/barefoot/3.webp",
            "/images/projects/barefoot/4.webp",
            "/images/projects/barefoot/5.webp",
        ],
    },
    {
        id: 2,
        title: "Hotel: Luxury Hotel with premium ambiance and confortable stay.",
        desc: "Fairfield Hotel by Marriott",

        tags: ["Luxury", "Premium", "Modern", "Comfort"],
        images: [
            "/images/projects/fairfield/1.webp",
            "/images/projects/fairfield/2.jpeg",
            "/images/projects/fairfield/3.webp",
            "/images/projects/fairfield/4.webp",
        ],
    },
    {
        id: 3,
        title: "A serene farmhouse retreat blending modern luxury with calming textures and mindful living.",
        desc: "Paonta Sahib Farmouse",

        tags: ["Farmhouse", "Serene", "Nature", "Luxury"],
        images: [
            "/images/projects/paonta/1.jpg",
            "/images/projects/paonta/2.png",
            "/images/projects/paonta/3.png",
            "/images/projects/paonta/4.png",
            "/images/projects/paonta/5.png",
        ],
    },
    {
        id: 4,
        title: "Refined Living: A Contemporary Home Interior by DoubleTree by Hilton",
        desc: "DoubleTree by Hilton",

        tags: ["Home Interior", "Modern", "Elegant", "Luxury"],
        images: [
            "/images/projects/doubletree/1.jpeg",
            "/images/projects/doubletree/2.jpg",
            "/images/projects/doubletree/4.webp",
            "/images/projects/doubletree/5.jpeg",
        ],
    },
    {
        id: 4,
        title: "Nile 1401 Geetika: A Sophisticated Residential Interior Crafted for Modern Living",
        desc: "Nile 1401 Geetika",

        tags: ["Residential", "Modern", "Elegant", "Functional"],
        images: [
            "/images/projects/geetika/1.png",
            "/images/projects/geetika/2.png",
            "/images/projects/geetika/3.png",
            "/images/projects/geetika/4.jpg",
        ],
    }
];

export default function ProjectsCollection() {

    return(

        <section className="px-2 md:px-4 my-20">
            <div className="px-2 md:px-4 py-20 bg-cream/50 rounded-3xl">
                <div className="mx-auto lg:max-w-340 h-full">
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
                                            Get In Touch
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
                </div>
            </div>
        </section>

    )

}
