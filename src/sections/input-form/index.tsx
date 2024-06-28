import { FC } from "react";

const InputForm:FC=()=>{
    return(
        <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-[582px] w-[90%] p-[34px] shadow-2xl shadow-[#e0e0e0] bg-white border-[1px] border-[#e3e3e3] rounded-[20px] mt-[60px]">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[16px]">
                <div className="mb-[17px]">
                    <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                        First Name*
                    </p>
                    <input placeholder="First Name" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px]  h-[53px]" />
                </div>
                <div className="mb-[17px]">
                    <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                        Last Name*
                    </p>
                    <input placeholder="Last Name" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                </div>
                <div className="mb-[17px]">
                    <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                        Email Address*
                    </p>
                    <input placeholder="Email Address" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                </div>
                <div className="mb-[17px]">
                    <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                        Phone Number*
                    </p>
                    <input placeholder="Phone Number" className="w-full border-[1px] outline-none text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] px-[26px] h-[53px]" />
                </div>
            </div>
            <div className="mb-[17px]">
                <p className="text-[16px] font-[400] font-[Montserrat] text-black mb-[10px] ml-[4px]">
                    Phone Number*
                </p>
                <textarea placeholder="How we can help you?" className="w-full border-[1px] text-[16px] font-[400] text-[#bebebe] border-[#e3e3e3] rounded-[20px] py-[18px] px-[26px] outline-none h-[95px]" />
            </div>
            <button className="rounded-[20px] bg-[#006fff] w-full h-[53px] text-[16px] sm:text-[17px] lg:text-[18px] outline-none font-[400] text-white">
                Submit
            </button>
            <p className="font-[300] text-[14px] text-black font-[Montserrat] mt-[12px]">
                We use your details only to contact you about our products and services. You can unsubscribe anytime.
            </p>
            <p className="font-[300] text-[14px] text-black font-[Montserrat] mt-[12px]">
                Learn more about how we respect your privacy in our Privacy policy.
            </p>
        </div>
    </div>
    )
}
export default InputForm;