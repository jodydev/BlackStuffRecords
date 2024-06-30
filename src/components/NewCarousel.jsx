import React from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Slider {...settings}>
        {/* CAROUSEL - 1 */}
        <div className="carousel-slide">
          <img
            src={
              isMobile ? "/img/carousel/1-mobile.png" : "/img/carousel/1.png"
            }
            className="carousel-img"
            alt="carousel"
          />
          <div className="carousel-text-container">
            <div className="carousel-text-content">
              <h2 className="carousel-title">
                Dis - Oriented <br /> Underground Label
              </h2>
              <h3 className="carousel-intestation">
                "Uncompromising music and sounds without directions..."
              </h3>
            </div>
          </div>
        </div>

        {/* CAROUSEL - 2 */}
        <div className="carousel-slide">
          <img
            src={
              isMobile
                ? "/img/artist/XXCZ/cover/cover-mobile.png"
                : "/img/artist/XXCZ/cover/cover-1.png"
            }
            className="carousel-img"
            alt="carousel"
          />
          <div className="carousel-text-container">
            <div className="carousel-text-content">
              <h2 className="carousel-title">XX CENTURY ZORRO</h2>
              <h3 className="carousel-intestation lh-base">
                Ricopiate....con cura Mescolate....con calma Ritagliate In Every
                Dream Home a Heartache <br />
                <span className="fw-bold">
                  TURQUOISE 7" VINYL - OUT ON 28/08/2024
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* CAROUSEL - 3 */}
        <div className="carousel-slide">
          <img
            src={
              isMobile
                ? "/img/artist/ELFDEK/cover/cover-mobile.png"
                : "/img/artist/ELFDEK/cover/cover-1.png"
            }
            className="carousel-img"
            alt="carousel"
          />
          <div className="carousel-text-container">
            <div className="carousel-text-content">
              <h2 className="carousel-title">el FUNERAL de Kocis</h2>
              <h3 className="carousel-intestation lh-base">
                Baby's on Fire in Kodak color/Warm Leatherette <br />
                <span className="fw-bold">
                  TRANSPARENT 7" VINYL - OUT ON 28/08/2024
                </span>
              </h3>
            </div>
          </div>
        </div>
      </Slider>

      <MusicPlayer />
    </>
  );
}
