import './SelectedWork.css'

function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <div className="selected-work-inner">
        <h2>Selected Work</h2>

        <div className="projects">
          {/* Project 1 — DNZIFY */}
          <article className="project-card">
            <h3>DNZIFY</h3>
            <p>
              A full-stack web application for dance schools to manage instructional
              content, user roles, and subscriptions. Built to support structured
              learning, media uploads, and role-based access.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Production</li>
              <li>Stripe</li>
              <li>Subscriptions</li>
              <li>Role Based Access Control</li>
              <li>Media</li>
            </ul>
            <div className="project-actions">
              <a
                href="https://dnzify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Live site ↗
              </a>

              <a
                href="https://www.dnzify.com/demo/video"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Demo video ▶
              </a>
            </div>

          </article>

          {/* Project 2 — Fullstack Template */}
          <article className="project-card">
            <h3>Fullstack Template</h3>
            <p>
              A reusable full-stack application template designed to accelerate
              development of secure, scalable platforms. Includes authentication,
              role-based access, admin tools, subscriptions, social features, and
              multilingual support.
            </p>
            <ul className="project-tech">
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>React</li>
            </ul>
            <div className="project-actions">
              <a
                href="https://socialtemplate.manucasanova.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Live site ↗
              </a>
            </div>

          </article>

          {/* Project 3 — RWITHME */}
          <article className="project-card">
            <h3>RWITHME</h3>
            <p>
              A social platform for cycling and running enthusiasts to discover,
              create, and share routes, join planned rides and runs, and interact
              through comments, private messaging, and following.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
            <div className="project-actions">
              <a
                href="https://rwithme.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Live site ↗
              </a>

              <a
                href="https://www.rwithme.com/rwithme.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Demo video ▶
              </a>
            </div>
          </article>

          {/* Project 4 — TIPS! */}
          <article className="project-card">
            <h3>TIPS!</h3>
            <p>
              A specialized calculator for restaurant managers and supervisors to
              streamline tip distribution based on hours worked, roles, and service
              packages and menus.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
            <div className="project-actions">
              <a
                href="https://www.tips.manucasanova.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Live site ↗
              </a>

              <a
                href="https://www.tips.manucasanova.com/tips.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Demo video ▶
              </a>
            </div>
          </article>

          {/* Project 5 — PERN CRUD Tutorial */}
          <article className="project-card">
            <h3>PERN Stack CRUD Application Tutorial</h3>
            <p>
              A technical tutorial demonstrating how to build a clean, minimal CRUD
              application using the PERN stack, focusing on architecture, data flow,
              and best practices.
            </p>
            <ul className="project-tech">
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <div className="project-actions">
              <a
                href="https://medium.com/@manuelcasanovafernandez/a-pern-stack-crud-application-tutorial-e8676582c708"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Article available →
              </a>
            </div>
          </article>

          {/* Project 6 — casanovaspanish.com */}
          <article className="project-card">
            <h3>casanovaspanish.com</h3>
            <p>
              A public-facing website built for an online Spanish tutor to present
              services, manage content, and provide a clear, accessible experience
              for prospective students.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>


            <div className="project-actions">
              <a
                href="https://www.casanovaspanish.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-button"
              >
                Live site ↗
              </a>
            </div>

          </article>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
