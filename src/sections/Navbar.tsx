
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ background: '#0d1b2a' }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-5" href="#">
          <span style={{ color: '#f0c040' }}>Empower</span>{' '}Genius India
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <div className="navbar-nav ms-auto gap-1">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#events">Events</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#testimonials">Testimonials</a>
            <a className="nav-link btn btn-outline-warning btn-sm px-3 ms-2" href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
