import { FC } from "react";
import { DescProps } from "../../types/pageDesc";

const PageTitle: FC<DescProps> = ({ title, desc }) => {
    return (
        // <div className='w-full px-[40px] sm:px-[50px] md:px-[65px] lg:px-[80px] xl:px-[100px] pt-[76px] pb-[63px]'>
        <div>
            <p className="text-[27px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[700] font-[Montserrat] text-black mt-[4px] md:mt-[8px] lg:mt-[11px] text-center w-full">
                {title}
            </p>
            <p className="text-[18px] font-[400] max-w-[567px] mx-auto text-center font-[Montserrat] mb-[63px]">
                {desc}
            </p>
        </div>
    )
}
export default PageTitle;