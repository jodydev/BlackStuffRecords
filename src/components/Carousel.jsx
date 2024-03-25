import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-pause="false" // Per evitare la pausa su hover
      data-bs-wrap="true" // Per consentire il wrapping degli elementi
    >
      {/* <!-- Navbar --> */}
      <Navbar />

      <div className="carousel-inner">
        {/* <!-- CAROUSEL - 1 --> */}
        <div className="carousel-item active ">
          <img
            src="/img/artist/NTR-MISSION/foto/carousel-1.jpg"
            className="d-block carousel-img"
          />
          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">
                    DIS - ORIENTED UNDERGROUND LABEL
                  </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <h3 className="carousel-intestation  text-wrap lh-base ">
                    Siamo i narratori dell'audacia, custodi dei segreti musicali
                    più profondi. Unisciti a noi nell'esplorare l'irregolare,
                    celebrando la diversità e la libertà creativa. Esplora
                    l'euforia e lasciati trasportare dalla potenza travolgente
                    della nostra musica.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CAROUSEL - 2 --> */}
        <div className="carousel-item">
          <img
            src="/img/artist/NTR-MISSION/foto/carousel-2.jpg"
            className="d-block carousel-img"
          />
          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="carousel-title ">Quello che ci accomuna!</h2>

                <h3 className="carousel-intestation  text-wrap lh-base">
                  Ogni nota prodotta è un messaggio di unità e comprensione.
                  Attraverso una vasta gamma di generi musicali, dall'indie al
                  jazz, dall'elettronica al folk, l'etichetta offre
                  un'esperienza sonora completa che parla direttamente alle
                  anime dei suoi ascoltatori.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CAROUSEL - 3 --> */}
        <div className="carousel-item">
          <img
            src="/img/artist/NTR-MISSION/foto/carousel-3.jpg"
            className="d-block carousel-img"
          />
          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="carousel-title">Quello che ci accomuna!</h2>

                <h3 className="carousel-intestation text-wrap lh-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  ratione earum, ex quam amet corrupti? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quo suscipit corporis
                  quibusdam. Odit, ut exercitationem? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quo suscipit corporis quibusdam.
                  Odit, ut exercitationem?
                </h3>
              </div>
            </div>
          </div>
        </div>

        <MusicPlayer />
      </div>

      {/* <!-- Controlli del Carousel --> */}
      <button
        className="carousel-control-prev d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
