import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import About from "../components/About.jsx";
import MissionVision from "../components/MissionVision.jsx";
import Pillars from "../components/Pillars.jsx";
import SLS from "../components/SLS.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <MissionVision />
      <Pillars />
      <SLS />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
