import React from 'react';
import { HEADER_TABS } from '../../constants/headerTabs';


const Header = () => {
    return (
        <div className='w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] flex flex-row items-center justify-between py-[18px]'>
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
            <div className='w-fit hidden lg:flex flex-row lg:gap-x-[40px] xl:gap-x-[64px]'>
                {TABS.map((tab, index) => (
                    <p key={index} className='cursor-pointer md:text-[14px] lg:text-[16px] xl:text-[18px] font-[Montserrat] font-[400]'>
                        {tab.label}
                    </p>
                ))}
            </div>
            <button className='bg-[#006fff] text-white w-[100px] sm:w-[120px] md:w-[135px] lg:w-[150px] xl:w-[165px] outline-none h-[32px] sm:h-[36px] md:h-[40px] lg:h-[45px] xl:h-[50px] rounded-[5px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[700]'>
                GET A QUOTE
            </button>
        </div>
    )
}
export default Header;