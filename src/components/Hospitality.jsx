import './Page.css';

export default function Hospitality() {
  return (
    <section className="page">
      <div className="page-inner">
        <p className="page-eyebrow">Hospitality</p>

        <h1>
          Leadership, operations, and building strong teams in fast-paced environments
        </h1>

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
    </section>
  );
}
