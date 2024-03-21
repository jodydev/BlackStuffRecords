import Social from "./Social";
import { useState } from "react";

export default function ArtistBio() {
  const artistLink = {
    anzwart: [
      "https://www.instagram.com/anzwart/", //** DA SOSTITUIRE TUTTO */
      "https://www.facebook.com/anzwartmusic",
      "https://www.youtube.com/channel/UCfPz9G6nBZU9Yb9lX4f9m7w",
      "https://open.spotify.com/artist/3nF3W1Z9XQy6ZPqz4C3b4I?si=1e8b9f3b2f5b4f8b",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
    ehcs: [
      "https://www.instagram.com/ehcs_music/", //** DA SOSTITUIRE TUTTO */
      "https://www.facebook.com/ehcsmusic",
      "https://www.youtube.com/channel/UCfPz9G6nBZU9Yb9lX4f9m7w",
      "https://open.spotify.com/artist/3nF3W1Z9XQy6ZPqz4C3b4I?si=1e8b9f3b2f5b4f8b",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
    ntrMission: [
      "https://www.facebook.com/ntrmissi0n",
      "https://www.instagram.com/ntr.mission/",
      "https://www.youtube.com/channel/UCDQLmET8fH_D6UnoscS6uYQ/featured",
      "https://open.spotify.com/artist/1p7aYEh3BNZOSmmvcRwWV1?si=hV6vJRTpSpmIJA35ujr8FQ",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  };

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? artistLink.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === artistLink.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="artist-bio">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* <!-- PRIMA SLIDE - ANZWART --> */}
          <div className="carousel-item  active " data-bs-interval="5000">
            <img
              src="/img//artist-bio/1.jpg"
              className="d-block carousel-img-bio"
            />

            <div className="container position-absolute container-artist-bio-1 text-start p-5">
              <div className="row">
                <div className="col-12 col-lg-6 text-bio">
                  <h2 className="text-white">Biografia Artista - Anzwart</h2>
                  <p className="text-white my-3 my-lg-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ratione earum, ex quam amet corrupti? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem?
                  </p>
                </div>
              </div>
            </div>

            {/* <Social /> */}
            <Social socialLinks={artistLink.anzwart} />
          </div>

          {/* <!-- SECONDA SLIDE - EHCS */}

          <div className="carousel-item  " data-bs-interval="5000">
            <img
              src="/img/artist/NTR-MISSION/foto/biooo.jpg"
              className="d-block carousel-img-bio"
            />

            <div className="container position-absolute container-artist-bio-2 text-start p-5">
              <div className="row">
                <div className="col-12 col-lg-6 text-bio">
                  <h2 className="text-white">Biografia Artista - E.H.C.S </h2>
                  <p className="text-white my-3 my-lg-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ratione earum, ex quam amet corrupti? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem?
                  </p>
                </div>
              </div>
            </div>

            {/* <Social /> */}
            <Social socialLinks={artistLink.ehcs} />
          </div>

          {/* <!-- TERZA SLIDE - NTR MISSION */}

          <div className="carousel-item  ">
            <img
              src="/img/artist/NTR-MISSION/foto/bio.jpg"
              className="d-block carousel-img-bio"
            />

            <div className="container position-absolute container-artist-bio-3 text-start p-5">
              <div className="row">
                
                <div className="col-12 col-lg-6 text-bio" >
                  <h2 className="text-white">
                    Biografia Artista - NTR Mission
                  </h2>
                  <p className="text-white my-3 my-lg-5">
                    Nel 2014 nasce INTERMISSION, diventando poi NTR MISSION nel
                    2022, guidato da Matteo Zavattin. La loro musica, ispirata
                    dalla conquista dello spazio, offre atmosfere rarefatte e
                    ritmiche organiche. Utilizzano strumenti digitali, analogici
                    ed elettroacustici, con visual evocativi. I loro riferimenti
                    includono Brian Eno, Tycho, Boards Of Canada, Solar Fields e
                    Carbon Based Lifeforms.
                  </p>
                </div>
              </div>
            </div>

            <Social socialLinks={artistLink.ntrMission} />
          </div>
        </div>

        {/* <!-- Controlli del Carousel --> */}
        <button
          className="carousel-control-prev d-none d-lg-block h-75"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-lg-block h-75"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
