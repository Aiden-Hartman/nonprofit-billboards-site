import React from "react";

const services = [
  {
    title: "Campaign Planning",
    body: "Define audiences, timing, markets, and placement strategy around the outcomes your organization needs to move.",
  },
  {
    title: "Billboard Buying",
    body: "Source available inventory across static and digital outdoor networks, then negotiate placements with clear pricing.",
  },
  {
    title: "Creative Coordination",
    body: "Translate campaign messages into outdoor-ready layouts, specs, rotations, and production timelines.",
  },
  {
    title: "Reporting & Stewardship",
    body: "Track placements, flight dates, markets, and proof-of-performance details for your internal team and stakeholders.",
  },
];

const processSteps = [
  "Clarify the campaign goal, geography, audience, budget, and timing.",
  "Map the best outdoor opportunities across target markets and routes.",
  "Present a clean plan with locations, costs, creative specs, and recommendations.",
  "Coordinate approvals, launch, monitoring, and campaign wrap reporting.",
];

const examples = [
  {
    type: "Public Awareness",
    title: "Statewide Prevention Message",
    detail: "Digital bulletins near commuter corridors and community gathering points.",
    stats: "12 markets",
  },
  {
    type: "Advocacy",
    title: "Legislative Session Visibility",
    detail: "High-frequency placements around capitol access routes and district hubs.",
    stats: "6-week flight",
  },
  {
    type: "Civic Engagement",
    title: "Voter Education Push",
    detail: "Outdoor reminders built around registration deadlines and early voting windows.",
    stats: "Geo-targeted",
  },
];

function BillboardVisual() {
  return (
    <div className="hero-visual" aria-label="Stylized billboard campaign board">
      <div className="skyline-line" />
      <div className="billboard">
        <div className="billboard-top">
          <span>Mission-led message</span>
          <span>Outdoor reach</span>
        </div>
        <div className="billboard-message">
          <p>Make the message visible where decisions happen.</p>
        </div>
        <div className="route-bars">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="billboard-post post-left" />
      <div className="billboard-post post-right" />
      <div className="market-card">
        <span className="market-label">Planning snapshot</span>
        <strong>Audience routes, market timing, creative specs</strong>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mission Billboards home">
          <span className="brand-mark">MB</span>
          <span>Mission Billboards</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#campaigns">Campaign Examples</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Billboard planning for mission-driven organizations</p>
            <h1>Outdoor advertising strategy for nonprofits, advocacy groups, and political campaigns.</h1>
            <p className="hero-subhead">
              Mission Billboards helps teams plan, buy, and coordinate billboard campaigns that put the right message in the right market at the right moment.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Plan a campaign</a>
              <a className="button secondary" href="#campaigns">View examples</a>
            </div>
          </div>
          <BillboardVisual />
        </section>

        <section className="services light-section" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2 id="services-title">A practical partner from market strategy to campaign launch.</h2>
              <p>
                Outdoor media can be powerful, but inventory, specs, timing, and pricing are hard to navigate. We make the process clear.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-rule" />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why section-shell" aria-labelledby="why-title">
          <div className="why-copy">
            <p className="eyebrow">Why billboards</p>
            <h2 id="why-title">Visible, local, durable media for campaigns that need public attention.</h2>
            <p>
              Billboards work when a message needs to meet people in the real world: on commuter routes, near civic centers, around campuses, close to service areas, or across targeted communities.
            </p>
          </div>
          <div className="why-panel">
            <div>
              <strong>High-frequency reach</strong>
              <span>Repeated exposure in priority markets without relying on feeds or inboxes.</span>
            </div>
            <div>
              <strong>Geographic precision</strong>
              <span>Placements can be planned around corridors, neighborhoods, events, and public decision points.</span>
            </div>
            <div>
              <strong>Message credibility</strong>
              <span>A public presence can make an issue, candidate, or cause feel established and unavoidable.</span>
            </div>
          </div>
        </section>

        <section className="process light-section" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="eyebrow">Process</p>
              <h2 id="process-title">A clear path from campaign idea to live boards.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="campaigns section-shell" id="campaigns" aria-labelledby="campaigns-title">
          <div className="section-heading">
            <p className="eyebrow">Previous advertisers / campaign examples</p>
            <h2 id="campaigns-title">Built for the needs of cause, advocacy, and political advertisers.</h2>
            <p>
              Campaign details are shaped by each advertiser's market, message, and compliance needs. These examples show the types of programs we can help organize.
            </p>
          </div>
          <div className="example-grid">
            {examples.map((example) => (
              <article className="example-card" key={example.title}>
                <div className="mini-board">
                  <span>{example.type}</span>
                  <strong>{example.stats}</strong>
                </div>
                <h3>{example.title}</h3>
                <p>{example.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about light-section" id="about" aria-labelledby="about-title">
          <div className="section-shell about-layout">
            <div>
              <p className="eyebrow">About</p>
              <h2 id="about-title">Independent-feeling guidance for teams that cannot afford a messy media buy.</h2>
            </div>
            <div className="about-copy">
              <p>
                Mission Billboards is a placeholder name for a focused billboard-buying partner serving nonprofits, advocacy organizations, civic initiatives, and political campaigns.
              </p>
              <p>
                The goal is simple: give mission-driven teams a professional planning process, transparent options, and confident execution without forcing them to become outdoor media experts.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta section-shell" aria-labelledby="cta-title">
          <div>
            <p className="eyebrow">Ready to explore a market?</p>
            <h2 id="cta-title">Bring us the goal. We will help shape the billboard plan.</h2>
          </div>
          <a className="button primary" href="#contact">Start the conversation</a>
        </section>

        <section className="contact light-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Tell us what you are trying to move.</h2>
              <p>
                Share the basics of your campaign, and we will follow up with next steps for market research, inventory options, timing, and budget planning.
              </p>
              <div className="contact-note">
                <strong>What helps most:</strong>
                <span>Target markets, campaign dates, budget range, and any creative or compliance constraints you already know.</span>
              </div>
            </div>

            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you.html"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden-field" aria-hidden="true">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Organization
                <input name="organization" type="text" autoComplete="organization" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                Campaign Type
                <select name="campaignType" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Nonprofit awareness</option>
                  <option>Advocacy</option>
                  <option>Political</option>
                  <option>Public health</option>
                  <option>Civic engagement</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Desired Market/Location
                <input name="market" type="text" placeholder="City, region, route, or state" required />
              </label>
              <label>
                Approximate Budget
                <input name="budget" type="text" placeholder="Example: $15,000-$30,000" />
              </label>
              <label>
                Timeline
                <input name="timeline" type="text" placeholder="Example: Launch in September" />
              </label>
              <label className="full-span">
                Message
                <textarea name="message" rows="5" placeholder="Tell us about your goal, audience, and any known requirements." required />
              </label>
              <button className="button primary full-span" type="submit">Submit campaign inquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <span>Mission Billboards</span>
          <span>Strategic outdoor media planning for mission-driven campaigns.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
