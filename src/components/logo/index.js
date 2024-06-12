import React from 'react';

const Logo = () => {
    return (
        <div className='flex flex-row border-[2px] border-black'>
            <img src="/assets/logo/Logo.png" alt='logo' className='w-[136px] h-[138px]' />
            <div className='flex flex-col'>
                <p>JATAQ</p>
                <p>TECHNOLOGIES</p>
            </div>
        </div>
    )
}
export default Logo;