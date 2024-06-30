import React,{ FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import WorkMethod from "../../sections/how-we-work";
import { JOURNEY_SERVICES } from "../../constants/journey";
import { journeyProps } from "../../types/journeyServices";
import FiguresBar from "../../components/figures-bar.tsx";
import SectionTitle from "../../components/section-title";
import styles from "./styles";

const About: FC = () => {
    return (
        <>
            <div className={styles.container}>
                <SectionTitle title="About Us" desc="Discover our story, our mission, and our passion for creativity and innovation." />
                <div className={styles.card}>
                    <div className={styles.text_wrapper}>
                        <p className={styles.text}>
                            We help our client succeed by creating identities, digital experiences and connecting their business with the world
                        </p>
                    </div>
                    <div className="w-fit">
                        <img src='/assets/images/image1.png' className={styles.image} />
                    </div>
                </div>

                <div className={styles.purposes}>
                    <div className={styles.purpose_wrapper}>
                        <img src="/assets/icons/mission_icon.svg" className={styles.first_icon} />
                        <p className={styles.title}>
                            Our Mission
                        </p>
                        <p className={styles.desc}>
                            We go deep to unlock insight and have the coura ge to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
                    </div>
                    <div className={styles.purpose_wrapper}>
                        <img src="/assets/icons/vision_icon.svg" className={styles.second_icon} />
                        <p className={styles.title}>
                            Our Vision
                        </p>
                        <p className={styles.desc}>
                            We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className={styles.core_values}>
                <SectionTitle title="Our Journey Through Time" desc="Discover exceptional experiences through testimonials from our satisfied customers." />
                <div className={styles.values_wrapper}>
                    {JOURNEY_SERVICES?.map((item: journeyProps, index: number) => (
                        <div key={index} className={styles.core_value}>
                            <img src={item?.icon} className={styles.icon} />
                            <p className={styles.label}>
                                {item?.label}
                            </p>
                            <p className={styles.value_desc}>
                                {item?.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <FiguresBar />
            </div>
            <WorkMethod />
            <Testimonials />
            <ServicesBar />
        </>
    )
}
export default About;