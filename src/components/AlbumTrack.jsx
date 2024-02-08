import BandCampButton from "./BandCampButton";

export default function AlbumTrack() {
  return (
    <section className="d-flex justify-content-center">
      <div className="container-album">
        <div className="container-fluid px-0 px-lg-5">
          <div className="row ">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0 px-lg-5">
              <img
                src="https://shuffle.qodeinteractive.com/wp-content/uploads/2016/09/album-cover-image-7.jpg"
                alt=""
                className="cover-album"
              />

              <div className="container-fluid my-5">
                <div className="row">
                  <div className="col-12 col-lg-8 offset-0 offset-lg-2 px-5 px-lg-4 my-3">
                    <p className="fs-2 text-light fw-semibold">
                      Titolo Album - 2024
                    </p>
                    <p className="fs-6 text-light fw-light mb-5 albumtrack-description">
                      Lorem ipsum, dolor sit am et consectetur adipisicing
                      elit. Repellendus dolor, sed earum dolore quas tempora
                      eveniet modi error dolorum natus suscipit praesentium
                      voluptate! Impedit nihil porro debitis alias, cum
                      expedita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start p-0 p-lg-5 px-5 px-lg-0 my-3">
              <div className="container px-0 px-lg-5">
                <table className="table my-lg-5">
                  <thead>
                    <tr>
                      <th className="py-3 fs-5">#</th>
                      <th className="py-3 fs-5">Titolo</th>
                      <th className="py-3 fs-5">Durata</th>
                      <th className="py-3 fs-5">Ascolta</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="py-3">1.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">2.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">3.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">4.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">5.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">6.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">7.</td>
                      <td className="py-3">Nome Canzone</td>
                      <td className="py-3 fs-6" id="sec">
                        0:20
                      </td>
                      <td className="py-3">
                        <i
                          id="play-pausa-icon"
                          className="fa-solid fa-play  "
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="container px-0 px-lg-5 my-5">
                <div className="col-12">
                  <BandCampButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
