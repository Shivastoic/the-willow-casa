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
        title: "Clinic: Centre for Paediatric Orthopaedic & Disabilities",
        desc: "Paediatric Orthopaedic Clinic",
        description: "A thoughtfully designed clinical space focused on comfort, accessibility, and functionality — creating a welcoming environment for children while supporting efficient medical care.",
        details: [
            { label: "Location", value: "Golf Course Road, Gurgaon" },
            { label: "Built-up Area", value: "2500 sq ft" },
            { label: "Scope", value: "Interior Design and Turnkey Project" },
        ],
        tags: ["Clinic", "Healthcare", "Functional", "Modern"],
        images: [
            "/images/projects/clinic/1.jpeg",
            "/images/projects/clinic/2.jpeg",
            "/images/projects/clinic/3.jpeg",
            "/images/projects/clinic/4.jpeg",
            "/images/projects/clinic/5.jpeg",
        ],
    },
    {
        id: 2,
        title: "Private Residence at Belaire",
        desc: "Luxury Private Residence",
        description: "A refined residential interior crafted for modern living, blending elegance with comfort through carefully curated materials, textures, and spatial planning.",
        details: [
            { label: "Location", value: "Golf Course Road, Gurgaon" },
            { label: "Built-up Area", value: "4600 sq ft" },
            { label: "Scope", value: "Interior Design and Turnkey Project" },
        ],
        tags: ["Residential", "Luxury", "Modern", "Elegant"],
        images: [
            "/images/projects/private-belaire/1.jpeg",
            "/images/projects/private-belaire/2.jpeg",
            "/images/projects/private-belaire/3.jpeg",
            "/images/projects/private-belaire/4.jpeg",
            "/images/projects/private-belaire/5.jpeg",
        ],
    },
    {
        id: 3,
        title: "Club - Belaire",
        desc: "Premium Clubhouse",
        description: "A vibrant clubhouse designed to foster community and leisure — featuring expansive layouts, premium finishes, and a balance of luxury and functionality.",
        details: [
            { label: "Location", value: "Golf Course Road, Gurgaon" },
            { label: "Built-up Area", value: "15000 sq ft" },
            { label: "Scope", value: "Interior Design & Project Management" },
        ],
        tags: ["Club", "Community", "Luxury", "Leisure"],
        images: [
            "/images/projects/club-belaire/1.jpg",
            "/images/projects/club-belaire/2.jpg",
            "/images/projects/club-belaire/3.jpg",
            "/images/projects/club-belaire/4.jpg",
            "/images/projects/club-belaire/5.jpg",
        ],
    },
    {
        id: 4,
        title: "Private Residence at Paras Quartier",
        desc: "High-End Residential Interior",
        description: "A sophisticated home interior that merges contemporary design with luxurious detailing, offering a seamless blend of comfort, style, and modern living.",
        details: [
            { label: "Location", value: "Gawal Pahadi, Gurgaon" },
            { label: "Built-up Area", value: "4800 sq ft" },
            { label: "Scope", value: "Interior Design and Turnkey Project" },
        ],
        tags: ["Residential", "Luxury", "Contemporary", "Elegant"],
        images: [
            "/images/projects/paras/1.png",
            "/images/projects/paras/2.png",
            "/images/projects/paras/3.png",
            "/images/projects/paras/4.png",
            "/images/projects/paras/5.png",
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
