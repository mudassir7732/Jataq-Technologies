import { FC } from "react";
import { LifecycleProps } from "../../types/lifecycle";
import { LifecyclePhasesProps } from "../../types/lifecyclePhases";
import styles from "./styles";

const ProjectLifecycle: FC<LifecycleProps> = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {props.title}
            </p>
            <p className={styles.desc}>
                {props.desc}
            </p>
            <div className={styles.phases_wrapper}>
                {props.lifecyclePhases?.map((phase: LifecyclePhasesProps, index: number) => (
                    <div className={`${styles.phase} ${index === 0 && 'sm:border-r-[1px] sm:border-b-[1px] pt-0 sm:pr-[20px] xl:pr-[38px]'}
                    ${index === 1 && 'lg:border-r-[1px] sm:border-b-[1px] pt-0 sm:pl-[20px] lg:px-[20px] xl:px-[38px]'}
                    ${index === 2 && 'sm:border-r-[1px] lg:border-r-0 pt-0 sm:border-b-[1px] sm:pr-[20px] lg:pr-0 lg:pl-[20px] xl:pl-[38px]'}
                    ${index === 3 && 'border-r-0 lg:border-r-[1px] sm:border-b-[1px] lg:border-b-0 sm:pt-[32px] sm:pl-[20px] lg:pl-0 lg:pr-[20px] xl:pr-[38px]'}
                    ${index === 4 && 'sm:border-r-[1px] sm:pt-[32px] sm:pr-[20px] lg:px-[20px] xl:px-[38px]'}
                    ${index === 5 && 'sm:pt-[32px] sm:pl-[20px] lg:pl-[20px] xl:pl-[38px]'} `}>
                        <p className={`${styles.index} ${index === 0 ? 'text-[#006fff]' : 'text-[#d2d2d2]'}`}>
                            0{index + 1}
                        </p>
                        <p className={styles.phase_title}>
                            {phase.title}
                        </p>
                        <p className={styles.phase_desc}>
                            {phase.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectLifecycle;