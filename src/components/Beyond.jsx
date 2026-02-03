import { Link } from 'react-router-dom';
import './Page.css';

export default function Beyond() {
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
            style={{ height: '120px', '--page-accent': '#9ca3af' }}
          />

          <div className="page-header-content">
            <p className="page-eyebrow">Beyond the Résumé</p>

            <h1>
              The experiences and values that don’t fit neatly into a CV
            </h1>
          </div>
        </div>

        <p className="page-intro">
          A résumé captures roles and timelines, but it rarely explains how
          someone thinks, adapts, or grows. This page exists to give a bit of
          that missing context.
        </p>

        <div className="page-section">
          <h2>Non-linear paths</h2>
          <p>
            My career hasn’t followed a single, straight line. I’ve worked in
            different industries, learned in different ways, and taken the long
            route more than once. What looks indirect on paper has, in practice,
            given me a broader perspective and a higher tolerance for complexity.
          </p>
        </div>

        <div className="page-section">
          <p>
            Along the way, I’ve lived and worked in different countries, taught and
            learned languages, managed teams of very different sizes, and built tools
            for communities I was personally part of. Those experiences didn’t just
            shape my résumé — they shaped how I approach problems, people, and systems.
          </p>
        </div>


        <div className="page-section">
          <h2>Learning by doing</h2>
          <p>
            I tend to learn best by building, testing, and refining — whether
            that’s software, processes, or personal habits. I value feedback,
            iteration, and responsibility over credentials alone.
          </p>
        </div>

        <div className="page-section">
          <h2>How this shows up in my work</h2>
          <p>
            Today, this translates into a practical approach to problem-solving:
            focusing on systems that work in real conditions, communicating
            clearly with others, and taking ownership when things need to change.
          </p>
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
      </div>
    </section>
  );
}
