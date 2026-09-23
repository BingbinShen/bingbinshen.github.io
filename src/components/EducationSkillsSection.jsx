import { education, languages, skills } from '../data/portfolio';

function EducationSkillsSection() {
  return (
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
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <div className="section-heading compact-heading">
          <p className="eyebrow">Languages</p>
          <h2>Communication</h2>
        </div>
        <ul className="pill-list">
          {languages.map((language) => <li key={language}>{language}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default EducationSkillsSection;