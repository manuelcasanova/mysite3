import './Footer.css'
import { useState } from 'react';
import MoreOverlay from './MoreOverlay';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faFileLines,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons'


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
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/manuel-casanova/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>

        <a
          href="mailto:manucasanova@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>

        <a
          href="https://www.manucasanova.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileLines} />
          Resume
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setShowMore(true)
          }}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
          More
        </a>

        {showMore && <MoreOverlay onClose={() => setShowMore(false)} />}
      </div>

    </footer>
  )
}

export default Footer
