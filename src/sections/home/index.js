const Home = () => {
    return (
        <div className="flex flex-col py-[80px] sm:py-[95px] md:py-[105px] lg:py-[120px] xl:py-[135px]">
            <div className="flex flex-row">
                <div className="min-w-fit ml-[12px] sm:ml-[5%] md:ml-[10%] lg:ml-[14%] xl:ml-[16%]">
                    <p className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[62px] xl:text-[70px] font-[700] font-[Montserrat] text-right">
                        Transforming Your
                    </p>
                    <p className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[62px] xl:text-[70px] font-[700] font-[Montserrat] text-right pr-6">
                        Into Reality
                    </p>
                </div>
                <div className="w-full bg-[#fdcc1d] h-[45px] sm:h-[60px] md:h-[80px] lg:h-[95px] xl:h-[104px] flex flex-row ml-[8px] sm:ml-[14px] md:ml-[18px] lg:ml-[25px] items-center pl-[12px] sm:pl-[16px] md:pl-[24px] lg:pl-[28px] rounded-tl-full rounded-bl-full overflow-hidden">
                    <p className="text-[21px] sm:text-[26px] md:text-[38px] lg:text-[45px] xl:text-[50px] font-[700] font-[Montserrat]">
                        Idea
                    </p>
                </div>
            </div>

            <p className="flex flex-row items-center justify-center flex-wrap w-fit text-[18px] text-[#252525] font-[300] font-[Montserrat]">
                Step forward to become one of
                <span className="pl-2 text-[#006fff] font-[700] font-[Montserrat] text-[18px]">
                    100+ successful
                </span>
                clients of Jataq and get in the front line for the most wonderful presentation.
            </p>


            <div>
                <div>
                    <button>
                        Schedule a Meeting
                    </button>
                </div>
                Contact Expert
            </div>
        </div>
    )
}
export default Home;