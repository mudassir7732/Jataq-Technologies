import { FC } from "react";
import FiguresBar from "../../components/figures-bar.tsx";
import { FeatureProps } from "../../types/features.js";
import { BenefitsProps } from "../../types/benefitsProps.js";
import styles from "./styles.js";

const Benefits: FC<BenefitsProps> = (props) => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className={styles.container}>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="w-full lg:w-1/2 pr-[20px] lg:pr-0">
                    <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700]">
                        {props.title}
                    </p>
                    <p className="mt-[19px] text-[16px] sm:text-[17px] lg:text-[18px] font-[400] text-black max-w-[88%]">
                        {props.desc}
                    </p>
                    <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[40px] sm:h-[45px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-4 lg:px-3 xl:w-[257px] bg-[#1b7eff] rounded-[10px] sm:rounded-[12px] md:rounded-[15px] lg:rounded-[20px] mt-[34px] text-[13px] md:text-[16px] xl:text-[16px] sm:text-[17px] lg:text-[18px] text-white font-[500] font-[Montserrat]">
                        Schedule a Meeting
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-y-[18px] mt-12 lg:mt-0">
                    {props.features?.map((feature: FeatureProps, index: number) => (
                        <div key={index} className={`flex flex-row items-center gap-x-[20px] md:gap-x-[39px] px-[15px] sm:px-[18px] md:px-[22px] lg:px-[27px] py-[12px] sm:py-[17px] md:py-[24px] lg:py-[31px] ${index === 0 ? 'bg-[#006fff]' : 'bg-white'} rounded-[20px]`}>
                            <img src={feature?.icon} className={`${index === 0 ? 'w-[30px] md:w-[39px]' : 'w-[42px] '} ${index === 0 ? 'h-[30px] md:h-[39px]' : 'h-[42px] md:h-[55px]'}`} />
                            <p className={`text-[22px] font-[500] font-[Montserrat] ${index === 0 ? 'text-white' : 'text-black'}`}>
                                {feature?.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <FiguresBar />
        </div>

    )
}
export default Benefits;