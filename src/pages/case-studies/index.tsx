import { FC } from "react"
import SectionTitle from "../../components/section-title";

const CaseStudies:FC=()=>{
    return(
        <div>
            <SectionTitle title="Case Studies" desc="It is a dummy text, should be changed later" />
            {/* <div className="flex flex-row gap-x-[55px]"> */}
            <div style={{ backgroundImage: 'url(/assets/images/Rectangle69.png)' }} className="flex flex-row px-[103px]">

                <img src="/assets/images/Rectangle78.png" className="max-w-[675px]" />
                <img src="/assets/images/Rectangle79.png" className="max-w-[486px]" />

            </div>
        </div>
    )
}
export default CaseStudies;