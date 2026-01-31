import './Hero.css'

function Hero() {
  return (
    <section className="hero">



      <div className="hero-inner">


        <div className="hero-header">
          <img
            src="/manuel.jpg"
            alt="Manuel Casanova"
            className="hero-photo"
          />
          <div>
            <p className="hero-eyebrow">Manuel Casanova</p>
            <h1>
              I design and build scalable web applications from frontend to backend
              to production.
            </h1>
          </div>
        </div>

        <p className="hero-subtitle">
          <span>Full-stack</span>
          <span>Real systems</span>
          <span>In production</span>
        </p>

        <div className="hero-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>PostgreSQL</span>
        </div>

        <button
          className="hero-cta"
          onClick={() => {
            document
              .getElementById('work')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          View selected work
        </button>

        {/* <p className="hero-secondary">
          <a
            href="#background"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('background')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View background & practical skills
          </a>
        </p> */}

        <p className="hero-contact">
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
        </p>



      </div>
    </section>
  )
}

export default Hero
