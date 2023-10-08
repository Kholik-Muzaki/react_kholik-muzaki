function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a
            href="https://www.facebook.com/kholiq.muzakky"
            className="me-4 text-reset"
          >
            <i className="fa fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com/kholikmuzaki1"
            className="me-4 text-reset"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="https://www.instagram.com/kholiq_muzakky/"
            className="me-4 text-reset"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/kholik-muzaki-b78b34286/"
            className="me-4 text-reset"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://github.com/Kholik-Muzaki"
            className="me-4 text-reset"
          >
            <i className="fa fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 text-primary">
                <i className="fas fa-gem me-3" />
                Sumber Barokah
              </h6>
              <p id="desc">
                "Sumber Barokah is a website that focuses on news, information,
                and the latest developments in the world of technology. With a
                vision to provide readers with a deep understanding of
                technology, the website offers various informative and relevant
                features and content."
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-primary">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Web Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Android Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  UI/UX Design
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Technology
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-primary">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-primary">
                Contact
              </h6>
              <p>
                <i className="fa fa-home me-3" /> Banyumas, 10012, Central Java{" "}
              </p>
              <p>
                <i className="fa fa-envelope me-3" />
                kholiqmuzakky01@gmail.com
              </p>
              <p>
                <i className="fa fa-phone me-3" /> +62 8578 9913 28
              </p>
              <p>
                <i className="fa fa-print me-3" /> +62 8578 9913 28
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-primary fw-bold" href="#">
          Sumber Barokah
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer
