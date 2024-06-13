
const Footer = () => {
    return (
        <div className="bg-[#0a0b0f] pl-[80px] xl:pl-[100px] pr-[100px] xl:pr-[132px] pb-[48px]">

            <div className="flex flex-col lg:flex-row items-center h-[178px] justify-evenly lg:justify-between">

                <div className='flex flex-row items-center w-fit gap-x-[8px]'>
                    <img src="/assets/logo/Logo.svg" alt='logo' className='w-[28px] sm:w-[30px] md:w-[32px] lg:w-[34px] xl:w-[36px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] xl:h-[38px]' />
                    <div className='flex flex-col'>
                        <p className='font-[Montserrat] font-[700] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#fff]'>
                            JATAQ
                        </p>
                        <p className='font-[Montserrat] text-[8px] sm:text-[8.5px] md:text-[9px] lg:text-[9.5px] xl:text-[10px] -mt-1 font-[300] text-[#fff]'>
                            TECHNOLOGIES
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center w-fit gap-x-[35px]">
                    <div className="flex flex-row items-center gap-x-1">
                        <img src="/assets/icons/facebook-fill.svg" alt='facebook_icon' className="h-[24px] w-[24px]" />
                        <p className="text-white text-[18px] font-[400] font-[Montserrat]">
                            Facebook
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-1">
                        <img src="/assets/icons/linkedin-fill.svg" alt='facebook_icon' className="-mt-1 h-[24px] w-[24px]" />
                        <p className="text-white text-[18px] font-[400] font-[Montserrat]">
                            LinkedIn
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-1">
                        <img src="/assets/icons/instagram.svg" alt='facebook_icon' className="h-[24px] w-[24px]" />
                        <p className="text-white text-[18px] font-[400] font-[Montserrat]">
                            Instagram
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row border-b-[1px] border-t-[1px] border-[#353535]">
                <div className="flex flex-col pt-[98px] w-[50%] border-r-[1px] border-[#353535] pb-[56px]">
                    <p className=" text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] text-white font-[Montserrat]">
                        Have an idea
                    </p>
                    <p className=" text-[26px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[38px] font-[700] text-white font-[Montserrat]">
                        Tell us about it
                    </p>
                    <div className="flex flex-col gap-y-[25px] lg:flex-row gap-x-[13px] mt-[47px]">
                        <div className="flex flex-row gap-x-[10px]">
                            <img src='/assets/icons/email.svg' alt='email_icon' className="h-[24px] w-[24px]" />
                            <p className="text-[18px] font-[400] text-white">
                                Contact@jataq.co
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-[10px]">
                            <img src='/assets/icons/phone-bold.svg' alt='email_icon' className="mt-[2px] h-[24px] w-[24px]" />
                            <p className="text-[18px] font-[400] text-white">
                                Contact@jataq.co
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pl-[111px] pt-[28px] pb-4">
                    <p className="text-white text-[18px] font-[700] font-[Montserrat]">
                        Quick Links
                    </p>
                    <div className="grid lg:grid-cols-2 lg:gap-x-[40px] xl:gap-x-[140px] mt-[29px] gap-y-[17px]">
                        <p className="text-white text-[16px] font-[400] font-[Montserrat]">
                            Home
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            Web Development
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat]">
                            Services
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            App Development
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            About Us
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            Digital Marketing
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            Case Studies
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat]">
                            UI/UX
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            Contact Us
                        </p>

                        <p className="text-white text-[16px] font-[400] font-[Montserrat] whitespace-nowrap">
                            Graphic Design
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-[18px] font-[400] font-[Montserrat] text-white text-center mt-[46px]">
                Copyright © 2024, Jataq Technologies
            </p>

        </div>
    )
}
export default Footer;