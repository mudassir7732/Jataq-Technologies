import { FC } from "react";
import Hero from "../../sections/hero";
import Services from "../../sections/services";
import AboutUs from "../../sections/about-us";
import WorkMethod from "../../sections/how-we-work";
import Testimonials from "../../sections/testimonials";
import BottomSection from "../../sections/bottom-section";
import ServicesBar from "../../sections/services-bar";
import WorkLabel from "../../sections/how-we-work/label";

const Home: FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <WorkLabel />
            <WorkMethod />
            <Testimonials />
            <BottomSection />
            <ServicesBar />
        </>
    )
}
export default Home; 