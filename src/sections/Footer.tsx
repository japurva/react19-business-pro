
const quickLinks: [string, string][] = [['Home', '#home'], ['Events', '#events'], ['About', '#about'], ['Testimonials', '#testimonials'], ['Contact', '#contact']];
const eventLinks = ['School Events', 'Education Fair', 'Faculty Development Program', 'Principal Conclave', 'Teacher Conclave'];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">
              <span style={{ color: '#f0c040' }}>Empower</span> Genius India
            </h5>
            <p className="text-secondary">
              Transforming the Indian education landscape through premier events, conclaves, and faculty development programs.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="tel:9098983463" className="btn btn-sm btn-outline-secondary">📞 +91 90989 83463</a>
            </div>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3 text-white">Our Events</h6>
            <ul className="list-unstyled">
              {eventLinks.map(e => (
                <li key={e} className="mb-2">
                  <a href="#events" className="text-secondary text-decoration-none footer-link">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="fw-semibold mb-3 text-white">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map(([label, href]) => (
                <li key={label} className="mb-2">
                  <a href={href} className="text-secondary text-decoration-none footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3 text-white">Contact</h6>
            <p className="text-secondary mb-1 fw-semibold">Rohan Padamwar</p>
            <a href="tel:9098983463" className="text-secondary text-decoration-none d-block mb-1 footer-link">+91 90989 83463</a>
            <a href="mailto:rohan@empowergenius.in" className="text-secondary text-decoration-none d-block mb-1 footer-link">rohan@empowergenius.in</a>
            <p className="text-secondary mb-0">Raipur, Chhattisgarh, India</p>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center py-3">
          <small className="text-secondary">© 2026 Empower Genius India. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
