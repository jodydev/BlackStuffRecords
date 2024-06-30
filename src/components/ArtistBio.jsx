import Slider from "react-slick";
import artistData from "../data/artists";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Social from "./Social";

export default function ArtistBio() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-black">

      <Slider {...settings}>
        {artistData.map((artist, idx) => (
          <div key={idx} className="carousel-slide">
            <img
              src={artist.bioImage}
              className="carousel-img-bio"
              alt={`Biografia ${artist.name}`}
            />
            <div className="carousel-text-bio">
              <div className="carousel-text-content">
                <h2 className="carousel-title">
                  Biografia Artista - <br /> {artist.bioTitle}
                </h2>
                <p className="carousel-intestation">
                  <em>{artist.bioText}</em>
                </p>
              </div>
            </div>
            <Social socialLinks={artist.socialLinks} />
          </div>
        ))}
      </Slider>

    </div>
  );
}
