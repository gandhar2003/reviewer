import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;