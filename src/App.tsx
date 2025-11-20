import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import logo from "./assets/logo.png";
import star from "./assets/bg-stars.png";
import img81301 from "figma:asset/7ee3456b3a79f04d787213d1cf38814814f69fa1.png";
import processImg from "./assets/process-img.png";
import analysis from "./assets/analysis.png";
import filter from "./assets/filter.png";
import execution from "./assets/execution.png";
import result3 from "./assets/result-3.png";
import result7 from "./assets/result-7.png";

import SharpGraph from "./components/SharpGraph";
import MonthlyGrowthChart from "./components/MonthlyGrowthChart";
import NexiumBenefits from "./components/NexiumBenefits";
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load legal pages for code splitting
const PrivacyPolicy = lazy(() => import("./components/legal/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/legal/TermsAndConditions"));

function ResultsSlider() {
  const slides = [result3, result7, result3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const getRole = (i: number): 'left' | 'center' | 'right' | 'hidden' => {
    const l = slides.length;
    const left = (index + l - 1) % l;
    const center = index % l;
    const right = (index + 1) % l;
    if (i === center) return 'center';
    if (i === left) return 'left';
    if (i === right) return 'right';
    return 'hidden';
  };

  return (
    <div
      className="relative w-full h-[320px] md:h-[360px] lg:h-[400px]"
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0">
        {slides.map((src, i) => {
          const role = getRole(i);
          const variants = {
            left: {
              x: -90,
              y: 0,
              scale: 0.92,
              rotateZ: -5,
              rotateY: 10,
              opacity: 1,
              zIndex: 1,
              filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.35))',
            },
            center: {
              x: 0,
              y: 0,
              scale: 1,
              rotateZ: 0,
              rotateY: 0,
              opacity: 1,
              zIndex: 2,
              filter: 'drop-shadow(0 18px 44px rgba(0,0,0,0.5))',
            },
            right: {
              x: 90,
              y: 0,
              scale: 0.92,
              rotateZ: 5,
              rotateY: -10,
              opacity: 1,
              zIndex: 1,
              filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.35))',
            },
            hidden: { opacity: 0, scale: 0.9, x: 0, y: 0, zIndex: 0 },
          } as const;

          const sizes = {
            left: 'w-[180px] md:w-[210px] lg:w-[240px]',
            center: 'w-[220px] md:w-[260px] lg:w-[300px]',
            right: 'w-[180px] md:w-[210px] lg:w-[240px]',
            hidden: 'w-0',
          } as const;

          return (
            <motion.div
              key={i}
              initial={role === 'center' ? 'center' : 'hidden'}
              animate={role}
              variants={variants}
              transition={{ type: 'tween', duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`${sizes[role]} aspect-3/4 rounded-2xl overflow-hidden`}
              >
                <img
                  src={src}
                  alt="result"
                  className="h-full w-full object-contain select-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const location = useLocation();
  const routerNavigate = useNavigate();
  const route = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // scroll to top when navigating to a legal page
    if (route === '/privacy' || route === '/terms') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigate = (path: '/' | '/privacy' | '/terms') => {
    if (location.pathname !== path) {
      routerNavigate(path);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'How it Works', id: 'how-it-works' },
    { name: 'Markets', id: 'markets' },
    { name: 'Benefits', id: 'benefits' },
    { name: 'Results', id: 'results' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Setup', id: 'setup' },
    { name: 'Contact', id: 'contact' },
  ];
  type FAQ = { question: React.ReactNode; answer: React.ReactNode };

  const faqs: FAQ[] = [
    {
      question: <span>Is <b> AlphaXAU</b> safe to use?</span>,
      answer: <span>Yes,<b>AlphaXAU </b> Miner uses advanced encryption and secure protocols to protect your data and trades. Your broker credentials are never stored on our servers.</span>
    },
    {
      question: 'Can I stop trading anytime?',
      answer: 'Absolutely. You have full control and can pause or stop automated trading at any time through your dashboard.'
    },
    {
      question: 'Do I need prior trading experience?',
      answer: 'No prior experience is needed. Our system is designed for both beginners and experienced traders with an easy-to-use interface and automated strategies.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. You pay a transparent subscription fee of $19 for 12 months with no additional charges.'
    },
    {
      question: 'Which brokers are supported?',
      answer: 'We support major MT4/MT5 compatible brokers. Contact our support team for a complete list of supported brokers.'
    },
    {
      question: 'Is my data private?',
      answer: 'Yes, we take privacy seriously. All data is encrypted and we never share your information with third parties.'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #020409 0%, #0A0E12 100%)' }}>
      {/* Background gradient elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(242,214,142,0.2) 0%, rgba(200,157,60,0.2) 100%)', top: '10%', right: '-10%' }} />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(108,189,69,0.2) 0%, rgba(0,88,41,0.2) 100%)', top: '40%', left: '-10%' }} />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(242,214,142,0.2) 0%, rgba(200,157,60,0.2) 100%)', top: '70%', right: '-5%' }} />
      </div>

      {/* Fixed Navigation */}
      <motion.header
        style={{ backgroundColor: `rgba(11, 15, 20, ${headerOpacity})` }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#6cbd45]/10"
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <img src={logo} className='max-w-[120px] md:max-w-[178px] cursor-pointer' alt="" />
            </a>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex! items-center gap-6 xl:gap-8!">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white/80 text-sm hover:text-[#6CBD45] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex! gap-4 items-center">
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-1 lg:px-2 py-2 cursor-pointer font-semibold border-[#1499e9] border hover:bg-[#1499e9] text-white rounded-[10px] transition-all w-full max-w-[175px]"
              >
                Join Telegram
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-1 lg:px-2 py-2 font-semibold cursor-pointer bg-[#005829] border border-[#6CBD454D] text-white rounded-[10px] transition-all w-full lg:min-w-[156px]"
              >
                Get AlphaXAU Miner
              </button>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-[#6CBD45] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                ))}
                 <button
                onClick={() => scrollToSection('pricing')}
                  className="px-1 lg:px-2 py-2 cursor-pointer font-semibold bg-[#1499e9] border border-[#6CBD454D] text-white rounded-[10px] transition-all w-full"
              >
                Join Telegram
              </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="px-6 py-2 bg-[#005829] text-white rounded-[10px] transition-all w-full md:w-auto! md:max-w-2xs"
                >
                  Get AlphaXAU Miner
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <Routes>
        <Route
          path="/privacy"
          element={
            <div className="relative z-10">
              <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
                  <PrivacyPolicy />
                </Suspense>
              </div>
            </div>
          }
        />
        <Route
          path="/terms"
          element={
            <div className="relative z-10">
              <div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
                  <TermsAndConditions />
                </Suspense>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Main site content hidden on legal pages */}
      {!(route === '/privacy' || route === '/terms') && (
        <>
          <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className='relative'
                >
                  <div className="inline-block px-4 py-2 rounded-lg bg-[#141a22] border border-[#E0A130]/30 mb-6">
                    <span className="text-[#E0A130] text-sm">Automated Gold Trading</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl mb-6 leading-tight pr-6 max-w-[536px]">
                    <span className="text-white">Automate Your Trading and </span>
                    <span className="text-[#E0A130]">Scale Your Profits</span>
                  </h1>
                  <img src={star} className='w-[121px] absolute top-20 right-0' alt="" />
                  <p className="text-[#d9e0d8] text-lg mb-8 leading-relaxed max-w-[536px]">
                    <b>AlphaXAU Miner</b> is a gold (XAUUSD) auto-trading tool powered by advanced Price Action strategies—built to simplify trading and enhance consistency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <button
                      onClick={() => scrollToSection('pricing')}
                      className="px-8 py-3 bg-[#005829] text-white rounded-xl border border-[#6CBD45]/30 transition-all hover:shadow-lg hover:bg-[#6CBD45] hover:border-[#6CBD45] cursor-pointer"
                    >
                      Get <b>AlphaXAU Miner</b> for <strong>$19 for 12 months</strong>
                    </button>
                    <button className="px-8 py-4 bg-[rgba(49,49,49,0.3)] text-white rounded-xl border border-[#242424] hover:border-[#6CBD45]/30 transition-all">
                      See Live-style Results
                    </button>
                  </div>
                  <p className="text-[#d9e0d8] text-sm">Trading involves risk. No profits guaranteed.</p>
                </motion.div>
                {/* Right Content - Trading Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="">
                    <div className="mt-8">
                      <SharpGraph />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-8 lg:p-12"
              >
                <div className="flex flex-col md:flex-row! items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#E0A130] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E0A130]/20">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 22L16 28L28 22" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 16L16 22L28 16" stroke="#0B0F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl mb-4">
                      <span className="text-white">What is </span>
                      <span className="text-[#E0A130]">AlphaXAU Miner?</span>
                    </h2>

                    <p className="text-[#d9e0d8] text-lg mb-6 leading-relaxed">
                      <b>AlphaXAU Miner</b> is an intelligent, automated system that analyzes market conditions and executes trades for you—removing emotional bias and human error for more efficient outcomes. Perfect for both beginners and experienced traders seeking consistency.
                    </p>

                    <div className="bg-[rgba(0,5,16,0.25)] border border-[#6cbd45] rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[#E0A130]">⚠️</span>
                        <p className="text-[#d9e0d8] text-sm">
                          Use at your own risk. No guaranteed outcomes. All rights reserved to <b>AlphaXAU</b> Trading.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About AlphaXAU Trading Section - From Figma */}
          <section className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center"
              >
                {/* Left: Gold Bars Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative w-full lg:w-[545px] h-[400px] lg:h-[461px] shrink-0"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      alt="Gold bars trading"
                      className="absolute h-full w-full object-cover"
                      style={{ objectPosition: 'center' }}
                      src={img81301}
                    />
                  </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-9 w-full lg:max-w-[536px]"
                >
                  {/* Title */}
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#e0a130] text-sm tracking-[0.7px] uppercase">
                      About Us
                    </p>
                    <h2 className="text-[#e8eef5] text-4xl lg:text-5xl leading-tight">
                      <span className='block'>About Alpha </span>
                      <span className="text-[#e0a130]">Gold Trading</span>
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-5 text-[#d9e0d8] text-lg text-justify">
                    <p className="leading-[30px]">
                      <b>AlphaXAU Trading</b> is a fintech company specializing in automated trading solutions, focused on gold (XAUUSD) and forex. Our mission is to empower traders with technology and proven strategies to trade confidently and efficiently.
                    </p>
                    <p className="leading-[29.25px]">
                      We're forward-thinking experts dedicated to cutting-edge technology and proven, price action–based strategies. Our goal: reduce bias, streamline trading, and aim for consistency in every trade.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-[#e0a130] text-3xl">5+</p>
                      <p className="text-[#d9e0d8] text-sm text-center">Years Experience</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-[#e0a130] text-3xl ">10k+</p>
                      <p className="text-[#d9e0d8] text-sm text-center">Active Users</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-[#e0a130] text-3xl ">24/7</p>
                      <p className="text-[#d9e0d8] text-sm text-center">Support</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Our Process</p>
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-white">How It </span>
                  <span className="text-[#E0A130]">Works</span>
                </h2>
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-[96px] justify-center items-center relative">
                <div className="grid gap-8 mb-12">
                  {[
                    {
                      step: '1',
                      title: 'Technical Analysis',
                      description: 'Reads price action, patterns, and indicators for precise entries and exits.',
                      icon: analysis
                    },
                    {
                      step: '2',
                      title: 'Fundamental Filter',
                      description: 'Considers economic news, geopolitical events, and macro drivers that move gold.',
                      icon: filter
                    },
                    {
                      step: '3',
                      title: 'Strategy Execution',
                      description: 'Adaptive, predefined strategies tuned for consistent performance and risk management.',
                      icon: execution
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-[#0b0f14] rounded-2xl md:max-w-[357px] border border-[#6cbd45] p-6"
                    >
                      <div className="absolute -top-5 -right-3 w-12 h-12 rounded-full bg-[#E0A130] flex items-center justify-center shadow-lg shadow-[#E0A130]/30">
                        <span className="text-black">{item.step}</span>
                      </div>

                      <div className="">
                        <div className="mb-4">
                          <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                        </div>
                        <h3 className="text-xl text-white mb-3">{item.title}</h3>
                        <p className="text-[#d9e0d8]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="sticky top-0 right-0 h-auto xl:max-h-[580px] max-w-[350px] mx-auto lg:max-w-[516px]">
                  <img src={processImg} className='w-full h-full' alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* Market Focus Section */}
          <section id="markets" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Trading Markets</p>
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-white">Forex & </span>
                  <span className="text-[#E0A130]">XAUUSD</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b0f14] rounded-2xl border-2 border-[#6cbd45] p-8"
                >
                  <div className="md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">💱</span>
                  </div>
                  <h3 className="text-2xl text-white mb-4">Forex</h3>
                  <p className="text-[#d9e0d8]">
                    The world's largest and most liquid financial market, with continuous 24/5 trading across global currency pairs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b0f14] rounded-2xl border-2 border-[rgba(224,161,48,0.3)] p-8"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">🪙</span>
                  </div>
                  <h3 className="text-2xl text-white mb-4">XAUUSD</h3>
                  <p className="text-[#d9e0d8]">
                    Gold vs USD – a sought-after safe-haven asset that thrives during market uncertainty and economic volatility.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border-2 border-[rgba(224,161,48,0.3)] p-12 text-center"
                style={{ background: 'linear-gradient(90deg, rgba(242, 214, 142, 0.1) 0%, rgba(200, 157, 60, 0.05) 50%, rgba(0, 0, 0, 0) 100%)' }}
              >
                <p className="text-[#d9e0d8] mb-2">Enter the world's largest market:</p>
                <p className="text-6xl text-[#E0A130] mb-2">$9 trillion</p>
                <p className="text-[#d9e0d8]">daily transactions</p>
              </motion.div>
            </div>
          </section>

          {/* Nexium Benefits Section */}
          <NexiumBenefits />

          {/* Performance Section */}
          <section id="results" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Performance</p>
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-white">Real Trades. Real Profits. </span>
                  <span className="text-[#E0A130]">Proven Results.</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { value: '97-99%', label: 'Win Ratio' },
                  { value: '15-25%', label: 'Monthly Profit' },
                  { value: '<20%', label: 'Max Drawdown' },
                  { value: '2019', label: 'Active Since' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-b from-[#0f141b] to-[#141a22] rounded-2xl border border-[#6cbd45] p-6 text-center"
                  >
                    <div className="text-3xl text-[#E0A130] mb-2">{stat.value}</div>
                    <div className="text-[#d9e0d8]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <MonthlyGrowthChart />
              </motion.div>

              <p className="text-center text-[#d9e0d8] text-sm mt-8">
                Past performance is not indicative of future results. No guarantees. Metrics are illustrative; trading involves risk.
              </p>
            </div>
          </section>

          {/* Results Highlight Section */}
          <section id="results-highlight" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Auto slider with tilted sides */}
                <ResultsSlider />

                {/* Right: Heading and description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full text-center"
                >
                  <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mb-4">
                    <span className="text-white">The </span>
                    <span className="text-[#E0A130]">Results</span>
                  </h2>
                  <p className="text-white font-semibold mb-3 max-w-xl mx-auto">Real Trades. Real Profits. Proven Results</p>
                  <p className="text-[#9aa3ab] max-w-xl mx-auto">
                    Experience consistent success with <b>AlphaXAU Miner's</b> reliable and precise trading strategies. See the results for yourself.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Investment</p>
                <h2 className="text-4xl lg:text-5xl">
                  <span className="text-white">Simple </span>
                  <span className="text-[#E0A130]">Pricing</span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0b0f14] rounded-2xl border border-[rgba(224,161,48,0.5)] p-8 lg:p-12 max-w-md mx-auto"
              >
                <div className="inline-block px-4 py-1 bg-[#E0A130] rounded-lg mb-6">
                  <span className="text-[#0b0f14] text-sm">Best Value</span>
                </div>

                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl text-[#E0A130]">$19</span>
                  <span className="text-[#d9e0d8] mb-2">for 12 months</span>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    'Full access to AlphaXAU Miner',
                    'Free updates & improvements',
                    '24/7 customer support',
                    'Educational resources',
                    'Risk management tools'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167L3.333 10" stroke="#6CBD45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-[#005829] border border-[#6CBD454D] text-white font-semibold rounded-xl hover:bg-[#5dad3a] transition-all hover:shadow-lg hover:shadow-[#6CBD45]/20 cursor-pointer">
                  Get AlphaXAU Miner
                </button>
              </motion.div>

              {/* Comparison Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-2xl text-center mb-8">
                  <span className="text-white">AlphaXAU Miner vs </span>
                  <span className="text-[#d9e0d8]">Others</span>
                </h3>

                <div className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-[rgba(242,214,142,0.1)] to-[rgba(200,157,60,0.1)] border-b border-[#6cbd45]">
                        <tr>
                          <th className="text-left p-4 text-[#d9e0d8]">Feature</th>
                          <th className="text-center p-4 text-[#E0A130]">AlphaXAU Miner</th>
                          <th className="text-center p-4 text-[#d9e0d8]">Others</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(30,39,50,0.5)]">
                        {[
                          { feature: 'Monthly Profit', alpha: '15–25%*', others: '~5%*' },
                          { feature: 'Winning Ratio', alpha: 'Exclusively XAUUSD (Gold) with expert-level optimization ', others: 'Trades on many symbols with the same bot ' },
                          { feature: 'Trading Symbols', alpha: 'Exclusively XAUUSD (Gold) with expert-level optimization', others: 'Trades on many symbols with the same bot ' },
                          { feature: 'Drawdown', alpha: 'Less than 20%', others: 'Up to 80%' },
                          { feature: 'Strategy', alpha: 'Price Action (Low Risk)', others: 'Martingale/Grid/HFT (High Risk)' },
                          { feature: 'Spread Protection ', alpha: 'Yes', others: 'Unverified Results (Fake)' },
                          { feature: 'Free Updates', alpha: 'Yes', others: 'No' },
                          { feature: 'Support', alpha: '24/7', others: 'No' }
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="p-4 text-white">{row.feature}</td>
                            <td className="p-4 text-center text-[#E0A130] bg-gradient-to-r from-[rgba(242,214,142,0.05)] to-[rgba(200,157,60,0.05)]">{row.alpha}</td>
                            <td className="p-4 text-center text-[#d9e0d8]">{row.others}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-center text-[#d9e0d8] text-sm mt-6">
                  *Illustrative comparisons; performance varies. Not a guarantee.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Easy Setup Section */}
          <section id="setup" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Get Started</p>
                <h2 className="text-4xl lg:text-5xl mb-4">
                  <span className="text-white">Easy </span>
                  <span className="text-[#E0A130]">Setup</span>
                </h2>
                <p className="text-[#d9e0d8]">Get up and running in minutes with our streamlined onboarding process</p>
              </div>

              {/* Step indicators */}
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-16">
                {[1, 2, 3].map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#E0A130] flex items-center justify-center shadow-lg shadow-[#E0A130]/30">
                      <span className="text-2xl text-black">{step}</span>
                    </div>
                    {index < 2 && (
                      <div className="w-20 md:w-24 h-0.5 bg-[#E0A130]/30 mx-2" />
                    )}
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: '👤',
                    title: 'Create Account',
                    description: 'Start your automated trading journey with a simple registration.'
                  },
                  {
                    icon: '⚙️',
                    title: 'Set up AlphaXAU Miner',
                    description: 'User-friendly onboarding; tailor settings to your trading style.'
                  },
                  {
                    icon: '💸',
                    title: 'Sit Back and Make Profits',
                    description: 'Automated, precise trades execute while you focus on goals.'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-6 text-center"
                  >
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl text-white mb-3">{step.title}</h3>
                    <p className="text-[#d9e0d8]">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="px-8 py-4 bg-[#005829] text-white font-semibold rounded-xl hover:bg-[#5dad3a] transition-all hover:shadow-lg hover:shadow-[#6CBD45]/20 border border-[#6CBD454D] cursor-pointer"
                >
                  Ready to trade in minutes!
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">FAQs</p>
                <h2 className="text-4xl lg:text-5xl mb-4">
                  <span className="text-white">Frequently Asked </span>
                  <span className="text-[#E0A130]">Questions</span>
                </h2>
                <p className="text-[#d9e0d8]">Everything you need to know about our platform</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[rgba(108,189,69,0.05)] rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-[rgba(108,189,69,0.1)] transition-colors"
                    >
                      <span className="text-white text-lg">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="text-[#6CBD45]" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeAccordion === index ? 'auto' : 0,
                        opacity: activeAccordion === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#d9e0d8]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-10 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-[#E0A130] text-sm tracking-widest uppercase mb-2">Get In Touch</p>
                <h2 className="text-4xl lg:text-5xl mb-4">
                  <span className="text-white">Thank You & </span>
                  <span className="text-[#E0A130]">Contact Us</span>
                </h2>
                <p className="text-[#d9e0d8]">For inquiries, support, or partnerships, reach us via the contact form, email, or phone.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-8"
                >
                  <form className="space-y-6">
                    <div>
                      <label className="block text-white mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[rgba(38,38,38,0.3)] border border-[#6cbd45] rounded-xl text-white placeholder-[#a1a1a1] focus:outline-none focus:border-[#6CBD45]"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-[rgba(38,38,38,0.3)] border border-[#6cbd45] rounded-xl text-white placeholder-[#a1a1a1] focus:outline-none focus:border-[#6CBD45]"
                      />
                    </div>

                    <div>
                      <label className="block text-white mb-2">Topic</label>
                      <select className="w-full px-4 py-3 bg-[rgba(38,38,38,0.3)] border border-[#6cbd45] rounded-xl text-white focus:outline-none focus:border-[#6CBD45]">
                        <option>Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Your message..."
                        className="w-full px-4 py-3 bg-[rgba(38,38,38,0.3)] border border-[#6cbd45] rounded-xl text-white placeholder-[#a1a1a1] focus:outline-none focus:border-[#6CBD45]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#005829] text-white rounded-xl hover:bg-[#5dad3a] transition-all hover:shadow-lg hover:shadow-[#6CBD45]/20 border border-[#6CBD454D] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>✉️</span>
                      <span>Send Message</span>
                    </button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <h3 className="text-white text-lg mb-1">Email</h3>
                        <p className="text-[#E0A130]">support@alphagoldtrading.com</p>
                        <p className="text-[#d9e0d8] text-sm mt-1">We reply within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <h3 className="text-white text-lg mb-1">Phone</h3>
                        <p className="text-[#E0A130]">+1 (555) 123-4567</p>
                        <p className="text-[#d9e0d8] text-sm mt-1">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0b0f14] rounded-2xl border border-[#6cbd45] p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">💬</div>
                      <div>
                        <h3 className="text-white text-lg mb-1">24/7 Support</h3>
                        <p className="text-[#E0A130]">Live Chat Available</p>
                        <p className="text-[#d9e0d8] text-sm mt-1">Always here to help</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#6cbd45]/30 p-6" style={{ background: 'linear-gradient(90deg, rgba(22, 226, 165, 0.1) 0%, rgba(0, 209, 255, 0.05) 50%, rgba(0, 0, 0, 0) 100%)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#6CBD45]" />
                      <p className="text-white">Our team is available 24/7 to assist you</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

        </>
      )}

      {/* Footer */}
      <footer className="relative border-t border-[#6cbd45]/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">


          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} className='max-w-[176px]' alt="" />
              </div>
              <p className="text-[#d9e0d8] text-sm mb-4">
                Automated gold trading powered by advanced Price Action strategies.
              </p>
              <div className="flex gap-3 text-white">
                {['𝕏', 'in', '▶', '📷'].map((icon, index) => (
                  <button
                    key={index}
                    className="w-9 h-9 bg-[#0b0f14] border border-[#6cbd45] rounded-xl flex items-center justify-center hover:bg-[#6cbd45] hover:text-black transition-all"
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-1 lg:px-2 py-2 mt-4 cursor-pointer font-semibold border-[#1499e9] border hover:bg-[#1499e9] text-white rounded-[10px] transition-all w-full "
              >
                Join Telegram
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <div className="space-y-2">
                {navLinks.slice(4).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white mb-4">Legal</h4>
              <div className="space-y-2">
                <button onClick={() => navigate('/terms')} className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm cursor-pointer">Terms of Service</button>
                <button onClick={() => navigate('/privacy')} className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm cursor-pointer">Privacy Policy</button>
                <button className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm cursor-pointer">Risk Disclosure</button>
                <button className="block text-[#d9e0d8] hover:text-[#6CBD45] transition-colors text-sm cursor-pointerExperience consistent su">Cookie Policy</button>
              </div>
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className="bg-[#0b0f14] rounded-xl border border-[#6cbd45] p-6 mb-12">
            <p className="text-white text-sm leading-relaxed">
              <strong>Risk Disclosure:</strong> Trading involves substantial risk and is not suitable for every investor. Past performance is not indicative of future results. No profits are guaranteed. <b>AlphaXAU</b> Miner is a trading tool and does not provide financial advice. Use at your own risk. All rights reserved to <b>AlphaXAU Trading</b> .
            </p>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[#6cbd45]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#d9e0d8]">
              © 2025 AlphaXAU Trading. All rights reserved.
            </p>
            <p className="text-[#d9e0d8] flex items-center gap-2">
              Made with <span className="text-[#E0A130]">❤️</span> for Traders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
