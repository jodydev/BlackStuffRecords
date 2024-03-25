import React, { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);


  const handleBurgerClick = () => {
    setIsOpening(true);
    setIsNavOpen(!isNavOpen);
    setTimeout(() => {
      setIsOpening(false);
    }, 400); // Ritardo di 1 secondo (1000 millisecondi)

  };
  
  

  return (
    <nav className={`navbar navbar-expand-lg fixed-top  p-0`} >
      {" "}
      <div id="nav" className="container py-3 py-lg-0">
        <div className="row">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <img
              src="/img/logo/blackstuffrecords-logo.png"
              className=" me-lg-4 nav-logo w-100"
            />

            {/* <video className="w-75 rounded-2 video-logo" autoPlay loop muted>
              <source src="/img/logo/black-stuff.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video> */}
          </div>
          <div className="col-8 d-flex align-items-center">
            <a className="navbar-title text-light" href="#">
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
              onClick={handleBurgerClick}
            >
              <i
                className={`fa-solid ${isNavOpen ? "fa-times" : "fa-bars-staggered"}`}
                style={{ color: "white" }}
              ></i>{" "}
            </button>
          </div>
        </div>

        <div
  className={`collapse navbar-collapse rounded-4 my-3 ${
    isNavOpen ? (isOpening ? "opening" : "show bg-white px-5 py-2 my-5 mx-4") : ""
  }`}
  id="navbarSupportedContent"
>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center" : "text-light"}`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}
            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#discografia"
              >
                Discografia
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#events"
              >
                Eventi
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#news"
              >
                News
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#photo-gallery"
              >
                Galleria
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#video"
              >
                Video
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#shop"
              >
                Shop
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#artist-bio"
              >
                Artisti
              </a>
            </li>
            {isNavOpen && <hr className="hr-blurry" />}

            <li className="nav-item mx-1">
              <a
                className={`nav-link ${isNavOpen ? "text-black fs-4 fw-bold d-flex justify-content-center align-items-center " : "text-light"}`}
                aria-current="page"
                href="#footer"
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
