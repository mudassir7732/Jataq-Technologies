
const Bottom = () => {
    return (
        <div className="min-h-[482px] flex flex-col items-center px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] py-[100px]"
            style={{ backgroundImage: 'url(/assets/images/Rectangle64.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] font-[Montserrat] max-w-[824px] text-center">
                We're Leading Digital Agency For Increasing Sales or Boosting Traffic
            </p>
            <p className="text-[18px] font-[400] font-[Montserrat] text-black mt-[18px] max-w-[705px] text-center">
                Scribentur varet per cu dicat copiosae reprimique teim laborey fabulas scriptorem ullamco laboris nisi ut aliquip duis aute irure dolor in reprehenderit
            </p>
            <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 xl:w-[257px] bg-[#1b7eff] rounded-[10px] mt-[32px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                Services We Provide
                <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
            </button>
        </div>
    )
}
export default Bottom;