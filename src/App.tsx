import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyOtoson from '@/components/WhyOtoson';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileContactBar from '@/components/MobileContactBar';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyOtoson />
        <About />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}

export default App;
