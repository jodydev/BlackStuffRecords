export default function Footer() {
  return (
    <section id="footer" class="container-fluid bg-black px-0">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container p-5">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">Informazioni</h5>

              <p class="small text-white mt-3">Indirizzo:</p>
              <p class="small text-white">Email:</p>
              <p class="small text-white">Telefono:</p>
              <p class="small text-white">www.blackstuffrecord.com</p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Link Veloci</h5>
              <ul class="list-unstyled text-muted text-decoration-none">
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
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Link Veloci</h5>
              <ul class="list-unstyled text-muted">
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
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class="small text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="">
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <section class="bg-semi-dark">
        <footer class="d-flex flex-wrap justify-content-between align-items-center p-5 container">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
            >
              <img
                src="../../public/img/logo/blackstuffrecords-logo.png"
                alt="Black Stuff Records"
                width="50"
              />
            </a>
            <span class="mb-3 mx-3 mb-md-0 text-white">
              © 2024 created by{" "}
              <a
                href="https://jodydev.github.io/Portfolio-it/"
                className="text-white"
              >
                Jody Ossino
              </a>
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-white" href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-white" href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-white" href="#">
                <i class="fa-brands fa-bandcamp"></i>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
}
