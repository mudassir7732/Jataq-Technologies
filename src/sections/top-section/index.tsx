import { FC } from "react";
import { TopSectionProps } from "../../types/topSection";
import styles from "./styles";

const TopSection: FC<TopSectionProps> = ({ title, desc }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {title}
            </p>
            <p className={styles.desc}>
                {desc}
            </p>
        </div>
    )
}
export default TopSection;