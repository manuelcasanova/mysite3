import './Background.css'

function Background() {
  return (
    <section className="background" id="background">

      <div className="background-inner">
        <h2>Background & Practical Skills</h2>

        <p className="background-intro">
          I completed the Lighthouse Labs Flex Web Program and have since built and
          deployed multiple full-stack applications using the PERN stack, with a
          strong focus on real-world architecture, security, and production workflows.
        </p>

        <div className="skill-group">
          <h3>Product Ownership & Real-World Operation</h3>
          <ul>
            <li>
              DNZIFY is a live, production application actively used by dance schools
              and instructors to manage instructional content, users, and subscriptions.
            </li>
            <li>
              I am responsible for the full technical ownership of the platform, including
              architecture, development, deployment, maintenance, and security.
            </li>
            <li>
              In addition to engineering, I manage the operational side of the product,
              including customer support, onboarding, marketing, administration,
              and business processes.
            </li>
          </ul>
        </div>


        <div className="skill-group">
          <h3>Application Architecture & Development</h3>
          <ul>
            <li>Full-stack PERN applications built from scratch</li>
            <li>Role-based access control and permission systems</li>
            <li>Secure authentication (JWT, refresh tokens, protected routes)</li>
            <li>RESTful API design with structured controllers and middleware</li>
            <li>PostgreSQL schema design, migrations, and relational modeling</li>
            <li>Media handling (video/audio uploads, access control, CDN-ready design)</li>
            <li>Admin dashboards, subscriptions, and feature gating</li>
            <li>Multilingual UI support</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Configuration & Reliability</h3>
          <ul>
            <li>Centralized error handling and structured logging</li>
            <li>Environment-based configuration (development vs production)</li>
            <li>Login history, audit trails, and role change tracking</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Deployment & Production</h3>
          <ul>
            <li>Server provisioning via SSH or managed hosting tools (cPanel / dashboards)</li>
            <li>Terminal-based deployment of backend, database, and frontend</li>
            <li>Secure production configuration and credential management</li>
            <li>Production debugging using logs, network inspection, and database queries</li>
            <li>Ongoing maintenance with a focus on stability and scalability</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Background
