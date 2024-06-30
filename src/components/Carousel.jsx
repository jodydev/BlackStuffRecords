<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";
import { FlipWords } from "../components/FlipWords";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const words = ["better", "cute", "beautiful", "modern"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";

export default function Carousel() {
>>>>>>> parent of 91f0270 (fix)
  const isMobile = window.innerWidth < 576;

  return (
    <div
      id="carouselExampleInterval"
<<<<<<< HEAD
      className="carousel slide home"
      data-bs-ride="carousel"
    >
      {/* Navbar */}
      <Navbar />

      <div className="carousel-inner">
        {/* CAROUSEL - 1 */}
        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
=======
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1000"
    >
      {/* <!-- Navbar --> */}
      <Navbar />

      <div className="carousel-inner">
        {/* <!-- CAROUSEL - 1 --> */}
        <div className="carousel-item active">
>>>>>>> parent of 91f0270 (fix)
          {isMobile ? (
            <img
              src="/img/carousel/1-mobile.png"
              className="carousel-img"
              alt="carousel"
            />
          ) : (
            <img
              src="/img/carousel/1.png"
              className="carousel-img"
              alt="carousel"
            />
          )}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">
                    Dis - Oriented <br /> Underground Label
                  </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  {/* <h3 className="carousel-intestation text-wrap">
                    "Uncompromising music and sounds without directions..."
                  </h3> */}
                  <div className="h-[40rem] flex justify-center items-center px-4">
                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                      Build
                      <FlipWords words={words} /> <br />
                      websites with Aceternity UI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* CAROUSEL - 2 */}
        <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
          {isMobile ? (
            <img
              src="/img/artist/XXCZ/cover/cover.png"
              className="carousel-img"
              alt="carousel"
            />
=======
        {/* <!-- CAROUSEL - 2 --> */}
        <div className="carousel-item">
          {isMobile ? (
            <img src="/img/carousel/2-mobile.png" className="carousel-img" alt="carousel" />
>>>>>>> parent of 91f0270 (fix)
          ) : (
            <img
              src="/img/artist/XXCZ/cover/cover-1.png"
              className="carousel-img"
              alt="carousel"
            />
          )}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">XX CENTURY ZORRO</h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <h3 className="carousel-intestation text-wrap lh-base">
<<<<<<< HEAD
                    Ricopiate....con cura Mescolate....con calma Ritagliate In
                    Every Dream Home a Heartache <br />
                    <span className="fw-bold">
                      TURQUOISE 7" VINYL - OUT ON 28/08/2024
                    </span>
=======
                    Ricopiate....con cura Mescolate....con calma Ritagliate<br />
                    In Every Dream Home a Heartache <br />
                    <span className="fw-bold">TURQUOISE 7" VINYL - OUT ON 28/08/2024</span>
>>>>>>> parent of 91f0270 (fix)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* CAROUSEL - 3 */}
        <div className={`carousel-item ${index === 2 ? "active" : ""}`}>
          {isMobile ? (
            <img
              src="/img/artist/ELFDEK/cover/cover.png"
              className="carousel-img"
              alt="carousel"
            />
=======
        {/* <!-- CAROUSEL - 3 --> */}
        <div className="carousel-item">
          {isMobile ? (
            <img src="/img/carousel/3-mobile.jpeg" className="carousel-img" alt="carousel" />
>>>>>>> parent of 91f0270 (fix)
          ) : (
            <img
              src="/img/artist/ELFDEK/cover/cover-1.png"
              className="carousel-img"
              alt="carousel"
            />
          )}
          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">el FUNERAL de Kocis </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <h3 className="carousel-intestation text-wrap lh-base">
                    Baby's on Fire in Kodak color/Warm Leatherette <br />
                    <span className="fw-bold">
                      TRANSPARENT 7" VINYL - OUT ON 28/08/2024
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <MusicPlayer />
        </div>
      </div>

      {/* <!-- Controlli del Carousel --> */}
      <button
        className="carousel-control-prev d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
