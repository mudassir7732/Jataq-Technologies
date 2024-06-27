import { FC } from "react";
import styles from "./styles";
import Typical from 'react-typical';


const Hero: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.text_wrapper}>
                    <p className={styles.heading}>
                        Transforming Your
                    </p>
                    <p className={`${styles.heading} pr-6`}>
                        Into Reality
                    </p>
                </div>

                <div className={styles.yellow_wrapper}>
                    <div className={styles.idea}>
                        <Typical
                            steps={[
                                "Idea",
                                1000,
                                "Vision",
                                1000,
                                "Product",
                                1000,
                            ]}
                            loop={Infinity}
                        />
                    </div>
                </div>
            </div>
            <p className={styles.paragraph}>
                Step forward to become one of
                <span className={styles.blue_text}>
                    100+ successful
                </span>
                clients of Jataq and get in the front line for the most wonderful presentation.
            </p>

            <div className={styles.last_section}>
                <div className={styles.blue_wrapper}>
                    <button className={styles.button}>
                        Schedule a Meeting
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles.icon} />
                    </button>
                </div>
                <button className={styles.contact}>
                    Contact Expert
                </button>
            </div>
            <img src="/assets/icons/border.svg" alt="border" className="w-full mt-[135px]" />
        </div>
    )
}
export default Hero;