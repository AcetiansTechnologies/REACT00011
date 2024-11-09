import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/TopAndBottom/Footer";
import Navbar from "./Components/TopAndBottom/Navebar";
import ContactUs from "./Components/ContactUs/ContactUs";
import TopNav from "./Components/TopAndBottom/TopNav";
import WhoWeAre from "./Components/AboutUs/WhoWeAre";
import News from "./Components/News&Updates/News";
import AdvisoryBoard from './Components/AboutUs/AdvisoryBoard';
import Mission from './Components/AboutUs/MissonVisionValue';
import Membership from "./Components/Membership/Membership";
import Privacy from "./Components/Resources/Privacy";
import Blog from './Components/Resources/Blog';
import CaseStudies from './Components/Resources/CaseStudies'
import WhitePapers from './Components/Resources/WhitePapers'
import CentreOfExcellence from './Components/Services/CentreOfExcellence'
import ResearchProgram from './Components/Services/ResearchProgram'
import TC from './Components/Services/T&C'
import Faculty from './Components/Services/FacultyDevelopementProgram'
import EducationAward from './Components/Services/EducationalAward'
import DigitalMag from './Components/Services/Publications/DigitalMagazine'
import HardcopyMag from './Components/Services/Publications/HardCopyMagazine'
import Confrence from './Components/Services/Events/Confrences'
import Summits from './Components/Services/Events/Summit'
import BharatTalk from './Components/Services/BharatTalk'
import InternatinaCollo from './Components/Services/Internationalcollo'
import AtalLab from './Components/Services/AtalLabTraning'
import Mentoring from './Components/Services/Startups/Mentoring'
import Funding from './Components/Services/Startups/Funding';
import Nav from './Components/TopAndBottom/Nav'

function App() {
  return (
    
    <BrowserRouter>
    <Nav  className="appnav"/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/whoweare" element={<WhoWeAre/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/mission" element={<Mission/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/advisoryboard" element={<AdvisoryBoard/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/casestudies" element={<CaseStudies/>}/>
      <Route  path="/whitepapers" element={<WhitePapers/>}/>

      {/* Service */}

      <Route  path="/centreofexcellence" element={<CentreOfExcellence/>}/>
      <Route  path="/researchprogram" element={<ResearchProgram/>}/>
      <Route   path="/termsandconditions" element={<TC/>}/>
      <Route  path="/facultydevelopmentprogram" element={<Faculty/>}/>
      <Route  path="/educationalaward" element={<EducationAward/>}/>
      <Route  path="/digitalmagazine" element={<DigitalMag/>}/>
      <Route  path="/hardcopymagazine" element={<HardcopyMag/>}/>
      <Route  path="/confrence" element={<Confrence/>}/>
      <Route  path="/summit" element={<Summits/>}/>
      <Route  path="/bharattalk" element={<BharatTalk/>}/>
      <Route  path="/internationalcollo" element={<InternatinaCollo/>}/>
      <Route  path="/atalab" element={<AtalLab/>}/>
      <Route  path="/mentoring" element={<Mentoring/>}/>
      <Route path="/funding" element={<Funding/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


