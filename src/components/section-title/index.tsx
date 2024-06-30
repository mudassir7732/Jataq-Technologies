import { FC } from "react";
import { DescProps } from "../../types/pageDesc";

const SectionTitle: FC<DescProps> = ({ title, desc }) => {
    return (
        <>
            <p className="text-[27px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[700] font-[Montserrat] text-black mt-[4px] md:mt-[8px] lg:mt-[11px] text-center w-full">
                {title}
            </p>
            <p className="text-[18px] font-[400] max-w-[567px] mx-auto text-center font-[Montserrat] mb-[63px]">
                {desc}
            </p>
        </>
    )
}
export default SectionTitle;