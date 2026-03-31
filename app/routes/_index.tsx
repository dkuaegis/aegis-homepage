import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export function meta() {
	return [
		{ title: "Aegis - 단국대학교 근육개발·물리보안 동아리" },
		{
			name: "description",
			content:
				"근성장을 원하는 모두에게 열려있는 단국대학교 최고의 피트니스·경호 중앙동아리",
		},
	];
}

// 파트너십 이미지 import (기존 에셋 유지)
import psHspaceImg from "../assets/image/ps_hspace.webp";
import psSwImg from "../assets/image/ps_sw.webp";
import psTheoriImg from "../assets/image/ps_theori.webp";

function App() {
	// 둥둥 떠다니는 근육 이모티콘을 생성하는 함수
	const generateMuscles = (count: number, className: string) => {
		return Array.from({ length: count }, (_, i) => {
			const uniqueKey = `${className}-${i}-${Math.random().toString(36).substr(2, 9)}`;
			// 크기와 애니메이션 속도를 랜덤하게 부여하여 입체감 형성
			const style = {
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				animationDelay: `${Math.random() * 3}s`,
				animationDuration: `${3 + Math.random() * 4}s`,
				fontSize: `${Math.random() * 1.5 + 1}rem`, // 1rem ~ 2.5rem 사이의 크기
			};
			return (
				<div
					key={uniqueKey}
					className={`muscle-emoji ${className}`}
					style={style}
					aria-hidden="true"
				>
					💪
				</div>
			);
		});
	};

	return (
		<>
			<main className="hero">
				{/* 둥둥 떠다니는 근육들 */}
				<div className="stars-container" aria-hidden="true">
					{generateMuscles(20, "muscle-sm")}
					{generateMuscles(15, "muscle-md")}
					{generateMuscles(10, "muscle-lg")}
				</div>

				{/* 날아다니는 대왕 근육 유성 */}
				<div className="shooting-muscle shooting-muscle-1" aria-hidden="true">
					💪
				</div>
				<div className="shooting-muscle shooting-muscle-2" aria-hidden="true">
					💪
				</div>

				<div className="hero-frame" aria-hidden="true"></div>
				<div className="panel-left" aria-hidden="true"></div>
				<div className="signal" aria-hidden="true"></div>
				<div className="spark s1" aria-hidden="true"></div>
				<div className="spark s2" aria-hidden="true"></div>
				<div className="spark s3" aria-hidden="true"></div>

				<Navigation currentPage="home" />

				<section className="hero-main">
					<div className="club-tag">단국대학교 근육개발·물리보안 동아리</div>
					<h1 className="hero-title">AEGIS</h1>
					<p className="hero-sub">
						근성장을 원하는 모두에게 열려있는 단국대학교 최고의 피트니스 ·
						물리보안 중앙동아리 (3대 500 이하 가입 환영)
					</p>
					<div className="value-grid">
						<div className="value">Weight Training</div>
						<div className="value">Bulk-up &amp; Diet</div>
						<div className="value">Physical Security</div>
						<div className="value">Chicken &amp; Sweet Potato</div>
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
						<div className="activity-title">Training</div>
					</div>
					<div className="activity-grid">
						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="쇠질 스터디"
									style={{ fontSize: "5rem" }}
								>
									💪
								</span>
							</div>
							<div className="activity-card-content">
								<h3>쇠질 스터디</h3>
								<p>
									교내 동아리중 가장 수준 높은 해부학 스터디를 통해 올바른
									자극점부터 근비대 심화까지 함께 운동하며 성장해요
								</p>
							</div>
						</div>

						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="코어클럽"
									style={{ fontSize: "5rem" }}
								>
									🧱
								</span>
							</div>
							<div className="activity-card-content">
								<h3>코어(Core) 클럽</h3>
								<p>
									중학생들을 대상으로 올바른 코어 운동 교육 봉사를 진행하며,
									가르치는 능력과 탄탄한 복근을 함께 얻어가요
								</p>
							</div>
						</div>

						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="근육개발팀"
									style={{ fontSize: "5rem" }}
								>
									🔩
								</span>
							</div>
							<div className="activity-card-content">
								<h3>근육개발팀</h3>
								<p>
									동아리 내에서 겪는 '근손실' 문제를 해결하며, 영양 섭취 -
									고강도 운동 - 충분한 휴식 프로세스를 경험할 수 있어요
								</p>
							</div>
						</div>

						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="물리보안팀"
									style={{ fontSize: "5rem" }}
								>
									🥋
								</span>
							</div>
							<div className="activity-card-content">
								<h3>물리보안팀</h3>
								<p>
									정기적으로 주짓수/복싱 대회에 참여하고, 회원들의 단백질 쉐이크
									도난을 막는 실전 물리 보안 검사를 수행해요
								</p>
							</div>
						</div>

						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="헬창 세미나"
									style={{ fontSize: "5rem" }}
								>
									🎓
								</span>
							</div>
							<div className="activity-card-content">
								<h3>헬창 세미나</h3>
								<p>
									졸업하여 헬스장을 오픈하신 선배님들과 교류하며 부상 방지
									꿀팁과 가성비 보충제 추천을 받아봐요
								</p>
							</div>
						</div>

						<div className="activity-card">
							<div
								className="activity-card-img"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									role="img"
									aria-label="득근톡"
									style={{ fontSize: "5rem" }}
								>
									📈
								</span>
							</div>
							<div className="activity-card-content">
								<h3>득근톡</h3>
								<p>
									평소 자신만의 운동 루틴과 식단을 공유하며 피드백을 받고,
									바디프로필 촬영 경험도 쌓아보아요
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="partners">
				<div className="partners-inner">
					<div className="partners-title">Protein Sponsorships</div>
					<div className="partners-grid">
						<div className="partner-card">
							<img src={psHspaceImg} alt="H-Space (헬스장)" />
						</div>
						<div className="partner-card">
							<img src={psSwImg} alt="Squat & Weight 중심대학" />
						</div>
						<div className="partner-card">
							<img src={psTheoriImg} alt="Theori (보충제)" />
						</div>
					</div>
				</div>
			</section>

			<Footer />

			{/* 고정된 가입하기 버튼 -> PT 등록 버튼 */}
			<a
				href="https://join.dkuaegis.org/login"
				className="fixed-join-button"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>PT 등록하기</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M7.5 15L12.5 10L7.5 5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</a>
		</>
	);
}

export default App;
