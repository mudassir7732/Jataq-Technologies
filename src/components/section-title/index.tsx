import { FC } from "react";
import { DescProps } from "../../types/pageDesc";
import styles from "./styles";

const SectionTitle: FC<DescProps> = ({ title, desc }) => {
    return (
        <>
            <p className={styles.title}>
                {title}
            </p>
            <p className="text-[18px] font-[400] max-w-[567px] mx-auto text-center font-[Montserrat] mb-[63px]">
                {desc}
            </p>
        </>
    )
}
export default SectionTitle;