import Head from 'next/head';
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
      <Head>
        <title>Xenoma Code</title>
        <link rel="icon" href="/xenomaicono.svg" />
        <meta name="description" content="Desarrollamos soluciones innovadoras para impulsar tu negocio al siguiente nivel" />
      </Head>
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