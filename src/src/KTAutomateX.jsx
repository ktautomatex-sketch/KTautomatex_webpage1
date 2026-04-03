import { useState, useEffect } from "react";
import {
  Zap, Bot, GitMerge, Search, Pencil, Wrench, Rocket,
  CheckCircle, XCircle, Menu, X, ArrowRight, ChevronRight
} from "lucide-react";

const ACCENT = "#00F3FF";

export default function KTAutomateX() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", website: "", bottleneck: "" });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://hook.eu1.make.com/pbsmgmigbvua3a2ze4n76lze37ffb5qm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website,
          bottleneck: form.bottleneck,
        }),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const navLinks = ["Services", "Process", "Contact"];

  return (
    <div style={{ backgroundColor: "#0A0A0A", color: "#FFFFFF", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "0 5%",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: "linear-gradient(135deg, #00F3FF22, #00F3FF11)",
              border: "1px solid #00F3FF44",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, fontWeight: 800, color: ACCENT, letterSpacing: "-0.5px"
            }}>KT</div>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px" }}>
              AutomateX
            </span>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase())}
                style={{ background: "none", border: "none", color: "#A1A1AA", fontSize: 14, cursor: "pointer", fontFamily: "inherit", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#FFF"}
                onMouseLeave={e => e.target.style.color = "#A1A1AA"}>
                {link}
              </button>
            ))}
            <CTAButton onClick={() => scrollTo("contact")} small>Get Automation Plan</CTAButton>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", color: "#FFF", cursor: "pointer", padding: 4 }}
            className="mobile-menu-btn">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#141414", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 5% 24px" }}>
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase())}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", color: "#A1A1AA", fontSize: 15, cursor: "pointer", fontFamily: "inherit", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {link}
              </button>
            ))}
            <div style={{ marginTop: 20 }}>
              <CTAButton onClick={() => scrollTo("contact")} fullWidth>Get Automation Plan</CTAButton>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", width: "100%" }}>
          {/* Left: Copy */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: `1px solid ${ACCENT}33`, borderRadius: 100,
              padding: "6px 16px", marginBottom: 32,
              backgroundColor: `${ACCENT}0A`
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT }} />
              <span style={{ fontSize: 12, color: ACCENT, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>AI Automation Partner</span>
            </div>

            <h1 style={{ fontSize: "clamp(42px, 5vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-2px", margin: "0 0 24px" }}>
              Your Business.<br />
              <span style={{ color: ACCENT }}>On Autopilot.</span>
            </h1>

            <p style={{ fontSize: 18, color: "#A1A1AA", lineHeight: 1.7, margin: "0 0 48px", maxWidth: 480 }}>
              We build custom AI-powered systems that eliminate manual work, connect your tools, and scale your operations without increasing headcount.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <CTAButton onClick={() => scrollTo("contact")}>Get Your Automation Plan</CTAButton>
              <button onClick={() => scrollTo("process")} style={{
                background: "none", border: "1px solid rgba(255,255,255,0.12)",
                color: "#FFF", padding: "12px 24px", borderRadius: 8, fontSize: 14,
                fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                fontFamily: "inherit", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}>
                See How It Works <ArrowRight size={16} />
              </button>
            </div>

            {/* Social proof */}
            <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 24, color: "#A1A1AA", fontSize: 13 }}>
              <Stat number="10x" label="Faster workflows" />
              <div style={{ width: 1, height: 32, backgroundColor: "rgba(255,255,255,0.08)" }} />
              <Stat number="80%" label="Manual work cut" />
              <div style={{ width: 1, height: 32, backgroundColor: "rgba(255,255,255,0.08)" }} />
              <Stat number="0" label="Extra headcount" />
            </div>
          </div>

          {/* Right: Abstract grid visual */}
          <div style={{ position: "relative", height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AbstractGrid />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PROBLEM → SOLUTION ── */}
      <section style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>The Problem</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", margin: "16px 0 64px", maxWidth: 600 }}>
          Most businesses run on broken, manual systems.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "start" }}>
          {/* Problems */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#A1A1AA", textTransform: "uppercase", marginBottom: 8 }}>Current Reality</div>
            {[
              { icon: "⚡", title: "Manual Work Overload", desc: "Your team spends hours on repetitive tasks that should be automated." },
              { icon: "🔍", title: "Lost & Unmanaged Leads", desc: "Potential clients fall through the cracks due to no systematic follow-up." },
              { icon: "🔧", title: "Disconnected Tools", desc: "Your CRM, email, and project tools don't talk to each other." },
            ].map(item => (
              <ProblemCard key={item.title} {...item} type="problem" />
            ))}
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 60 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom, transparent, ${ACCENT})` }} />
              <div style={{ width: 40, height: 40, borderRadius: "50%", border: `1px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ChevronRight size={18} style={{ color: ACCENT }} />
              </div>
              <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom, ${ACCENT}, transparent)` }} />
            </div>
          </div>

          {/* Solutions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 8 }}>KT AutomateX</div>
            {[
              { icon: "✓", title: "Fully Automated Workflows", desc: "Repetitive tasks handled end-to-end by intelligent, custom-built systems." },
              { icon: "✓", title: "Lead Capture & Qualification", desc: "Every lead captured, scored, and followed up — automatically, 24/7." },
              { icon: "✓", title: "Seamless Tool Integrations", desc: "Your entire stack unified into one intelligent, connected ecosystem." },
            ].map(item => (
              <ProblemCard key={item.title} {...item} type="solution" />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Services</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", margin: "16px 0 64px" }}>
          Three systems.<br />One transformation.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            {
              icon: <Zap size={22} style={{ color: ACCENT }} />,
              title: "Intelligent Lead Systems",
              desc: "AI-powered pipelines that capture, qualify, and nurture leads automatically — so your sales team only talks to prospects ready to buy.",
              features: ["Auto lead scoring", "Multi-channel capture", "Smart follow-up sequences"]
            },
            {
              icon: <Bot size={22} style={{ color: ACCENT }} />,
              title: "CRM & Sales Automation",
              desc: "Transform your CRM from a data graveyard into a living sales engine that updates itself, triggers actions, and closes deals faster.",
              features: ["Auto CRM updates", "Deal stage automation", "Revenue forecasting"]
            },
            {
              icon: <GitMerge size={22} style={{ color: ACCENT }} />,
              title: "AI Workflow Systems",
              desc: "Connect your entire tool stack and build intelligent workflows that process data, route tasks, and eliminate human error at scale.",
              features: ["Cross-tool integrations", "Document automation", "Custom AI agents"]
            }
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Process</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", margin: "16px 0 64px" }}>
          From audit to automation<br />in four steps.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {[
            { icon: <Search size={24} />, step: "01", title: "Audit", desc: "We map your current workflows, identify bottlenecks, and calculate the exact cost of your manual work." },
            { icon: <Pencil size={24} />, step: "02", title: "Design", desc: "We architect a custom automation blueprint tailored to your tools, team, and business goals." },
            { icon: <Wrench size={24} />, step: "03", title: "Build", desc: "Our team builds, tests, and refines every workflow until it runs flawlessly — zero compromise." },
            { icon: <Rocket size={24} />, step: "04", title: "Deploy", desc: "We launch your systems, train your team, and stay on to ensure everything scales with your growth." },
          ].map((step, i, arr) => (
            <ProcessStep key={i} {...step} isLast={i === arr.length - 1} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── COMPARISON ── */}
      <section style={{ padding: "100px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel>Why Us</SectionLabel>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", margin: "16px 0 64px" }}>
          Not another agency.<br />A different model entirely.
        </h2>

        <div style={{ backgroundColor: "#141414", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ padding: "20px 32px", color: "#A1A1AA", fontSize: 13, fontWeight: 600 }}></div>
            <div style={{ padding: "20px 32px", color: "#A1A1AA", fontSize: 13, fontWeight: 600, borderLeft: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
              Typical Agency
            </div>
            <div style={{ padding: "20px 32px", fontSize: 13, fontWeight: 700, color: ACCENT, borderLeft: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
              KT AutomateX
            </div>
          </div>

          {[
            ["Approach", "Manual deliverables, hourly billing", "Automated systems, outcome-based"],
            ["Scalability", "Scales with headcount", "Scales with infrastructure"],
            ["Ongoing value", "Ends when project ends", "Systems improve over time"],
            ["ROI timeline", "Months to see results", "Live within weeks"],
            ["Dependency", "Relies on freelancers", "Self-running systems"],
            ["Reporting", "Manual status updates", "Real-time dashboards & alerts"],
          ].map(([label, bad, good], i) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <div style={{ padding: "20px 32px", fontSize: 14, color: "#A1A1AA", fontWeight: 500 }}>{label}</div>
              <div style={{ padding: "20px 32px", fontSize: 14, color: "#A1A1AA", borderLeft: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 10 }}>
                <XCircle size={16} style={{ color: "#FF4444", flexShrink: 0 }} />{bad}
              </div>
              <div style={{ padding: "20px 32px", fontSize: 14, color: "#FFF", fontWeight: 500, borderLeft: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle size={16} style={{ color: ACCENT, flexShrink: 0 }} />{good}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── LEAD CAPTURE ── */}
      <section id="contact" style={{ padding: "100px 5%", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel center>Get Started</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-1.5px", margin: "16px 0 16px" }}>
            Ready to automate?
          </h2>
          <p style={{ color: "#A1A1AA", fontSize: 16, lineHeight: 1.7 }}>
            Tell us about your business and we'll build a custom automation plan — no sales fluff, just a clear roadmap.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "64px 32px", backgroundColor: "#141414", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
            <CheckCircle size={48} style={{ color: ACCENT, margin: "0 auto 24px", display: "block" }} />
            <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 12px" }}>We're on it.</h3>
            <p style={{ color: "#A1A1AA", fontSize: 16 }}>Expect your custom automation plan within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: "#141414", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 40, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <FormField label="Name" type="text" placeholder="Jane Smith" value={form.name} onChange={v => setForm({ ...form, name: v })} required />
              <FormField label="Email" type="email" placeholder="jane@company.com" value={form.email} onChange={v => setForm({ ...form, email: v })} required />
            </div>
            <FormField label="Website / Business" type="text" placeholder="yourcompany.com" value={form.website} onChange={v => setForm({ ...form, website: v })} />
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A1A1AA", marginBottom: 8, letterSpacing: "0.02em" }}>Biggest Bottleneck</label>
              <textarea
                required
                placeholder="Describe your biggest operational challenge or time sink..."
                value={form.bottleneck}
                onChange={e => setForm({ ...form, bottleneck: e.target.value })}
                rows={4}
                style={{
                  width: "100%", padding: "12px 16px", backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                  color: "#FFF", fontSize: 14, fontFamily: "inherit", resize: "vertical",
                  outline: "none", boxSizing: "border-box", lineHeight: 1.6
                }}
                onFocus={e => e.target.style.borderColor = `${ACCENT}66`}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>

            <div style={{ marginTop: 8 }}>
              <CTAButton type="submit" fullWidth large disabled={submitting}>
                {submitting ? "Sending…" : "👉 Get My Automation Plan"}
              </CTAButton>
            </div>

            {submitError && (
              <p style={{ textAlign: "center", color: "#FF4444", fontSize: 13, margin: 0 }}>
                {submitError}
              </p>
            )}

            <p style={{ textAlign: "center", color: "#A1A1AA", fontSize: 12, margin: 0 }}>
              No spam. No commitment. Just a clear, actionable plan.
            </p>
          </form>
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 5%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${ACCENT}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: ACCENT }}>KT</div>
            <span style={{ fontWeight: 700, fontSize: 14 }}>KT AutomateX</span>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            {["Services", "Process", "Contact"].map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase())}
                style={{ background: "none", border: "none", color: "#A1A1AA", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                {link}
              </button>
            ))}
          </div>

          <span style={{ color: "#A1A1AA", fontSize: 13 }}>© 2026 KT AutomateX. All rights reserved.</span>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0A; }
        ::selection { background: #00F3FF33; color: #FFF; }
        input::placeholder, textarea::placeholder { color: #555; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          section { padding-left: 5% !important; padding-right: 5% !important; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
          .problem-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ── SUBCOMPONENTS ── */

function CTAButton({ children, onClick, small, large, fullWidth, type = "button", disabled }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: disabled ? "#00F3FF66" : "#00F3FF",
        color: "#0A0A0A",
        border: "none",
        borderRadius: 8,
        padding: large ? "16px 32px" : small ? "10px 20px" : "12px 24px",
        fontSize: small ? 13 : 14,
        fontWeight: 700,
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "inherit",
        width: fullWidth ? "100%" : "auto",
        transition: "all 0.2s ease",
        boxShadow: hovered && !disabled ? "0 0 24px rgba(0,243,255,0.35)" : "none",
        transform: hovered && !disabled ? "translateY(-1px)" : "none",
        letterSpacing: "0.01em",
        opacity: disabled ? 0.7 : 1,
      }}>
      {children}
    </button>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 800, color: "#FFF", letterSpacing: "-1px" }}>{number}</div>
      <div style={{ fontSize: 12, color: "#A1A1AA", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function SectionLabel({ children, center }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#00F3FF", textTransform: "uppercase", textAlign: center ? "center" : "left" }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.05)", maxWidth: 1200, margin: "0 auto" }} />;
}

function ProblemCard({ title, desc, type }) {
  const isSolution = type === "solution";
  return (
    <div style={{
      padding: "20px 24px",
      backgroundColor: "#141414",
      borderRadius: 12,
      border: isSolution ? `1px solid #00F3FF22` : "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{
          width: 24, height: 24, borderRadius: "50%", flexShrink: 0, marginTop: 1,
          backgroundColor: isSolution ? "#00F3FF22" : "rgba(255,68,68,0.12)",
          border: isSolution ? "1px solid #00F3FF44" : "1px solid rgba(255,68,68,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12,
        }}>
          {isSolution
            ? <CheckCircle size={13} style={{ color: "#00F3FF" }} />
            : <XCircle size={13} style={{ color: "#FF4444" }} />}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: isSolution ? "#FFF" : "#A1A1AA" }}>{title}</div>
          <div style={{ fontSize: 13, color: "#A1A1AA", lineHeight: 1.6 }}>{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, features }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#141414",
        borderRadius: 16,
        border: hovered ? "1px solid rgba(0,243,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
        padding: "32px",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "default",
      }}>
      <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "rgba(0,243,255,0.08)", border: "1px solid rgba(0,243,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.5px" }}>{title}</h3>
      <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.7, margin: "0 0 24px" }}>{desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {features.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#A1A1AA" }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#00F3FF", flexShrink: 0 }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ icon, step, title, desc, isLast }) {
  return (
    <div style={{ position: "relative", padding: "0 32px 0 0" }}>
      {!isLast && (
        <div style={{
          position: "absolute", top: 22, left: "calc(100% - 32px)", width: "calc(32px + 48px)", height: 1,
          background: "linear-gradient(to right, rgba(0,243,255,0.4), rgba(0,243,255,0.1))"
        }} />
      )}
      <div style={{ width: 44, height: 44, borderRadius: 12, border: "1px solid rgba(0,243,255,0.3)", backgroundColor: "rgba(0,243,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#00F3FF", marginBottom: 20 }}>
        {icon}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#00F3FF", letterSpacing: "0.1em", marginBottom: 8 }}>{step}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.5px" }}>{title}</h3>
      <p style={{ fontSize: 14, color: "#A1A1AA", lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

function FormField({ label, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#A1A1AA", marginBottom: 8, letterSpacing: "0.02em" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        style={{
          width: "100%", padding: "12px 16px", backgroundColor: "#0A0A0A",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
          color: "#FFF", fontSize: 14, fontFamily: "inherit", outline: "none",
        }}
        onFocus={e => e.target.style.borderColor = "rgba(0,243,255,0.4)"}
        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
      />
    </div>
  );
}

function AbstractGrid() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 440 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid dots */}
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 40 + 20} r="1.5"
            fill={`rgba(0,243,255,${Math.random() > 0.7 ? 0.4 : 0.1})`} />
        ))
      )}
      {/* Connection lines */}
      <line x1="60" y1="60" x2="180" y2="140" stroke="rgba(0,243,255,0.15)" strokeWidth="1" />
      <line x1="180" y1="140" x2="300" y2="100" stroke="rgba(0,243,255,0.15)" strokeWidth="1" />
      <line x1="300" y1="100" x2="380" y2="200" stroke="rgba(0,243,255,0.15)" strokeWidth="1" />
      <line x1="60" y1="200" x2="180" y2="140" stroke="rgba(0,243,255,0.1)" strokeWidth="1" />
      <line x1="140" y1="280" x2="300" y2="260" stroke="rgba(0,243,255,0.1)" strokeWidth="1" />
      {/* Nodes */}
      {[
        { x: 60, y: 60, r: 6 },
        { x: 180, y: 140, r: 10 },
        { x: 300, y: 100, r: 7 },
        { x: 380, y: 200, r: 5 },
        { x: 60, y: 200, r: 5 },
        { x: 140, y: 280, r: 6 },
        { x: 300, y: 260, r: 8 },
      ].map(({ x, y, r }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r + 8} fill={`rgba(0,243,255,0.04)`} />
          <circle cx={x} cy={y} r={r} fill="rgba(0,243,255,0.2)" stroke="rgba(0,243,255,0.6)" strokeWidth="1" />
        </g>
      ))}
      {/* Center glow */}
      <circle cx={220} cy={190} r={80} fill="rgba(0,243,255,0.02)" />
      <circle cx={220} cy={190} r={120} fill="rgba(0,243,255,0.015)" />
      {/* Labels */}
      <text x="100" y="58" fontSize="10" fill="rgba(0,243,255,0.5)" fontFamily="Inter, sans-serif">CRM</text>
      <text x="310" y="98" fontSize="10" fill="rgba(0,243,255,0.5)" fontFamily="Inter, sans-serif">Email</text>
      <text x="155" y="138" fontSize="10" fill="rgba(0,243,255,0.8)" fontFamily="Inter, sans-serif" fontWeight="600">AI Core</text>
      <text x="30" y="198" fontSize="10" fill="rgba(0,243,255,0.5)" fontFamily="Inter, sans-serif">Slack</text>
      <text x="310" y="258" fontSize="10" fill="rgba(0,243,255,0.5)" fontFamily="Inter, sans-serif">Notion</text>
      <text x="148" y="278" fontSize="10" fill="rgba(0,243,255,0.5)" fontFamily="Inter, sans-serif">Calendar</text>
    </svg>
  );
}
