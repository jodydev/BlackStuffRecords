import Social from "./Social";
import { useState, useEffect } from "react";
import artistData from "../data/artists";

export default function ArtistBio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === artistData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [artistData.length]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? artistData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === artistData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="artist-bio">
      <div
        id="carouselArtistBio"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000" 
      >
        <div className="carousel-inner">
          {artistData.map((artist, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === index ? "active" : ""}`}
            >
              <img
                src={artist.bioImage}
                className="d-block carousel-img-bio"
                alt={`Biografia ${artist.name}`}
              />
              <div className="container position-absolute container-artist-bio-1 text-start">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h2 className="text-white fs-1 mb-5">
                      Biografia Artista - <br /> {artist.bioTitle}
                    </h2>
                    <p className="text-white p-4 my-5 fs-6 fw-light carousel-intestation">
                      <em>{artist.bioText}</em>
                    </p>
                  </div>
                </div>
              </div>
              <Social socialLinks={artist.socialLinks} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev d-none d-lg-block h-75"
          type="button"
          data-bs-target="#carouselArtistBio"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-lg-block h-75"
          type="button"
          data-bs-target="#carouselArtistBio"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}