import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { FeatureProps } from "../../types/features";
import FiguresBar from "../../components/figures-bar.tsx";
import TopSection from "../../sections/top-section";
import Benefits from "../../sections/benefits";
import ProjectLifecycle from "../../sections/projectLifecycle";
import { Phases } from "../../constants/web-development/lifecycle-phases";
import KeyFeatures from "../../sections/keyFeatures.tsx";
import InputForm from "../../sections/input-form";
import { data } from "../../constants/digital-marketing/topSection";
import { benefits } from "../../constants/digital-marketing/benefits";
import { Lifecycle } from "../../constants/digital-marketing/projectLifecycle";
import { FeaturesData } from "../../constants/digital-marketing/key-features";

const DigitalMarketing: FC = () => {
    return (
        <>
            <TopSection title={data.title} desc={data.desc} />
            <Benefits title={benefits.title} desc={benefits.desc} features={benefits.features} />
            <ProjectLifecycle title={Lifecycle.title} desc={Lifecycle.desc}
                lifecyclePhases={Lifecycle.phases} />
            <KeyFeatures title1={FeaturesData.title1} title2={FeaturesData.title2} features={FeaturesData.features} />
            <InputForm />
            <Testimonials />
            <ServicesBar />
        </>
    )
}
export default DigitalMarketing;