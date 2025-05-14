'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // 첫 번째 컨텐츠 영역을 선택
      const contentSection = document.querySelector('.ma-article__section:first-child');
      if (!contentSection) return;
      
      const sections = ['profile', 'experience', 'skills', 'projects', 'contact'];
      
      // 각 섹션에 대해 현재 화면에 보이는지 확인
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          // 헤더의 높이를 고려하여 약간의 여유를 둡니다
          if (sectionTop <= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    // 첫 번째 컨텐츠 영역에 스크롤 이벤트 리스너 연결
    const contentSection = document.querySelector('.ma-article__section:first-child');
    if (contentSection) {
      contentSection.addEventListener('scroll', handleScroll);
      return () => contentSection.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const contentSection = document.querySelector('.ma-article__section:first-child');
      if (contentSection) {
        contentSection.scrollTo({
          top: section.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="ma-nav flex-1">
      <ul className="ma-nav__list">
        <li className={`ma-nav__item ${activeSection === 'profile' ? 'ma-nav__item--active' : ''}`}>
          <a href="#profile" onClick={(e) => { e.preventDefault(); scrollToSection('profile'); }}>Profile</a>
        </li>
        <li className={`ma-nav__item ${activeSection === 'experience' ? 'ma-nav__item--active' : ''}`}>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
        </li>
        <li className={`ma-nav__item ${activeSection === 'skills' ? 'ma-nav__item--active' : ''}`}>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        </li>
        <li className={`ma-nav__item ${activeSection === 'projects' ? 'ma-nav__item--active' : ''}`}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        </li>
        <li className={`ma-nav__item ${activeSection === 'contact' ? 'ma-nav__item--active' : ''}`}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button 
        className="md:hidden absolute top-4 right-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile navigation - only shown on small screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-16">
          <button 
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <ul className="flex flex-col items-center pt-8">
            <li className="py-4">
              <a 
                href="#profile" 
                className="text-2xl font-bold tracking-wider uppercase"
                onClick={(e) => { e.preventDefault(); scrollToSection('profile'); }}
              >
                Profile
              </a>
            </li>
            <li className="py-4">
              <a 
                href="#experience" 
                className="text-2xl font-bold tracking-wider uppercase"
                onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
              >
                Experience
              </a>
            </li>
            <li className="py-4">
              <a 
                href="#skills" 
                className="text-2xl font-bold tracking-wider uppercase"
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              >
                Skills
              </a>
            </li>
            <li className="py-4">
              <a 
                href="#projects" 
                className="text-2xl font-bold tracking-wider uppercase"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Projects
              </a>
            </li>
            <li className="py-4">
              <a 
                href="#contact" 
                className="text-2xl font-bold tracking-wider uppercase"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header; 