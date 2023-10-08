function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold text-light" href="#">
          Sumber Barokah
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <a className="nav-link text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-light" href="#">
                Product
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
