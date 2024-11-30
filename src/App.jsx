import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Awwwards Winning Website | React.js, Tailwind CSS, GSAP</title>
          <meta
            name='description'
            content='Inspired by zentry.com, An award-winning animated website that became an Awwwards Site Of The Month. Created by Dan Wilkey.'
          />
          <meta name='author' content='Dan Wilkey' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Helmet>
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
        </main>
      </>
    </HelmetProvider>
  );
};

export default App;
