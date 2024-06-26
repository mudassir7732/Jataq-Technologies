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

                <div className="flex flex-col h-fits lg:flex-row items-center justify-between gap-x-[22px] bg-[#006fff] rounded-[20px]">
                    <div className="w-1/2 xl:px-[49px]">
                        <p className="text-[30px] max-w-[519px] font-[700] text-white font-[Montserrat]">
                            We help our client succeed by creating identities, digital experiences and connecting their business with the world
                        </p>
                    </div>
                    <div className="w-fit border-6">
                        <img src='/assets/images/image1.png' className="h-[398px]" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-x-[87px]">
                    <div className="flex flex-col w-full md:w-1/2 mt-[47px]">
                        <img src="/assets/icons/mission_icon.svg" className="w-[63px] h-[84px]" />
                        <p className="text-[38px] font-[700] font-[Montserrat] text-black mt-[11px]">
                            Our Mission
                        </p>
                        <p className="text-[18px] font-[400] text-black mt-[27px]">
                            We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 mt-[63px]">
                        <img src="/assets/icons/vision_icon.svg" className="w-[68px] h-[68px]" />
                        <p className="text-[38px] font-[700] font-[Montserrat] text-black mt-[11px]">
                            Our Vision
                        </p>
                        <p className="text-[18px] font-[400] text-black mt-[27px]">
                            We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
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