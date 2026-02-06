import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth, type AuthUser } from "../api/auth";

interface NavigationProps {
  currentPage?: "home" | "faq" | "recruit" | "contact" | "login";
}

function Navigation({ currentPage = "home" }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser>({
    isAuthenticated: false,
    status: null,
  });
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    checkAuth().then(setAuthUser);
  }, []);

  const { isAuthenticated, status } = authUser;

  const scrollToActivity = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage === "home") {
      const activitySection = document.getElementById("activity");
      if (activitySection) {
        activitySection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const activitySection = document.getElementById("activity");
        if (activitySection) {
          activitySection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const renderAuthLinks = (isMobile = false) => {
    if (!isAuthenticated) {
      return (
        <a
          href={`${API_URL}/oauth2/authorization/google`}
          className={
            isMobile
              ? "px-32 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm inline-block text-center"
              : "auth-button"
          }
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
        >
          LOGIN
        </a>
      );
    }

    if (status === "PENDING") {
      return (
        <a
          href="https://join.dkuaegis.org"
          className={
            isMobile
              ? "px-32 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm inline-block text-center"
              : "auth-button"
          }
          onClick={isMobile ? () => setMenuOpen(false) : undefined}
        >
          JOIN US
        </a>
      );
    }

    if (status === "COMPLETED") {
      return null;
    }

    return null;
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          AEGIS
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#activity" onClick={scrollToActivity}>
              ACTIVITY
            </a>
            <Link to="/faq" className={currentPage === "faq" ? "active" : ""}>
              FAQ
            </Link>
            {status !== "COMPLETED" && (
              <Link
                to="/recruit"
                className={currentPage === "recruit" ? "active" : ""}
              >
                RECRUIT
              </Link>
            )}
            <Link
              to="/contact"
              className={currentPage === "contact" ? "active" : ""}
            >
              CONTACT
            </Link>
            {status === "COMPLETED" && (
              <>
                <a href="https://study.dkuaegis.org">STUDY</a>
                <a href="https://mypage.dkuaegis.org">MYPAGE</a>
              </>
            )}
          </div>
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
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            AEGIS
          </Link>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="메뉴 닫기"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mobile-menu-links">
          <a
            href="#activity"
            onClick={(e) => {
              scrollToActivity(e);
              setMenuOpen(false);
            }}
          >
            ACTIVITY
          </a>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          {status !== "COMPLETED" && (
            <Link to="/recruit" onClick={() => setMenuOpen(false)}>
              RECRUIT
            </Link>
          )}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
          {status === "COMPLETED" && (
            <>
              <a
                href="https://study.dkuaegis.org"
                onClick={() => setMenuOpen(false)}
              >
                STUDY
              </a>
              <a
                href="https://mypage.dkuaegis.org"
                onClick={() => setMenuOpen(false)}
              >
                MYPAGE
              </a>
            </>
          )}
          {renderAuthLinks(true)}
        </div>
      </div>

      {/* 모바일 메뉴 배경 오버레이 */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navigation;
