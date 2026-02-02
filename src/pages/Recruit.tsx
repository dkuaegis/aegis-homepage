import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import profileIcon from '../assets/ic_profile.svg';
import emailIcon from '../assets/ic_email.svg';
import lockIcon from '../assets/ic_lock.svg';
import creditCardIcon from '../assets/ic_creditCard.svg';

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
            <a href="https://join.dkuaegis.org/login" target="_blank" rel="noopener noreferrer" className="recruit-cta-btn">가입가기</a>
          </div>

          <div className="recruit-content">
            <div className="recruit-notice">
              <div className="notice-item">
                <div className="notice-icon"><img src={profileIcon} alt="프로필" width="32" height="32" /></div>
                <div>
                  <p><strong>모집 대상:</strong> 단국대학교 신입생, 재학생, 휴학생</p>
                  <p className="notice-sub">학년과 전공에 관계없이 보안과 개발에 관심이 있다면 누구나 환영합니다!</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-icon"><img src={emailIcon} alt="이메일" width="32" height="32" /></div>
                <p>회원가입 과정에서 문제가 발생하면 언제든 문의란의 연락처로 문의주세요.</p>
              </div>

              <div className="notice-item">
                <div className="notice-icon"><img src={lockIcon} alt="보안" width="32" height="32" /></div>
                <div>
                  <p>구글 로그인 과정에서 <strong>403 에러</strong>가 발생하시는 분은 링크를 복사하고 크롬이나 사파리에서 접속해주세요.</p>
                  <p className="notice-sub">구글 보안 정책상 인앱 브라우저에서 로그인이 불가능 합니다.</p>
                </div>
              </div>

              <div className="notice-item">
                <div className="notice-icon"><img src={creditCardIcon} alt="결제" width="32" height="32" /></div>
                <div>
                  <p>회비는 <strong>15,000원</strong>입니다.</p>
                  <p className="notice-sub">이전 운영진은 회비가 면제되니 문의란의 연락처로 문의주세요.</p>
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
