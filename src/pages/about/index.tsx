import { FC } from "react";
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
                        <p className="text-[27px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[700] font-[Montserrat] text-black mt-[4px] md:mt-[8px] lg:mt-[11px]">
                            Our Mission
                        </p>
                        <p className="text-[18px] font-[400] text-black mt-[10px] sm:mt-[15px] md:mt-[20px] lg:mt-[27px]">
                            We go deep to unlock insight and have the coura ge to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
                    </div>

                    <div className={styles.purpose_wrapper}>
                        <img src="/assets/icons/vision_icon.svg" className={styles.second_icon} />
                        <p className="text-[27px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[700] font-[Montserrat] text-black mt-[4px] md:mt-[8px] lg:mt-[11px]">
                            Our Vision
                        </p>
                        <p className="text-[18px] font-[400] text-black mt-[10px] sm:mt-[15px] md:mt-[20px] lg:mt-[27px]">
                            We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className="bg-no-repeat bg-cover w-full mb-[50px] px-[40px] sm:px-[50px] md:px-[65px] lg:px-[80px] xl:px-[100px] pt-[36px] sm:pt-[42px] md:pt-[48px] lg:pt-[55px] xl:pt-[66px]">
                <SectionTitle title="Our Journey Through Time" desc="Discover exceptional experiences through testimonials from our satisfied customers." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[23px] mb-[50px] sm:mb-[65px] md:mb-[75px] lg:mb-[85px] xl:mb-[100px]">
                    {JOURNEY_SERVICES?.map((item: journeyProps, index: number) => (
                        <div key={index} className="border-[1px] border-[#f5f5f5] bg-white rounded-[20px] px-[19px] py-[31px]">
                            <img src={item?.icon} className="h-[45px] lg:h-[54px] w-[45px] lg:w-[54px]" />
                            <p className="text-[22px] font-[700] text-black font-[Montserrat] mt-[20px] lg:mt-[26px]">
                                {item?.label}
                            </p>
                            <p className="text-[16px] font-[300] font-[Montserrat] text-black mt-[15px] lg:mt-[21px]">
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