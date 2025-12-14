import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
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

const BookFlip: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPage = (index: number) => {
    if (isFlipping || index < 0 || index >= pages.length || index === currentPage) return;

    setIsFlipping(true);

    // Logic: Đợi animation chạy xong mới update state để tránh giật
    setTimeout(() => {
      setCurrentPage(index);
      setIsFlipping(false);
    }, 1500); // Khớp với transition duration
  };

  const goToNext = () => goToPage(currentPage + 1);
  const goToPrev = () => goToPage(currentPage - 1);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isFlipping) return;
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = 0; // Reset
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent default scrolling when swiping
    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isFlipping) return;
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (isFlipping || touchStartX.current === 0 || touchEndX.current === 0) return;
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe left - next page
        goToNext();
      } else {
        // Swipe right - previous page
        goToPrev();
      }
    }
    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFlipping) return;
      if (e.key === 'ArrowLeft' && currentPage > 0) {
        e.preventDefault();
        goToPage(currentPage - 1);
      } else if (e.key === 'ArrowRight' && currentPage < pages.length - 1) {
        e.preventDefault();
        goToPage(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping]);

  // LOGIC QUAN TRỌNG NHẤT: Tính toán style dựa trên vị trí trang
  const getPageStyle = (index: number): React.CSSProperties => {
    // 1. Z-Index: Trang càng gần currentPage thì zIndex càng cao
    let zIndex = 0;
    if (index === currentPage) {
      zIndex = 10;
    } else if (index > currentPage) {
      // Trang bên phải (chưa đọc): index càng nhỏ càng nằm trên
      zIndex = 10 - (index - currentPage);
    } else {
      // Trang bên trái (đã đọc): index càng lớn càng nằm trên
      zIndex = 10 - (currentPage - index);
    }

    // 2. Transform:
    // - Trang đã qua (index < currentPage): Đã lật sang trái -> rotateY(-180deg)
    // - Trang hiện tại và chưa tới (index >= currentPage): Đang ở bên phải -> rotateY(0deg)
    const rotation = index < currentPage ? -180 : 0;

    return {
      zIndex,
      transform: `rotateY(${rotation}deg)`,
    };
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#f6f0df',
        perspective: isMobile ? '1500px' : '2000px',
        perspectiveOrigin: 'center center',
        touchAction: 'pan-y', // Allow vertical scroll, prevent horizontal
        WebkitOverflowScrolling: 'touch',
        WebkitTapHighlightColor: 'transparent',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Dots - Hidden on mobile, shown on desktop */}
      <div
        style={{
          position: 'fixed',
          right: 'clamp(10px, 2vw, 20px)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(8px, 1.5vw, 12px)',
        }}
        className="nav-dots"
      >
        {pages.map((page, index) => {
          const isActive = currentPage === index;
          return (
            <button
              key={page.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isFlipping) return;
                goToPage(index);
              }}
              disabled={isFlipping}
              style={{
                width: 'clamp(8px, 1.5vw, 12px)',
                height: 'clamp(8px, 1.5vw, 12px)',
                minWidth: 'clamp(8px, 1.5vw, 12px)',
                minHeight: 'clamp(8px, 1.5vw, 12px)',
                borderRadius: '50%',
                border: 'none',
                background: isActive ? '#dc6139' : '#d4c5b0',
                cursor: isFlipping ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                padding: 0,
                opacity: isFlipping && !isActive ? 0.5 : 1,
                touchAction: 'manipulation',
              }}
              title={page.title}
              aria-label={`Go to ${page.title}`}
            />
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {currentPage > 0 && (
        <Button
          type="primary"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goToPrev();
          }}
          disabled={isFlipping}
          size="large"
          style={{
            position: 'fixed',
            left: 'clamp(10px, 2vw, 20px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 'clamp(44px, 8vw, 56px)',
            height: 'clamp(44px, 8vw, 56px)',
            minWidth: 'clamp(44px, 8vw, 56px)',
            minHeight: 'clamp(44px, 8vw, 56px)',
            background: '#fff',
            borderColor: '#dc6139',
            color: '#dc6139',
            boxShadow: '0 4px 16px rgba(220, 97, 57, 0.2)',
            opacity: isFlipping ? 0.5 : 1,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            touchAction: 'manipulation',
          }}
          onMouseEnter={(e) => {
            if (!isFlipping) {
              e.currentTarget.style.background = '#dc6139';
              e.currentTarget.style.borderColor = '#dc6139';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 97, 57, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isFlipping) {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.borderColor = '#dc6139';
              e.currentTarget.style.color = '#dc6139';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(220, 97, 57, 0.2)';
            }
          }}
          aria-label="Previous page"
        />
      )}

      {currentPage < pages.length - 1 && (
        <Button
          type="primary"
          shape="circle"
          icon={<RightOutlined />}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goToNext();
          }}
          disabled={isFlipping}
          size="large"
          style={{
            position: 'fixed',
            right: 'clamp(50px, 8vw, 60px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            width: 'clamp(44px, 8vw, 56px)',
            height: 'clamp(44px, 8vw, 56px)',
            minWidth: 'clamp(44px, 8vw, 56px)',
            minHeight: 'clamp(44px, 8vw, 56px)',
            background: '#fff',
            borderColor: '#dc6139',
            color: '#dc6139',
            boxShadow: '0 4px 16px rgba(220, 97, 57, 0.2)',
            opacity: isFlipping ? 0.5 : 1,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            touchAction: 'manipulation',
          }}
          onMouseEnter={(e) => {
            if (!isFlipping) {
              e.currentTarget.style.background = '#dc6139';
              e.currentTarget.style.borderColor = '#dc6139';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 97, 57, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isFlipping) {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.borderColor = '#dc6139';
              e.currentTarget.style.color = '#dc6139';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(220, 97, 57, 0.2)';
            }
          }}
          aria-label="Next page"
        />
      )}

      {/* Page Counter */}
      <div
        style={{
          position: 'fixed',
          bottom: 'clamp(10px, 2vh, 20px)',
          right: 'clamp(10px, 2vw, 20px)',
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.9)',
          padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
          borderRadius: 20,
          color: '#dc6139',
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {currentPage + 1} / {pages.length}
      </div>

      {/* Book Container with 3D effect */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
        }}
      >
        {pages.map((page, index) => {
          const PageComponent = page.component;
          const style = getPageStyle(index);

          return (
            <div
              key={page.id}
              style={{
                position: 'absolute',
                width: isMobile ? '90vw' : '45vw',
                maxWidth: isMobile ? '100%' : 600,
                height: isMobile ? '85vh' : '80vh',
                maxHeight: isMobile ? '85vh' : '80vh',

                // CẤU HÌNH 3D CHUẨN:
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center', // LUÔN LUÔN LÀ LEFT CENTER (Gáy sách)
                transition: 'transform 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)',

                // Áp dụng style tính toán
                transform: style.transform,
                zIndex: style.zIndex,

                // Fix lỗi display none: Dùng visibility thay vì display
                visibility: Math.abs(index - currentPage) <= 1 ? 'visible' : 'hidden',
                pointerEvents: Math.abs(index - currentPage) <= 1 ? 'auto' : 'none',
              }}
            >
              {/* MẶT TRƯỚC (Nội dung) */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  background: '#fff',
                  borderRadius: '0 8px 8px 0', // Bo góc bên phải (bên trái là gáy phẳng)
                  boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.05), 0 5px 15px rgba(0,0,0,0.1)',
                  padding: isMobile
                    ? 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 24px)'
                    : 'clamp(40px, 5vw, 60px) clamp(40px, 6vw, 80px)',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  transform: 'rotateY(0deg)',
                  boxSizing: 'border-box',
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                }}
              >
                <PageComponent />
              </div>

              {/* MẶT SAU (Lưng trang sách - khi lật sang trái) */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)', // Mặt sau phải xoay sẵn 180 để khớp
                  background: '#eaddcf',
                  borderRadius: '8px 0 0 8px', // Bo góc bên trái (lúc này nó lật ngược lại)
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.05)',
                }}
              >
                {/* Logic hiển thị tiêu đề trang tiếp theo hoặc trang trí */}
                <h2 style={{ color: '#dc6139', transform: 'scaleX(-1)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, opacity: 0.5 }}>
                  {pages[index + 1]?.title || page.title}
                </h2>
                {/* scaleX(-1) để chữ không bị ngược khi nhìn vào gương */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookFlip;
