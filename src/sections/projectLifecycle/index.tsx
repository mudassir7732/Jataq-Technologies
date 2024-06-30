import { FC } from "react";
import { LifecycleProps } from "../../types/lifecycle";
import { LifecyclePhasesProps } from "../../types/lifecyclePhases";
import styles from "./styles";

const ProjectLifecycle: FC<LifecycleProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] font-[Montserrat] max-w-[835px] mx-auto text-center">
                {props.title}
            </p>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] max-w-[667px] mx-auto font-[Montserrat] text-center mt-[17px]">
                {props.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[38px] sm:mt-[45px] md:mt-[60px]">
                {props.lifecyclePhases?.map((phase: LifecyclePhasesProps, index: number) => (
                    <div className={`border-[#d2d2d2] pb-[15px] sm:pb-[29px] ${index === 0 && 'sm:border-r-[1px] sm:border-b-[1px] pt-0 sm:pr-[20px] xl:pr-[38px]'} ${index === 1 && 'lg:border-r-[1px] sm:border-b-[1px] pt-0 sm:pl-[20px] lg:px-[20px] xl:px-[38px]'} ${index === 2 && 'sm:border-r-[1px] lg:border-r-0 pt-0 sm:border-b-[1px] sm:pr-[20px] lg:pr-0 lg:pl-[20px] xl:pl-[38px]'} ${index === 3 && 'border-r-0 lg:border-r-[1px] sm:border-b-[1px] lg:border-b-0 sm:pt-[32px] sm:pl-[20px] lg:pl-0 lg:pr-[20px] xl:pr-[38px]'} ${index === 4 && 'sm:border-r-[1px] sm:pt-[32px] sm:pr-[20px] lg:px-[20px] xl:px-[38px]'} ${index === 5 && 'sm:pt-[32px] sm:pl-[20px] lg:pl-[20px] xl:pl-[38px]'} `}>
                        <p className={`text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] ${index === 0 ? 'text-[#006fff]':'text-[#d2d2d2]'}`}>
                            0{index + 1}
                        </p>
                        <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[700] text-[#252525] mt-[7px]">
                            {phase.title}
                        </p>
                        <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] font-[Montserrat] text-black mt-[18px]">
                            {phase.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectLifecycle;