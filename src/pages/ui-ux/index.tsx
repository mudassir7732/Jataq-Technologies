import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";

const UIUX:FC=()=>{
    return(
        <div className="flex flex-col">
            UI UX
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default UIUX;