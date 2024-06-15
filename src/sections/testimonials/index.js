import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
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

    const textItems = [
        { text: "I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.", name: 'Client Name' },
        { text: "I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.", name: 'Client Name' },
        { text: "I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.", name: 'Client Name' },
        { text: "I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.", name: 'Client Name' },
    ];

    return (
        <div className="relative pb-20 lg:h-fit"
            style={{
                backgroundImage: 'url(/assets/icons/Vector1.svg), url(/assets/images/Rectangle59.png)',
                backgroundSize: 'auto, cover',
                backgroundPosition: 'center 5px, center top',
                backgroundRepeat: 'no-repeat, no-repeat',
            }}>
            <img src='/assets/icons/Ellipse8.svg' alt="border_line" className="-mt-20 w-full h-full absolute" />
            <div className="flex flex-col lg:flex-row items-start mt-48 gap-x-[35px] lg:justify-evenly border-white h-ful px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px]">
                <div className="relative flex flex-col min-w-[45%]">
                    <img src='/assets/icons/Rectangle58.svg' alt='button_background' className="absolute z-0" />
                    <p className="flex items-center justify-center text-black border-[1px] text-[14px] font-[300] font-[Montserrat] border-black absolute z-50 w-[119px] h-[31px] mt-2 rounded-full bg-white">
                        Testimonials
                    </p>
                    <p className=" text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] text-white font-[Montserrat] mt-[57px] max-w-[425px]">
                        What They're Talking About Company
                    </p>
                    <button className="flex flex-row items-center justify-center gap-x-[6px] lg:gap-x-[11px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[51px] xl:h-[53px] w-fit px-2 xl:w-[257px] bg-[#1b7eff] rounded-[10px] mt-[18px] text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-white font-[500] font-[Montserrat]">
                        Services We Provide
                        <img src='/assets/icons/arrow.svg' alt='arrow_icon' className="h-[12px] sm:h-[13px] md:h-[14px] lg:h-[15px] xl:h-[16.25px]" />
                    </button>
                </div>
                <div className="flex flex-col min-w-[45%] mt-14 lg:mt-0">
                    <img src='/assets/icons/quotation.svg' alt='button_background' className=" absolute z-50 mt-[2px] ml-3" />
                    {/* <div className=" bg-white rounded-t-[10px] max-w-[600px] pt-[35px] sm:pt-[42px] md:pt-[45px] lg:pt[60px] xl:pt-[80px] px-[15px] sm:px-[22px] md:px-[28px] lg:px-[35px] xl:px-[45px]">
                        <p className="text-[16px] font-[400] font-[Montserrat]">
                            I was very impressed simply copy the digital services loremdigital ipsum is simply free text available used by copy typing refreshing. Neque porro noting qui dolorem ipsum quia.
                        </p>
                        <p className="text-[16px] font-[600] font-[Montserrat] italic mt-[14px] mb-[32px]">
                            Client Name
                        </p>
                    </div> */}
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        dotListClass="react-multi-carousel-dot-list"
                        arrows={false}
                    >
                        {textItems.map((item, index) => (
                            <div className='my-[60px]'>
                                <div key={index} className="bg-white z-40 rounded-t-[10px] max-w-[600px] pt-[35px] sm:pt-[42px] md:pt-[45px] lg:pt-[60px] xl:pt-[70px] px-[15px] pb-8 sm:px-[22px] md:px-[28px] lg:px-[35px] xl:px-[40px] mx-auto">
                                    <p className="text-[16px] font-[400] font-[Montserrat]">
                                        {item.text}
                                    </p>
                                    <p className="text-[16px] font-[600] font-[Montserrat] italic mt-[14px]">
                                        {item.name}
                                    </p>
                                </div>
                                <img src='/assets/icons/Rectangle63.svg' alt='button_background' className="z-0 lg:max-w-[600px]" />
                            </div>
                        ))}
                    </Carousel>;
                </div>
            </div>
        </div >
    )
}
export default Testimonials;