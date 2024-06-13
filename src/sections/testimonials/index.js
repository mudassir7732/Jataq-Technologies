
const Testimonials = () => {
    return (
        <div className="h-[850px] lg:h-[640px] w-full"
            style={{ backgroundImage: 'url(/assets/images/Rectangle59.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src='/assets/icons/Vector1.svg' alt="border_line" className=" w-full mt-[45px] lg:mt-[7px] h-[92px]" />
            <img src='/assets/icons/Ellipse8.svg' alt="border_line" className="mt-24 lg:mt-0 w-full h-full absolute " />

            <div className="flex flex-col lg:flex-row w-full justify-evenly lg:justify-between border-white h-full pl-[70px] xl:pt-[150px] pr-[80px]">
                <div className="flex flex-col min-w-[45%] -mt-24 lg:mt-0">
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <p className="flex items-center justify-center text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                        Testimonials
                    </p>
                    <p className="text-[38px] font-[700] text-white font-[Montserrat] mt-[57px] max-w-[425px]">
                        What They're Talking About Company
                    </p>
                    <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 xl:w-[257px] bg-[#1b7eff] rounded-[10px] mt-[18px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                        Services We Provide
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                    </button>
                </div>

                <div className="flex flex-col -mt-16 lg:mt-0 min-w-[45%]">
                    <img src='/assets/icons/quotation.svg' alt='button_background' className="absolute -mt-[58px] ml-3 z-0" />
                    <div className="w-full border-2 bg-white rounded-t-[10px] max-w-[600px] pt-[80px] pl-[35px] pr-[45px]">
                        <p className="text-[16px] font-[400] font-[Montserrat]">
                            I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.
                        </p>
                        <p className="text-[16px] font-[600] font-[Montserrat] italic mt-[14px] mb-[32px]">
                            Client Name
                        </p>
                    </div>
                    <img src='/assets/icons/Rectangle63.svg' alt='button_background' className="z-0 max-w-[600px]" />

                </div>
            </div>
        </div>
    )
}
export default Testimonials;