import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { WEB_FEATURES } from "../../constants/webFeatures";
import { WebFeatureProps } from "../../types/webAppFeatures";
import FiguresBar from "../../components/figures-bar.tsx";

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
            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className="flex flex-col bg-no-repeat bg-cover w-full mb-[50px] px-[40px] sm:px-[50px] md:px-[65px] lg:px-[80px] xl:px-[100px] gap-y-[116px] pt-[36px] sm:pt-[42px] md:pt-[48px] lg:pt-[55px] xl:pt-[66px]">
                <div className="flex flex-row items-start jus">

                    <div className="w-1/2">
                        <p className="text-[38px] font-[700]">
                            Our cost-effective web development delivers quality within budget.
                        </p>
                        <p className="mt-[19px] text-[18px] font-[400] text-black max-w-[88%]">
                            At Jataq Technologies, our expert teams bring unbeatable expertise and deep industry knowledge to every progressive web app project.
                        </p>
                        <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 lg:px-3 xl:w-[257px] bg-[#1b7eff] rounded-[20px] mt-[34px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                            Schedule a Meeting
                            <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                        </button>
                    </div>
                    <div className="w-1/2 flex flex-col gap-y-[18px]">
                        {WEB_FEATURES?.map((feature: WebFeatureProps, index: number) => (
                            <div key={index} className={`flex flex-row items-center gap-x-[39px] px-[27px] py-[31px] ${index === 0 ? 'bg-[#006fff]':'bg-white'} rounded-[20px]`}>
                                <img src={feature?.icon} className={`${index === 0 ? 'w-[39px]': 'w-[55px]'} ${index === 0 ? 'h-[39px]': 'h-[55px]'}`} />
                                <p className={`text-[22px] font-[500] font-[Montserrat] ${index === 0 ? 'text-white' : 'text-black'}`}>
                                    {feature?.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <FiguresBar />

            </div>
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default WebDev;