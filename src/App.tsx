import { FC } from "react";
import Header from "./components/header"
import Services from './sections/services';
import AboutUs from './sections/about-us';
import WorkMethod from './sections/how-we-work';
import Testimonials from './sections/testimonials';
import ServicesBar from './sections/services-bar';
import Footer from './components/footer';
import TopSection from './sections/top-section';
import BottomSection from "./sections/bottom-section";

const App: FC = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <TopSection />
      <Services />
      <AboutUs />
      <WorkMethod />
      <Testimonials />
      <BottomSection />
      <ServicesBar />
      <Footer />
    </div>
  )
}
export default App; 