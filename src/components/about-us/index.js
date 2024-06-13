

const AboutUs = () => {
    return (
        // <div className="flex flex-col md:flexrow">
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center px-[30px] sm:px-[100px] md:px-[130px] pb-[101px] gap-x-[135px]">
            {/* <div className="w-fit">
                <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                <button className="text-white border-[1px] text-[14px] font-[300] font-[Montserrat] border-white absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-black">
                    About Us
                </button>
            </div> */}

            <div className=" flex flex-col pt-[148px] w-fit xl:w-[45%] border-2">
                <img src="/assets/images/Rectangle 65.png" alt="image" className="w-[300px] sm:w-[400px] md:w-[558px] md:h-[400px] xl:w-[519px] xl:h-[372px]" />
                <img src="/assets/images/Rectangle 66.png" alt="image" className="w-[160px] sm:w-[200px] h-fit md:w-[305px] md:h-[332px] absolute ml-[165px] sm:ml-[224px] md:ml-[285px] lg:ml-[294px] mt-[156px] sm:mt-[200px] md:mt-[238px] xl:mt-[211px] mr-44" />

                <div className="bg-[#006fff] rounded-[17px] w-[160px] sm:w-[220px] md:w-[283px] md:h-[150px] mt-[10px] py-[15px] md:py-[23px] px-[15px] sm:px-[18px] md:px-[30px]">
                    <img src="/assets/icons/completed.svg" alt="image" className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[46px] md:h-[46px]" />
                    <p className="text-[15px] sm:text-[18px] md:text-[24px] font-[700] font-[Montserrat] text-white mt-[6px]">
                        100+ Projects
                    </p>
                    <p className="text-[12px] sm:text-[14px] md:text-[18px] font-[400] font-[Montserrat] text-white">
                        We Have Completed
                    </p>
                </div>
            </div>

            <div className="flex flex-col pt-[78px] w-full lg:w-[45%] pl-8">

                <p className="text-[38px] font-[700] text-black font-[Montserrat] leading-10 pt-[60px]">
                    Connecting your business with the world
                </p>
                <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[22px]">
                    Lorem ipsum dummy is simply dummy text of the printing and estting  industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when
                </p>

                <div className="flex flex-col w-[500px]">
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[50px] w-[59px]" />
                        <p className="text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[50px] w-[59px]" />
                        <p className="text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[50px] w-[59px]" />
                        <p className="text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                    <div className="flex flex-row items-center mt-[13px] gap-x-[10px]">
                        <img src="/assets/icons/trophy.svg" alt="icon" className="h-[50px] w-[59px]" />
                        <p className="text-[18px] font-[400] font-[Montserrat]">
                            There are many variations of passages of Lorem Ipsum
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-x-[23px] h-[53px] mt-[40px]">
                    <button className="bg-[#006fff] outline-none text-white rounded-[10px] w-[268px] h-[53px] text-[18px] font-[500]">
                        Learn More About Us
                    </button>
                    <p className="cursor-pointer underline text-[18px] font-[400] font-[Montserrat]">
                        Contact Us
                    </p>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
export default AboutUs;