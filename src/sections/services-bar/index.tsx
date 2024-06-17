import { FC, Fragment } from 'react';
import { SERVICES_BAR } from '../../constants/servicesBarOptions';
import styles from './styles';

const ServicesBar: FC = () => {
    return (
        <div className={styles.container}>
            {SERVICES_BAR?.map((item: string, index: number) => (
                <Fragment key={index}>
                    <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className={styles.asterisk} />
                    <p className={styles.text}>
                        {item}
                    </p>
                </Fragment>
            ))}
            <img src='/assets/icons/asterisk.svg' alt="asterik_icon" className={styles.asterisk} />
        </div >
    )
}
export default ServicesBar;