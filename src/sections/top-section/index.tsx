import { FC } from "react";
import { TopSectionProps } from "../../types/topSection";

const TopSection: FC<TopSectionProps> = ({ title, desc }) => {
    return (
        <div className='w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px]'>
            <p className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-[700] mx-auto w-full text-center font-[Montserrat] text-[#000000] mt-[76px]">
                {/* Web app development */}
                {title}
            </p>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] max-w-[775px] mx-auto text-center font-[Montserrat] mb-[63px] mt-4 sm:mt-2 md:mt-0">
                {desc}
                {/* Leverage our experienced our experienced team for efficient and high-quality web app development. We deliver scalable solutions within your budget, from concept to launch, to help your business grow. */}
            </p>
        </div>
    )
}
export default TopSection;