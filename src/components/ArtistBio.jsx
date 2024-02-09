import Social from "./Social";

export default function ArtistBio() {
  return (
    <section className="d-none d-lg-block h-100" id="artist-bio">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* <!-- PRIMA SLIDE --> */}
          <div className="carousel-item active   h-50">
            <img
              src="../../public/img//artist-bio//1.jpg"
              className="d-block carousel-img-bio"
              alt="Immagine 1"
            />

            <div
              className="container position-absolute container-artist-bio text-start p-5"
              style={{
                top: "30%",
                left: "70%",
                transform: "translate(-30%, -30%)",
              }}
            >
              <div className="row">
                <div className="col-12 col-lg-6 ">
                  <h2 className="text-white fs-1">Biografia Artista</h2>
                  <p
                    className="text-white fs-4 my-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "200",
                      fontStyle: "italic",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ratione earum, ex quam amet corrupti? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem?
                  </p>

                  <div className="firma my-5">
                    <img
                      width="171"
                      height="88"
                      src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/signature-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Social />
          </div>

          {/* <!-- SECONDA SLIDE */}

          <div className="carousel-item active  h-50">
            <img
              src="../../public/img/carousel/1.jpg"
              className="d-block carousel-img-bio"
              alt="Immagine 1"
            />

            <div
              className="container position-absolute container-artist-bio text-start p-5"
              style={{
                top: "30%",
                left: "70%",
                transform: "translate(-30%, -30%)",
              }}
            >
              <div className="row">
                <div className="col-12 col-lg-6 ">
                  <h2 className="text-white fs-1">Biografia Artista</h2>
                  <p
                    className="text-white fs-4 my-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "200",
                      fontStyle: "italic",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ratione earum, ex quam amet corrupti? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem?
                  </p>

                  <div className="firma my-5">
                    <img
                      width="171"
                      height="88"
                      src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/signature-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Social />
          </div>

          {/* <!-- TERZA SLIDE */}

          <div className="carousel-item active  h-50 " >
            <img
              src="../../public/img/carousel/2.jpg"
              className="d-block carousel-img-bio"
              alt="Immagine 1"
            />

            <div
              className="container position-absolute container-artist-bio text-start p-5"
              style={{
                top: "30%",
                left: "70%",
                transform: "translate(-30%, -30%)",
              }}
            >
              <div className="row">
                <div className="col-12 col-lg-6 ">
                  <h2 className="text-white fs-1">Biografia Artista</h2>
                  <p
                    className="text-white fs-4 my-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "200",
                      fontStyle: "italic",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ratione earum, ex quam amet corrupti? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quo suscipit
                    corporis quibusdam. Odit, ut exercitationem?
                  </p>

                  <div className="firma my-5">
                    <img
                      width="171"
                      height="88"
                      src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/signature-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Social />
          </div>
        </div>

        {/* <!-- Controlli del Carousel --> */}
        <button
          className="carousel-control-prev d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-lg-block"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
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
