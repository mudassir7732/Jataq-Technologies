import { FC } from "react";
import { DescProps } from "../../types/pageDesc";
import styles from "./styles";

const SectionTitle: FC<DescProps> = ({ title, desc }) => {
    return (
        <>
            <p className={styles.title}>
                {title}
            </p>
            <p className={styles.desc}>
                {desc}
            </p>
        </>
    )
}
export default SectionTitle;