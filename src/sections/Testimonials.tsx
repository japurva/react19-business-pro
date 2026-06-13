
const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Principal, Delhi Public School, Nagpur',
    text: 'The Principal Conclave organized by Empower Genius India was an eye-opener. The quality of speakers and exchange of ideas was truly world-class.',
    avatar: 'PS',
    color: 'primary',
  },
  {
    name: 'Mr. Anil Verma',
    role: 'Head of Faculty, St. Xavier\'s School, Pune',
    text: 'The Faculty Development Program transformed how our teachers approach modern pedagogy. Every educator should attend this program at least once.',
    avatar: 'AV',
    color: 'success',
  },
  {
    name: 'Mrs. Sunita Mehta',
    role: 'Senior Teacher, Kendriya Vidyalaya, Mumbai',
    text: 'The Teacher Conclave was an incredible platform to connect with peers from across India. I returned with so many fresh ideas for my classroom.',
    avatar: 'SM',
    color: 'warning',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 mb-2">Testimonials</span>
          <h2 className="display-5 fw-bold">What Educators Say</h2>
          <p className="text-muted">Voices from India's leading schools and institutions.</p>
        </div>
        <div className="row g-4">
          {testimonials.map(t => (
            <div className="col-md-4" key={t.name}>
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="mb-3" style={{ color: '#f0c040', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-muted mb-4 fst-italic">"{t.text}"</p>
                <div className="d-flex align-items-center gap-3 mt-auto">
                  <div className={`avatar-circle bg-${t.color} text-white`}>{t.avatar}</div>
                  <div>
                    <div className="fw-semibold">{t.name}</div>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
