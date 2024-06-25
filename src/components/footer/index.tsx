import { FC } from "react";
import { QUICK_LINKS } from "../../constants/quickLinks";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { SocialProps } from "../../types/socialLinks";
import styles from "./styles";

const Footer: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top_section}>
                <div className={styles.logo_wrapper}>
                    <img src="/assets/logo/Logo.svg" alt='logo' className={styles.logo_image} />
                    <div className='flex flex-col'>
                        <p className={styles.jataq}>
                            JATAQ
                        </p>
                        <p className={styles.technologies}>
                            TECHNOLOGIES
                        </p>
                    </div>
                </div>
                <div className={styles.socials_wrapper}>
                    {SOCIAL_LINKS?.map((link: SocialProps, index: number) => (
                        <div key={index} className={styles.social_link}>
                            <img src={link?.icon} alt='facebook_icon' className={styles.social_icon} />
                            <p className={styles.social_label}>
                                {link?.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.content_wrapper}>
                <div className={styles.first_section}>
                    <p className={styles.idea_text}>
                        Have an idea?
                    </p>
                    <p className={styles.tell_us_text}>
                        Tell us about it
                    </p>
                    <div className={styles.contacts_wrapper}>
                        <div className={styles.contact_wrapper}>
                            <img src='/assets/icons/email.svg' alt='email_icon' className={styles.contact_icon} />
                            <p className={styles.contact_text}>
                                Contact@jataq.co
                            </p>
                        </div>
                        <div className={styles.contact_wrapper}>
                            <img src='/assets/icons/phone-bold.svg' alt='email_icon' className={styles.contact_icon} />
                            <p className={styles.contact_text}>
                                +92 3113229228
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.second_section}>
                    <p className={styles.quick_links}>
                        Quick Links
                    </p>
                    <div className={styles.links_wrapper}>
                        {QUICK_LINKS?.map((link: string, index: number) => (
                            <p key={index} className={styles.link}>
                                {link}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <p className={styles.copyright}>
                Copyright © 2024, Jataq Technologies
            </p>
        </div>
    )
}
export default Footer;