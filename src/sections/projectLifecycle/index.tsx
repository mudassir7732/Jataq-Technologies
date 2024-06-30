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
                    <div className={`${styles.phase} ${index === 0 && styles.first_phase} ${index === 1 && styles.second_phase} ${index === 2 && styles.third_phase} ${index === 3 && styles.fourth_phase} ${index === 4 && styles.fifth_phase} ${index === 5 && styles.sixth_phase} `}>
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