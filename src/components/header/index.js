import React from 'react';
import Logo from '../logo';
import { TABS } from '../../constants/tabs';

const Header = () => {
    return (
        <div className='w-full pl-[100px] pr-[116px] flex flex-row items-center justify-between py-[18px]'>
            <Logo />
            <div className='w-fit flex flex-row gap-x-[64px]'>
            {TABS.map((tab, index) => (
                <p key={index} className='text-[18px] font-[Montserrat] font-[400]'>
                    {tab.label}
                </p>
            ))}
            </div>
            <button className='bg-[#006fff] text-white w-[165px] h-[50px] rounded-[5px] text-[16px] font-[700]'>
                GET A QUOTE
            </button>
        </div>
    )
}
export default Header;