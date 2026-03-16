import { Cormorant_Garamond, Lato, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
});

const lato = Lato({
	variable: "--font-lato",
	weight: ["100","300", "400", "700", "900"],
	subsets: ["latin"],
});

export const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
});

export const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    metadataBase: new URL("https://www.thewillowcasa.in"),

    title: {
        default: "The Willow Casa | Architecture, Construction & Interior Design",
        template: "%s | The Willow Casa"
    },

    description:
        "The Willow Casa is a professional construction and design company delivering residential and commercial projects including civil construction, interiors, landscaping, HVAC, plumbing, and electrical services across India.",

    keywords: [
        "The Willow Casa",
        "ANN Concept",
        "architecture firm India",
        "construction company India",
        "interior design company",
        "civil construction",
        "high rise construction",
        "residential projects",
        "commercial architecture",
        "luxury farmhouse design",
        "Gurgaon construction company",
        "Lucknow construction company",
        "Delhi architecture firm",
        "design and build company",
        "landscape development",
        "HVAC and fire fighting systems"
    ],

    authors: [{ name: "The Willow Casa" }],
    creator: "The Willow Casa",
    publisher: "The Willow Casa",

    openGraph: {
        title: "The Willow Casa | Architecture, Construction & Interior Design",
        description:
            "Delivering high-quality residential and commercial construction, interior design, landscaping, HVAC, plumbing, and electrical services with expert craftsmanship and trusted professionalism.",
        url: "https://www.thewillowcasa.in",
        siteName: "The Willow Casa",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "The Willow Casa Architecture and Construction Projects"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "The Willow Casa | Architecture, Construction & Interior Design",
        description:
            "Professional architecture, civil construction, and interior design company delivering residential and commercial projects across India.",
        images: ["/og-image.jpg"]
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },

    category: "Construction & Architecture"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${cormorantGaramond.variable} ${lato.variable} ${oswald.variable} ${poppins.variable} antialiased`}
			>
				<Header />
				<LenisProvider>
					{children}
				</LenisProvider>
				<Footer />
			</body>
		</html>
	);
}
