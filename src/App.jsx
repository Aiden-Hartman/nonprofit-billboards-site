import React from "react";

const serviceItems = [
  {
    title: "Find available billboard options",
    body: "We help look into available outdoor placements in the markets, routes, or regions you care about.",
  },
  {
    title: "Coordinate campaign details",
    body: "We help organize market, timing, budget, and placement details so options can be compared clearly.",
  },
  {
    title: "Prepare next steps",
    body: "We help clarify creative specs, deadlines, and practical requirements before a campaign moves forward.",
  },
];

const campaignTypes = [
  "Nonprofit awareness",
  "Advocacy and issue campaigns",
  "Political and voter education",
];

function PlanningPanel() {
  return (
    <aside className="planning-panel" aria-label="Billboard availability planning note">
      <div className="panel-kicker">Planning note</div>
      <div className="panel-board">
        <span>Outdoor placement review</span>
        <strong>Availability, pricing, and market fit.</strong>
      </div>
      <div className="memo-list">
        <div>
          <span>Market</span>
          <p>City, route, region, or state</p>
        </div>
        <div>
          <span>Format</span>
          <p>Static or digital options</p>
        </div>
        <div>
          <span>Timing</span>
          <p>Launch month or deadline</p>
        </div>
      </div>
    </aside>
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
          <a href="#examples">Examples</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="section-label">Billboard planning and placement support</p>
            <h1>Billboard placements for nonprofits and political campaigns.</h1>
            <p className="hero-subhead">
              We help nonprofits, advocacy groups, and political organizations explore billboard availability, pricing, and placement options in the markets that matter.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Request Availability</a>
              <a className="button secondary" href="#examples">View Examples</a>
            </div>
          </div>
          <PlanningPanel />
        </section>

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-label">Outdoor media planning</p>
            <h2 id="services-title">What we do</h2>
            <p>
              Outdoor advertising can be useful, but availability, pricing, timing, and creative requirements are not always easy to navigate.
            </p>
          </div>
          <div className="service-list">
            {serviceItems.map((item, index) => (
              <article className="service-row" key={item.title}>
                <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="examples section-band" id="examples" aria-labelledby="examples-title">
          <div className="section-shell examples-layout">
            <div className="section-intro">
              <p className="section-label">Campaign examples</p>
              <h2 id="examples-title">Previous advertisers</h2>
              <p>
                Previous advertiser examples and references can be shared after an initial conversation.
              </p>
            </div>
            <div className="examples-panel">
              <div className="logo-rail" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="category-tags" aria-label="Campaign categories">
                {campaignTypes.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-rule" />
          <div className="about-layout">
            <div>
              <p className="section-label">About</p>
              <h2 id="about-title">About Mission Billboards</h2>
            </div>
            <div className="about-copy">
              <p>
                Mission Billboards helps mission-driven organizations explore outdoor advertising opportunities without needing to manage the process alone. We focus on practical planning, clear communication, and helping teams understand what options may be available in their target markets.
              </p>
              <p>
                The goal is simple: make billboard planning easier for nonprofits, advocacy groups, and political campaigns that need public visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section-band" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-intro">
              <p className="section-label">Contact</p>
              <h2 id="contact-title">Request billboard availability</h2>
              <p>Share the basics of your campaign and we will follow up with next steps.</p>
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
                <input name="budget" type="text" placeholder="Approximate budget or range" />
              </label>
              <label>
                Timeline
                <input name="timeline" type="text" placeholder="Launch month or deadline" />
              </label>
              <label className="full-span">
                Message
                <textarea name="message" rows="5" placeholder="Tell us about your goals, audience, market, and any known requirements." required />
              </label>
              <button className="button primary full-span" type="submit">Submit inquiry</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div>
            <strong>Mission Billboards</strong>
            <p>Billboard planning and placement support for mission-driven campaigns.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#examples">Examples</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
