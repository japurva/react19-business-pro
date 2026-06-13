
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container text-center">
        <div className="mb-3">
          <span className="badge px-3 py-2 fs-6" style={{ background: 'rgba(240,192,64,0.15)', color: '#f0c040', border: '1px solid rgba(240,192,64,0.3)' }}>
            India's Premier Education Event Platform
          </span>
        </div>
        <h1 className="display-2 fw-bold mb-3">
          <span style={{ color: '#f0c040' }}>Empower</span> Genius India
        </h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '620px', color: 'rgba(255,255,255,0.75)' }}>
          Connecting educators, institutions &amp; visionaries through transformative events that shape the future of Indian education.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <a href="#events" className="btn btn-warning btn-lg px-4 fw-semibold">Explore Events</a>
          <a href="#contact" className="btn btn-outline-light btn-lg px-4">Get In Touch</a>
        </div>
        <div className="row justify-content-center g-4 mt-4 hero-stats">
          <div className="col-auto text-center">
            <h3 className="fw-bold mb-0">500+</h3>
            <small>Schools Connected</small>
          </div>
          <div className="col-auto text-center">
            <h3 className="fw-bold mb-0">50+</h3>
            <small>Events Conducted</small>
          </div>
          <div className="col-auto text-center">
            <h3 className="fw-bold mb-0">10K+</h3>
            <small>Educators Empowered</small>
          </div>
        </div>
      </div>
    </section>
  );
}
