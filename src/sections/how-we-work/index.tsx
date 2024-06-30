import { FC } from "react";
import { DescProps } from "../../types/pageDesc";
import styles from "./styles";
import { WORK_OPTIONS } from "../../constants/workOptions";
import SectionTitle from "../../components/section-title";

const WorkMethod: FC = () => {
    return (
        <div className={styles.container}>
            <SectionTitle title="We work for better growing result step by step" desc="Crafting compelling digital experiences that captivate audiences and drive meaningful connections" />
            <div className={styles.content_wrapper}>
                <div className={styles.count_wrapper}>
                    <p className={`${styles.count} text-[#006fff] border-[#006fff]`}>
                        01
                    </p>
                    <p className={`${styles.count} text-[#d2d2d2] border-[#d7d7d7]`}>
                        02
                    </p>
                    <p className={`${styles.count} text-[#d2d2d2] border-[#d7d7d7]`}>
                        03
                    </p>
                </div>
                <div className={styles.borders_wrapper}>
                    <div className={`${styles.border} border-[#006fff]`} />
                    <div className={`${styles.border} border-[#d7d7d7]`} />
                    <div className={`${styles.border} border-[#d7d7d7]`} />
                </div>
                <div className={styles.arrows_wrapper}>
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                    <img src="/assets/icons/arrow-head.svg" alt="arrow_head" className={styles.arrow_icon} />
                </div>

                <div className={styles.paragraphs_wrapper}>
                    {WORK_OPTIONS?.map((item: DescProps, index: number) => (
                        <div key={index} className="flex flex-col">
                            <p className={styles.paragraph_title}>
                                {item?.title}
                            </p>
                            <p className={styles.paragraph}>
                                {item?.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default WorkMethod;