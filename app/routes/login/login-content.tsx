import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function LoginContent() {
    return (
        <div className="login-page">
            <Navigation currentPage="login" />
            <main className="login-container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <section className="login-card" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: '1rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>로그인</h2>
                    <p style={{ color: '#aaa', marginBottom: '2rem' }}>AEGIS 커뮤니티에 오신 것을 환영합니다.</p>
                    <button style={{ background: 'white', color: 'black', padding: '0.8rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                        Google로 시작하기
                    </button>
                </section>
            </main>
            <Footer />
        </div>
    );
}
