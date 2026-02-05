import './Background.css'

function Background() {
  return (
    <section className="background" id="background">
      <div className="background-inner">
        <h2>Background</h2>

        <p className="background-intro">
          I trained as a full-stack web developer through Lighthouse Labs and continued
          learning by building and deploying real applications. My main project, <a href="#dnzify" className="inline-project-link">DNZIFY</a>,
          is a personal SaaS built and maintained end-to-end, and is actively used by
          others, exposing me to real-world architecture, security, and deployment
          challenges.

        </p>

        <div className="background-grid">
          <div className="background-card">
            <h3>Hands-on Product Development</h3>
            <ul>
              <li>Designed and built a full-stack PERN application from scratch</li>
              <li>Implemented authentication, roles, subscriptions, and admin tools</li>
              <li>Maintained and iterated based on real usage and edge cases</li>
            </ul>
          </div>

          <div className="background-card">
            <h3>Backend & Architecture</h3>
            <ul>
              <li>REST APIs with structured controllers and middleware</li>
              <li>PostgreSQL schema design and relational modeling</li>
              <li>JWT-based auth, protected routes, and role checks</li>
            </ul>
          </div>

          <div className="background-card">
            <h3>Frontend & UX</h3>
            <ul>
              <li>React UI with role-aware navigation and views</li>
              <li>Admin dashboards and content management flows</li>
              <li>Multilingual UI and accessibility considerations</li>
            </ul>
          </div>

          <div className="background-card">
            <h3>Deployment & Operations</h3>
            <ul>
              <li>Manual deployment and configuration in production environments</li>
              <li>Environment-based config and credential management</li>
              <li>Debugging using logs, network inspection, and database queries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background
