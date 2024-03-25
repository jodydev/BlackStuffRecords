import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";

export default function Carousel() {
  const isMobile = window.innerWidth < 576;

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-pause="true"
      data-bs-wrap="true"
    >
      {/* <!-- Navbar --> */}
      <Navbar />

      <div className="carousel-inner">
        {/* <!-- CAROUSEL - 1 --> */}
        <div className="carousel-item active ">
          {isMobile ? (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/1-mobile.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          ) : (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/1.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          )}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">
                    DIS - Oriented Undergrund Label
                  </h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <h3 className="carousel-intestation text-wrap lh-base ">
                    Siamo i narratori dell'audacia, custodi dei segreti musicali
                    più profondi. Unisciti a noi nell'esplorare l'irregolare,
                    celebrando la diversità e la libertà creativa.
                    Ti aspettiamo per un viaggio musicale senza confini.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CAROUSEL - 2 --> */}
        <div className="carousel-item">
          {isMobile ? (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/2-mobile.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          ) : (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/2.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          )}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title ">Quello che ci accomuna!</h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
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
        </div>

        {/* <!-- CAROUSEL - 3 --> */}
        <div className="carousel-item">
          {isMobile ? (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/3-mobile.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          ) : (
            <video className="carousel-img" autoPlay loop muted playsInline>
              <source src="/video/carousel/3.mp4" type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          )}
          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div data-aos="fade-down" data-aos-duration="2000">
                  <h2 className="carousel-title">La nostra missione</h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000">
                  <h3 className="carousel-intestation text-wrap lh-base">
                    La nostra missione è quella di creare un'esperienza musicale
                    che sia unica e indimenticabile. La nostra musica è un
                    viaggio, un'esperienza che ti porterà in posti che non hai
                    mai immaginato. Siamo qui per celebrare la diversità e la
                    creatività, per esplorare nuovi orizzonti e per portare la
                    musica a un livello superiore.
                  </h3>
                </div>
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
