import React from "react";

const services = [
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

const inquiryBasics = [
  "Market or route",
  "Campaign timing",
  "Budget range",
  "Message or cause",
];

function InquiryCard() {
  return (
    <aside className="inquiry-card" aria-label="Inquiry preview">
      <h2>Start with the basics</h2>
      <div className="basics-list">
        {inquiryBasics.map((item) => (
          <div className="basic-row" key={item}>
            <span aria-hidden="true" />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className="card-note">Submit the form below and we'll follow up with next steps.</p>
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
          <a href="#what-we-do">What We Do</a>
          <a href="#previous-advertisers">Previous Advertisers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="section-shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Billboard planning for mission-driven campaigns</p>
              <h1>Billboard placements for nonprofits and political campaigns.</h1>
              <p className="hero-subhead">
                We help nonprofits, advocacy groups, and political organizations explore billboard availability, pricing, and placement options in the markets that matter.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contact">Request Availability</a>
                <a className="button secondary" href="#what-we-do">See How It Works</a>
              </div>
            </div>
            <InquiryCard />
          </div>
        </section>

        <section className="section-shell content-section" id="what-we-do" aria-labelledby="what-title">
          <div className="section-heading">
            <h2 id="what-title">What we do</h2>
            <p>
              Outdoor advertising can be useful, but availability, pricing, timing, and creative requirements are not always easy to navigate.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-panel" id="previous-advertisers" aria-labelledby="advertisers-title">
          <div className="section-shell advertisers-layout">
            <div className="section-heading">
              <h2 id="advertisers-title">Previous advertisers</h2>
              <p>Previous advertiser examples and references can be shared after an initial conversation.</p>
            </div>
            <div className="advertisers-card">
              <p className="placeholder-note">Campaign types we can discuss:</p>
              <div className="campaign-types">
                {campaignTypes.map((type) => (
                  <span key={type}>{type}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell about-section" id="about" aria-labelledby="about-title">
          <div className="about-layout">
            <h2 id="about-title">About Mission Billboards</h2>
            <div>
              <p>
                Mission Billboards helps mission-driven organizations explore outdoor advertising opportunities without needing to manage the process alone. We focus on practical planning, clear communication, and helping teams understand what options may be available in their target markets.
              </p>
              <p>
                The goal is simple: make billboard planning easier for nonprofits, advocacy groups, and political campaigns that need public visibility.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
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
              <input type="hidden" name="subject" value="New Mission Billboards inquiry" />
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
            <a href="#what-we-do">What We Do</a>
            <a href="#previous-advertisers">Previous Advertisers</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
