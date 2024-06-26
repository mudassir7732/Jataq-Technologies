import { FC } from "react";
import { WORK_OPTIONS } from "../../constants/workOptions";
import { WorkProps } from "../../types/workOptions";
import styles from "./styles";

const WorkMethod: FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>
                We work for better growing result step by step
            </p>
            <p className={styles.text}>
                Crafting compelling digital experiences that captivate audiences and drive meaningful connections
            </p>
            <div className={styles.content_wrapper}>
                <div className={styles.count_wrapper}>
                    <p className={styles.count}>
                        01
                    </p>
                    <p className={styles.count}>
                        02
                    </p>
                    <p className={styles.count}>
                        03
                    </p>
                </div>
                <div className={styles.borders_wrapper}>
                    <div className={styles.border} />
                    <div className={styles.border} />
                    <div className={styles.border} />
                </div>
                <div className={styles.arrows_wrapper}>
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                </div>

                <div className={styles.paragraphs_wrapper}>
                    {WORK_OPTIONS?.map((item: WorkProps, index: number) => (
                        <div key={index} className="flex flex-col">
                            <p className={styles.paragraph_title}>
                                {item?.title}
                            </p>
                            <p className={styles.paragraph}>
                                {item?.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default WorkMethod;