import Header from "./components/ui/header/Header";
import Hero from "./components/ui/hero/Hero";
import About from "./components/ui/about/About";
import Reviews from "./components/ui/reviews/Reviews";
import Faq from "./components/ui/faq/Faq";
import Footer from "./components/ui/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Reviews />
      <Faq />
      <Footer />
    </>
  );
}
