
const Testimonials = () => {
    return (
        <div className="h-[640px] w-full"
            style={{ backgroundImage: 'url(/assets/images/Rectangle59.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src='/assets/icons/Vector1.svg' alt="border_line" className=" w-full h-[92px]" />
            <img src='/assets/icons/Ellipse8.svg' alt="border_line" className=" w-full h-full absolute " />

            <div className="flex flex-row border-2 w-full border-white h-full pl-[70px] pt-[150px] pr-[80px]">
                <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                <p className="flex items-center justify-centertext-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                    Testimonials
                </p>
                <p className="text-[38px] font-[700] text-white font-[Montserrat] mt-[57px] max-w-[425px]">
                    What They're Talking About Company
                </p>
                 <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 xl:w-[257px] bg-[#1b7eff] rounded-[10px] mt-[48px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                    Services We Provide
                    <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                </button>
            </div>

        </div>
    )
}
export default Testimonials;