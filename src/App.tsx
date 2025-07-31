import React, { useState, useEffect } from 'react';
import { Download, Users, Star, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sections = ['home', 'mods', 'supported', 'credits'];

  const navigateToSection = (sectionIndex: number) => {
    if (sectionIndex === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(sectionIndex);
      setIsTransitioning(false);
    }, 300);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        navigateToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        navigateToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return (
    <div className="h-screen overflow-hidden bg-black text-white relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-900/10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/public/standard.gif" 
                  alt="WRXY MODS Logo" 
                  className="w-12 h-12 rounded-xl shadow-lg shadow-red-500/50"
                />
                <div className="absolute inset-0 rounded-xl bg-red-500/20 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                WRXY MODS
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => navigateToSection(index)}
                  className={`nav-link ${currentSection === index ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-400 transition-colors p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-xl border-b border-red-500/20`}>
          <div className="px-6 py-4 space-y-2">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => navigateToSection(index)}
                className={`mobile-nav-link ${currentSection === index ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section Container */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* Home Section */}
        {currentSection === 0 && (
          <section className="h-screen flex items-center justify-center relative pt-48">
            <div className="text-center px-4 sm:px-6 max-w-6xl mx-auto">
              <div className="mb-8 sm:mb-12 animate-fade-in-up">
                <div className="relative inline-block">
                  <img 
                    src="/public/standard.gif" 
                    alt="WRXY MODS Logo" 
                    className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-500 hover:scale-110 logo-glow"
                  />
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-red-500/30 to-red-600/30 animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-glow-pulse">
                  WRXY MODS
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 animate-fade-in-up animation-delay-400 leading-relaxed max-w-4xl mx-auto px-2">
                We create the <span className="text-red-400 font-bold glow-text">best mods for games</span> with cutting-edge features, 
                bypassed security, and premium quality. Experience gaming like never before with our 
                <span className="text-red-400 font-bold glow-text"> professional modding solutions</span>.
              </p>
              
              <div className="animate-fade-in-up animation-delay-600 mb-12 sm:mb-16">
                <a
                  href="https://discord.gg/WzmBnyuCzr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 group glow-button"
                >
                  <Users className="mr-2 sm:mr-4 group-hover:animate-bounce" size={20} />
                  Join Our Discord
                  <ExternalLink className="ml-2 sm:ml-4 group-hover:translate-x-2 transition-transform" size={18} />
                </a>
              </div>
            </div>
            
            {currentSection === 0 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button 
                  onClick={() => navigateToSection(1)}
                  className="flex flex-col items-center text-red-400 hover:text-red-300 transition-colors group"
                >
                  <span className="text-sm mb-2 opacity-70 group-hover:opacity-100">Scroll to explore</span>
                  <ChevronDown size={32} className="animate-pulse" />
                </button>
              </div>
            )}
          </section>
        )}

        {/* Mods Section */}
        {currentSection === 1 && (
          <section className="h-screen flex items-center justify-center py-20 overflow-y-auto pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent glow-text">
                Available Mods
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <div className="mod-card group">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
                    <div className="relative">
                      <img 
                        src="/public/standard.gif" 
                        alt="Opium Tag Mod" 
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mb-4 sm:mb-0 sm:mr-6 shadow-lg shadow-red-500/50"
                      />
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-red-500/20 animate-pulse"></div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-2 glow-text">Opium Tag</h3>
                      <p className="text-gray-300 text-base sm:text-lg">Made By Realshi/.xd.kat/</p>
                      <p className="text-gray-400 text-sm sm:text-base">More coming later - APKs was JS testing things</p>
                      <p className="text-yellow-400 mt-2 font-semibold text-sm sm:text-base">⚠️ Make sure to make vids with the modded APK</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="feature-category">
                      <h4 className="text-red-400 font-bold mb-3 sm:mb-4 text-lg sm:text-xl glow-text">🏃 Movement</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="feature-item">Scale LongArms(W) (T)</li>
                        <li className="feature-item">Fly (T) (W)</li>
                        <li className="feature-item">Up Nd Down (W) (T)</li>
                        <li className="feature-item">PlatForms (G)</li>
                        <li className="feature-item">No Gravity</li>
                        <li className="feature-item">Speed Boost</li>
                      </ul>
                    </div>
                    
                    <div className="feature-category">
                      <h4 className="text-red-400 font-bold mb-3 sm:mb-4 text-lg sm:text-xl glow-text">⚙️ Other</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="feature-item">Anti Skid</li>
                        <li className="feature-item">Bypassed All Checks</li>
                        <li className="feature-item">No Name</li>
                        <li className="feature-item">Custom Checks</li>
                        <li className="feature-item">Custom Auth / Bypassed Auth</li>
                        <li className="feature-item">Custom Login</li>
                        <li className="feature-item">New Gui</li>
                      </ul>
                    </div>
                    
                    <div className="feature-category">
                      <h4 className="text-red-400 font-bold mb-3 sm:mb-4 text-lg sm:text-xl glow-text">👁️ Visuals</h4>
                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <li className="feature-item">Box Esp (W?)</li>
                        <li className="feature-item">RGB Gui</li>
                      </ul>
                      <h4 className="text-red-400 font-bold mb-3 sm:mb-4 text-lg sm:text-xl glow-text">💪 Over Powered</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="feature-item">Tag Aura (W?)</li>
                      </ul>
                    </div>
                    
                    <div className="feature-category">
                      <h4 className="text-red-400 font-bold mb-3 sm:mb-4 text-lg sm:text-xl glow-text">🎮 Controls</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="feature-item">X - Enable Things / Go To Pages</li>
                        <li className="feature-item">A - Go Down, B - Go Up</li>
                        <li className="feature-item">Y - Turn Off/On Gui / Go Back</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                      href="https://gofile.io/d/aVUEFR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 group glow-button"
                    >
                      <Download className="mr-2 sm:mr-3 group-hover:animate-bounce" size={20} />
                      Download APK
                    </a>
                    <div className="flex-1 text-center p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-600">
                      <p className="text-gray-300 font-semibold text-sm sm:text-base">Credits: discord.gg/moddinghub / realshi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Supported Games Section */}
        {currentSection === 2 && (
          <section className="h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent glow-text">
                Supported Games
              </h2>
              
              <div className="max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                <div className="supported-game-card group">
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <img 
                        src="/public/standard.gif" 
                        alt="Opium Tag" 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-3 sm:mb-0 sm:mr-4 shadow-lg shadow-red-500/50"
                      />
                      <div className="absolute inset-0 rounded-xl bg-red-500/20 animate-pulse"></div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-red-400 glow-text">Opium Tag</h3>
                      <p className="text-gray-300 text-sm sm:text-base">Fully Supported</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-green-400 text-sm sm:text-base">
                    <Star className="mr-2 animate-pulse" size={16} />
                    <span className="font-semibold">Active Development</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">More games coming soon...</p>
                <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl border border-red-500/30 glow-border">
                  <span className="text-base sm:text-lg text-gray-200">Guild Tag: </span>
                  <span className="ml-2 sm:ml-3 text-xl sm:text-2xl text-red-400 font-bold glow-text">MODZ</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Credits Section */}
        {currentSection === 3 && (
          <section className="h-screen flex items-center justify-center pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent glow-text">
                Credits
              </h2>
              
              <div className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                {/* Top Row - Owner and Developer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div className="credit-card">
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6">
                        <img
                          src="/public/1 (1).webp"
                          alt="WRXY Owner"
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1 sm:mb-2 glow-text">WRXY</h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Owner</p>
                    </div>
                  </div>
                  
                  <div className="credit-card">
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6">
                        <img
                          src="/public/2fca05e4eceb3fa0e6275f8c239647a5.webp"
                          alt="XAlpha922828 Developer"
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1 sm:mb-2 glow-text">XAlpha922828</h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Developer</p>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Row - Website Designer (Centered) */}
                <div className="flex justify-center">
                  <div className="credit-card max-w-sm">
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6">
                        <img
                          src="/public/6617a18545274c53c2fefc82cb827e40.webp"
                          alt="elmejorsiuuu"
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1 sm:mb-2 glow-text">elmejorsiuuu</h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Website Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl border border-red-500/30 glow-border mb-4 sm:mb-6">
                  <div className="relative mb-3 sm:mb-0 sm:mr-4">
                    <img 
                      src="/public/standard.gif" 
                      alt="Discord" 
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-gray-200 font-semibold text-sm sm:text-base">L5 And Realshi Modding Server</p>
                    <p className="text-green-400 text-xs sm:text-sm">771 Online • 4,496 Members</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm sm:text-base px-4">Est. Mar 2025 - A modding hub owned by realshi and l5</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Section Indicators */}
      <div className="fixed right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3 sm:space-y-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-125' 
                : 'bg-gray-600 hover:bg-red-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;