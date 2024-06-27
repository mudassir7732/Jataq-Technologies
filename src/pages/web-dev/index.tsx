import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { WEB_FEATURES } from "../../constants/webFeatures";
import { WebFeatureProps } from "../../types/webAppFeatures";
import FiguresBar from "../../components/figures-bar.tsx";

const WebDev: FC = () => {
    return (
        <div className="flex flex-col w-full">
            <div className='w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px]'>
                <p className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-[700] mx-auto w-full text-center font-[Montserrat] text-[#000000] mt-[76px]">
                    Web app development
                </p>
                <p className="text-[18px] font-[400] max-w-[775px] mx-auto text-center font-[Montserrat] mb-[63px] mt-4 sm:mt-2 md:mt-0">
                    Leverage our experienced our experienced team for efficient and high-quality web app development. We deliver scalable solutions within your budget, from concept to launch, to help your business grow.
                </p>
            </div>
            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className="bg-center flex flex-col  bg-no-repeat bg-cover mb-[50px] px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] gap-y-[116px] pt-[36px] sm:pt-[42px] md:pt-[48px] lg:pt-[55px] xl:pt-[66px]">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-1/2 pr-[20px] lg:pr-0">
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
                    <div className="w-full lg:w-1/2 flex flex-col gap-y-[18px] mt-12 lg:mt-0">
                        {WEB_FEATURES?.map((feature: WebFeatureProps, index: number) => (
                            <div key={index} className={`flex flex-row items-center gap-x-[39px] px-[27px] py-[31px] ${index === 0 ? 'bg-[#006fff]' : 'bg-white'} rounded-[20px]`}>
                                <img src={feature?.icon} className={`${index === 0 ? 'w-[39px]' : 'w-[55px]'} ${index === 0 ? 'h-[39px]' : 'h-[55px]'}`} />
                                <p className={`text-[22px] font-[500] font-[Montserrat] ${index === 0 ? 'text-white' : 'text-black'}`}>
                                    {feature?.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <FiguresBar />
            </div>

            <div className="w-full mt-[107px] px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px]">
                <p className="text-[38px] font-[700] font-[Montserrat] max-w-[835px] mx-auto text-center">
                    Managing The Full Software Development Lifecycle
                </p>
                <p className="text-[18px] font-[400] font-[Montserrat] text-center mt-[17px]">
                    Jataq Technologies provides end-to-end web app development.
                </p>
                {/* <div className="grid grid-cols-3 mt-[60px]">
                    <div className="border-[#d2d2d2] pr-[24px] pb-[29px] border-b-[1px] border-r-[1px]">
                        <p className="text-[38px] font-[700] text-[#006fff]">
                            01
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                    <div className="border-[#d2d2d2] px-[24px] pb-[29px] border-b-[1px] border-r-[1px]">
                        <p className="text-[38px] font-[700] text-[#d2d2d2]">
                            02
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                    <div className="border-[#d2d2d2] px-[24px] pb-[29px] border-b-[1px]">
                        <p className="text-[38px] font-[700] text-[#d2d2d2]">
                            03
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                    <div className="border-[#d2d2d2] px-[24px] py-[32px] border-r-[1px]">
                        <p className="text-[38px] font-[700] text-[#d2d2d2]">
                            04
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                    <div className="border-[#d2d2d2] px-[24px] py-[32px] border-r-[1px]">
                        <p className="text-[38px] font-[700] text-[#d2d2d2]">
                            05
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                    <div className="border-[#d2d2d2] px-[24px] py-[32px]">
                        <p className="text-[38px] font-[700] text-[#d2d2d2]">
                            06
                        </p>
                        <p className="text-[24px] font-[700] text-[#252525] mt-[7px]">
                            Design
                        </p>
                        <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            Our dedicated design team starts with creating a beautiful UI/UX design, laying a solid foundation for your web app's development.
                        </p>
                    </div>
                </div> */}
            </div>

            <div style={{ backgroundImage: 'url(/assets/images/Rectangle80.png)' }} className="flex flex-col items-center w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] pt-[121px] bg-no-repeat bg-cover">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <p className="text-[38px] font-[700] max-w-[509px] mb-[30px]">
                            Benefits Of Building Your Web App With Us
                        </p>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[40px] w-[40px]" />
                            <p className="text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Deployemnt
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[40px] w-[40px]" />
                            <p className="text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Scalable and reliable sulutions
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[40px] w-[40px]" />
                            <p className="text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Flexible and cost-effective development
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[40px] w-[40px]" />
                            <p className="text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Money back guarantee
                            </p>
                        </div>

                    </div>
                    <img src="/assets/images/benefits.svg" className="w-full lg:w-1/2 max-h-[358px] max-w-[552px]" />
                </div>
                <p className="text-[38px] font-[700] text-[#030303] font-[Montserrat] max-w-[755px] text-center mt-[140px]">
                    Want The Most Cost-Effective Web App Development?
                </p>
                <p className="text-[18px] font-[400] text-black font-[Montserrat] max-w-[767px] text-center mt-[18px]">
                    You're in the right place! Fill out the form and we will reach out to discuss how we can best help your business grow.
                </p>
            </div>


            <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-[582px] p-[34px] shadow-2xl shadow-[#e0e0e0] bg-white border-[1px] border-[#e3e3e3] rounded-[20px] mt-[60px]">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[16px]">
                        <div className="mb-[17px]">
                            <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                                First Name*
                            </p>
                            <input placeholder="First Name" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px]  h-[53px]" />
                        </div>
                        <div className="mb-[17px]">
                            <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                                Last Name*
                            </p>
                            <input placeholder="Last Name" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                        </div>
                        <div className="mb-[17px]">
                            <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                                Email Address*
                            </p>
                            <input placeholder="Email Address" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                        </div>
                        <div className="mb-[17px]">
                            <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                                Phone Number*
                            </p>
                            <input placeholder="Phone Number" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                        </div>
                    </div>
                    <div className="mb-[17px]">
                        <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                            Phone Number*
                        </p>
                        <textarea placeholder="How we can help you?" className="w-full border-[1px] text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] py-[18px] px-[26px] outline-none h-[95px]" />
                    </div>
                    <button className="rounded-[20px] bg-[#006fff] w-full h-[53px] text-[18px] outline-none font-[400] text-white">
                        Submit
                    </button>
                    <p className="font-[300] text-[14px] text-black font-[Montserrat] mt-[12px]">
                        We use your details only to contact you about our products and services. You can unsubscribe anytime.
                    </p>
                    <p className="font-[300] text-[14px] text-black font-[Montserrat] mt-[12px]">
                        Learn more about how we respect your privacy in our Privacy policy.
                    </p>


                </div>
            </div>
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default WebDev;