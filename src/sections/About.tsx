const highlights = [
  { icon: '🏫', label: '500+', sub: 'Schools Connected' },
  { icon: '🎓', label: '10K+', sub: 'Educators Empowered' },
  { icon: '📅', label: '50+', sub: 'Events Conducted' },
  { icon: '🌏', label: '15+', sub: 'States Covered' },
];

export default function About() {
  return (
    <section id="about" className="bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-img-wrapper position-relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80"
                alt="Education event"
                className="img-fluid rounded-4 shadow"
              />
              <div className="about-badge card border-0 shadow p-3 position-absolute">
                <div className="fw-bold text-primary fs-4">10+</div>
                <div className="text-muted small">Years of Impact</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3">About Us</span>
            <h2 className="display-5 fw-bold mb-3">
              Transforming Education<br />Through Events
            </h2>
            <p className="text-muted mb-3">
              <strong>Empower Genius India</strong> is a leading education event management company dedicated to building bridges between schools, educators, and institutions across India.
            </p>
            <p className="text-muted mb-4">
              Founded with a vision to elevate the Indian education ecosystem, we design and execute high-impact events — from national conclaves for school principals to intensive faculty development programs — that drive meaningful change in classrooms and institutions alike.
            </p>
            <div className="row g-3">
              {highlights.map(h => (
                <div className="col-6" key={h.label}>
                  <div className="card border-0 shadow-sm p-3 h-100">
                    <div className="fs-4 mb-1">{h.icon}</div>
                    <div className="fw-bold text-primary fs-5 mb-0">{h.label}</div>
                    <small className="text-muted">{h.sub}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
