import NavBar from './NavBar';
import HeroSection from './HeroSection';
import FurnitureCatalog from './FurnitureCatalog';
import StatsSection from './StatsSection';
import Products from './Products';
import Footer from './Footer';

function DesktopView() {
    return (
        <>
        <div style={{ width: "100%", height: "100vh" }}>
            <NavBar/>
            <HeroSection/>
            <FurnitureCatalog/>
            <StatsSection/>
            <Products/>
            <br/>
            <Products/>
            <Footer/>
        </div>
        </>
    )
}

export default DesktopView;