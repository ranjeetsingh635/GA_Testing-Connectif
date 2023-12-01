import Footer from "src/Modules/LayoutModule/Components/SetupLayoutModule/Footer/Footer";
import AdSection from "../AdSection/AdSection";
import CustomerServiceSection from "../CustomerServiceSection/CustomerServiceSection";
import HomeBannerSection from "../HomeBannerSection/HomeBannerSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Header from "src/Modules/LayoutModule/Components/SetupLayoutModule/Header/Header";

function LandingPage() {
  return (
    <>
      <Header />
      <HomeBannerSection />
      <CustomerServiceSection />
      <AdSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
export default LandingPage;
