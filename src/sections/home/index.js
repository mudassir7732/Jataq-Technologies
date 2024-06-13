const Home = () => {
    return (
        <div className="flex flex-col pt-[80px] max-h-[400px] sm:max-h-[460px] md:max-h-fit sm:pt-[95px] md:pt-[105px] lg:pt-[120px] xl:pt-[135px]">
            <div className="flex flex-row items-start justify-end">
                <div className="min-w-fit ml-[12px] sm:ml-[5%] md:ml-[10%] lg:ml-[14%] xl:ml-[16%] mr-2 sm:mr-3 md:mr-4 lg:mr-6">
                    <p className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[62px] xl:text-[70px] font-[700] font-[Montserrat] text-right">
                        Transforming Your
                    </p>
                    <p className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[62px] xl:text-[70px] font-[700] font-[Montserrat] text-right pr-6">
                        Ideas Into Reality
                    </p>
                </div>
                <div className="min-w-[70px] w-[25%] lg:w-[30%] bg-[#fdcc1d] h-[45px] sm:h-[60px] md:h-[80px] lg:h-[95px] xl:h-[104px] flex flex-row items-center pl-[12px] sm:pl-[16px] md:pl-[24px] lg:pl-[28px] rounded-tl-full rounded-bl-full overflow-hidden">
                    <p className="text-[21px] sm:text-[26px] md:text-[38px] lg:text-[45px] xl:text-[50px] font-[700] font-[Montserrat]">
                        Idea
                    </p>
                </div>
            </div>
            <p className="w-full flex justify-center flex-wrap text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-center text-[#252525] mt-3 px-[15%] sm:px-[17%] md:px-[20%] lg:px-[22%] xl:px-[25%] font-[300] font-[Montserrat]">
                Step forward to become one of
                <span className="pl-[6px] pr-[4px] text-[#006fff] font-[700] font-[Montserrat] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px]">
                    100+ successful
                </span>
                clients of Jataq and get in the front line for the most wonderful presentation.
            </p>

            <div className="flex flex-row items-center gap-x-[12px] sm:gap-x-[16px] md:gap-x-[22px] lg:gap-x-[25px] xl:gap-x-[28px] mt-[25px]">
                <div className="flex flex-row items-center w-[50%] text-right bg-[#006fff] h-[45px] sm:h-[60px] md:h-[80px] lg:h-[95px] xl:h-[104px] rounded-tr-full rounded-br-full justify-end pr-[10px] sm:pr-[12px] md:pr-[15px] lg:pr-[19px] xl:pr-[22px]">
                    <button className="flex flex-row items-center justify-center gap-x-] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 lg:px-3 xl:w-[257px] bg-[#1b7eff] rounded-full text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                        Schedule a Meeting
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                    </button>
                </div>
                <button className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-[300] text-[#252525] font-[Montserrat] cursor-pointer underline">
                    Contact Expert
                </button>
            </div>
            <img src="/assets/icons/border.svg" alt="border" className="w-full mt-[135px]" />
        </div>
    )
}
export default Home;