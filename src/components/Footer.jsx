import './Footer.css'
import { useState } from 'react';
import MoreOverlay from './MoreOverlay';

function Footer() {

  const [showMore, setShowMore] = useState(false);


  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-content">

        <a
          href="https://github.com/manuelcasanova/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/manuel-casanova/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="mailto:manucasanova@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>

        <a
          href="https://www.manucasanova.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowMore(true);
          }}
        >
          More
        </a>

        {showMore && <MoreOverlay onClose={() => setShowMore(false)} />}


      </div>
    </footer>
  )
}

export default Footer
