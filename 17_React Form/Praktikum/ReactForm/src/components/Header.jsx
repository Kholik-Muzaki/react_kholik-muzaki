import { Link } from "react-router-dom";
import auth from "../utils/auth";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md bg-body-tertiary">
      <div className="container-md container-sm container-lg pb-1">
        <a className="navbar-brand fs-4 fw-medium" href="/#">
          Simple Header
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
        <div
          className="collapse navbar-collapse justify-content-xl-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary p-2">
                <Link className="text-white text-decoration-none" to="/">
                  Home
                </Link>
              </button>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link link-primary" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link link-primary" href="/#">
                Pricing
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link link-primary" href="/#">
                FAQs
              </a>
            </li>
            <li className="nav-item me-3">
              {auth.isAuthorized() && <ButtonLogout />}
              {!auth.isAuthorized() && <ButtonLogin />}
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-primary p-2">
                <Link
                  className="text-white text-decoration-none"
                  to="/create-account"
                >
                  Sign Up
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function ButtonLogin() {
  return (
    <a className="nav-link link-primary" href="/#">
      <Link to="/login" className="text-decoration-none">
        Login
      </Link>
    </a>
  );
}
function ButtonLogout() {
  return (
    <a
      className="nav-link link-primary"
      href="/#"
      onClick={() => auth.logout()}
    >
      Logout
    </a>
  );
}