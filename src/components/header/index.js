import React from 'react';
import Logo from '../logo';
import { TABS } from '../../constants/tabs';

const Header = () => {
    return (
        <div className='w-full px-[20px] sm:px-[40px] md:px-[60px] lg:px-[90px] xl:pl-[100px] xl:pr-[116px] border-2 flex flex-row items-center justify-between py-[18px]'>
            <Logo />
            <div className='w-fit hidden lg:flex flex-row lg:gap-x-[40px] xl:gap-x-[64px]'>
            {TABS.map((tab, index) => (
                <p key={index} className='text-[18px] font-[Montserrat] font-[400]'>
                    {tab.label}
                </p>
            ))}
            </div>
            <button className='bg-[#006fff] text-white w-[165px] outline-none h-[50px] rounded-[5px] text-[16px] font-[700]'>
                GET A QUOTE
            </button>
        </div>
    )
}
export default Header;