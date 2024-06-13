
const ServicesBar = () => {
    return (
        <div className="lg:h-[109px] bg-[#006fff] flex gap-y-2 py-2 gap-x-6 flex-row flex-wrap items-center justify-evenly">
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[40px] w-[40px]" />
            <p className="text-white font-[Montserrat] text-[18px] font-[400]">
                Web Development/Web Design
            </p>
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[40px] w-[40px]" />
            <p className="text-white font-[Montserrat] text-[18px] font-[400]">
                Digital Marketing
            </p>
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[40px] w-[40px]" />
            <p className="text-white font-[Montserrat] text-[18px] font-[400]">
                App Development
            </p>
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[40px] w-[40px]" />
            <p className="text-white font-[Montserrat] text-[18px] font-[400]">
                Graphic Design
            </p>
        </div>
    )
}
export default ServicesBar;