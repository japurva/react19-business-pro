
const events = [
  {
    title: 'School Events',
    icon: '🏫',
    desc: 'Curated events celebrating student achievement and fostering school community spirit across institutions pan-India.',
    color: 'primary',
  },
  {
    title: 'Education Fair',
    icon: '🎓',
    desc: 'A grand platform where leading educational institutions showcase programs to students, parents, and educators.',
    color: 'success',
  },
  {
    title: 'Faculty Development Program',
    icon: '📚',
    desc: 'Intensive training sessions equipping teachers with modern pedagogy, digital tools, and classroom best practices.',
    color: 'warning',
  },
  {
    title: 'Principal Conclave',
    icon: '🏛️',
    desc: 'An exclusive gathering of school principals to share insights, challenges, and leadership strategies.',
    color: 'danger',
  },
  {
    title: 'Teacher Conclave',
    icon: '✏️',
    desc: 'A dynamic forum empowering teachers to collaborate, innovate, and redefine classroom excellence together.',
    color: 'info',
  },
];

export default function Services() {
  return (
    <section id="events">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 mb-2">What We Do</span>
          <h2 className="display-5 fw-bold">Our Events</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '520px' }}>
            We design and execute high-impact educational events that connect, inspire, and empower India's academic community.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {events.map(e => (
            <div className="col-md-4" key={e.title}>
              <div className="card h-100 border-0 shadow-sm event-card">
                <div className="card-body p-4">
                  <div className={`event-icon bg-${e.color} bg-opacity-10 mb-3`}>
                    <span style={{ fontSize: '1.8rem' }}>{e.icon}</span>
                  </div>
                  <h5 className="fw-semibold mb-2">{e.title}</h5>
                  <p className="text-muted mb-0">{e.desc}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pb-4 px-4">
                  <a href="#contact" className={`btn btn-${e.color} btn-sm`}>Register Interest</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
