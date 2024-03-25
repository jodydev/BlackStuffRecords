export default function Shop() {
  const shopData = [
    {
      id: 1,
      artist: "Anzwart",
      cover: "/img/artist/ANZWART/cover/cover.png",
      albumTitle: "EP - Anzwart",
      price: "100$",
      bandcampLink: "#",
      discogsLink: "#",
    },
    {
      id: 2,
      artist: "EHCS",
      cover: "/img/artist/EHCS/cover/cover.jpg",
      albumTitle: "Belvedere Chaos - E.H.C.S",
      price: "100$",
      bandcampLink: "#",
      discogsLink: "#",
    },
    {
      id: 3,
      artist: "NTR-MISSION",
      cover: "/img/artist/NTR-MISSION/cover/cover.jpg",
      albumTitle: "EP - NTR-Mission",
      price: "100$",
      bandcampLink: "#",
      discogsLink: "#",
    },
  ];

  const sm = window.innerWidth < 576;

  function getAOSAnimation(index, sm) {
    switch (index) {
      case 0:
        return "fade-right";
      case 1:
        return sm ? "fade-left" : "fade-up";
      case 2:
        return sm ? "fade-right" : "fade-left";
      default:
        return "";
    }
  }

  return (
    <section id="shop">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="content">
            <div data-aos="fade-down" data-aos-duration="2000">
              <h2 className="text-center fw-bold fs-1">Shop</h2>
              <p className="text-center mt-3">
                Entra nel nostro shop di album musicali! Trova la musica
                perfetta per te, dall'indie al pop, dall'elettronica al rock.{" "}
                <br />
                Esplora e lasciati ispirare!
              </p>
            </div>
          </div>

          {shopData.map((album, index) => (
            <div
              key={album.id}
              data-aos={getAOSAnimation(index, sm)}
              data-aos-duration="2000"
              className="col-12 col-lg-4"
            >
              <div className="container page-wrapper">
                <div className="page-inner">
                  <div className="row">
                    <div className="card p-5 p-lg-3 rounded-4 my-5 w-100">
                      <img
                        src={album.cover}
                        className="card-img-top"
                        alt={`${album.artist} album cover`}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title fs-4 fw-semibold">
                          {album.albumTitle}
                        </h5>
                        <p className="card-text fw-normal fs-5">
                          {album.price}
                        </p>
                        <a
                          className="playstore-button w-100"
                          href={album.bandcampLink}
                        >
                          <img
                            src="/img/logo/bandcamp-logo.webp"
                            alt="BandCamp Logo"
                            className="icon"
                          />
                          <span className="texts">
                            <span className="text-1">Acquista su</span>
                            <span className="text-2">BandCamp</span>
                          </span>
                        </a>
                        <p className="text-dark text-center fs-6 my-3">
                          oppure
                        </p>{" "}
                        <a
                          className="playstore-button w-100"
                          href={album.discogsLink}
                        >
                          <img
                            src="/img/logo/discogs-logo.png"
                            alt="Discogs Logo"
                            className="icon"
                          />
                          <span className="texts">
                            <span className="text-1">Acquista su</span>
                            <span className="text-2">Discogs</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
