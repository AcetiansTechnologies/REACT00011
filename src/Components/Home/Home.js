import React from "react";
import HeroConsole from "./HeroConsole";
import WwaHome from "./WwaHome";
import Initiatives from "./Initiatives";
import WhyBharat from "./WhyBharat";
import OurCorePillars from "./OurCorePillars";
import Award from "../Home/AwardSlider";
import OurPartner from "./OurPartner";
import FDP from "../Home/FDP";
import SkillsRanking from "./SkillsRanking";
import OurRequriters from "./OurRequriters";
import Hero2 from "./Hero2";
import logo from '../Image/Body-bc.jpg'
const Home = () => {
  return (
    <div className="home-main" >
<div >
      <div className="HeroSection">
        <HeroConsole />
      </div>
      {/* <Hero2/> */}
      <WwaHome />
      <Initiatives />
      <WhyBharat />
      <OurCorePillars />
      <FDP />
      <OurPartner />
      <Award />
      <SkillsRanking />
      <OurRequriters />
    </div>
    </div>
    
  );
};

export default Home;
