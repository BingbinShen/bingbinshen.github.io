function HeroSection() {
  return (
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
            <a className="primary-link" href="#contact">Get in touch</a>
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
  );
}

export default HeroSection;