import { FC } from "react";
import FiguresBar from "../../components/figures-bar.tsx";
import { FeatureProps } from "../../types/features.js";
import { BenefitsProps } from "../../types/benefitsProps.js";
import styles from "./styles";

const Benefits: FC<BenefitsProps> = (props) => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.first_section}>
                    <p className={styles.title}>
                        {props.title}
                    </p>
                    <p className={styles.desc}>
                        {props.desc}
                    </p>
                    <button className={styles.button}>
                        Schedule a Meeting
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles.button_icon} />
                    </button>
                </div>
                <div className={styles.second_section}>
                    {props.features?.map((feature: FeatureProps, index: number) => (
                        <div key={index} className={`${styles.feature} ${index === 0 ? 'bg-[#006fff]' : 'bg-white'}`}>
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