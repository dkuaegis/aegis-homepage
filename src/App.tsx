import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  // 별들을 생성하는 함수
  const generateStars = (count: number, className: string) => {
    return Array.from({ length: count }, (_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      };
      return <div key={`${className}-${i}`} className={`star ${className}`} style={style} aria-hidden="true" />;
    });
  };

  return (
    <>
      <main className="hero">
        {/* 별들 */}
        <div className="stars-container" aria-hidden="true">
          {generateStars(50, 'star-sm')}
          {generateStars(30, 'star-md')}
          {generateStars(15, 'star-lg')}
        </div>
        
        {/* 유성 */}
        <div className="shooting-star shooting-star-1" aria-hidden="true"></div>
        <div className="shooting-star shooting-star-2" aria-hidden="true"></div>
        
        <div className="hero-frame" aria-hidden="true"></div>
        <div className="panel-left" aria-hidden="true"></div>
        <div className="signal" aria-hidden="true"></div>
        <div className="spark s1" aria-hidden="true"></div>
        <div className="spark s2" aria-hidden="true"></div>
        <div className="spark s3" aria-hidden="true"></div>

        <Navigation currentPage="home" />

        <section className="hero-main">
          <div className="club-tag">단국대학교 개발·보안 동아리</div>
          <h1 className="hero-title">AEGIS</h1>
          <p className="hero-sub">
            보안과 개발의 경계를 함께 탐구하고, 안전한 제품을 만드는 실전형 스터디·프로젝트 커뮤니티.
          </p>
          <div className="value-grid">
            <div className="value">Secure Coding</div>
            <div className="value">Threat Modeling</div>
            <div className="value">Red &amp; Blue Team</div>
            <div className="value">Product Security</div>
          </div>
        </section>

        <footer className="hero-footer">
          <div className="line"></div>
          <span>AEGIS 2026</span>
        </footer>
      </main>

      <section className="activity" id="activity">
        <div className="activity-inner">
          <div>
            <div className="activity-title">Activity</div>
          </div>
          <div className="activity-grid">
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners-inner">
          <div className="partners-title">Partnerships</div>
          <div className="partners-grid">
            <div className="partner-card">Partner Logo</div>
            <div className="partner-card">Partner Logo</div>
            <div className="partner-card">Partner Logo</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App
