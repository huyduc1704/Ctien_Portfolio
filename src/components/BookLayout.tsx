import React, { useState, useRef, useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const pages = [
  { id: 'hero', component: Hero, title: 'Giới thiệu' },
  { id: 'about', component: About, title: 'Về mình' },
  { id: 'skills', component: Skills, title: 'Kỹ năng' },
  { id: 'experience', component: Experience, title: 'Kinh nghiệm' },
  { id: 'projects', component: Projects, title: 'Dự án' },
  { id: 'education', component: Education, title: 'Học vấn' },
  { id: 'contact', component: Contact, title: 'Liên hệ' },
];

const BookLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.clientWidth;
      const newPage = Math.round(scrollLeft / pageWidth);
      
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  const goToPage = (index: number) => {
    if (pageRefs.current[index] && containerRef.current) {
      pageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentPage(index);
    }
  };

  const goToNext = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#f6f0df',
      }}
    >
      {/* Navigation Dots */}
      <div
        style={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => goToPage(index)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              border: 'none',
              background: currentPage === index ? '#dc6139' : '#d4c5b0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0,
            }}
            title={page.title}
            aria-label={`Go to ${page.title}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentPage > 0 && (
        <button
          onClick={goToPrev}
          style={{
            position: 'fixed',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '2px solid #dc6139',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#dc6139',
            cursor: 'pointer',
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#dc6139';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#dc6139';
          }}
          aria-label="Previous page"
        >
          ‹
        </button>
      )}

      {currentPage < pages.length - 1 && (
        <button
          onClick={goToNext}
          style={{
            position: 'fixed',
            right: 60,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '2px solid #dc6139',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#dc6139',
            cursor: 'pointer',
            fontSize: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#dc6139';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#dc6139';
          }}
          aria-label="Next page"
        >
          ›
        </button>
      )}

      {/* Page Counter */}
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 16px',
          borderRadius: 20,
          color: '#dc6139',
          fontSize: 14,
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {currentPage + 1} / {pages.length}
      </div>

      {/* Book Container */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {pages.map((page, index) => {
          const PageComponent = page.component;
          return (
            <div
              key={page.id}
              ref={(el) => {
                pageRefs.current[index] = el;
              }}
              style={{
                minWidth: '100vw',
                width: '100vw',
                height: '100vh',
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                boxSizing: 'border-box',
              }}
            >
              {/* Page Style */}
              <div
                style={{
                  width: '100%',
                  maxWidth: 900,
                  height: '100%',
                  background: '#fff',
                  borderRadius: 8,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
                  padding: '60px 80px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  position: 'relative',
                }}
              >
                <PageComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookLayout;

