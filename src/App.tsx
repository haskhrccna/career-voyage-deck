import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-900">
          <Navigation />
          <main>
            <Hero />
            <Skills />
            <Certifications />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;