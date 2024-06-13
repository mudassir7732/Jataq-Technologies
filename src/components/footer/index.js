
const Footer = () => {
    return (
        <div className="bg-[#0a0b0f]">
            <div className='flex flex-row items-center w-fit gap-x-[8px]'>
                <img src="/assets/logo/Logo.svg" alt='logo' className='w-[28px] sm:w-[30px] md:w-[32px] lg:w-[34px] xl:w-[36px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] xl:h-[38px]' />
                <div className='flex flex-col'>
                    <p className='font-[Montserrat] font-[700] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#252525]'>
                        JATAQ
                    </p>
                    <p className='font-[Montserrat] text-[8px] sm:text-[8.5px] md:text-[9px] lg:text-[9.5px] xl:text-[10px] -mt-1 font-[300] text-[#252525]'>
                        TECHNOLOGIES
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;