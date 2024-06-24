import Social from "./Social";
import { useState } from "react";

const artistData = [
  {
    //? DA SOSTITUIRE TUTTO
    name: "anzwart",
    bioImage: "/img/artist/ANZWART/anzwart.jpeg",
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
    bioImage:
      "/img/artist/EHCS/EHCS.png",
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
    bioImage: "/img/artist/NTR-MISSION/foto/bio.jpg",
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
    bioImage: "/img/artist/LAC/lac.jpeg",
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

  const artist = artistData[index];

  return (
    <section id="artist-bio">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {artistData.map((artist, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === index ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <img
                src={artist.bioImage}
                className="d-block carousel-img-bio"
                alt={`Biografia ${artist.name}`}
              />
              <div className="container position-absolute container-artist-bio-1 text-start">
                <div className="row">
                  <div className="col-12 col-lg-6 text-bio">
                    <h2 className="text-white">
                      Biografia Artista - <br /> {artist.bioTitle}
                    </h2>
                    <p className="text-white">{artist.bioText}</p>
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
          onClick={handleNext}
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
