import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { WEB_FEATURES } from "../../constants/web-development/web-features";
import { FeatureProps } from "../../types/webAppFeatures";
import FiguresBar from "../../components/figures-bar.tsx";
import TopSection from "../../sections/top-section";
import { data } from "../../constants/web-development/topSection";
import { benefits } from '../../constants/web-development/benefits';
import Benefits from "../../sections/benefits";
import ProjectLifecycle from "../../sections/projectLifecycle";
import { Phases } from "../../constants/web-development/lifecycle-phases";
import { Lifecycle } from "../../constants/web-development/projectLifecycle";
import KeyFeatures from "../../sections/keyFeatures.tsx";
import { FeaturesData } from "../../constants/web-development/key-features";
import InputForm from "../../sections/input-form";

const WebDevelopment: FC = () => {
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
export default WebDevelopment;