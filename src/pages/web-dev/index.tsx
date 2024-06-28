import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { WEB_FEATURES } from "../../constants/webFeatures";
import { FeatureProps } from "../../types/webAppFeatures";
import FiguresBar from "../../components/figures-bar.tsx";
import TopSection from "../../sections/top-section";
import { data } from "../../constants/web-development/topSection";
import { benefits } from '../../constants/web-development/benefits';
import Benefits from "../../sections/benefits";
import LifecyclePhases from "../../sections/lifecyclePhases";
import { Phases } from "../../constants/web-development/lifecycle-phases";

const WebDev: FC = () => {
    return (
        <div className="flex flex-col w-full">
            <TopSection title={data.title} desc={data.desc} />

            <Benefits title={benefits.title} desc={benefits.desc} features={benefits.features} />

            <LifecyclePhases title="Managing The Full Software Development Lifecycle" desc="Jataq Technologies provides end-to-end web app development." 
            lifecyclePhases={Phases}/>

            <div style={{ backgroundImage: 'url(/assets/images/Rectangle80.png)' }} className="flex flex-col items-center w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] pt-[121px] bg-no-repeat bg-cover">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <p className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[38px] font-[700] max-w-[509px] mb-[30px]">
                            Benefits Of Building Your Web App With Us
                        </p>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[32px] lg:h-[40px] w-[32px] lg:w-[40px]" />
                            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Deployemnt
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[32px] lg:h-[40px] w-[32px] lg:w-[40px]" />
                            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Scalable and reliable sulutions
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[32px] lg:h-[40px] w-[32px] lg:w-[40px]" />
                            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Flexible and cost-effective development
                            </p>
                        </div>
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[32px] lg:h-[40px] w-[32px] lg:w-[40px]" />
                            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                Money back guarantee
                            </p>
                        </div>

                    </div>
                    <img src="/assets/images/benefits.svg" className="w-full lg:w-1/2 max-h-[358px] max-w-[552px]" />
                </div>
                <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] text-[#030303] font-[Montserrat] max-w-[755px] text-center mt-[140px]">
                    Want The Most Cost-Effective Web App Development?
                </p>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] text-black font-[Montserrat] max-w-[767px] text-center mt-[18px]">
                    You're in the right place! Fill out the form and we will reach out to discuss how we can best help your business grow.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <div className="max-w-[582px] w-[90%] p-[34px] shadow-2xl shadow-[#e0e0e0] bg-white border-[1px] border-[#e3e3e3] rounded-[20px] mt-[60px]">
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
                    <button className="rounded-[20px] bg-[#006fff] w-full h-[53px] text-[16px] sm:text-[17px] lg:text-[18px] outline-none font-[400] text-white">
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