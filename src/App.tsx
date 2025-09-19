import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Index } from './pages/Index';
import { Dashboard } from './pages/Dashboard';
import { Transfers } from './pages/Transfers';
import { Privacy } from './pages/Privacy';
import { Enterprise } from './pages/Enterprise';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
