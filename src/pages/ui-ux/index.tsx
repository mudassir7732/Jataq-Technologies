import { FC } from "react";
import Testimonials from "../../sections/testimonials";
import ServicesBar from "../../sections/services-bar";
import { Features } from "../../constants/ui-ux/features";
import { FeatureProps } from "../../types/features";
import FiguresBar from "../../components/figures-bar.tsx";
import TopSection from "../../sections/top-section";
import { data } from "../../constants/ui-ux/topSection";
import { benefits } from '../../constants/ui-ux/benefits';
import Benefits from "../../sections/benefits";
import ProjectLifecycle from "../../sections/projectLifecycle";
import { Phases } from "../../constants/ui-ux/lifecycle-phases";
import { Lifecycle } from "../../constants/ui-ux/projectLifecycle";
import KeyFeatures from "../../sections/keyFeatures.tsx";
import { FeaturesData } from "../../constants/ui-ux/key-features";
import InputForm from "../../sections/input-form";

const UIUX: FC = () => {
    return (
        <>
            <TopSection title={data.title} desc={data.desc} />
            {/* <Benefits title={benefits.title} desc={benefits.desc} features={benefits.features} /> */}
            <ProjectLifecycle title={Lifecycle.title} desc={Lifecycle.desc}
                lifecyclePhases={Lifecycle.phases} />
            <KeyFeatures title1={FeaturesData.title1} title2={FeaturesData.title2} features={FeaturesData.features} />
            <InputForm />
            <Testimonials />
            <ServicesBar />
        </>
    )
}
export default UIUX;