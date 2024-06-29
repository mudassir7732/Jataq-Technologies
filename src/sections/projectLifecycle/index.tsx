import { FC } from "react";
import { Phases } from "../../constants/web-development/lifecycle-phases";
import { TopSectionProps } from "../../types/topSection";
import { LifecycleProps } from "../../types/lifecycle";
import { LifecyclePhasesProps } from "../../types/lifecyclePhases";

const ProjectLifecycle: FC<LifecycleProps> = (props) => {
    return (
        <div className="w-full mt-[107px] px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px]">
            <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] font-[Montserrat] max-w-[835px] mx-auto text-center">
                {props.title}
            </p>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] max-w-[667px] mx-auto font-[Montserrat] text-center mt-[17px]">
                {props.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[38px] sm:mt-[45px] md:mt-[60px]">
                {props.lifecyclePhases?.map((phase: LifecyclePhasesProps, index: number) => (
                    <div className="border-[#d2d2d2] sm:pl-[24px] pt-0 sm pb-[15px] sm:pb-[29px] ">
                        <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] text-[#d2d2d2]">
                            0{index+1}
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