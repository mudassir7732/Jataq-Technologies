import { FC } from "react";
import TopSection from "../../sections/top-section";
import Services from "../../sections/services";
import AboutUs from "../../sections/about-us";
import WorkMethod from "../../sections/how-we-work";
import Testimonials from "../../sections/testimonials";
import BottomSection from "../../sections/bottom-section";
import ServicesBar from "../../sections/services-bar";

const Home: FC = () => {
    return (
        <div className='flex flex-col'>
            <TopSection />
            <Services />
            <AboutUs />
            <WorkMethod />
            <Testimonials />
            <BottomSection />
            <ServicesBar />
        </div>
    )
}
export default Home; 