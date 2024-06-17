import { useState } from "react";
import { ServiceOptions } from "../../constants/serviceOptions";

const Services = () => {
    const [selected, setSelected] = useState('');

    return (
        <div className="background-container flex flex-col lg:flex-row items-start justify-evenly lg:justify-between xl:justify-evenly py-[30px] sm:py-[70px] md:py-[95px] px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] bg-[#0a0b0f] xl:px-[115px] w-full"
            style={{ backgroundImage: 'url(/assets/logo/bg-logo3.png)', backgroundSize: '70% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="flex flex-col w-full lg:w-[45%] max-w-[440px]">
                <div className="w-fit">
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <p className="flex items-center justify-center text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                        Our Services
                    </p>
                </div>
                <p className="text-white text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] font-[Montserrat] mt-[60px]">
                    Services That JATAQ Provides
                </p>

                <p className="w-full justify-center flex-wrap text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white mt-[26px] font-[400] font-[Montserrat]">
                    Step forward to become one of
                    <span className="pl-[6px] pr-[4px] text-[#ffe000] font-[400] font-[Montserrat]  text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]">
                        49,494 successful
                    </span>
                    clients of Jataq and get in the front line for the most wonderful presentation.
                </p>

                <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 xl:w-[257px] bg-[#1b7eff] rounded-[10px] mt-[48px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                    Services We Provide
                    <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                </button>
            </div>

            <div className="flex flex-col items-center max-w-full gap-x-12 lg:w-[47%] cursor-pointer mt-6 sm:mt-10 md:mt-16 lg:mt-0">
                <div className="w-fit">
                    {ServiceOptions?.map((service, index) => (
                        <div className="flex flex-row items-center mt-[34px]" onClick={() => setSelected(service?.route)}>
                            <div className={`flex items-center justify-center min-h-[65px] md:min-h-[88px] min-w-[65px] md:min-w-[88px] ${selected === service?.route ? 'bg-[#006fff]' : 'bg-[#272727]'} rounded-[10px]`}>
                                <img src={service?.icon} alt='' className="h-[40px] md:h-[55px] w-[40px] md:w-[55px]" />
                            </div>
                            <div className="flex flex-row items-center mx-[20px] md:mx-[41px] justify-between h-[88px] min-w-[70%] sm:min-w-[85%] md:max-w-[200px] lg:w-[328px] border-b-[1px] border-[#4e4e4e] pb-[15px] ">
                                <p className="text-white text-[16px] md:text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                                    {service?.label}
                                </p>
                                <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                            </div>
                        </div>
                    ))}
                    {/* 
                    <div className="flex flex-row items-center mt-[34px]" onClick={() => setSelected('digital-marketing')}>
                        <div className={`flex items-center justify-center min-h-[65px] md:min-h-[88px] min-w-[65px] md:min-w-[88px] ${selected === 'digital-marketing' ? 'bg-[#006fff]' : 'bg-[#272727]'} rounded-[10px]`}>
                            <img src="/assets/icons/first.svg" alt='' className="h-[40px] md:h-[55px] w-[40px] md:w-[55px]" />
                        </div>
                        <div className="flex flex-row items-center mx-[20px] md:mx-[41px] justify-between h-[88px] min-w-[70%] sm:min-w-[85%] md:max-w-[200px] lg:w-[328px] border-b-[1px] border-[#4e4e4e] md:pb-[15px] ">
                            <p className="text-white text-[16px] md:text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                                Digital Marketing
                            </p>
                            <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-[34px]" onClick={() => setSelected('app-development')}>
                        <div className={`flex items-center justify-center min-h-[65px] md:min-h-[88px] min-w-[65px] md:min-w-[88px] ${selected === 'app-development' ? 'bg-[#006fff]' : 'bg-[#272727]'} rounded-[10px]`}>
                            <img src="/assets/icons/mobile.svg" alt='' className="h-[40px] md:h-[55px] w-[40px] md:w-[55px]" />
                        </div>
                        <div className="flex flex-row items-center mx-[20px] md:mx-[41px] justify-between h-[88px] min-w-[70%] sm:min-w-[85%] md:max-w-[200px] lg:w-[328px] border-b-[1px] border-[#4e4e4e] md:pb-[15px] ">
                            <p className="text-white text-[16px] md:text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                                App Development
                            </p>
                            <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-[34px]" onClick={() => setSelected('graphic-design')}>
                        <div className={`flex items-center justify-center min-h-[65px] md:min-h-[88px] min-w-[65px] md:min-w-[88px] ${selected === 'graphic-design' ? 'bg-[#006fff]' : 'bg-[#272727]'} rounded-[10px]`}>
                            <img src="/assets/icons/first2.svg" alt='' className="h-[40px] md:h-[55px] w-[40px] md:w-[55px]" />
                        </div>
                        <div className="flex flex-row items-center mx-[20px] md:mx-[41px] justify-between h-[88px] min-w-[70%] sm:min-w-[85%] md:max-w-[200px] lg:w-[328px] border-b-[1px] border-[#4e4e4e] md:pb-[15px] ">
                            <p className="text-white text-[16px] md:text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                                Graphic Design
                            </p>
                            <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
export default Services;