import { Link } from 'react-router-dom';

import './Page.css';

export default function Hospitality() {
  return (
    <section className="page">
      <div className="page-inner">

        <Link
          to="/"
          className="page-back"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          ← Back to home
        </Link>


        <div className="page-header">
          <div
            className="page-accent"
            style={{ height: '100px', '--page-accent': '#b45309' }}
          />

          <div className="page-header-content">
            <p className="page-eyebrow">Hospitality</p>
            <h1>
              Leadership, operations, and building strong teams in fast-paced environments
            </h1>
          </div>
        </div>


        <p className="page-intro">
          Before moving fully into software development, I spent years working in
          hospitality, where I led teams, managed operations, and learned how
          real systems behave under pressure.
        </p>

        <div className="page-section">
          <h2>Team leadership</h2>
          <p>
            Experience managing and supporting diverse teams, aligning people
            around shared goals, and maintaining high standards in demanding,
            customer-facing environments.
          </p>
        </div>

        <div className="page-section">
          <h2>Operations & accountability</h2>
          <p>
            Hands-on responsibility for day-to-day operations, scheduling,
            quality control, and adapting quickly when things don’t go as planned.
          </p>
        </div>

        <div className="page-section">
          <h2>Why it still matters</h2>
          <p>
            Hospitality taught me situational awareness, clear communication,
            and ownership — skills I now apply directly to building and
            maintaining production software systems.
          </p>
        </div>
      </div>

      <p className="page-resume-link">
  For a detailed work history and formal training, see my{' '}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    résumé
  </a>.
</p>


    </section>
  );
}
