"use client"

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  // Navbar scroll effect
  useEffect(() => {
    const navbar = document.getElementById('ci-navbar')
    const handler = () => {
      if (navbar) {
        if (window.scrollY > 40) navbar.classList.add('scrolled')
        else navbar.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ── Navigation ── */}
      <nav
        id="ci-navbar"
        className="ci-navbar navbar navbar-expand-lg fixed-top"
      >
        <div className="container">
          <Link href="/" className="ci-brand navbar-brand">
            <span className="accent">CORE</span>
            <span className="base">INFRA</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" style={{ color: 'var(--ci-text)', fontSize: '1.5rem' }}></i>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              <li className="nav-item">
                <a href="#about" className="ci-nav-link nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#service" className="ci-nav-link nav-link">SERVICE</a>
              </li>
              <li className="nav-item">
                <a href="#products" className="ci-nav-link nav-link">Products</a>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="ci-nav-link nav-link">CONTACT</Link>
              </li>
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <Link href="/contact" className="ci-btn-primary">
                  문의하기 <i className="bi bi-arrow-right-short"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="ci-hero">
        <div className="ci-hero-bg">
          <div className="ci-blob ci-blob-1"></div>
          <div className="ci-blob ci-blob-2"></div>
          <div className="ci-blob ci-blob-3"></div>
        </div>

        <div className="container ci-hero-inner py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 text-center">
              <div className="ci-badge">
                <i className="bi bi-shield-lock-fill"></i>
                Network &amp; Security Solutions
              </div>

              <h1 className="ci-hero-title">
                첨단{' '}
                <span className="highlight">IT 인프라</span>
                로<br />비즈니스의 미래를<br />설계합니다
              </h1>

              <p className="ci-hero-desc mx-auto">
                IT 전문가의 전문지식과 경험을 바탕으로 IT 컨설팅을 통한 비용절감,
                보안을 통한 안전성, 모든 전산처리에 기본이 되는 전산 네트워크망을 구축하며
                고객 중심의 체계화되고 과학적인 IT 컨설팅 서비스를 제공하고 있습니다.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#service" className="ci-btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
                  서비스 둘러보기 <i className="bi bi-arrow-right"></i>
                </a>
                <Link href="/contact" className="ci-btn-outline" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
                  상담 문의
                </Link>
              </div>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="row justify-content-center mt-5 pt-3">
            <div className="col-lg-9">
              <div className="row g-0" style={{ background: 'rgba(13,27,48,0.7)', border: '1px solid var(--ci-border)', borderRadius: 'var(--ci-radius)' }}>
                {[
                  { num: '15+', label: '년 업계 경험' },
                  { num: '500+', label: '완료 프로젝트' },
                  { num: '98%', label: '고객 만족도' },
                  { num: '24/7', label: '기술 지원' },
                ].map((s) => (
                  <div key={s.label} className="col-6 col-md-3 ci-stat-item">
                    <div className="ci-stat-number">{s.num}</div>
                    <div className="ci-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="ci-section ci-section-alt" id="service">
        <div className="container">
          <div className="text-center mb-5">
            <p className="ci-section-label">WHAT WE DO</p>
            <h2 className="ci-section-title">
              전문 <span className="accent">솔루션</span>
            </h2>
            <p className="ci-section-desc">
              풍부한 경험을 가진 엔지니어들의 노하우를 바탕으로
              고객 비즈니스 환경에 최적화된 IT 통합 구축 서비스를 제안합니다
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: 'bi-layers-half',
                title: 'IT 컨설팅',
                desc: 'IT 전문가의 전문지식과 경험을 바탕으로 IT 컨설팅을 통한 비용절감, 보안을 통한 안전성을 제공합니다.',
              },
              {
                icon: 'bi-diagram-3',
                title: '네트워크 통합솔루션',
                desc: '풍부한 경험을 가진 네트워크 엔지니어들의 노하우를 바탕으로 고객 비즈니스 환경에 최적화된 IT 통합구축 서비스를 제안합니다.',
              },
              {
                icon: 'bi-cloud-arrow-up',
                title: '가상화 솔루션',
                desc: '스마트 오피스와 BYOD를 통한 효율적인 업무환경으로의 변화, 코어인프라가 최적의 클라우드 환경 구축을 도와드립니다.',
              },
              {
                icon: 'bi-shield-check',
                title: '차세대 보안솔루션',
                desc: '모빌리티 보안 솔루션과 함께 점점 지능화되는 사이버 위협에 대응하기 위한 코어인프라만의 차세대 보안 솔루션을 소개합니다.',
              },
              {
                icon: 'bi-camera-video',
                title: '영상 통합관제 솔루션',
                desc: '영상/음향 시스템, 통합관제 HW/SW 솔루션, 네트워크 인프라 및 인테리어 구축까지 통합관제센터 구축에 최적화된 토탈 솔루션을 소개합니다.',
              },
              {
                icon: 'bi-graph-up',
                title: '네트워크 분석솔루션',
                desc: '실제 트래픽 및 네트워크 상태를 에뮬레이션함으로써 이미 설치된 네트워크의 성능과 보안 기능을 점검하고 최적화를 구현해주는 솔루션입니다.',
              },
            ].map((svc) => (
              <div key={svc.title} className="col-md-6 col-lg-4">
                <div className="ci-card">
                  <div className="ci-card-icon">
                    <i className={`bi ${svc.icon}`}></i>
                  </div>
                  <h3 className="ci-card-title">{svc.title}</h3>
                  <p className="ci-card-text">{svc.desc}</p>
                  <a href="#" className="ci-card-link">
                    보러가기 <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners / Products Section ── */}
      <section className="ci-section" id="products">
        <div className="container">
          <div className="text-center mb-5">
            <p className="ci-section-label">TRUSTED BY</p>
            <h2 className="ci-section-title">
              파트너 <span className="accent">제품</span>
            </h2>
            <p className="ci-section-desc">
              글로벌 리더들과의 파트너십을 통해 최고의 솔루션을 제공합니다
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              'Aerohive',
              'Alcatel-Lucent',
              'Brocade',
              'CISCO',
              'NetMan',
              'Pumpkin',
              'Savvius',
              'HanDreamnet',
            ].map((partner) => (
              <div key={partner} className="col-6 col-md-3">
                <div className="ci-partner-card">
                  <span className="ci-partner-name">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="ci-cta-section">
        <div className="container">
          <div className="ci-cta-card text-center">
            <p className="ci-section-label">GET STARTED</p>
            <h2 className="ci-cta-title">
              프로젝트를 시작할<br />준비가 되셨나요?
            </h2>
            <p className="ci-cta-desc">
              전문가 팀이 귀사의 IT 인프라를 한 단계 업그레이드할 수 있도록
              최선을 다하겠습니다
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact" className="ci-btn-primary" style={{ fontSize: '1rem', padding: '0.8rem 2.2rem' }}>
                무료 상담 신청 <i className="bi bi-arrow-right"></i>
              </Link>
              <a href="#products" className="ci-btn-outline" style={{ fontSize: '1rem', padding: '0.8rem 2.2rem' }}>
                포트폴리오 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ci-footer">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-4 col-md-6">
              <div className="ci-footer-brand">
                <span style={{ color: 'var(--ci-accent)' }}>CORE</span>
                <span style={{ color: 'var(--ci-text)' }}>INFRA</span>
              </div>
              <p className="ci-footer-desc">
                네트워크 및 보안 전문 IT 솔루션<br />
                고객의 비즈니스 성장을 위한 최적의 IT 파트너입니다.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 offset-lg-1">
              <h4 className="ci-footer-heading">About Us</h4>
              <ul className="ci-footer-links">
                <li><a href="#">인사말</a></li>
                <li><a href="#">연혁</a></li>
                <li><a href="#">비전</a></li>
                <li><a href="#">파트너</a></li>
                <li><a href="#">오시는 길</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="ci-footer-heading">SERVICE</h4>
              <ul className="ci-footer-links">
                <li><a href="#">IT 컨설팅</a></li>
                <li><a href="#">네트워크 통합(NI) 서비스</a></li>
                <li><a href="#">보안</a></li>
                <li><a href="#">영상 관제솔루션</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="ci-footer-heading">Products</h4>
              <ul className="ci-footer-links">
                <li><a href="#">Aerohive</a></li>
                <li><a href="#">CISCO</a></li>
                <li><a href="#">Brocade</a></li>
                <li><a href="#">더 보기 +</a></li>
              </ul>
            </div>
          </div>

          <div className="ci-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0">© 2025 CoreInfra. All rights reserved.</p>
            <div className="d-flex gap-4">
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
              <a href="#">사이트맵</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
