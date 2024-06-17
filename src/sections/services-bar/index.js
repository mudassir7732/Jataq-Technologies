import { SERVICES_BAR } from '../../constants/servicesBarOptions';

const ServicesBar = () => {
    return (
        <div className="lg:h-[109px] bg-[#006fff] flex gap-y-2 py-2 gap-x-6 flex-row flex-wrap items-center justify-evenly">
            {SERVICES_BAR?.map((item, index) => (
                <>
                    <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[20px] md:h-[30px] lg:h-[40px] w-[20px] md:w-[30px] lg:w-[40px]" />
                    <p className="text-white font-[Montserrat] text-[16px] md:text-[17px] xl:text-[18px] font-[400]">
                        {item}
                    </p>
                </>
            ))}
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className="h-[20px] md:h-[30px] lg:h-[40px] w-[20px] md:w-[30px] lg:w-[40px]" />
        </div >
    )
}
export default ServicesBar;