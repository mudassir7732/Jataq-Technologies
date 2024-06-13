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
                <div className="grid grid-cols-1 w-fit md:w-full md:grid-cols-3 border-r-[1px] pr-4 md:border-b-[1px] border-[#d7d7d7] ">
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
                <div className="grid grid-cols-1 md:grid-cols-3 w-fit md:w-full h-[43px]">
                    <div className="border-l-[1px] border-[#d7d7d7] ml-[20px]">
                    </div>
                    <div className="border-[1px] border-t-[1px] border-l-0 md:border-t-0 md:border-l-[1px] border-[#d7d7d7] ml-[20px] h-20 w-20">
                    </div>
                    <div className="border-l-[1px] border-[#d7d7d7] ml-[20px]">
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-fit md:w-full">
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className="h-[16px] w-[16px] ml-[13px] -mt-[1px]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-[30px] gap-4 w-full mb-[152px]">
                    <div className="flex flex-col">
                        <p className="text-[21px] lg:text-[22px] xl:text-[24px] font-[700] font-[Montserrat] text-[#252525]">
                            Schedule an Initial Consultation
                        </p>
                        <p className="text-[16px] md:text-[17px] xl:text-[18px] text-black mt-[15px] font-[400] font-[Montserrat]">
                            Contact us to discuss your project. We'll cover team structure, objectives, budget, schedule, and the skills you need.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[21px] lg:text-[22px] xl:text-[24px] font-[700] font-[Montserrat] text-[#252525]">
                            Discuss Solution and Team Structure
                        </p>
                        <p className="text-[16px] md:text-[17px] xl:text-[18px] text-black mt-[15px] font-[400] font-[Montserrat]">
                            We'll collaborate with you to finalize project specifications, agree on the engagement model, and select the right team for your project.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[21px] lg:text-[22px] xl:text-[24px] font-[700] font-[Montserrat] text-[#252525]">
                            Get Started and Track Performance
                        </p>
                        <p className="text-[16px] md:text-[17px] xl:text-[18px] text-black mt-[15px] font-[400] font-[Montserrat]">
                            Once milestones are set, we'll begin work, monitoring progress, updating you regularly, and adapting to your needs.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default WorkMethod;