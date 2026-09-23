import { patents, publications } from '../data/portfolio';

function ResearchSection() {
  return (
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
            {patents.map((patent) => <li key={patent}>{patent}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;