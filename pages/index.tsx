import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyUs';
import Footer from '../components/Footer';
import '../styles/globals.css';


export default function Home() {
    return (
      <div className="bg-gradient-to-br from-[#000000] to-[#7F00F5] text-white">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Footer />
      </div>
    );
  }