import { WORK_OPTIONS } from "../../constants/workOptions";

const WorkMethod = () => {
    return (
        <div className="flex flex-col items-center px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] pt-20">
            <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
            <p className="flex items-center justify-center text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                How We Work
            </p>

            <p className=" text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] font-[Montserrat] mt-12 max-w-[700px] text-center">
                We work for better growing result step by step
            </p>
            <p className="text-[18px] font-[400] text-black font-[Montserrat]  w-full lg:max-w-[670px] text-center mt-[19px]">
                Crafting compelling digital experiences that captivate audiences and drive meaningful connections
            </p>

            <div className="flex flex-row md:flex-col">
                <div className="hidden md:grid grid-cols-1 w-fit md:w-full md:grid-cols-3 pr-4 md:border-b-[1px] border-[#d7d7d7] ">
                    <p className="text-[38px] font-[700] text-[#d2d2d2]">
                        01
                    </p>
                    <p className="text-[38px] font-[700] text-[#d2d2d2]">
                        02
                    </p>
                    <p className="text-[38px] font-[700] text-[#d2d2d2]">
                        03
                    </p>
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 w-fit md:w-full h-[43px]">
                    <div className="border-l-[1px] border-[#d7d7d7] ml-[20px]" />
                    <div className="border-l-[1px] border-[#d7d7d7] ml-[20px]" />
                    <div className="border-l-[1px] border-[#d7d7d7] ml-[20px]" />
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 w-fit md:w-full">
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-[15px] lg:mt-[30px] gap-4 w-full mb-[52px] lg:mb-[152px]">
                    {WORK_OPTIONS?.map((item, index) => (
                        <div className="flex flex-col">
                            <p className="text-[21px] lg:text-[22px] xl:text-[24px] font-[700] font-[Montserrat] text-[#252525]">
                                {item?.title}
                            </p>
                            <p className="text-[16px] md:text-[17px] xl:text-[18px] text-black mt-[15px] font-[400] font-[Montserrat]">
                                {item?.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default WorkMethod;