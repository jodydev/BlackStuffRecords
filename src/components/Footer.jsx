export default function Footer() {
  return (
    <section id="footer" className="container-fluid bg-black px-0 py-0">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container p-5">
          <div className="row gy-4 gx-5">
            <div className="col-lg-6 col-md-6">
              <h5 className="h1 text-white mb-4">Informazioni</h5>
          
              <p className="small text-white fw-semibold">Discogs: <span className="text-decoration-underline cursor-pointer fw-light ms-0 ms-lg-2">https://www.discogs.com/it/label/2100232-Black-Stuff-Records?page=1</span></p>

              <p className="small text-white fw-semibold">BandCamp: <span className="text-decoration-underline cursor-pointer fw-light ms-0 ms-lg-2">in attesa</span></p>

              <p className="small text-white fw-semibold">Email: <span className="text-decoration-underline cursor-pointer fw-light ms-0 ms-lg-2">blackstuffrecords@gmail.com</span></p>
      
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Link Veloci</h5>
              <ul className="list-unstyled text-muted text-decoration-none">
                <li>
                  <a className="small text-white fs-6" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#discografia">
                    Discografia
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#events">
                    Eventi
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#news">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Link Veloci</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a className="small text-white fs-6" href="#photo-gallery">
                    Galleria
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#video">
                    Video
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#shop">
                    Shop
                  </a>
                </li>
                <li>
                  <a className="small text-white fs-6" href="#artist-bio">
                    Artisti
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <a href="#home" className="text-white text-decoration-none lh-1">
                <img
                  src="/img/logo/blackstuffrecords-logo.png"
                  alt="Black Stuff Records"
                  width="200"
                  className="d-none d-lg-block"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-semi-dark">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-5 container">
          <div className="col-6 d-flex align-items-center">
            <span className="text-white">
              © 2024 created by{" "}
              <a
                href="https://jody-ossino-portfolio.vercel.app/"
                className="text-white"
              >
                Jody Ossino
              </a>
            </span>
          </div>

          <ul className="nav col-6 justify-content-end list-unstyled d-flex">
            <li className="ms-2">
              <a
                className="text-white"
                href="https://www.facebook.com/jody.ossino/"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-2">
              <a
                className="text-white"
                href="https://www.instagram.com/jody.ossino/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className="ms-2">
              <a className="text-white" href="https://wa.me/3336170035">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="ms-2">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/jody-ossino/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="ms-2">
              <a className="text-white" href="https://jodydev.github.io/Portfolio-it">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
}
