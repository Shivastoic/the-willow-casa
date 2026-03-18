import Container from "@/components/container";
import ServicesMainCard from "./services-card";

const data = {

    title: "• Service's We Offer",
    desc: "Built on client trust and expert craftsmanship, we deliver spaces that combine strong construction, functional design, and refined architecture.",

}

const SERVICES = [
    {
        id: 1,
        images: [
            "/images/services/main-img/1.png",
            "/images/services/main-img/2.png",
            "/images/services/main-img/3.png",
        ],
        title: "Residential Interiors",
        desc: "Thoughtfully designed living spaces tailored for modern homes, blending comfort, functionality, and refined aesthetics to create environments that truly feel personal.",
        features: [
            "Custom furniture & layout planning",
            "Space optimization for modern living",
            "Material & color palette selection",
            "Lighting design for ambiance",
        ]
    },
    {
        id: 2,
        images: [
            "/images/services/main-img/4.jpg",
            "/images/services/main-img/5.webp",
            "/images/services/main-img/6.jpeg",
        ],
        title: "Luxury Apartments & Penthouses",
        desc: "Sophisticated interior solutions for premium apartments and penthouses, focusing on spatial elegance, custom finishes, and elevated living experiences.",
        features: [
            "High-end material & finish selection",
            "Bespoke furniture & detailing",
            "Premium lighting & automation integration",
            "Elegant spatial planning",
        ]
    },
    {
        id: 3,
        images: [
            "/images/services/main-img/7.png",
            "/images/services/main-img/8.jpg",
            "/images/services/main-img/9.jpg",
        ],
        title: "Commercial & Corporate Spaces",
        desc: "Purpose-driven interiors for offices and commercial environments designed to enhance productivity, reflect brand identity, and create inspiring workspaces.",
        features: [
            "Brand-aligned interior concepts",
            "Efficient workspace planning",
            "Acoustic & lighting optimization",
            "Client-facing area design",
        ]
    },
    {
        id: 4,
        images: [
            "/images/services/main-img/10.jpg",
            "/images/services/main-img/11.jpg",
            "/images/services/main-img/12.jpg",
        ],
        title: "Scale Building Projects",
        desc: "Comprehensive interior planning and execution for multi-unit developments and large residential projects, ensuring design consistency and construction precision.",
        features: [
            "End-to-end project coordination",
            "Standardized design systems",
            "Scalable interior solutions",
            "Quality control & execution oversight",
        ]
    },
    {
        id: 5,
        images: [
            "/images/services/main-img/13.png",
            "/images/services/main-img/14.webp",
            "/images/services/main-img/15.jpg",
        ],
        title: "Interior Renovation & Styling",
        desc: "Transformative renovation services that reimagine existing spaces through thoughtful design, material upgrades, and refined finishing details.",
        features: [
            "Space transformation planning",
            "Modern material upgrades",
            "Furniture & decor styling",
            "Detail-focused finishing touches",
        ]
    }
];

export default function ServicesMain(){

    return (

        <section className="py-28">
            <Container>
                <div className="pt-20 space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 border-b border-black/15 pb-10">
                        <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase col-span-2">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl font-poppins text-neutral-600 col-span-3">
                            {data.desc}
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        {SERVICES.map((card, index) => (

                            <ServicesMainCard
                                key={index} 
                                title={card.title}
                                desc={card.desc}
                                id={card.id}
                                images={card.images}
                                features={card.features}
                            />

                        ))}
                    </div>
                </div>
            </Container>
        </section>

    )

}
