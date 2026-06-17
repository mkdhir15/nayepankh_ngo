import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Certifications from './components/sections/Certifications';
import Newspaper from './components/sections/Newspaper';
import JoinTeam from './components/sections/JoinTeam';

function App() {
  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-500 transition-theme">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content — only requested portions */}
      <main>
        <Hero />
        <About />
        <Certifications />
        <Newspaper />
        <JoinTeam />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}

export default App;
