import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import WorkMethod from "../../sections/how-we-work";

const About: FC = () => {
    return (
        <div className="flex flex-col">
            <div className='px-[100px]'>
                <p className="text-[55px] font-[700] mx-auto text-center font-[Montserrat] text-[#000000] mt-[76px]">
                    About Us
                </p>
                <p className="text-[18px] font-[400] max-w-[567px] mx-auto text-center font-[Montserrat] mb-[63px]">
                    Discover our story, our mission, and our passion for creativity and innovation.
                </p>

                <div className="bg-[#006fff] min-h-[398px] rounded-[20px]">
                    <div className="w-1/2 flex px-[50px] py-[85px]">
                        <p className="text-[36px] font-[700]">
                            We help our client succeed by creating identities, digital experiences and connecting their business with the world
                        </p>
                    </div>
                    <div className="w-1/2">

                    </div>
                </div>

            </div>

            <WorkMethod />
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default About;