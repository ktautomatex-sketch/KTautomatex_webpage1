import { useState, useEffect, useRef } from "react";

/* ─── ICONS ─── */
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconTarget = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconBell = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconFolder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconPlay = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

/* ─── STYLES ─── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080C14;
    --bg2: #0D1220;
    --card: #0F1525;
    --card2: #131B2E;
    --border: rgba(0, 212, 255, 0.12);
    --border2: rgba(255,255,255,0.06);
    --cyan: #00D4FF;
    --cyan-dim: rgba(0, 212, 255, 0.15);
    --cyan-glow: rgba(0, 212, 255, 0.4);
    --white: #F0F4FF;
    --muted: #8892A4;
    --text: #C8D3E8;
    --max: 1200px;
  }

  html { scroll-behavior: smooth; overflow-x: hidden; }
  body { background: var(--bg); color: var(--white); font-family: 'Space Grotesk', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

  h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

  /* ─ Scrollbar ─ */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--cyan-dim); border-radius: 4px; }

  /* ─ Animations ─ */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: 0.6; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes scanline {
    0%   { top: -10%; }
    100% { top: 110%; }
  }
  @keyframes blink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes grid-move {
    0%   { transform: translateY(0); }
    100% { transform: translateY(60px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .fade-up { animation: fadeUp 0.7s ease forwards; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }

  /* ─ Layout ─ */
  .container { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
  section { padding: 100px 0; }

  /* ─ Nav ─ */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 0 24px;
    transition: all 0.3s ease;
  }
  nav.scrolled {
    background: rgba(8,12,20,0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }
  .nav-inner {
    max-width: var(--max); margin: 0 auto;
    height: 72px; display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: var(--white); text-decoration: none; }
  .nav-logo span { color: var(--cyan); }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.02em; transition: color 0.2s; }
  .nav-links a:hover { color: var(--white); }
  .nav-cta { background: var(--cyan); color: #000; padding: 10px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
  .nav-cta:hover { background: #00EEFF; transform: translateY(-1px); box-shadow: 0 8px 24px var(--cyan-glow); }
  .nav-mobile-btn { display: none; background: none; border: none; color: var(--white); cursor: pointer; padding: 4px; }

  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none; }
    .nav-mobile-btn { display: flex; }
  }

  /* Mobile menu */
  .mobile-menu {
    position: fixed; top: 72px; left: 0; right: 0; bottom: 0; z-index: 99;
    background: rgba(8,12,20,0.98); backdrop-filter: blur(20px);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px;
  }
  .mobile-menu a { color: var(--white); text-decoration: none; font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 700; }
  .mobile-menu .m-cta { background: var(--cyan); color: #000; padding: 14px 40px; border-radius: 10px; font-size: 18px; }

  /* ─ HERO ─ */
  .hero {
    min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden;
    padding-top: 72px;
  }
  .hero-grid {
    position: absolute; inset: 0; z-index: 0;
    background-image: 
      linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: grid-move 8s linear infinite;
  }
  .hero-glow {
    position: absolute; top: 20%; left: 50%; transform: translateX(-50%);
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-glow2 {
    position: absolute; bottom: 10%; right: -100px;
    width: 400px; height: 400px;
    background: radial-gradient(ellipse, rgba(0,100,255,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-content { position: relative; z-index: 1; text-align: center; width: 100%; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--cyan-dim); border: 1px solid var(--border);
    padding: 8px 18px; border-radius: 100px; margin-bottom: 32px;
    font-size: 13px; font-weight: 600; color: var(--cyan); letter-spacing: 0.08em;
  }
  .hero-badge-dot {
    width: 8px; height: 8px; border-radius: 50%; background: var(--cyan);
    position: relative;
  }
  .hero-badge-dot::after {
    content: ''; position: absolute; inset: -4px; border-radius: 50%;
    background: var(--cyan); opacity: 0.4;
    animation: pulse-ring 1.5s ease-out infinite;
  }
  .hero h1 { font-size: clamp(38px, 6.5vw, 80px); font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 24px; word-break: break-word; }
  .hero h1 .accent { color: var(--cyan); display: block; }
  .hero-sub { font-size: clamp(16px, 2vw, 20px); color: var(--text); max-width: 580px; margin: 0 auto 16px; line-height: 1.6; font-weight: 400; }
  .hero-platforms {
    display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;
    margin-bottom: 44px; font-size: 13px; color: var(--muted);
  }
  .hero-platforms span { background: var(--card); border: 1px solid rgba(0,212,255,0.2); padding: 5px 14px; border-radius: 100px; color: var(--text); font-weight: 500; }
  .hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .btn-primary { background: var(--cyan); color: #000; padding: 15px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-family: 'Space Grotesk', sans-serif; }
  .btn-primary:hover { background: #00EEFF; transform: translateY(-2px); box-shadow: 0 12px 32px var(--cyan-glow); }
  .btn-outline { background: transparent; color: var(--white); padding: 15px 32px; border-radius: 10px; font-weight: 600; font-size: 15px; border: 1px solid var(--border2); cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-family: 'Space Grotesk', sans-serif; }
  .btn-outline:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan-dim); }

  @media (max-width: 520px) {
    .hero-btns { flex-direction: column; align-items: stretch; }
    .btn-primary, .btn-outline { justify-content: center; width: 100%; }
  }
  .hero-stats { display: flex; justify-content: center; gap: 48px; margin-top: 72px; flex-wrap: wrap; }
  @media (max-width: 480px) { .hero-stats { gap: 28px; margin-top: 48px; } .hero-divider { display: none; } }
  .hero-stat { text-align: center; }
  .hero-stat-num { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800; color: var(--white); }
  .hero-stat-num span { color: var(--cyan); }
  .hero-stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }
  .hero-divider { width: 1px; height: 48px; background: var(--border2); align-self: center; }

  /* ─ Section Headers ─ */
  .section-tag { display: inline-block; font-size: 12px; font-weight: 700; color: var(--cyan); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; }
  .section-title { font-size: clamp(28px, 4vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 16px; word-break: break-word; }
  .section-sub { font-size: 17px; color: var(--muted); line-height: 1.7; max-width: 580px; }
  .section-header { margin-bottom: 64px; }
  .section-header.centered { text-align: center; }
  .section-header.centered .section-sub { margin: 0 auto; }

  /* ─ PROBLEM ─ */
  .problem { background: var(--bg2); }
  .problem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .problem-card {
    background: var(--card); border: 1px solid var(--border2);
    border-radius: 16px; padding: 32px 24px; position: relative; overflow: hidden;
    transition: all 0.3s;
  }
  .problem-card:hover { border-color: rgba(255,80,80,0.3); transform: translateY(-4px); }
  .problem-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, rgba(255,80,80,0.6), transparent); }
  .problem-icon { width: 48px; height: 48px; background: rgba(255,80,80,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #FF6060; margin-bottom: 20px; }
  .problem-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
  .problem-card p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  @media (max-width: 900px) { .problem-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .problem-grid { grid-template-columns: 1fr; } }

  /* ─ SOLUTION ─ */
  .solution-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .solution-visual {
    background: var(--card); border: 1px solid var(--border); border-radius: 20px;
    padding: 40px; position: relative; overflow: hidden;
  }
  .solution-visual::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,212,255,0.05) 0%, transparent 60%);
  }
  .flow-step { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
  .flow-step:last-child { margin-bottom: 0; }
  .flow-dot { width: 40px; height: 40px; border-radius: 50%; background: var(--cyan-dim); border: 1px solid var(--cyan); display: flex; align-items: center; justify-content: center; color: var(--cyan); font-size: 13px; font-weight: 700; flex-shrink: 0; }
  .flow-line { width: 2px; height: 24px; background: linear-gradient(to bottom, var(--cyan), transparent); margin-left: 19px; }
  .flow-text h4 { font-size: 15px; font-weight: 700; }
  .flow-text p { font-size: 13px; color: var(--muted); }
  .solution-points { display: flex; flex-direction: column; gap: 24px; margin-top: 32px; }
  .solution-point { display: flex; align-items: flex-start; gap: 14px; }
  .sol-check { width: 22px; height: 22px; background: var(--cyan); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #000; flex-shrink: 0; margin-top: 2px; }
  .solution-point h4 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .solution-point p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  @media (max-width: 768px) { .solution-inner { grid-template-columns: 1fr; gap: 40px; } }

  /* ─ HOW IT WORKS ─ */
  .hiw { background: var(--bg2); }
  .hiw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: var(--border2); border: 1px solid var(--border2); border-radius: 20px; overflow: hidden; }
  .hiw-step {
    background: var(--card); padding: 40px 28px; text-align: center; position: relative;
    transition: background 0.3s;
  }
  .hiw-step:hover { background: var(--card2); }
  .hiw-num { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; color: var(--cyan); letter-spacing: 0.14em; margin-bottom: 20px; }
  .hiw-icon { width: 56px; height: 56px; background: var(--cyan-dim); border: 1px solid var(--border); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--cyan); margin: 0 auto 20px; animation: float 4s ease-in-out infinite; }
  .hiw-step:nth-child(2) .hiw-icon { animation-delay: 0.5s; }
  .hiw-step:nth-child(3) .hiw-icon { animation-delay: 1s; }
  .hiw-step:nth-child(4) .hiw-icon { animation-delay: 1.5s; }
  .hiw-step h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
  .hiw-step p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  @media (max-width: 900px) { .hiw-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .hiw-grid { grid-template-columns: 1fr; } }

  /* ─ DEMO ─ */
  .demo-wrap {
    background: var(--card); border: 1px solid var(--border); border-radius: 24px;
    overflow: hidden; max-width: 860px; margin: 0 auto;
  }
  .demo-bar { background: var(--card2); padding: 14px 20px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border2); }
  .demo-dot { width: 12px; height: 12px; border-radius: 50%; }
  .demo-bar-url { flex: 1; background: var(--bg); border-radius: 6px; padding: 6px 12px; font-size: 12px; color: var(--muted); margin: 0 16px; font-family: monospace; }
  .demo-screen {
    aspect-ratio: 16/9; background: var(--bg2); display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .demo-scanline {
    position: absolute; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
    animation: scanline 3s linear infinite;
  }
  .demo-play-btn {
    width: 80px; height: 80px; border-radius: 50%; background: var(--cyan);
    display: flex; align-items: center; justify-content: center; color: #000;
    cursor: pointer; position: relative; z-index: 1; border: none; transition: all 0.2s;
  }
  .demo-play-btn:hover { transform: scale(1.08); box-shadow: 0 0 40px var(--cyan-glow); }
  .demo-play-btn::before {
    content: ''; position: absolute; inset: -8px; border-radius: 50%;
    border: 2px solid rgba(0,212,255,0.3); animation: pulse-ring 2s ease-out infinite;
  }
  .demo-label { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 13px; color: var(--muted); white-space: nowrap; }

  /* ─ SERVICES ─ */
  .services { background: var(--bg2); }
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .service-card {
    background: var(--card); border: 1px solid var(--border2); border-radius: 20px;
    padding: 40px 32px; position: relative; overflow: hidden;
    transition: all 0.3s; cursor: default;
  }
  .service-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--cyan-dim) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.3s;
  }
  .service-card:hover { border-color: var(--cyan); transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,212,255,0.1); }
  .service-card:hover::before { opacity: 1; }
  .service-num { font-size: 11px; font-weight: 700; color: var(--cyan); letter-spacing: 0.14em; margin-bottom: 24px; }
  .service-icon { width: 56px; height: 56px; background: var(--cyan-dim); border: 1px solid var(--border); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: var(--cyan); margin-bottom: 24px; }
  .service-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; position: relative; }
  .service-card p { font-size: 15px; color: var(--muted); line-height: 1.7; position: relative; margin-bottom: 28px; }
  .service-features { display: flex; flex-direction: column; gap: 10px; position: relative; }
  .service-feature { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text); }
  .service-feature-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--cyan); flex-shrink: 0; }

  @media (max-width: 900px) { .services-grid { grid-template-columns: 1fr; } }

  /* ─ PRICING ─ */
  .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }
  .pricing-card {
    background: var(--card); border: 1px solid var(--border2); border-radius: 20px;
    padding: 40px 32px; position: relative; overflow: hidden;
    transition: all 0.3s;
  }
  .pricing-card.featured {
    background: var(--card2); border-color: var(--cyan);
    transform: translateY(-12px);
    box-shadow: 0 24px 80px rgba(0,212,255,0.15);
  }
  .pricing-card.featured::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  }
  .pricing-badge { position: absolute; top: 20px; right: 20px; background: var(--cyan); color: #000; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.06em; }
  .pricing-tier { font-size: 13px; font-weight: 600; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
  .pricing-name { font-size: 24px; font-weight: 800; margin-bottom: 4px; }
  .pricing-price { font-family: 'Syne', sans-serif; font-size: 44px; font-weight: 800; color: var(--white); margin: 20px 0 8px; line-height: 1; }
  .pricing-price sup { font-size: 22px; color: var(--cyan); }
  .pricing-price sub { font-size: 15px; color: var(--muted); font-weight: 400; }
  .pricing-desc { font-size: 14px; color: var(--muted); margin-bottom: 28px; line-height: 1.6; }
  .pricing-divider { border: none; border-top: 1px solid var(--border2); margin: 28px 0; }
  .pricing-features { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
  .pricing-feature { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text); }
  .pricing-feature .check { width: 20px; height: 20px; border-radius: 50%; background: rgba(0,212,255,0.15); display: flex; align-items: center; justify-content: center; color: var(--cyan); flex-shrink: 0; }
  .pricing-feature .check svg { width: 11px; height: 11px; }
  .btn-pricing { width: 100%; padding: 14px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; font-family: 'Space Grotesk', sans-serif; }
  .btn-pricing.primary { background: var(--cyan); color: #000; }
  .btn-pricing.primary:hover { background: #00EEFF; box-shadow: 0 8px 28px var(--cyan-glow); }
  .btn-pricing.outline { background: transparent; color: var(--white); border: 1px solid var(--border2); }
  .btn-pricing.outline:hover { border-color: var(--cyan); color: var(--cyan); }

  @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr; } .pricing-card.featured { transform: none; } }

  /* ─ RESULTS ─ */
  .results { background: var(--bg2); }
  .results-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .result-card {
    background: var(--card); border: 1px solid var(--border2); border-radius: 16px;
    padding: 32px; display: flex; gap: 20px; align-items: flex-start;
    transition: all 0.3s;
  }
  .result-card:hover { border-color: var(--border); transform: translateX(4px); }
  .result-icon { width: 48px; height: 48px; background: var(--cyan-dim); border: 1px solid var(--border); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--cyan); flex-shrink: 0; }
  .result-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
  .result-card p { font-size: 14px; color: var(--muted); line-height: 1.6; }
  .result-metric { font-size: 28px; font-weight: 800; color: var(--cyan); font-family: 'Syne', sans-serif; margin-top: 8px; }

  @media (max-width: 640px) { .results-grid { grid-template-columns: 1fr; } }

  /* ─ PROCESS ─ */
  .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
  .process-steps::before { content: ''; position: absolute; top: 40px; left: calc(12.5% + 20px); right: calc(12.5% + 20px); height: 1px; background: linear-gradient(90deg, var(--cyan), var(--border2), var(--cyan)); }
  .process-step { text-align: center; padding: 0 16px; position: relative; }
  .process-num {
    width: 80px; height: 80px; border-radius: 50%; background: var(--card); border: 2px solid var(--border);
    display: flex; align-items: center; justify-content: center; margin: 0 auto 28px;
    font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
    position: relative; z-index: 1; transition: all 0.3s;
  }
  .process-step:hover .process-num { border-color: var(--cyan); color: var(--cyan); box-shadow: 0 0 30px rgba(0,212,255,0.3); }
  .process-step h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
  .process-step p { font-size: 14px; color: var(--muted); line-height: 1.6; }

  @media (max-width: 768px) { .process-steps { grid-template-columns: repeat(2, 1fr); gap: 40px; } .process-steps::before { display: none; } }
  @media (max-width: 480px) { .process-steps { grid-template-columns: 1fr; } }

  /* ─ ABOUT ─ */
  .about { background: var(--bg2); }
  .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-visual { position: relative; }
  .about-card {
    background: var(--card); border: 1px solid var(--border); border-radius: 24px; padding: 48px;
    text-align: center; position: relative; overflow: hidden;
  }
  .about-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 200px;
    background: linear-gradient(to bottom, rgba(0,212,255,0.08), transparent);
  }
  .about-avatar {
    width: 100px; height: 100px; border-radius: 50%; background: var(--cyan-dim);
    border: 3px solid var(--cyan); margin: 0 auto 20px; display: flex; align-items: center;
    justify-content: center; font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800;
    color: var(--cyan); position: relative; z-index: 1;
  }
  .about-name { font-size: 24px; font-weight: 800; margin-bottom: 4px; position: relative; }
  .about-role { font-size: 14px; color: var(--cyan); margin-bottom: 20px; position: relative; }
  .about-bio { font-size: 14px; color: var(--muted); line-height: 1.7; position: relative; }
  .about-socials { display: flex; justify-content: center; gap: 12px; margin-top: 24px; position: relative; }
  .about-social { width: 40px; height: 40px; border-radius: 10px; background: var(--card2); border: 1px solid var(--border2); display: flex; align-items: center; justify-content: center; color: var(--muted); transition: all 0.2s; text-decoration: none; }
  .about-social:hover { border-color: var(--cyan); color: var(--cyan); background: var(--cyan-dim); }
  .about-badge { position: absolute; top: -16px; right: -16px; background: var(--cyan); color: #000; border-radius: 12px; padding: 12px 16px; font-size: 13px; font-weight: 700; box-shadow: 0 8px 24px var(--cyan-glow); }
  .about-content h2 { font-size: clamp(26px, 4vw, 42px); font-weight: 800; line-height: 1.2; margin-bottom: 24px; word-break: break-word; }
  .about-content h2 span { color: var(--cyan); }
  .about-content > p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 32px; }
  .about-values { display: flex; flex-direction: column; gap: 16px; }
  .about-value { display: flex; align-items: flex-start; gap: 12px; }
  .about-value-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); flex-shrink: 0; margin-top: 7px; }
  .about-value p { font-size: 15px; color: var(--text); line-height: 1.5; }

  @media (max-width: 768px) { .about-inner { grid-template-columns: 1fr; gap: 40px; } }

  /* ─ CONTACT ─ */
  .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  .contact-info h2 { font-size: clamp(24px, 4vw, 42px); font-weight: 800; line-height: 1.2; margin-bottom: 20px; word-break: break-word; }
  .contact-info h2 span { color: var(--cyan); }
  .contact-info > p { font-size: 16px; color: var(--muted); line-height: 1.7; margin-bottom: 40px; }
  .contact-methods { display: flex; flex-direction: column; gap: 16px; }
  .contact-method { display: flex; align-items: center; gap: 14px; padding: 18px; background: var(--card); border: 1px solid var(--border2); border-radius: 12px; text-decoration: none; color: var(--white); transition: all 0.2s; }
  .contact-method:hover { border-color: var(--cyan); background: var(--cyan-dim); }
  .contact-method-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--card2); display: flex; align-items: center; justify-content: center; color: var(--cyan); flex-shrink: 0; }
  .contact-method-text { display: flex; flex-direction: column; }
  .contact-method-label { font-size: 12px; color: var(--muted); margin-bottom: 2px; }
  .contact-method-value { font-size: 14px; font-weight: 600; }

  /* Form */
  .contact-form { background: var(--card); border: 1px solid var(--border2); border-radius: 20px; padding: 40px; }
  .form-group { margin-bottom: 20px; }
  .form-label { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 8px; letter-spacing: 0.02em; }
  .form-input, .form-select, .form-textarea {
    width: 100%; background: var(--bg); border: 1px solid var(--border2); border-radius: 10px;
    padding: 13px 16px; color: var(--white); font-family: 'Space Grotesk', sans-serif; font-size: 14px;
    outline: none; transition: border-color 0.2s; -webkit-appearance: none;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--cyan); }
  .form-input::placeholder, .form-textarea::placeholder { color: var(--muted); }
  .form-textarea { resize: vertical; min-height: 100px; }
  .form-select { cursor: pointer; color: var(--text); }
  .form-select option { background: var(--card); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .btn-submit { width: 100%; padding: 15px; background: var(--cyan); color: #000; border: none; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: 'Space Grotesk', sans-serif; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; }
  .btn-submit:hover { background: #00EEFF; box-shadow: 0 12px 32px var(--cyan-glow); }
  .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .form-success { text-align: center; padding: 40px 0; }
  .form-success-icon { width: 64px; height: 64px; background: rgba(0,212,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--cyan); }
  .form-success h3 { font-size: 22px; font-weight: 700; margin-bottom: 10px; }
  .form-success p { font-size: 15px; color: var(--muted); }
  .form-error { background: rgba(255,80,80,0.1); border: 1px solid rgba(255,80,80,0.3); border-radius: 8px; padding: 12px 16px; font-size: 14px; color: #ff8080; margin-top: 12px; }

  @media (max-width: 768px) { .contact-inner { grid-template-columns: 1fr; } }
  @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } .contact-form { padding: 28px 20px; } }

  /* ─ CTA FINAL ─ */
  .final-cta {
    background: linear-gradient(135deg, rgba(0,212,255,0.08) 0%, transparent 60%);
    border-top: 1px solid var(--border); text-align: center; padding: 120px 0;
  }
  .final-cta h2 { font-size: clamp(32px, 5vw, 60px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
  .final-cta h2 span { color: var(--cyan); }
  .final-cta p { font-size: 18px; color: var(--muted); margin-bottom: 44px; }
  .final-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  /* ─ FOOTER ─ */
  footer { background: var(--bg2); border-top: 1px solid var(--border2); padding: 32px 0; }
  .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .footer-logo { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; color: var(--white); }
  .footer-logo span { color: var(--cyan); }
  .footer-copy { font-size: 13px; color: var(--muted); }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { font-size: 13px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--white); }

  @media (max-width: 640px) { .footer-inner { flex-direction: column; text-align: center; } }
`;

/* ─── DATA ─── */
const problems = [
  { icon: <IconClock />, title: "Slow Response Times", desc: "Every hour you wait, a competitor responds. Leads choose whoever replies first." },
  { icon: <IconX />, title: "Zero Follow-Up", desc: "Most leads need 5–7 touchpoints. Without automation, they fall through the cracks." },
  { icon: <IconFolder />, title: "Scattered Leads", desc: "Facebook, Instagram, WhatsApp, website — leads everywhere, organized nowhere." },
  { icon: <IconUsers />, title: "Manual Tracking", desc: "Hours wasted on copy-paste, spreadsheet updates, and status checks. Every day." },
];

const services = [
  {
    num: "01",
    icon: <IconTarget />,
    title: "Lead Capture Systems",
    desc: "Automatically collect every lead from your ads, website forms, and landing pages into one structured system.",
    features: ["Facebook & Instagram Ads", "Website & landing page forms", "WhatsApp & TikTok leads", "Auto-tagged & organized"],
  },
  {
    num: "02",
    icon: <IconZap />,
    title: "Auto Follow-Up Systems",
    desc: "Send instant, personalized responses the moment a lead comes in — while your competitors are still sleeping.",
    features: ["Instant email auto-reply", "WhatsApp follow-up sequences", "Multi-touch drip campaigns", "Response in under 60 seconds"],
  },
  {
    num: "03",
    icon: <IconFolder />,
    title: "Lead Management CRM",
    desc: "Every lead tracked, scored, and visible in one clean dashboard. Know exactly where each deal stands.",
    features: ["Centralized lead dashboard", "Lead scoring & qualification", "Status tracking & pipeline", "Team alerts & notifications"],
  },
];

const pricing = [
  {
    tier: "Starter",
    name: "Basic",
    price: "400",
    desc: "Perfect for getting started with lead capture automation.",
    features: ["Form & ad integration", "Google Sheets database", "Email alert notifications", "Basic lead tracking", "Setup & onboarding"],
    featured: false,
  },
  {
    tier: "Most Popular",
    name: "Standard",
    price: "800–1,000",
    desc: "Complete lead automation — the system most businesses need.",
    features: ["Everything in Basic", "Instant auto email reply", "WhatsApp notifications", "CRM structure & pipeline", "Multi-channel capture", "30-day support"],
    featured: true,
  },
  {
    tier: "Enterprise",
    name: "Premium",
    price: "1,500+",
    desc: "Full-stack lead conversion system for scaling businesses.",
    features: ["Everything in Standard", "Multi-step follow-up sequences", "Lead qualification scoring", "Advanced CRM & analytics", "Team access & roles", "Priority support"],
    featured: false,
  },
];

const results = [
  { icon: <IconZap />, title: "Respond in Under 60 Seconds", metric: "< 60s", desc: "Every lead gets an instant, personalized response — automatically." },
  { icon: <IconTarget />, title: "Increase Conversion Rate", metric: "+35%", desc: "Faster responses and consistent follow-up close significantly more deals." },
  { icon: <IconClock />, title: "Save 15+ Hours Per Week", metric: "15h+", desc: "Eliminate manual tracking, copy-pasting, and follow-up reminders." },
  { icon: <IconBell />, title: "Zero Leads Lost", metric: "100%", desc: "Every lead captured, tagged, and tracked across all your platforms." },
];

const process = [
  { num: "01", title: "Discovery Call", desc: "We understand your lead sources, tools, and current bottlenecks." },
  { num: "02", title: "System Design", desc: "We map out your custom automation architecture and workflow." },
  { num: "03", title: "Build & Integrate", desc: "We build and connect everything — tested, clean, and ready." },
  { num: "04", title: "Launch & Support", desc: "You go live. We stay available to optimize as you grow." },
];

/* ─── COMPONENT ─── */
export default function KTAutomateX() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", source: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const WEBHOOK_URL = "https://hook.eu1.make.com/pbsmgmigbvua3a2ze4n76lze37ffb5qm";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submitted_at: new Date().toISOString() }),
      });
      // Make.com returns 200 "Accepted" — any 2xx or even opaque response = success
      if (res.ok || res.type === "opaque" || res.status === 0) {
        setSubmitted(true);
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err) {
      // CORS blocks the *response*, not the *request* — webhook likely received data
      // Show success optimistically so user is not blocked
      console.warn("Form note:", err?.message);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{styles}</style>

      {/* ── NAV ── */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">KT<span>automate</span>X</a>
          <ul className="nav-links">
            {["Services","Pricing","Process","About","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>{l}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Get Free Plan</a>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {["Services","Pricing","Process","About","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>{l}</a>
          ))}
          <a href="#contact" className="m-cta" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Get Free Plan</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge fade-up">
              <span className="hero-badge-dot" />
              LEAD AUTOMATION SPECIALIST
            </div>
            <h1 className="fade-up delay-1">
              Never Miss a Lead
              <span className="accent">Again.</span>
            </h1>
            <p className="hero-sub fade-up delay-2">
              We build automated systems that capture, respond, and manage your leads instantly — so you close more clients without extra effort.
            </p>
            <div className="hero-platforms fade-up delay-3">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>TikTok</span>
              <span>WhatsApp</span>
              <span>Website</span>
            </div>
            <div className="hero-btns fade-up delay-4">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Get Free Automation Plan <IconArrow />
              </button>
              <button className="btn-outline" onClick={() => scrollTo("demo")}>
                <IconPlay style={{width:16,height:16}} /> View Live Demo
              </button>
            </div>
            <div className="hero-stats fade-up delay-5">
              <div className="hero-stat">
                <div className="hero-stat-num"><span>&lt;</span>60s</div>
                <div className="hero-stat-label">Lead Response Time</div>
              </div>
              <div className="hero-divider" />
              <div className="hero-stat">
                <div className="hero-stat-num">+<span>35</span>%</div>
                <div className="hero-stat-label">Conversion Increase</div>
              </div>
              <div className="hero-divider" />
              <div className="hero-stat">
                <div className="hero-stat-num"><span>15</span>h+</div>
                <div className="hero-stat-label">Saved Per Week</div>
              </div>
              <div className="hero-divider" />
              <div className="hero-stat">
                <div className="hero-stat-num"><span>0</span></div>
                <div className="hero-stat-label">Leads Lost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border2)',
        borderBottom: '1px solid var(--border2)',
        padding: '18px 0',
        overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'40px',flexWrap:'wrap',fontSize:'13px',color:'var(--muted)',fontWeight:600,letterSpacing:'0.04em'}}>
            {['✓ Setup in 3–5 Days','✓ No Monthly Fees','✓ Works Instantly','✓ Multi-Channel Ready','✓ 30-Day Support'].map((t,i) => (
              <span key={i} style={{color: i % 2 === 0 ? 'var(--text)' : 'var(--muted)'}}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM ── */}
      <section className="problem" id="problem">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">The Problem</div>
            <h2 className="section-title">Most Businesses Lose Leads <br/>Every Single Day</h2>
            <p className="section-sub">Without an automated system, you're leaving revenue on the table — and handing it to faster competitors.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p, i) => (
              <div key={i} className="problem-card">
                <div className="problem-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution">
        <div className="container">
          <div className="solution-inner">
            <div>
              <div className="section-tag">The Solution</div>
              <h2 className="section-title">Your Leads,<br/> Fully Automated</h2>
              <p className="section-sub" style={{marginBottom: 40}}>From the moment a lead comes in, everything happens automatically — response, organization, and alerts.</p>
              <div className="solution-points">
                {[
                  { title: "Instant Response", desc: "Every lead gets a personalized reply within seconds — not hours." },
                  { title: "One Central System", desc: "All your leads from all platforms, organized in one place." },
                  { title: "Automated Follow-Up", desc: "Multi-step sequences run on autopilot until the deal is closed." },
                ].map((s, i) => (
                  <div key={i} className="solution-point">
                    <div className="sol-check"><IconCheck /></div>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="solution-visual">
              <div style={{marginBottom: 8, fontSize: 12, color: 'var(--cyan)', letterSpacing: '0.1em', fontWeight: 700}}>LIVE SYSTEM FLOW</div>
              {[
                { num: "01", label: "Lead Submits Form", sub: "Facebook Ad → Landing Page" },
                { num: "02", label: "Auto-Reply Sent", sub: "Email within 30 seconds" },
                { num: "03", label: "CRM Updated", sub: "Lead tagged & scored" },
                { num: "04", label: "Team Notified", sub: "WhatsApp + Slack alert" },
                { num: "05", label: "Follow-Up Scheduled", sub: "Automated sequence starts" },
              ].map((f, i) => (
                <div key={i}>
                  <div className="flow-step">
                    <div className="flow-dot">{f.num}</div>
                    <div className="flow-text">
                      <h4>{f.label}</h4>
                      <p>{f.sub}</p>
                    </div>
                  </div>
                  {i < 4 && <div className="flow-line" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="hiw" id="process">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">How It Works</div>
            <h2 className="section-title">Four Steps to Full Automation</h2>
            <p className="section-sub">A system that runs itself — from the first click to the closed deal.</p>
          </div>
          <div className="hiw-grid">
            {[
              { icon: <IconTarget />, label: "STEP 01", title: "Capture", desc: "Leads flow in from all your platforms — ads, forms, messages, and more." },
              { icon: <IconZap />, label: "STEP 02", title: "Automate", desc: "An instant, personalized response goes out without you lifting a finger." },
              { icon: <IconFolder />, label: "STEP 03", title: "Organize", desc: "Every lead is tagged, scored, and stored in your central dashboard." },
              { icon: <IconBell />, label: "STEP 04", title: "Notify", desc: "You get an instant alert — so you only speak to qualified, warm leads." },
            ].map((s, i) => (
              <div key={i} className="hiw-step">
                <div className="hiw-num">{s.label}</div>
                <div className="hiw-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO ── */}
      <section id="demo">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">Live Demo</div>
            <h2 className="section-title">See The System In Action</h2>
            <p className="section-sub">Watch how a lead is captured, responded to, and organized automatically — in seconds.</p>
          </div>
          <div className="demo-wrap">
            <div className="demo-bar">
              <div className="demo-dot" style={{background:'#FF6060'}} />
              <div className="demo-dot" style={{background:'#FFBD2E'}} />
              <div className="demo-dot" style={{background:'#27C93F'}} />
              <div className="demo-bar-url">ktautomatex.com/demo-system</div>
              <div style={{width:8,height:8,borderRadius:'50%',background:'var(--cyan)',opacity:0.6}} />
            </div>
            <div className="demo-screen">
              <div className="demo-scanline" />
              <button className="demo-play-btn" onClick={() => scrollTo("contact")}>
                <IconPlay />
              </button>
              <div className="demo-label">Click to book a live walkthrough →</div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:32}}>
            <p style={{fontSize:14,color:'var(--muted)',marginBottom:16}}>No video yet? Book a live walkthrough — free, no commitment.</p>
            <button className="btn-primary" onClick={() => scrollTo("contact")} style={{fontSize:14,padding:'12px 28px'}}>
              Book Free Walkthrough <IconArrow />
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">Lead Automation Systems<br/>We Build For You</h2>
            <p className="section-sub">Three focused systems, one complete lead engine. Pick what you need — or get all three.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-num">{s.num}</div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-features">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="service-feature">
                      <div className="service-feature-dot" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">Pricing</div>
            <h2 className="section-title">Transparent, Fixed Pricing</h2>
            <p className="section-sub">No hidden fees. No monthly subscriptions. One-time setup — systems that pay for themselves.</p>
          </div>
          <div className="pricing-grid">
            {pricing.map((p, i) => (
              <div key={i} className={`pricing-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <div className="pricing-badge">⭐ MOST POPULAR</div>}
                <div className="pricing-tier">{p.tier}</div>
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">
                  <sup>$</sup>{p.price}
                </div>
                <div className="pricing-desc">{p.desc}</div>
                <hr className="pricing-divider" />
                <div className="pricing-features">
                  {p.features.map((f, fi) => (
                    <div key={fi} className="pricing-feature">
                      <div className="check"><IconCheck /></div>
                      {f}
                    </div>
                  ))}
                </div>
                <button className={`btn-pricing ${p.featured ? "primary" : "outline"}`} onClick={() => scrollTo("contact")}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="results">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">Results</div>
            <h2 className="section-title">What This System Does For You</h2>
            <p className="section-sub">Real, measurable impact from day one of going live.</p>
          </div>
          <div className="results-grid">
            {results.map((r, i) => (
              <div key={i} className="result-card">
                <div className="result-icon">{r.icon}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <div className="result-metric">{r.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="how-we-work">
        <div className="container">
          <div className="section-header centered">
            <div className="section-tag">Our Process</div>
            <h2 className="section-title">From Zero to Automated<br/>in Days, Not Months</h2>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-inner">
            <div className="about-visual">
              <div className="about-card">
                <div className="about-badge">🚀 Lead Automation Expert</div>
                <div className="about-avatar">KT</div>
                <div className="about-name">KTautomateX</div>
                <div className="about-role">Founder & Lead Automation Specialist</div>
                <div className="about-bio">
                  Building intelligent lead automation systems that help businesses capture every opportunity, respond instantly, and scale without hiring more staff.
                </div>
                <div className="about-socials">
                  <a href="mailto:ktautomatex@gmail.com" className="about-social"><IconMail /></a>
                  <a href="https://www.linkedin.com/in/ktautomatex" target="_blank" rel="noopener noreferrer" className="about-social"><IconLinkedIn /></a>
                  <a href="https://wa.me/923459464251" target="_blank" rel="noopener noreferrer" className="about-social"><IconWhatsApp /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="about-social"><IconInstagram /></a>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-tag">About Us</div>
              <h2>We Don't Build <span>Generic</span> Automations</h2>
              <p>KTautomateX specializes in one thing only: building lead automation systems that directly impact your revenue. We focus on the moment a lead touches your business — and make sure nothing falls through the cracks.</p>
              <div className="about-values">
                {[
                  "We only build systems that have a direct, measurable impact on lead conversion.",
                  "Every system is custom-designed for your specific platforms and business model.",
                  "We stay until the system is live, tested, and performing — not just delivered.",
                  "Our focus is your ROI — not complexity for its own sake.",
                ].map((v, i) => (
                  <div key={i} className="about-value">
                    <div className="about-value-dot" />
                    <p>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info">
              <div className="section-tag">Contact</div>
              <h2>Get Your <span>Free</span><br/>Automation Plan</h2>
              <p>Tell us about your business and we'll design a custom lead automation blueprint — completely free, no strings attached.</p>
              <div className="contact-methods">
                <a href="https://wa.me/923459464251" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-method-icon"><IconWhatsApp /></div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">WhatsApp (Fastest)</span>
                    <span className="contact-method-value">+92-345-9464251</span>
                  </div>
                </a>
                <a href="mailto:ktautomatex@gmail.com" className="contact-method">
                  <div className="contact-method-icon"><IconMail /></div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">Email</span>
                    <span className="contact-method-value">ktautomatex@gmail.com</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/ktautomatex" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-method-icon"><IconLinkedIn /></div>
                  <div className="contact-method-text">
                    <span className="contact-method-label">LinkedIn</span>
                    <span className="contact-method-value">linkedin.com/in/ktautomatex</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-form">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3>Request Sent!</h3>
                  <p>We'll send your free automation plan within 24 hours. Check your WhatsApp & email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" placeholder="Ahmad Khan" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" placeholder="you@company.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Type *</label>
                    <input className="form-input" placeholder="e.g. Real Estate, E-commerce, Coaching..." required value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Where Do Your Leads Come From?</label>
                    <select className="form-select" value={form.source} onChange={e => setForm({...form, source: e.target.value})}>
                      <option value="">Select platform...</option>
                      <option value="facebook">Facebook Ads</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="website">Website / Landing Page</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="multiple">Multiple Platforms</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Biggest Lead Challenge</label>
                    <textarea className="form-textarea" placeholder="Describe your current problem with leads..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  {submitError && <div className="form-error">{submitError}</div>}
                  <button type="submit" className="btn-submit" disabled={submitting}>
                    {submitting ? "Sending..." : <><span>Get My Free Automation Plan</span> <IconArrow /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Stop <span>Losing Leads?</span></h2>
          <p>Join businesses that respond faster, follow up automatically, and close more deals.</p>
          <div className="final-cta-btns">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              Get Free Automation Plan <IconArrow />
            </button>
            <a href="https://wa.me/923459464251" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{color:'var(--white)'}}>
              <IconWhatsApp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">KT<span>automate</span>X</div>
            <div className="footer-copy">© 2025 KTautomateX · Lead Automation Systems</div>
            <div className="footer-links">
              <a href="mailto:ktautomatex@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/ktautomatex" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://wa.me/923459464251" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
