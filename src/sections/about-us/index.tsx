import { FC } from "react";
import styles from "./styles";
import { AboutTabs } from "../../constants/aboutTabs";

const AboutUs: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section_title_wrapper}>
                <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                <p className={styles.section_title}>
                    About Us
                </p>
            </div>
            <div className={styles.first_section}>
                <div className={styles.image_wrapper}>
                    <img src="/assets/images/Rectangle 65.png" alt="image" className={styles.first_image} />
                    <img src="/assets/logo/logo-light.svg" alt="image" className={styles.second_image} />
                </div>
                <div className={styles.text_section}>
                    <div className={styles.text_wrapper}>
                        <img src="/assets/icons/completed.svg" alt="image" className={styles.complete_icon} />
                        <p className={styles.first_text}>
                            100+ Projects
                        </p>
                        <p className={styles.second_text}>
                            We Have Completed
                        </p>
                    </div>
                    <img src="/assets/images/Rectangle 66.png" alt="image" className={styles.last_image} />
                </div>
            </div>

            <div className={styles.second_section}>
                <div className="w-fit hidden lg:block">
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <button className={styles.section_title}>
                        About Us
                    </button>
                </div>

                <p className={styles.heading}>
                    Connecting your business with the world
                </p>
                <p className={styles.paragraph}>
                    Lorem ipsum dummy is simply dummy text of the printing and estting  industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s when
                </p>

                <div className={styles.bullets}>
                    {AboutTabs?.map((item: string, index: number) => (
                        <div key={index} className={styles.bullet}>
                            <img src="/assets/icons/trophy.svg" alt="icon" className={styles.bullet_icon} />
                            <p className={styles.bullet_text}>
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.buttons_wrapper}>
                    <button className={styles.first_button}>
                        Learn More About Us
                    </button>
                    <p className={styles.second_button}>
                        Contact Us
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;