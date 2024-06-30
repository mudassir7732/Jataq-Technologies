import styles from "./styles";

const FiguresBar = () => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/figures_bg.png)' }} className={styles.container}>
            <div className={styles.item}>
                <p className={styles.heading}>
                    10+
                </p>
                <p className={styles.text}>
                    Years of Experiences
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>
                    108+
                </p>
                <p className={styles.text}>
                    Satisfied Customers
                </p>
            </div>
            <div className={styles.item}>
                <p className={styles.heading}>
                    306
                </p>
                <p className={styles.text}>
                    Projects Completed
                </p>
            </div>
            <div className={styles.item}>
                <div className="flex flex-row items-center">
                    <img src="/assets/icons/full-star.svg" className={styles.star} />
                    <img src="/assets/icons/full-star.svg" className={styles.star} />
                    <img src="/assets/icons/full-star.svg" className={styles.star} />
                    <img src="/assets/icons/full-star.svg" className={styles.star} />
                    <img src="/assets/icons/half-star.svg" className={styles.star} />
                </div>
                <p className={`mt-[10px] ${styles.text}`}>
                    4.8 Rating Overall
                </p>
            </div>
        </div>
    )
}
export default FiguresBar;