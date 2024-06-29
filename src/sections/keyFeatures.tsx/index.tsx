import { FC } from "react"
import { KeyFeatureProps } from "../../types/keyFeatures";

const KeyFeatures: FC<KeyFeatureProps> = (props) => {
    return (
        <div style={{ backgroundImage: 'url(/assets/images/Rectangle80.png)' }} className="flex flex-col items-center w-full px-[30px] sm:px-[60px] md:px-[82px] lg:px-[95px] xl:px-[115px] pt-[121px] bg-no-repeat bg-cover">
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <p className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[38px] font-[700] max-w-[509px] mb-[30px]">
                        {props.title1}
                    </p>
                    {props.features?.map((feature: string, index: number) => (
                        <div className="flex flex-row mb-[20px] gap-x-[16px]">
                            <img src="/assets/icons/integrity_icon.svg" className="h-[32px] lg:h-[40px] w-[32px] lg:w-[40px]" />
                            <p className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-[400] font-[Montserrat] text-[#252525]">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>
                <img src="/assets/images/benefits.svg" className="w-full lg:w-1/2 max-h-[358px] max-w-[552px]" />
            </div>
            <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-[700] text-[#030303] font-[Montserrat] max-w-[755px] text-center mt-[140px]">
                {props.title2}
            </p>
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-[400] text-black font-[Montserrat] max-w-[767px] text-center mt-[18px]">
                You're in the right place! Fill out the form and we will reach out to discuss how we can best help your business grow.
            </p>
        </div>
    )
}
export default KeyFeatures;