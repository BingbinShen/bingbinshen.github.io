const experience = [
  {
    title: 'Automation Engineer',
    company: 'KIT – Karlsruhe Institute of Technology',
    period: 'Aug 2024 – Present',
    location: 'Karlsruhe, Germany',
    bullets: [
      'Planning, design, specification, commissioning, and handover of cooling and air-conditioning systems with groundwater cooling.',
      'Optimizing measurement, control, and operating parameters to support energy-efficient cooling for accelerator facilities.',
      'Investigating faults and maintaining mechanical, hydraulic, and electronic components in collaboration with scientific teams.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    company: 'Autel Europe GmbH',
    period: 'Oct 2023 – Mar 2024',
    location: 'Düsseldorf, Germany',
    bullets: [
      'Delivered technical support for customer applications, maintenance, troubleshooting, and solution development.',
      'Conducted product-specific trainings to ensure correct usage and service procedures.',
      'Supported sales with tailored technical recommendations based on customer requirements.',
    ],
  },
  {
    title: 'Automation Engineer – Smart Factory & SPS',
    company: 'JINGDONG DEVELOPMENT DEUTSCHLAND GmbH',
    period: 'Oct 2021 – Oct 2023',
    location: 'Buseck, Germany',
    bullets: [
      'Implemented automation systems and built process control infrastructures for industrial applications.',
      'Managed requirements and supported product development for the operating system.',
      'Prepared technical documentation, training materials, and project data analyses.',
    ],
  },
];

const education = [
  {
    degree: 'M.Sc. in General Mechanical Engineering',
    institution: 'Technische Universität Braunschweig',
    period: '2019 – 2021',
    note: 'Grade: 2.1; thesis on motion simulation for lithium-ion battery cell production.',
  },
  {
    degree: 'B.Eng. in Mechanical Engineering and Automation',
    institution: 'Zhejiang University of Science and Technology',
    period: '2013 – 2017',
    note: 'Grade: 1.9; thesis on comparative analysis of glass fiber coating systems with PLC and Arduino.',
  },
];

const publications = [
  {
    title: 'Development of Practice and Training Platform Based on Multiply Pattern PLC',
    citation: 'Ruiming Wu; Bingbin Shen (2016), Proceedings of the 15th National Symposium on Teaching Mechanical Design.',
  },
  {
    title: 'Research of Intelligent Assembly Machine of Transmission Shaft Spring Based on PAC Systems RX3i',
    citation: 'Bingbin Shen; Ruiming Wu (2015), Science and Technology Innovation Herald.',
  },
];

const patents = [
  'Assembly machine model for retaining rings',
  'Detection model for empty drums',
  'Control cabinet design',
];

const skills = ['SPS / PLC', 'AutoCAD', 'Inventor', 'SolidWorks', 'MATLAB/Simulink', 'Python', 'MS Office', 'PMP'];
const languages = ['German (C1)', 'English (C1)', 'Chinese (native)'];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio · Bingbin Shen</p>
            <h1>Automation engineer shaping intelligent and sustainable manufacturing.</h1>
            <p className="lead">
              I bridge mechanical engineering, automation, and data-driven problem solving to deliver robust industrial systems and practical technical solutions.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#contact">
                Get in touch
              </a>
              <a className="secondary-link" href="/Lebenslauf.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-card" aria-label="Profile summary">
            <div className="avatar">BS</div>
            <h2>Bingbin Shen</h2>
            <p>Automation Engineer | Research-oriented engineer | Karlsruhe, Germany</p>
            <ul>
              <li>Master in Mechanical Engineering</li>
              <li>Experience across industry and research</li>
              <li>Fluent in German, English, and Chinese</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Engineering background with a practical, people-centered approach.</h2>
          </div>
          <p>
            Bingbin Shen is an automation engineer with a strong foundation in mechanical engineering, control systems, and digital tools. Her work spans commissioning and optimization of cooling systems, smart-factory implementation, and research-driven development in battery and solar applications.
          </p>
          <p>
            She combines technical depth with clear communication, supporting cross-functional collaboration and ensuring that systems are built to perform reliably in real-world environments.
          </p>
        </section>

        <section id="experience" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Professional journey</h2>
          </div>
          <div className="timeline-list">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-meta">
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card grid-section">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Academic foundation</h2>
            </div>
            <div className="info-list">
              {education.map((item) => (
                <div className="info-item" key={item.degree}>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>{item.period}</span>
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Tools and competencies</h2>
            </div>
            <ul className="pill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="section-heading compact-heading">
              <p className="eyebrow">Languages</p>
              <h2>Communication</h2>
            </div>
            <ul className="pill-list">
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="publications" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Research</p>
            <h2>Selected publications and patents</h2>
          </div>
          <div className="two-column">
            <div>
              <h3>Publications</h3>
              <ul className="bullet-list">
                {publications.map((publication) => (
                  <li key={publication.title}>
                    <strong>{publication.title}</strong>
                    <p>{publication.citation}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Patents</h3>
              <ul className="bullet-list">
                {patents.map((patent) => (
                  <li key={patent}>{patent}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section-card contact-card">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect.</h2>
          </div>
          <p>Based in Karlsruhe, Germany, and open to professional conversations about automation, engineering, and innovation.</p>
          <div className="contact-links">
            <a href="mailto:bingbin.shen@outlook.com">bingbin.shen@outlook.com</a>
            <a href="tel:+491745382763">+49 174 5382763</a>
            <span>Karlsruhe, Germany</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
