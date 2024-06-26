import { FC } from "react";
import styles from '../about-us/styles';
import styles2 from "./styles";

const WorkLabel: FC = () => {
    return (
        <div className={styles2.label_wrapper}>
            <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
            <p className={styles.section_title}>
                How We Work
            </p>
        </div>
    )
}
export default WorkLabel;