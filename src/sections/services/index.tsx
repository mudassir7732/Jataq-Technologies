import { FC, useState } from "react";
import { SERVICE_OPTIONS } from "../../constants/serviceOptions";
import styles from "./styles";
import styles2 from '../about-us/styles';
import styles3 from '../bottom-section/styles';

const Services: FC = () => {
    const [selected, setSelected] = useState<string>('');
    return (
        <div style={{ backgroundImage: 'url(/assets/logo/bg-logo3.png)' }} className={styles.container}>
            <div className={styles.first_section}>
                <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                <p className={styles2.section_title}>
                    Our Services
                </p>
                <p className={styles.heading}>
                    Services That JATAQ Provides
                </p>
                <p className={styles.text}>
                    Step forward to become one of
                    <span className={styles.yellow_text}>
                        49,494 successful
                    </span>
                    clients of Jataq and get in the front line for the most wonderful presentation.
                </p>
                <button className={styles.button}>
                    Services We Provide
                    <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles3.button_icon} />
                </button>
            </div>

            <div className={styles.second_section}>
                <div className="w-fit">
                    {SERVICE_OPTIONS?.map((service, index) => (
                        <div key={index} className={styles.service_wrapper} onClick={() => setSelected(service?.route)}>
                            <div className={`${styles.icon_wrapper} ${selected === service?.route ? 'bg-[#006fff]' : 'bg-[#272727]'}`}>
                                <img src={service?.icon} alt={service?.icon} className="" />
                            </div>
                            <div className={styles.text_wrapper}>
                                <p className={styles.service_text}>
                                    {service?.label}
                                </p>
                                <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles.arrow_icon} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;