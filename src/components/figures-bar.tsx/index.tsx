
const FiguresBar = () => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/figures_bg.png)' }} className="px-[40px] sm:px-[70px] md:px-[80px] lg:px-[95px] xl:px-[113px] bg-no-repeat bg-cover bg-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit gap-x-[106px] gap-y-[40px] py-[46px] min-h-[156px] rounded-[10px]">
            <div className="flex flex-col min-w-[185px]">
                <p className="text-[26px] sm:text-[31px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-[700] font-[Montserrat] text-black">
                    10+
                </p>
                <p className="text-[15px] font-[400] text-black font-[Montserrat]">
                    Years of Experiences
                </p>
            </div>

            <div className="flex flex-col min-w-[185px]">
                <p className="text-[26px] sm:text-[31px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-[700] font-[Montserrat] text-black">
                    108+
                </p>
                <p className="text-[15px] font-[400] text-black font-[Montserrat]">
                    Satisfied Customers
                </p>
            </div>
            <div className="flex flex-col min-w-[185px]">
                <p className="text-[26px] sm:text-[31px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-[700] font-[Montserrat] text-black">
                    306
                </p>
                <p className="text-[15px] font-[400] text-black font-[Montserrat]">
                    Projects Completed
                </p>
            </div>
            <div className="flex flex-col min-w-[185px]">
                <div className="flex flex-row items-center">
                    <img src="/assets/icons/full-star.svg" className="h-[33px] lg:h-[37px] w-[33px] lg:w-[37px]" />
                    <img src="/assets/icons/full-star.svg" className="h-[33px] lg:h-[37px] w-[33px] lg:w-[37px]" />
                    <img src="/assets/icons/full-star.svg" className="h-[33px] lg:h-[37px] w-[33px] lg:w-[37px]" />
                    <img src="/assets/icons/full-star.svg" className="h-[33px] lg:h-[37px] w-[33px] lg:w-[37px]" />
                    <img src="/assets/icons/half-star.svg" className="h-[33px] lg:h-[37px] w-[33px] lg:w-[37px]" />
                </div>
                <p className="mt-[10px] text-[15px] font-[400] text-black font-[Montserrat]">
                    4.8 Rating Overall
                </p>
            </div>
        </div>
    )
}
export default FiguresBar;