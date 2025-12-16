import React from "react"
import LiquidGlass from "./liquid-glass"

type NavItem = {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

const Navbar: React.FC = () => {
  const [isSolid, setIsSolid] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        padding: "12px clamp(16px, 4vw, 32px)",
        background: `rgba(10, 10, 10, ${isSolid ? 0.85 : 0.55})`,
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: isSolid ? "0 18px 45px rgba(0, 0, 0, 0.45)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <LiquidGlass
          layout="inline"
          displacementScale={42}
          blurAmount={0.08}
          saturation={180}
          aberrationIntensity={2}
          cornerRadius={999}
          padding="10px clamp(20px, 4vw, 36px)"
          style={{ width: "100%" }}
        >
          <nav
            aria-label="Primary"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              width: "100%",
            }}
          >
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToId("hero")
              }}
              style={{
                fontWeight: 700,
                fontSize: "clamp(18px, 2vw, 22px)",
                color: "#fdf2ea",
                textDecoration: "none",
                letterSpacing: 2,
              }}
              aria-label="Go to hero section"
            >
              CTIEN
            </a>

            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: 24,
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(item.id)
                    }}
                    style={{
                      color: "#f9f9f9",
                      textDecoration: "none",
                      fontSize: "clamp(13px, 1.5vw, 15px)",
                      letterSpacing: 0.5,
                      opacity: 0.85,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "1"
                      e.currentTarget.style.color = "#ffc7aa"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.85"
                      e.currentTarget.style.color = "#f9f9f9"
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/CV_Resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: "#dc6139",
                color: "#fff",
                textDecoration: "none",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: 600,
                transition: "all 0.2s ease",
                boxShadow: "0 10px 25px rgba(220, 97, 57, 0.25)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(220, 97, 57, 0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(220, 97, 57, 0.25)"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v10m0 0l4-4m-4 4l-4-4M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download CV
            </a>
          </nav>
        </LiquidGlass>
      </div>
    </header>
  )
}

export default Navbar