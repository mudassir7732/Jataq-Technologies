import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";

const DigitalMarketing:FC=()=>{
    return(
        <div className="flex flex-col">
            Digital Marketing
            <Testimonials />
            <ServicesBar />

        </div>
    )
}
export default DigitalMarketing;