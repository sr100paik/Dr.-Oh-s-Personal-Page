
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Insights from './pages/Insights';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { NAVIGATION } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-gold serif">Pro OH</span>
          <span className="text-xs text-white/40 uppercase tracking-widest hidden sm:inline">Management Consulting</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors hover:text-gold ${
                pathname === item.path ? 'text-gold font-bold' : 'text-white/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold text-navy px-6 py-2.5 rounded-sm text-sm font-bold transition-all hover:bg-amber-500 hover:scale-105"
          >
            VIP 상담
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-white/10 px-6 py-8 flex flex-col gap-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-lg text-white/80 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <div className="text-2xl font-bold text-gold serif">Pro OH</div>
        <p className="text-white/50 text-sm leading-relaxed">
          귀사의 지속 가능한 성장과 위기 극복을 위한<br />
          최고의 전략적 파트너가 되어 드립니다.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <ul className="text-white/50 text-sm space-y-2">
          <li>서울특별시 서초구 반포대로 14길 54, 신성오피스텔</li>
          <li>skoh-ok@hanmail.net</li>
          <li>02-588-6989 (예약 전용)</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Newsletter</h4>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="이메일 주소" 
            className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm w-full focus:outline-none focus:border-gold" 
          />
          <button className="bg-gold text-navy px-4 py-2 rounded-sm text-sm font-bold">구독</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
      &copy; {new Date().getFullYear()} Pro OH Consulting. All rights reserved.
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0f172a]">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
