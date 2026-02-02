import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Contact() {
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
      <div className="contact-page">
        {/* 별들 */}
        <div className="stars-container" aria-hidden="true">
          {generateStars(50, 'star-sm')}
          {generateStars(30, 'star-md')}
          {generateStars(15, 'star-lg')}
        </div>

        {/* 유성 */}
        <div className="shooting-star shooting-star-1" aria-hidden="true"></div>
        <div className="shooting-star shooting-star-2" aria-hidden="true"></div>

        <Navigation currentPage="contact" />

        <section className="contact">
          <div className="contact-inner">
            <div className="contact-header">
              <h2 className="contact-title">문의</h2>
              <p className="contact-subtitle">
                더 궁금한 질문이 있거나 후원을 원하신다면 언제든 연락해 주세요!
              </p>
            </div>
            
            <a href="mailto:dankook.aegis@gmail.com" className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
              </div>
              dankook.aegis@gmail.com
            </a>

            <a href="https://www.instagram.com/dku_aegis" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M9.333 3.5A5.834 5.834 0 0 0 3.5 9.333v9.334A5.834 5.834 0 0 0 9.333 24.5h9.334a5.834 5.834 0 0 0 5.833-5.833V9.333A5.834 5.834 0 0 0 18.667 3.5zM21 5.833a1.167 1.167 0 1 1 0 2.335 1.167 1.167 0 0 1 0-2.335m-7 2.334a5.834 5.834 0 1 1-.001 11.667A5.834 5.834 0 0 1 14 8.167m0 2.333a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"></path>
                </svg>
              </div>
              @dku_aegis
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
