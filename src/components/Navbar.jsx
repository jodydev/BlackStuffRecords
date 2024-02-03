export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black">
      <div id="nav" className="container py-3 py-lg-0">
        <div className="row">
          <div className="col-2 d-flex justify-content-center align-items-center">
            {/* <img
              src="/public/img/logo/new-logo-black-stuff.png"
              className=" me-lg-4 nav-logo"
            /> */}

            <video className="w-100 rounded-2 video-logo" autoPlay loop muted>
              <source src="/public/img/logo/black-stuff.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
          <div className="col-8 d-flex align-items-center">
            <a className="navbar-title text-light fw-semibold  my-1 " href="#">
              BlackStuffRecords
            </a>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        <div
          className="collapse navbar-collapse my-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#discografia"
              >
                Discografia
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#events"
              >
                Eventi
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#news"
              >
                News
              </a>
            </li>

            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#news"
              >
                Galleria
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#shop"
              >
                Shop
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link text-light"
                aria-current="page"
                href="#contacts"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
