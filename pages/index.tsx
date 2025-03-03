import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyUs';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import OurWork from '../components/OurWork';
import OurTeam from '../components/OurTeam';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Services />
          <WhyChooseUs />
          <OurWork />
          <OurTeam />
          <Footer />
        </div>
      </div>
    </>
  );
}