import Navigation from './components/Navigation';
import Footer from './components/Footer';

// 활동 이미지 import
import studyImg from './assets/study.jpeg';
import codeClubImg from './assets/code-club.png';
import devTeamImg from './assets/dev-team.png';
import securityTeamImg from './assets/security-team.png';
import seminarImg from './assets/seminar.jpeg';
import techTalkImg from './assets/tech-talk.jpeg';

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
            <div className="activity-card">
              <div className="activity-card-img">
                <img src={studyImg} alt="스터디" />
              </div>
              <div className="activity-card-content">
                <h3>스터디</h3>
                <p>교내 동아리중 가장 다양하고 수준 높은 스터디를 통해 기초부터 심화까지 함께 공부하며 성장해요</p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-img">
                <img src={codeClubImg} alt="코드클럽" />
              </div>
              <div className="activity-card-content">
                <h3>코드클럽</h3>
                <p>중학생들을 대상으로 코딩 교육 봉사를 진행하며, 가르치는 능력과 봉사시간을 함께 얻어가요</p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-img">
                <img src={devTeamImg} alt="개발팀" />
              </div>
              <div className="activity-card-content">
                <h3>개발팀</h3>
                <p>동아리 내에서 겪는 '실제 문제'를 해결하며, 개발 - 배포 - 운영 - 개선 프로세스를 경험할 수 있어요</p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-img">
                <img src={securityTeamImg} alt="보안팀" />
              </div>
              <div className="activity-card-content">
                <h3>보안팀</h3>
                <p>정기적으로 CTF에 참여하고 내부 세미나로 성과를 공유하며, 개발팀 제품에 대한 보안 검사를 수행해요</p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-img">
                <img src={seminarImg} alt="세미나" />
              </div>
              <div className="activity-card-content">
                <h3>세미나</h3>
                <p>졸업하여 현장에서 다양한 경험을 쌓으신 선배님들과 교류하며 대학 생활과 취업에 관한 꿀팁을 배워봐요</p>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-card-img">
                <img src={techTalkImg} alt="테크톡" />
              </div>
              <div className="activity-card-content">
                <h3>테크톡</h3>
                <p>평소 관심있었던 내용을 공유하며 복습하고, 발표 경험도 쌓아보아요</p>
              </div>
            </div>
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
