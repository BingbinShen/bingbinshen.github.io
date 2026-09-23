import { experience } from '../data/portfolio';

function ExperienceSection() {
  return (
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
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;