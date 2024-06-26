import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";

const Services:FC=()=>{
    return(
        <div className="flex flex-col">
            Services
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default Services;