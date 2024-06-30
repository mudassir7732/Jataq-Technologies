import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../App.css';
import { TESTIMONIAL_OPTIONS } from '../../constants/testimonialOptions';
import { FC } from 'react';
import { customDotProps } from '../../types/customDot';
import { TestimonialProps } from '../../types/testimonialOptions';
import styles from './styles';
import styles2 from '../about-us/styles';
import styles3 from '../bottom-section/styles';

const Testimonials: FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: Infinity, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const CustomDot: FC<customDotProps> = ({ onMove, index, onClick, active }) => {
        return (
            <li className={`custom-dot ${active ? 'custom-dot--active' : ''}`} onClick={() => onClick()}>
                <div className={`${styles.custom_dot} ${active ? 'bg-[#006fff]' : 'bg-[#282828]'}`}></div>
            </li>
        );
    };

    return (
        <div className={styles.container}>
            <img src='/assets/icons/Ellipse8.svg' alt="border_line" className={styles.bg_ellipse} />
            <div className={styles.sections_wrapper}>
                <div className={styles.first_section}>
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <p className={styles2.section_title}>
                        Testimonials
                    </p>
                    <p className={styles.heading}>
                        What They're Talking About Company
                    </p>
                    <button className={styles3.button}>
                        Services We Provide
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className={styles3.button_icon} />
                    </button>
                </div>

                <div className={styles.second_section}>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        arrows={false}
                        customDot={<CustomDot index={0} onClick={function (): void {
                            throw new Error('Function not implemented.');
                        }} active={false} />}
                    >
                        {TESTIMONIAL_OPTIONS.map((item: TestimonialProps, index: number) => (
                            <div key={index} className={styles.carousel_wrapper}>
                                <img src='/assets/icons/quotation.svg' alt='button_background' className={styles.quotation} />
                                <div key={index} className={styles.card}>
                                    <div className="flex flex-row items-center mb-[10px]">
                                        <img src="/assets/icons/full-star.svg" className={styles.star} />
                                        <img src="/assets/icons/full-star.svg" className={styles.star} />
                                        <img src="/assets/icons/full-star.svg" className={styles.star} />
                                        <img src="/assets/icons/full-star.svg" className={styles.star} />
                                        <img src="/assets/icons/half-star.svg" className={styles.star} />
                                    </div>
                                    <p className={styles.text}>
                                        {item.text}
                                    </p>
                                    <p className={styles.name}>
                                        {item.name}
                                    </p>
                                </div>
                                <img src='/assets/icons/Rectangle63.svg' alt='button_background' className="z-0" />
                            </div>
                        ))}
                    </Carousel>;
                </div>
            </div>
        </div >
    )
}
export default Testimonials;