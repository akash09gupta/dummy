import StatsSection from './StatsSection';
import FurnitureCatalog from './FurnitureCatalog';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import Products from './Products';
import Footer from './Footer';
import HorizontalScroll from './HorizontalScroll';
import ClientTestimonials from './ClientTestinomial';
import Contact from './Contact';

function MobileView() {

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <NavBar/>
        <HeroSection/>
        <FurnitureCatalog/>
        <StatsSection/>
        <Products/>
        <HorizontalScroll/>
        <ClientTestimonials/>
        <Contact/>
        <Footer/>
        </div>
    </>
  );
}

export default MobileView;
  