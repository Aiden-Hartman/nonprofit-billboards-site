import React from "react";

const helpItems = [
  {
    title: "Find available billboard options",
    body: "We help look into available outdoor placements in the markets you care about.",
  },
  {
    title: "Coordinate market, timing, and budget details",
    body: "We help organize the practical details so you can compare options clearly.",
  },
  {
    title: "Help organize creative specs and next steps",
    body: "We help clarify artwork requirements, timing, and what is needed to move forward.",
  },
];

const campaignTypes = [
  "Nonprofit awareness campaigns",
  "Advocacy and issue campaigns",
  "Political and voter education campaigns",
];

function BillboardVisual() {
  return (
    <div className="billboard-visual" aria-label="Simple billboard illustration">
      <div className="board-face">
        <span>Available placements</span>
        <strong>Market options</strong>
      </div>
      <div className="board-posts">
        <span />
        <span />
      </div>
      <div className="ground-line" />
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
          <a href="#examples">Examples</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-shell">
          <div className="hero-copy">
            <h1>Billboard placements for nonprofits and political campaigns.</h1>
            <p className="hero-subhead">
              We help nonprofits, advocacy groups, and political organizations explore billboard availability, pricing, and placement options in the markets that matter.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Request Availability</a>
              <a className="button secondary" href="#help">See What We Help With</a>
            </div>
          </div>
          <BillboardVisual />
        </section>

        <section className="help section-shell" id="help" aria-labelledby="help-title">
          <div className="section-heading">
            <h2 id="help-title">What we help with</h2>
            <p>
              Outdoor advertising can be useful, but inventory, pricing, timing, and creative requirements are not always easy to navigate.
            </p>
          </div>
          <div className="help-list">
            {helpItems.map((item) => (
              <article className="help-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="examples light-section" id="examples" aria-labelledby="examples-title">
          <div className="section-shell examples-layout">
            <div className="section-heading">
              <h2 id="examples-title">Campaign examples</h2>
              <p>
                Every campaign depends on the market, message, timing, and budget. We can share relevant examples and references after learning more about your goals.
              </p>
            </div>
            <div className="category-list" aria-label="Campaign categories">
              {campaignTypes.map((type) => (
                <div className="category-item" key={type}>
                  <span />
                  <p>{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="about-layout">
            <h2 id="about-title">About Mission Billboards</h2>
            <p>
              Mission Billboards helps mission-driven organizations explore outdoor advertising opportunities without needing to manage the process alone. We focus on practical planning, clear communication, and helping teams understand what options may be available in their target markets.
            </p>
          </div>
        </section>

        <section className="contact light-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-intro">
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
                <input name="timeline" type="text" placeholder="Example: launch month or deadline" />
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
