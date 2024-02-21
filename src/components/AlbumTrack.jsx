export default function AlbumTrack() {
  return (
    <section className="px-0 mx-0 px-lg-5 mx-lg-5">
      <div
        id="albumTrackCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Primo Album */}

          <div className="carousel-item active">
            <div className="container-fluid my-3">
              <div className="row ">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0">
                  <img
                    src="/public/img/artist/ANZWART/cover/cover.png"
                    className="cover-album"
                  />

                  <div className="container-fluid my-3 mb-5">
                    <div className="row">
                      <div className="col-12 col-lg-6 offset-0 offset-lg-4  ">
                        <p className="fs-2 text-light fw-bold my-3">
                          EP - Anzwart
                        </p>
                        <ul className="my-5">
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Titolo Album - <span className="fst-italic fw-light">EP</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Nome Artista - <span className="fst-italic fw-light">Anzwart</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Genere - <span className="fst-italic fw-light">Rock</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Data di uscita - <span className="fst-italic fw-light">2024</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Etichetta - <span className="fst-italic fw-light">Black Stuff Records</span> 
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start p-0 p-lg-5  px-lg-0 my-3">
                  <div className="container px-0 px-lg-5">
                    <table className="table my-lg-5">
                      <thead>
                        <tr>
                          <th className="py-3 fs-5">#</th>
                          <th className="py-3 fs-5">Titolo</th>
                          <th className="py-3 fs-5">Durata</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3 fst-italic">1.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">2.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">3.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">4.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">5.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="container px-5 px-lg-5 my-5">
                    <div className="row justify-content-center">
                      <a className="playstore-button" href="#">
                        <img
                          src="/public/img/logo/bandcamp-logo.webp"
                          alt="BandCamp Logo"
                          className="icon"
                        />
                        <span className="texts">
                          <span className="text-1">Acquista su</span>
                          <span className="text-2">BandCamp</span>
                        </span>
                      </a>
                      <p className="text-white text-center fs-6 my-3">oppure</p>{" "}
                      <a className="playstore-button " href="#">
                        <img
                          src="/public/img/logo/discogs-logo.png"
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

          {/* Secondo Album */}

          <div className="carousel-item">
            <div className="container-fluid my-3">
              <div className="row ">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0">
                  <img
                    src="/public/img/artist/EHCS/cover/cover.jpg"
                    className="cover-album"
                  />

                  <div className="container-fluid my-3 mb-5">
                    <div className="row">
                      <div className="col-12 col-lg-6 offset-0 offset-lg-4  ">
                        <p className="fs-2 text-light fw-bold my-3">
                          Belvedere Chaos - E.H.C.S
                        </p>
                        <ul className="my-5">
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Nome Album - <span className="fst-italic fw-light">Belvedere Chaos</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Nome Artista - <span className="fst-italic fw-light">E.H.C.S</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Genere - <span className="fst-italic fw-light">Rock</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Data di uscita - <span className="fst-italic fw-light">2024</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Etichetta - <span className="fst-italic fw-light">Black Stuff Records</span> 
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start p-0 p-lg-5  px-lg-0 my-3">
                  <div className="container px-0 px-lg-5">
                    <table className="table my-lg-5">
                      <thead>
                        <tr>
                          <th className="py-3 fs-5">#</th>
                          <th className="py-3 fs-5">Titolo</th>
                          <th className="py-3 fs-5">Durata</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3 fst-italic">1.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">2.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">3.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">4.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">5.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="container px-5 px-lg-5 my-5">
                    <div className="row justify-content-center">
                      <a className="playstore-button" href="#">
                        <img
                          src="/public/img/logo/bandcamp-logo.webp"
                          alt="BandCamp Logo"
                          className="icon"
                        />
                        <span className="texts">
                          <span className="text-1">Acquista su</span>
                          <span className="text-2">BandCamp</span>
                        </span>
                      </a>
                      <p className="text-white text-center fs-6 my-3">oppure</p>{" "}
                      <a className="playstore-button " href="#">
                        <img
                          src="/public/img/logo/discogs-logo.png"
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

          {/* Terzo Album */}

          <div className="carousel-item">
            <div className="container-fluid my-3">
              <div className="row ">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0">
                  <img
                    src="/public/img/artist/NTR-MISSION/cover/cover.jpg"
                    className="cover-album"
                  />

                  <div className="container-fluid my-3 mb-5">
                    <div className="row">
                      <div className="col-12 col-lg-6 offset-0 offset-lg-4  ">
                        <p className="fs-2 text-light fw-bold my-3">
                          Supernova Remnants - NTR Mission
                        </p>
                        <ul className="my-5">
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Nome Album - <span className="fst-italic fw-light">Supernova Remnants</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Nome Artista - <span className="fst-italic fw-light">NTR Mission</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Genere - <span className="fst-italic fw-light">Rock</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Data di uscita - <span className="fst-italic fw-light">2024</span> 
                          </li>
                          <li className="fs-6 text-light fw-bold mb-3 albumtrack-description">
                            Etichetta - <span className="fst-italic fw-light">Black Stuff Records</span> 
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-start p-0 p-lg-5  px-lg-0 my-3">
                  <div className="container px-0 px-lg-5">
                    <table className="table my-lg-5">
                      <thead>
                        <tr>
                          <th className="py-3 fs-5">#</th>
                          <th className="py-3 fs-5">Titolo</th>
                          <th className="py-3 fs-5">Durata</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3 fst-italic">1.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">2.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">3.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">4.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 fst-italic">5.</td>
                          <td className="py-3">Nome Canzone</td>
                          <td className="py-3 fs-6" id="sec">
                            0:00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="container px-5 px-lg-5 my-5">
                    <div className="row justify-content-center">
                      <a className="playstore-button" href="#">
                        <img
                          src="/public/img/logo/bandcamp-logo.webp"
                          alt="BandCamp Logo"
                          className="icon"
                        />
                        <span className="texts">
                          <span className="text-1">Acquista su</span>
                          <span className="text-2">BandCamp</span>
                        </span>
                      </a>
                      <p className="text-white text-center fs-6 my-3">oppure</p>{" "}
                      <a className="playstore-button " href="#">
                        <img
                          src="/public/img/logo/discogs-logo.png"
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
        </div>

        {/* Controlli del Carousel */}
        <button
          className="carousel-control-prev d-none d-lg-block"
          type="button"
          data-bs-target="#albumTrackCarousel"
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
          data-bs-target="#albumTrackCarousel"
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
