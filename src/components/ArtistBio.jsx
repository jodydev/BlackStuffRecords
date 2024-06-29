import Social from "./Social";
import { useState } from "react";

const artistData = [
  {
    //? DA SOSTITUIRE TUTTO
    name: "anzwart",
    bioImage: "/img/artist/ANZWART/photo/anzwart.jpeg",
    bioTitle: "Anzwart",
    bioText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum sed voluptatum perferendis veniam enim nulla in, culpa debitis, omnis hic ut? Optio id magnam, vel facilis adipisci dolorum rerum. Ipsam rerum enim doloremque cupiditate adipisci eveniet sapiente porro sint officiis officia ratione non, suscipit ducimus, repellendus odit quod ea?",
    socialLinks: [
      "https://www.instagram.com/anzwart/",
      "https://www.facebook.com/anzwartmusic",
      "https://www.youtube.com/channel/UCfPz9G6nBZU9Yb9lX4f9m7w",
      "https://open.spotify.com/artist/3nF3W1Z9XQy6ZPqz4C3b4I?si=1e8b9f3b2f5b4f8b",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  },
  {
    //? DA SOSTITUIRE TUTTO
    name: "ehcs",
    bioImage: "/img/artist/EHCS/photo/EHCS.png",
    bioTitle: "E.H.C.S",
    bioText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum sed voluptatum perferendis veniam enim nulla in, culpa debitis, omnis hic ut? Optio id magnam, vel facilis adipisci dolorum rerum. Ipsam rerum enim doloremque cupiditate adipisci eveniet sapiente porro sint officiis officia ratione non, suscipit ducimus, repellendus odit quod ea?",
    socialLinks: [
      "https://www.instagram.com/ehcs_music/",
      "https://www.facebook.com/ehcsmusic",
      "https://www.youtube.com/channel/UCfPz9G6nBZU9Yb9lX4f9m7w",
      "https://open.spotify.com/artist/3nF3W1Z9XQy6ZPqz4C3b4I?si=1e8b9f3b2f5b4f8b",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  },
  {
    name: "ntrMission",
    bioImage: "/img/artist/NTR-MISSION/photo/bio.jpg",
    bioTitle: "NTR Mission",
    bioText:
      "Nel 2014 nasce INTERMISSION, diventando poi NTR MISSION nel 2022, guidato da Matteo Zavattin. La loro musica, ispirata dalla conquista dello spazio, offre atmosfere rarefatte e ritmiche organiche. Utilizzano strumenti digitali, analogici ed elettroacustici, con visual evocativi. I loro riferimenti includono Brian Eno, Tycho, Boards Of Canada, Solar Fields e Carbon Based Lifeforms.",
    socialLinks: [
      "https://www.facebook.com/ntrmissi0n",
      "https://www.instagram.com/ntr.mission/",
      "https://www.youtube.com/channel/UCDQLmET8fH_D6UnoscS6uYQ/featured",
      "https://open.spotify.com/artist/1p7aYEh3BNZOSmmvcRwWV1?si=hV6vJRTpSpmIJA35ujr8FQ",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  },
  {
    //? DA SOSTITUIRE TUTTO
    name: "lac",
    bioImage: "/img/artist/LAC/photo/lac.jpeg",
    bioTitle: "LAC - Large Audio Collider",
    bioText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum sed voluptatum perferendis veniam enim nulla in, culpa debitis, omnis hic ut? Optio id magnam, vel facilis adipisci dolorum rerum. Ipsam rerum enim doloremque cupiditate adipisci eveniet sapiente porro sint officiis officia ratione non, suscipit ducimus, repellendus odit quod ea?",
    socialLinks: [
      "https://www.facebook.com/ntrmissi0n",
      "https://www.instagram.com/ntr.mission/",
      "https://www.youtube.com/channel/UCDQLmET8fH_D6UnoscS6uYQ/featured",
      "https://open.spotify.com/artist/1p7aYEh3BNZOSmmvcRwWV1?si=hV6vJRTpSpmIJA35ujr8FQ",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  },
  {
    //? DA SOSTITUIRE TUTTO
    name: "XX CENTURY ZORRO",
    bioImage: "/img/artist/XXCZ/photo/1.jpg",
    bioTitle:
      "XX CENTURY ZORRO",
    bioText:
      "xoX è un inventore musicale noto per la sua etichetta Compact Cassette ECHØ. Ha fondato la punk band HitlersS e prodotto il primo vinile autoprodotto di punk italiano con i Tampax. Ha collaborato con Italian Records e creato progetti come Andy Warhol Banana Technicolor e XX Century Zorro, pubblicando vari LP e cassette. Recentemente, ha lavorato con Black Stuff Records su diversi progetti, incluso un doppio LP in uscita.",
    socialLinks: [
      "https://www.facebook.com/ntrmissi0n",
      "https://www.instagram.com/ntr.mission/",
      "https://www.youtube.com/channel/UCDQLmET8fH_D6UnoscS6uYQ/featured",
      "https://open.spotify.com/artist/1p7aYEh3BNZOSmmvcRwWV1?si=hV6vJRTpSpmIJA35ujr8FQ",
      "https://ntrmission.bandcamp.com",
      "https://linktr.ee/ntrmission",
    ],
  },
];

export default function ArtistBio() {
  const [index, setIndex] = useState(0);

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
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
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
                <div className="col-12 col-lg-6 ">
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
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none d-lg-block h-75"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  
  );
}
