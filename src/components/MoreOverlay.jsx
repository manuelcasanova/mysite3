import { Link } from 'react-router-dom';
import './MoreOverlay.css';

export default function MoreOverlay({ onClose }) {
  return (
    <div className="more-overlay">
      <div
        className="more-overlay-backdrop"
        onClick={onClose}
      />

      <div className="more-overlay-panel">
        <p className="more-overlay-intro">
          I’ve built software, led teams in hospitality, taught languages,
          and lived a few lives in between.
        </p>

        <nav className="more-overlay-links">
          <Link
            to="/"
            onClick={() => {
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            as a Web Developer
          </Link>

          <Link
            to="/hospitality"
            onClick={() => {
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            in the Hospitality industry
          </Link>

          <Link
            to="/spanish-teacher"
            onClick={() => {
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            as Spanish Teacher
          </Link>

          <Link
            to="/beyond"
            onClick={() => {
              onClose();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Beyond the Résumé
          </Link>
        </nav>
      </div>
    </div>
  );
}
