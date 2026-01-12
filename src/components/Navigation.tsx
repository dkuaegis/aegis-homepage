import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationProps {
  currentPage?: 'home' | 'questions' | 'recruit' | 'contact';
}

function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToActivity = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage === 'home') {
      const activitySection = document.getElementById('activity');
      if (activitySection) {
        activitySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const activitySection = document.getElementById('activity');
        if (activitySection) {
          activitySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">AEGIS</Link>
        <div className="nav-links">
          <a href="#activity" onClick={scrollToActivity}>ACTIVITY</a>
          <Link to="/questions" className={currentPage === 'questions' ? 'active' : ''}>FAQ</Link>
          <Link to="/recruit" className={currentPage === 'recruit' ? 'active' : ''}>RECRUIT</Link>
          <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>CONTACT</Link>
        </div>

        {/* 햄버거 버튼 (모바일) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>AEGIS</Link>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          <a href="#activity" onClick={(e) => { scrollToActivity(e); setMenuOpen(false); }}>Activity</a>
          <Link to="/questions" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/recruit" onClick={() => setMenuOpen(false)}>Recruit</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* 모바일 메뉴 배경 오버레이 */}
      {menuOpen && <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Navigation;
