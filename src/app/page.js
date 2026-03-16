import Hero from "@/components/home/hero";
import HomeAbout from "@/components/home/home-about";
import HomeServiceBento from "@/components/home/home-service-bento";
import HomeServices from "@/components/home/home-services";
import WhyUs from "@/components/home/why-us";
import HomeProjects from "@/components/home/home-projects";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
	return (

		<>
		<Hero />
		<HomeAbout />
		<HomeServices />
		<HomeServiceBento />
		<WhyUs />
		<HomeProjects />
		<Testimonial />
		</>

	)
}
