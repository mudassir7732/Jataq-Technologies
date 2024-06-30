import { FC } from "react";
import styles from "./styles";

const InputForm: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.inputs_wrapper}>
                    <div className="mb-[17px]">
                        <p className={styles.label}>
                            First Name*
                        </p>
                        <input placeholder="First Name" className={styles.input} />
                    </div>
                    <div className="mb-[17px]">
                        <p className={styles.label}>
                            Last Name*
                        </p>
                        <input placeholder="Last Name" className={styles.input} />
                    </div>
                    <div className="mb-[17px]">
                        <p className={styles.label}>
                            Email Address*
                        </p>
                        <input placeholder="Email Address" className={styles.input} />
                    </div>
                    <div className="mb-[17px]">
                        <p className={styles.label}>
                            Phone Number*
                        </p>
                        <input placeholder="Phone Number" className={styles.input} />
                    </div>
                </div>
                <div className="mb-[17px]">
                    <p className={styles.label}>
                        Description
                    </p>
                    <textarea placeholder="How we can help you?" className={`${styles.input} py-[18px] h-[95px]`} />
                </div>
                <button className={styles.button}>
                    Submit
                </button>
                <p className={styles.text}>
                    We use your details only to contact you about our products and services. You can unsubscribe anytime.
                </p>
                <p className={styles.text}>
                    Learn more about how we respect your privacy in our Privacy policy.
                </p>
            </div>
        </div>
    )
}
export default InputForm;