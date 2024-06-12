import React from 'react';

const Logo = () => {
    return (
        <div className='flex flex-row items-center w-fit gap-x-[8px]'>
            <img src="/assets/logo/Logo.svg" alt='logo' className='w-[36px] h-[38px]' />
            <div className='flex flex-col'>
                <p className='font-[Montserrat] font-[700] text-[24px] text-[#252525]'>
                    JATAQ
                </p>
                <p className='font-[Montserrat] text-[10px] -mt-1F font-[300] text-[#252525]'>
                    TECHNOLOGIES
                </p>
            </div>
        </div>
    )
}
export default Logo;