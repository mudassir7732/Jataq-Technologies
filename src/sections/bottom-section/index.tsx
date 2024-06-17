import { FC } from "react";
import styles from "./styles";

const BottomSection: FC = () => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/Rectangle64.png)' }} className={styles.container}>
            <p className={styles.heading}>
                We're Leading Digital Agency For Increasing Sales or Boosting Traffic
            </p>
            <p className={styles.paragraph}>
                Scribentur varet per cu dicat copiosae reprimique teim laborey fabulas scriptorem ullamco laboris nisi ut aliquip duis aute irure dolor in reprehenderit
            </p>
            <button className={styles.button}>
                Services We Provide
                <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles.button_icon} />
            </button>
        </div>
    )
}
export default BottomSection;