const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const metrics = [
  { value: "10+", label: "Years building production software" },
  { value: "12", label: "Projects launched across web and API systems" },
  { value: "99.9%", label: "Reliability mindset for modern platforms" },
];

const skills = [
  {
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, accessibility, performance optimization.",
  },
  {
    title: "Backend",
    description:
      "Node.js, Express, REST APIs, authentication, PostgreSQL, Redis, background jobs.",
  },
  {
    title: "Mobile",
    description:
      "Capacitor (Android/iOS), push notifications (FCM), in-app browser flows, Kotlin Multiplatform (KMP), Flutter fundamentals.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Docker, CI/CD, deployment pipelines, monitoring, logging, scalable infrastructure.",
  },
  {
    title: "Engineering Practice",
    description:
      "System design, testing, debugging, code reviews, technical documentation, agile delivery.",
  },
];

const projects = [
  {
    tag: "Fintech Mobile App",
    year: "2026",
    title: "CidiPay Mobile (Android/iOS)",
    description:
      "Built and shipped a mobile wallet app with deposits, transfers, P2P trading chat, escrow flows, and in-app KYC verification—focused on polished UX, real-time updates, and reliable transaction handling.",
    link: "https://www.cidipay.com",
    stack: [
      "React",
      "Capacitor",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.IO",
      "Firebase (FCM)"
    ],
  },
  {
    tag: "SaaS Platform",
    year: "2026",
    title: "Analytics Dashboard for Operations Teams",
    description:
      "Built a responsive dashboard with role-based access, real-time metrics, and data-heavy UI flows that improved decision-making speed for internal stakeholders.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    tag: "API Engineering",
    year: "2025",
    title: "High-Throughput Order Processing Service",
    description:
      "Designed and shipped backend services for transaction workflows, improving reliability and reducing manual operational handling through better automation and validation.",
    stack: ["Node.js", "Express", "Redis", "Docker"],
  },
  {
    tag: "Developer Tools",
    year: "2024",
    title: "Internal CI Visibility Tool",
    description:
      "Created an internal tool to visualize pipeline health, flag failures earlier, and reduce the time engineers spent debugging avoidable deployment issues.",
    stack: ["Next.js", "Charts", "CI/CD", "Observability"],
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    period: "2024 — Present",
    description:
      "Leading feature delivery, architecture decisions, and technical collaboration on product initiatives serving growing user needs at Cidipay.",
  },
  {
    role: "Technical Support Engineer",
    period: "2022 — 2026",
    description:
      "• Provide front-line technical support for Microsoft Dynamics 365 CRM, handling configuration, integration, data migration, and performance troubleshooting.\n• Investigate customer-reported issues to identify root causes and recommend fixes aligned to product and platform best practices.",
  },
  {
    role: "Technical Support Specialist",
    period: "2021 — 2022",
    description:
      "•	Delivered end-user support for hardware and software issues via phone, email, and in-person assistance to minimize downtime",
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <img
            className="brand-avatar"
            src="/img/profile.jpeg"
            alt="Anthony Mekwunye"
          />
          <span>Anthony Mekwunye</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Hire Me
        </a>
        <details className="mobile-nav">
          <summary className="mobile-nav-trigger" aria-label="Open navigation menu">
            Menu
          </summary>
          <div className="mobile-nav-panel glass-card" role="dialog" aria-label="Mobile navigation">
            <nav className="mobile-nav-links" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a className="mobile-nav-cta" href="#contact">
                Hire Me
              </a>
            </nav>
          </div>
        </details>
      </header>

      <main id="home">
        <section className="hero glass-card">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer • Full-Stack • Problem Solver</p>
            <h1>I build fast, scalable, and human-centered digital products.</h1>
            <p className="hero-text">
              I’m a software engineer focused on designing clean systems, shipping dependable
              applications, and turning complex business requirements into smooth user experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Let’s Talk
              </a>
            </div>

            <ul className="hero-metrics" aria-label="Career highlights">
              {metrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel glass-card">
            <div className="status-chip">
              <span className="status-dot" />
              Available for remote opportunities
            </div>
            <div className="code-block">
              <span>{`const engineer = {`}</span>
              <span>{`  focus: ["frontend", "backend", "cloud"],`}</span>
              <span>{`  values: ["quality", "clarity", "impact"],`}</span>
              <span>{`  location: "Open to global teams"`}</span>
              <span>{`};`}</span>
            </div>
            <div className="mini-grid">
              <div>
                <p>Primary Stack</p>
                <strong>JavaScript, TypeScript, Node.js</strong>
              </div>
              <div>
                <p>Current Focus</p>
                <strong>Scalable products and polished UX</strong>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Engineering solutions that are elegant under the hood and clear on the surface.</h2>
          </div>
          <div className="about-grid">
            <article className="glass-card">
              <p>
                I enjoy working across the product lifecycle, from architecture and API design to
                implementation, optimization, and release. My approach combines solid engineering
                principles with a strong eye for usability, maintainability, and measurable
                outcomes.
              </p>
            </article>
            <article className="glass-card">
              <p>
                I collaborate well with founders, product teams, and designers, and I’m
                comfortable owning features end to end. I care deeply about clean code, thoughtful
                documentation, and systems that can grow without becoming fragile.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Core Skills</p>
            <h2>Technologies I use to build modern products.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="glass-card skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h2>Selected projects with business impact and technical depth.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="glass-card project-card">
                <div className="project-top">
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.cidipay.com
                  </a>
                ) : null}
                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>A snapshot of how I contribute on teams.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="glass-card timeline-item">
                <div className="timeline-meta">
                  <span>{item.role}</span>
                  <span>{item.period}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-card glass-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something valuable together.</h2>
              <p>
                
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:anthonymekwunye95@gmail.com">Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/anthony-mekwunye-68a265237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvZROc1qXQC6zHizoyQSaZg%3D%3D" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} Anthony Mekwunye. Built for the web.</p>
      </footer>
    </div>
  );
}
