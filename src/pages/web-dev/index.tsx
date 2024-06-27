import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";

const WebDev: FC = () => {
    return (
        <div className="flex flex-col">
            <div className='w-full px-[40px] sm:px-[50px] md:px-[65px] lg:px-[80px] xl:px-[100px]'>
                <p className="text-[55px] font-[700] mx-auto w-full text-center font-[Montserrat] text-[#000000] mt-[76px]">
                    Web app development
                </p>
                <p className="text-[18px] font-[400] max-w-[775px] mx-auto text-center font-[Montserrat] mb-[63px]">
                    Leverage our experienced our experienced team for efficient and high-quality web app development. We deliver scalable solutions within your budget, from concept to launch, to help your business grow.
                </p>
            </div>
            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className="flex flex-row items-center justify-between bg-no-repeat bg-cover w-full mb-[50px] px-[40px] sm:px-[50px] md:px-[65px] lg:px-[80px] xl:px-[100px] pt-[36px] sm:pt-[42px] md:pt-[48px] lg:pt-[55px] xl:pt-[66px]">
                <div className="w-1/2">
                    <p className="text-[38px] font-[700]">
                        Our cost-effective web development delivers quality within budget.
                    </p>
                    <p className="mt-[19px] text-[18px] font-[400] text-black">
                        At Jataq Technologies, our expert teams bring unbeatable expertise and deep industry knowledge to every progressive web app project.
                    </p>
                </div>
                <div className="w-1/2">

                </div>
            </div>
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default WebDev;