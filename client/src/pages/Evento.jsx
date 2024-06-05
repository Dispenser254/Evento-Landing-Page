import About from "./About";
import Agenda from "./Agenda";
import BottomCTA from "./BottomCTA";
import CTASection from "./CTA";
import Events from "./Events";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Registration from "./Registration";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

function Evento() {
  return (
    <div className="bg-slate-950">
      <NavBar />
      <HeroSection />
      <Agenda />
      <CTASection />
      <About />
      <Stats/>
      <Testimonials />
      <Events />
      <Registration/>
      <BottomCTA />
      <Footer/>
    </div>
  );
}

export default Evento;
