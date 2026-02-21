import Link from 'next/link'

export default function ContactPage() {
    return (
        <>
            {/* ── Navigation ── */}
            <nav className="ci-navbar navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link href="/" className="ci-brand navbar-brand">
                        <span className="accent">CORE</span>
                        <span className="base">INFRA</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navMenuContact"
                        aria-controls="navMenuContact"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list" style={{ color: 'var(--ci-text)', fontSize: '1.5rem' }}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navMenuContact">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                            <li className="nav-item"><Link href="/#about" className="ci-nav-link nav-link">About Us</Link></li>
                            <li className="nav-item"><Link href="/#service" className="ci-nav-link nav-link">SERVICE</Link></li>
                            <li className="nav-item"><Link href="/#products" className="ci-nav-link nav-link">Products</Link></li>
                            <li className="nav-item"><Link href="/contact" className="ci-nav-link nav-link" style={{ color: 'var(--ci-accent-2)' }}>CONTACT</Link></li>
                            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <Link href="/contact" className="ci-btn-primary">
                                    문의하기 <i className="bi bi-arrow-right-short"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ── Hero ── */}
            <section
                style={{
                    paddingTop: '120px',
                    paddingBottom: '4rem',
                    background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%), var(--ci-bg)',
                    borderBottom: '1px solid var(--ci-border)',
                }}
            >
                <div className="container text-center">
                    <p className="ci-section-label">GET IN TOUCH</p>
                    <h1 className="ci-section-title">
                        <span className="accent">문의</span> &amp; 오시는 길
                    </h1>
                    <p className="ci-section-desc mx-auto">
                        코어인프라와 함께 IT 인프라의 새로운 가능성을 열어보세요.
                        전문 상담팀이 신속하게 답변해 드립니다.
                    </p>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="ci-section">
                <div className="container">
                    <div className="row g-5 align-items-start">

                        {/* ─ Info Cards ─ */}
                        <div className="col-lg-4">
                            <div className="d-flex flex-column gap-4">

                                {/* Phone */}
                                <div className="ci-card" style={{ padding: '1.75rem' }}>
                                    <div className="ci-card-icon">
                                        <i className="bi bi-telephone-fill"></i>
                                    </div>
                                    <h3 className="ci-card-title" style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>전화 문의</h3>
                                    <a
                                        href="tel:031-422-5017"
                                        style={{
                                            fontSize: '1.6rem',
                                            fontWeight: 800,
                                            color: 'var(--ci-accent-2)',
                                            textDecoration: 'none',
                                            letterSpacing: '-0.02em',
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        031-422-5017
                                    </a>
                                    <p className="ci-card-text" style={{ fontSize: '0.8rem', marginBottom: 0 }}>
                                        평일 09:00 – 18:00 (주말·공휴일 휴무)
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="ci-card" style={{ padding: '1.75rem' }}>
                                    <div className="ci-card-icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>
                                    <h3 className="ci-card-title" style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>오시는 길</h3>
                                    <p className="ci-card-text" style={{ fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: '1.8' }}>
                                        경기도 과천시 별양상가3로 8<br />
                                        힐스테이트과천청사역 1416~1419호
                                    </p>
                                    <div
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            background: 'rgba(59,130,246,0.12)',
                                            border: '1px solid rgba(59,130,246,0.3)',
                                            borderRadius: '50px',
                                            padding: '0.3rem 0.85rem',
                                            fontSize: '0.78rem',
                                            color: 'var(--ci-accent-2)',
                                            fontWeight: 600,
                                        }}
                                    >
                                        <i className="bi bi-train-front"></i>
                                        4호선 과천청사역 도보 1분
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="ci-card" style={{ padding: '1.75rem' }}>
                                    <div className="ci-card-icon">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <h3 className="ci-card-title" style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>이메일 문의</h3>
                                    <p className="ci-card-text" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                        이메일로 문의하시면 <br />영업일 기준 24시간 내 회신드립니다.
                                    </p>
                                    <a href="mailto:info@coreinfra.co.kr" className="ci-card-link" style={{ fontSize: '0.85rem' }}>
                                        info@coreinfra.co.kr <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* ─ Map ─ */}
                        <div className="col-lg-8">
                            <div
                                style={{
                                    borderRadius: 'var(--ci-radius)',
                                    overflow: 'hidden',
                                    border: '1px solid var(--ci-border)',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                                }}
                            >
                                {/* Map header */}
                                <div
                                    style={{
                                        background: 'var(--ci-bg-card)',
                                        padding: '1rem 1.5rem',
                                        borderBottom: '1px solid var(--ci-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                    }}
                                >
                                    <i className="bi bi-map" style={{ color: 'var(--ci-accent)', fontSize: '1.1rem' }}></i>
                                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ci-text)' }}>
                                        과천청사역 — COREINFRA
                                    </span>
                                    <a
                                        href="https://maps.google.com/?q=경기도+과천시+별양상가3로+8+힐스테이트과천청사역"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginLeft: 'auto',
                                            fontSize: '0.78rem',
                                            color: 'var(--ci-muted)',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                        }}
                                    >
                                        크게 보기 <i className="bi bi-box-arrow-up-right"></i>
                                    </a>
                                </div>

                                {/* Google Maps Embed */}
                                <iframe
                                    src="https://maps.google.com/maps?q=경기도+과천시+별양상가3로+8+힐스테이트과천청사역&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0, display: 'block' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="코어인프라 위치 — 과천청사역"
                                />
                            </div>

                            {/* Quick CTA */}
                            <div
                                style={{
                                    marginTop: '1.5rem',
                                    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.06))',
                                    border: '1px solid rgba(59,130,246,0.2)',
                                    borderRadius: 'var(--ci-radius)',
                                    padding: '1.5rem 2rem',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '1rem',
                                }}
                            >
                                <div>
                                    <p style={{ margin: 0, fontWeight: 700, color: 'var(--ci-text)', fontSize: '1rem' }}>
                                        지금 바로 전문가와 상담하세요
                                    </p>
                                    <p style={{ margin: 0, color: 'var(--ci-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                                        견적·기술 문의 모두 무료로 상담해 드립니다.
                                    </p>
                                </div>
                                <a href="tel:031-422-5017" className="ci-btn-primary" style={{ flexShrink: 0 }}>
                                    <i className="bi bi-telephone"></i> 031-422-5017
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="ci-footer">
                <div className="container">
                    <div className="ci-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        <p className="mb-0">© 2025 CoreInfra. All rights reserved.</p>
                        <div className="d-flex gap-4">
                            <a href="#">이용약관</a>
                            <a href="#">개인정보처리방침</a>
                            <Link href="/">홈으로</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
