import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Impact from './components/sections/Impact';
import Partners from './components/sections/Partners';
import Resources from './components/sections/Resources';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

import './styles/index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Impact />
        <Partners />
        <Resources />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
