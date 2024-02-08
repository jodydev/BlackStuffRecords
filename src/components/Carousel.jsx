import Navbar from "./Navbar";
import MusicPlayer from "../hook/MusicPlayer";

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <!-- Navbar --> */}
      <Navbar />

      <div className="carousel-inner vh-100">
        {/* <!-- Immagini del Carousel --> */}
        <div className="carousel-item active ">
          <img
            src="../../public/img/carousel/1.jpg"
            className="d-block carousel-img"
            alt="Immagine 1"
          />

          {/* <video className="video-item" autoPlay loop muted>
            <source
              src="/public/img/istockphoto-1408912847-640_adpp_is (online-video-cutter.com).mp4"
              type="video/mp4"
            />
            Il tuo browser non supporta il tag video.
          </video> */}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="carousel-title">Quello che ci accomuna!</h2>
                <h3 className="carousel-intestation  text-wrap">
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

        {/* <!-- Immagini del Carousel --> */}
        <div className="carousel-item">
          {/* <video className="video-item" autoPlay loop muted>
            <source
              src="/public/img/istockphoto-1408911081-640_adpp_is.mp4"
              type="video/mp4"
            />
            Il tuo browser non supporta il tag video.
          </video> */}

          <img
            src="../../public/img/carousel/3.jpg"
            className="d-block carousel-img"
            alt="Immagine 1"
          />

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="carousel-title ">Quello che ci accomuna!</h2>
                <h3 className="carousel-intestation  text-wrap">
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

        {/* <!-- Immagini del Carousel --> */}
        <div className="carousel-item">
          <img
            src="../../public/img/carousel/3.jpg"
            className="d-block carousel-img"
            alt="Immagine 1"
          />

          {/* <video className="video-item" autoPlay loop muted>
            <source
              src="/public/img/istockphoto-1408962045-640_adpp_is.mp4"
              type="video/mp4"
            />
            Il tuo browser non supporta il tag video.
          </video> */}

          <div className="container position-absolute carousel-text-container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="carousel-title">
                  La nostra una musica da brivido!
                </h2>
                <h3 className="carousel-intestation text-wrap">
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

        {/* Renderizza il componente MusicPlayer e passa la funzione di aggiornamento */}
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
