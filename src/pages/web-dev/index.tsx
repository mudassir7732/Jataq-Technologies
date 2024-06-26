import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";

const WebDev: FC = () => {
    return (
        <div className="flex flex-col">
            Web Development
            <Testimonials />
            <ServicesBar />
        </div>
    )
}
export default WebDev;