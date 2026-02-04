import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkAuth, type AuthUser } from '../api/auth';

interface NavigationProps {
  currentPage?: 'home' | 'faq' | 'recruit' | 'contact' | 'login';
}

function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser>({ isAuthenticated: false, status: null });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    checkAuth().then(setAuthUser);
  }, []);

  const { isAuthenticated, status } = authUser;

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

  const renderAuthLinks = (isMobile = false) => {
    if (!isAuthenticated) {
      return (
        <a
          href={`${API_URL}/oauth2/authorization/google`}
          className={currentPage === 'login' ? 'active' : ''}
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
        >
          Login
        </a>
      );
    }

    if (status === 'PENDING') {
      return (
        <a
          href="https://join.dkuaegis.org"
          className={isMobile ? '' : 'px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm'}
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
        >
          {isMobile ? 'Join' : '동아리 가입하러 가기'}
        </a>
      );
    }

    if (status === 'COMPLETED') {
      return (
        <>
          <a href="https://study.dkuaegis.org" onClick={isMobile ? () => setMenuOpen(false) : undefined}>Study</a>
          <a href="https://mypage.dkuaegis.org" onClick={isMobile ? () => setMenuOpen(false) : undefined}>Mypage</a>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">AEGIS</Link>
        <div className="nav-links items-center">
          <a href="#activity" onClick={scrollToActivity}>ACTIVITY</a>
          <Link to="/faq" className={currentPage === 'faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/recruit" className={currentPage === 'recruit' ? 'active' : ''}>RECRUIT</Link>
          <Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>CONTACT</Link>
          {renderAuthLinks()}
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
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/recruit" onClick={() => setMenuOpen(false)}>Recruit</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          {renderAuthLinks(true)}
        </div>
      </div>

      {/* 모바일 메뉴 배경 오버레이 */}
      {menuOpen && <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

export default Navigation;
