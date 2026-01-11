import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import lockIcon from '../assets/lock.svg';

function Recruit() {
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
      <div className="recruit-page">
        {/* 별들 */}
        <div className="stars-container" aria-hidden="true">
          {generateStars(50, 'star-sm')}
          {generateStars(30, 'star-md')}
          {generateStars(15, 'star-lg')}
        </div>

        {/* 유성 */}
        <div className="shooting-star shooting-star-1" aria-hidden="true"></div>
        <div className="shooting-star shooting-star-2" aria-hidden="true"></div>

        <Navigation currentPage="recruit" />

      <section className="recruit">
        <div className="recruit-inner">
          <div className="recruit-header">
            <h2 className="recruit-title">모집 안내</h2>
            <p className="recruit-subtitle">AEGIS에 함께할 멤버를 모집합니다.</p>
            <a href="https://join.dkuaegis.org/login" target="_blank" rel="noopener noreferrer" className="recruit-cta-btn">가입하러가기</a>
          </div>

          <div className="recruit-content">
            <div className="recruit-notice">
              <div className="notice-item">
                <div className="notice-icon">👥</div>
                <div>
                  <p><strong>모집 대상:</strong> 단국대학교 신입생, 재학생, 휴학생</p>
                  <p className="notice-sub">학년과 전공에 관계없이 보안과 개발에 관심이 있다면 누구나 환영합니다!</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-icon">📞</div>
                <p>회원가입 과정에서 문제가 발생하면 언제든 문의란의 연락처로 문의주세요.</p>
              </div>

              <div className="notice-item">
                <div className="notice-icon">🔒</div>
                <div>
                  <p>구글 로그인 과정에서 <strong>403 에러</strong>가 발생하시는 분은 링크를 복사하고 크롬이나 사파리에서 접속해주세요.</p>
                  <p className="notice-sub">구글 보안 정책상 인앱 브라우저에서 로그인이 불가능 합니다.</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-icon">💳</div>
                <div>
                  <p>회비는 <strong>15,000원</strong>입니다.</p>
                  <p className="notice-sub">이전 운영진은 회비가 면제되니 문의란의 연락처로 문의주세요.</p>
                </div>
              </div>
            </div>

            {/* 모집 직군 섹션 */}
            <div className="recruit-positions">
              <h2 className="positions-title">모집 직군</h2>
              <p className="positions-subtitle">AEGIS에서 함께 성장해나가실 분들을 모집합니다.</p>
              <div className="teams-grid">
                <div className="team-card team-security">
                  <div className="team-card-header">
                    <span className="team-label">보안</span>
                    <span className="team-name">SECURITY.</span>
                  </div>
                  <div className="team-card-icon">
                    <img src={lockIcon} alt="보안팀 아이콘" style={{ width: '320px' }} />
                  </div>
                  <div className="team-card-arrow">→</div>
                  <p className="team-description">시스템 취약점 분석, 모의해킹, CTF 대회 참가 등 보안 관련 활동을 진행합니다.</p>
                </div>

                <div className="team-card team-dev">
                  <div className="team-card-header">
                    <span className="team-label">개발</span>
                    <span className="team-name">DEVELOPMENT.</span>
                  </div>
                  <div className="team-card-icon">
                    <span className="code-icon">&lt;/&gt;</span>
                  </div>
                  <div className="team-card-arrow">→</div>
                  <p className="team-description">팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default Recruit;
