import React, { FC } from 'react';
import { HEADER_TABS } from '../../constants/headerTabs';
import { HeaderProps } from '../../types/headerTabs';
import styles from './styles';

const Header: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_wrapper}>
                <img src="/assets/logo/Logo.svg" alt='logo' className={styles.logo_icon} />
                <div className='flex flex-col'>
                    <p className={styles.jataq}>
                        JATAQ
                    </p>
                    <p className={styles.technologies}>
                        TECHNOLOGIES
                    </p>
                </div>
            </div>
            <div className={styles.tabs_wrapper}>
                {HEADER_TABS.map((tab: HeaderProps, index: number) => (
                    <p key={index} className={styles.tab}>
                        {tab.label}
                    </p>
                ))}
            </div>
            <button className={styles.button}>
                GET A QUOTE
            </button>
        </div>
    )
}
export default Header;