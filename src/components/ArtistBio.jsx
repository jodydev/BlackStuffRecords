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
              src="https://www.cyranofactory.com/wp-content/uploads/2023/12/31fc0a5d-d07a-bc7d-5b35-16150eabc659.jpeg"
              className="d-block carousel-img-bio"
            />

            <div className="container position-absolute container-artist-bio-1 text-start p-5">
              <div className="row">
                <div className="col-12 col-lg-6 text-bio">
                  <h2 className="text-white fs-1">Biografia Artista - Anzwart</h2>
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
              src="https://scontent.fblq3-1.fna.fbcdn.net/v/t1.18169-9/22852164_1460876707359810_3112232783589925726_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bs9Ooye0L1kAX9GVcUH&_nc_ht=scontent.fblq3-1.fna&oh=00_AfDznl314a336vZnEavx5sLxg1BkF8ATq199T3wN8JYYZg&oe=6623FAB8"
              className="d-block carousel-img-bio"
            />

            <div className="container position-absolute container-artist-bio-2 text-start p-5">
              <div className="row">
                <div className="col-12 col-lg-6 text-bio">
                  <h2 className="text-white fs-1">Biografia Artista - E.H.C.S </h2>
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
                  <h2 className="text-white fs-1">
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
