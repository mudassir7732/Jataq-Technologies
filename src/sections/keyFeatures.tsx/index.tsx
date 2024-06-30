import { FC } from "react"
import { KeyFeatureProps } from "../../types/keyFeatures";
import styles from "./styles";

const KeyFeatures: FC<KeyFeatureProps> = (props) => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/Rectangle80.png)' }} className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.first_block}>
                    <p className={styles.text1}>
                        {props.title1}
                    </p>
                    {props.features?.map((feature: string, index: number) => (
                        <div className={styles.feature}>
                            <img src="/assets/icons/integrity_icon.svg" className={styles.icon} />
                            <p className={styles.text}>
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
                <img src="/assets/images/benefits.svg" className={styles.image} />
            </div>
            <p className={styles.title2}>
                {props.title2}
            </p>
            <p className={styles.last_text}>
                You're in the right place! Fill out the form and we will reach out to discuss how we can best help your business grow.
            </p>
        </div>
    )
}
export default KeyFeatures;