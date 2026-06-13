
export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-2">Get In Touch</span>
          <h2 className="display-5 fw-bold">Contact Us</h2>
          <p className="text-muted">Reach out to organize or attend our next event.</p>
        </div>
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="contact-icon bg-primary bg-opacity-10 text-primary">📞</div>
              <div>
                <h6 className="fw-semibold mb-1">Phone</h6>
                <a href="tel:9098983463" className="text-muted text-decoration-none">+91 90989 83463</a>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="contact-icon bg-success bg-opacity-10 text-success">👤</div>
              <div>
                <h6 className="fw-semibold mb-1">Contact Person</h6>
                <p className="text-muted mb-0">Rohan Padamwar</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="contact-icon bg-warning bg-opacity-10" style={{ color: '#b8860b' }}>✉️</div>
              <div>
                <h6 className="fw-semibold mb-1">Email</h6>
                <a href="mailto:rohan@empowergenius.in" className="text-muted text-decoration-none">rohan@empowergenius.in</a>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <div className="contact-icon bg-info bg-opacity-10 text-info">📍</div>
              <div>
                <h6 className="fw-semibold mb-1">Location</h6>
                <p className="text-muted mb-0">Raipur, Chhattisgarh, India</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-semibold mb-4">Send Us a Message</h5>
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <input className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-sm-6">
                    <input className="form-control" placeholder="Your Email" type="email" />
                  </div>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Phone Number" type="tel" />
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option value="">Interested In...</option>
                    <option>School Events</option>
                    <option>Education Fair</option>
                    <option>Faculty Development Program</option>
                    <option>Principal Conclave</option>
                    <option>Teacher Conclave</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={4} placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-primary w-100 py-2 fw-semibold" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
