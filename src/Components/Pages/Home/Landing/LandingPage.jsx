import HeroGeometricLuxury from "../Hero/FirstPage";
import Hero from "../Hero/Hero";
import Hero1 from "../Hero/Hero1";
import Hero2 from "../Hero/Hero2";
import Hero3 from "../Hero/Hero3";
import "../../../../assets/css/Landing.css"
const Landing = () => {
    return(
        <div className="Landing-container">
            <HeroGeometricLuxury/>
                <Hero/>
                <Hero1/>
                <Hero2/>
                <Hero3/>
        </div>
    )
}
export default Landing