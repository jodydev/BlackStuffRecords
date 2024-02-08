export default function Footer() {
  return (
    <section id="footer" className="container-fluid bg-black px-0">
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container p-5">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">Informazioni</h5>

              <p className="small text-white mt-3">Indirizzo:</p>
              <p className="small text-white">Email:</p>
              <p className="small text-white">Telefono:</p>
              <p className="small text-white">www.blackstuffrecord.com</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Link Veloci</h5>
              <ul className="list-unstyled text-muted text-decoration-none">
                <li>
                  <a className=" text-white fs-6" href="home">
                    Home
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="discografia">
                    Discografia
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="eventi">
                    Eventi
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="news">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Link Veloci</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a className=" text-white fs-6" href="photo-gallery">
                    Galleria
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="video">
                    Video
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="shop">
                    Shop
                  </a>
                </li>
                <li>
                  <a className=" text-white fs-6" href="social">
                    Social
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-semi-dark">
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-5 container">
          <div className="col-8 d-flex align-items-center">
            <a href="/" className="text-white text-decoration-none lh-1">
              <img
                src="../../public/img/logo/blackstuffrecords-logo.png"
                alt="Black Stuff Records"
                width="50"
                className="me-3"
              />
            </a>
            <span class="text-white">
              © 2024 created by{" "}
              <a
                href="https://jodydev.github.io/Portfolio-it/"
                className="text-white"
              >
                Jody Ossino
              </a>
            </span>
          </div>

          <ul className="nav col-4 justify-content-end list-unstyled d-flex">
            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-spotify"></i>
              </a>
            </li>
            <li className="ms-2">
              <a className="text-white" href="#">
                <i className="fa-brands fa-bandcamp"></i>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
}
