

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between xl:justify-evenly sm:py-[70px] md:py-[95px] px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] w-full">
            <div className="w-fit block lg:hidden mt-20">
                <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                <p className="flex items-center justify-center text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                    About Us
                </p>
            </div>
            <div className="flex flex-col mx-auto items-start  w-fit xl:max-w-[47%] pt-[85px]">
                <div className="flex flex-col items-center absolute">
                    <img src="/assets/images/Rectangle 65.png" alt="image" className="z-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[480px]" />
                    <img src="/assets/logo/logo-light.svg" alt="image" className=" mt-[19px] absolute z-10 w-[35px] sm:w-[38px] md:w-[45px] lg:w-[53px] xl:w-[60px]" />
                </div>

                <div className="flex flex-row items-end w-full z-50 mt-[158px] sm:mt-[116px] md:mt-[205px] lg:mt-[225px] xl:mt-[197px]">
                    <div className="flex flex-col justify-center bg-[#006fff] rounded-[17px] h-[110px] md:h-[160px] max-w-[250px] mb-[5px] lg:mb-[9px] mt-[10px] px-[15px] sm:px-[18px] md:px-[20px]">
                        <img src="/assets/icons/completed.svg" alt="image" className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[46px] md:h-[46px]" />
                        <p className="text-[15px] sm:text-[18px] md:text-[24px] w-full font-[700] font-[Montserrat] text-white mt-[6px]">
                            100+ Projects
                        </p>
                        <p className="text-[12px] sm:text-[14px] md:text-[18px] font-[400] font-[Montserrat] text-white">
                            We Have Completed
                        </p>
                    </div>
                    <img src="/assets/images/Rectangle 66.png" alt="image" className="w-[150px] sm:w-[230px] md:w-[220px] xl:w-[300px]" />
                </div>
            </div>
            <div className="flex flex-col w-full lg:w-[47%] pt-8">
                <div className="w-fit hidden lg:block">
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <button className="text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                        About Us
                    </button>
                </div>

                <p className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] text-black font-[Montserrat] pt-[20px] md:pt-[30px] lg:pt-[60px]">
                    Connecting your business with the world
                </p>
                <p className="text-[17px] xl:text-[18px] font-[400] font-[Montserrat] text-black mt-[15px]">
                    Lorem ipsum dummy is simply dummy text of the printing and estting  industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when
                </p>

                <div className="flex flex-col lg:w-[500px]">
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[25px] w-[30px] sm:h-[33px] sm:w-[40px] xl:h-[50px] xl:w-[59px]" />
                        <p className="text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[25px] w-[30px] sm:h-[33px] sm:w-[40px] xl:h-[50px] xl:w-[59px]" />
                        <p className="text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[25px] w-[30px] sm:h-[33px] sm:w-[40px] xl:h-[50px] xl:w-[59px]" />
                        <p className="text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[25px] w-[30px] sm:h-[33px] sm:w-[40px] xl:h-[50px] xl:w-[59px]" />
                        <p className="text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-[15px] sm:gap-x-[19px] lg:gap-x-[23px] h-[53px] mt-[20px] sm:mt-[30px] lg:mt-[40px]">
                    <button className="bg-[#006fff] outline-none text-white rounded-[10px] w-[190px] sm:w-[220px] lg:w-[268px] h-[40px] sm:h-[45px] lg:h-[53px] text-[17px] lg:text-[18px] font-[400] lg:font-[500]">
                        Learn More About Us
                    </button>
                    <p className="cursor-pointer underline text-[16px] md:text-[17px] xl:text-[18px] font-[400] font-[Montserrat]">
                        Contact Us
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;