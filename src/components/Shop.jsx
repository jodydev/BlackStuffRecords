export default function Shop() {
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

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <div data-aos="fade-right" data-aos-duration="2000">
                        <img
                          src="/public/img/artist/ANZWART/cover/cover.png"
                          alt=""
                          className="img w-75 "
                        />
                      </div>
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">EP</span>
                          <span className="p-company fs-6 ">Anzwart</span>
                        </div>
                      </div>
                    </div>

                    <div className="box-down my-5">
                      <div className="h-bg">
                        <div className="h-bg-inner"></div>
                      </div>

                      <a className="cart" href="#">
                        <span className="price fw-bold fs-5">100€</span>
                        <span className="add-to-cart">
                          <span className="txt fs-6">
                            Acquista su{" "}
                            <span
                              className="fw-bold"
                              style={{ color: "#2596be" }}
                            >
                              BandCamp
                            </span>{" "}
                            <i
                              className="fa-solid fa-cart-shopping fa-xl mx-2"
                              style={{ color: "white" }}
                            ></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <img
                          src="/public/img/artist/EHCS/cover/cover.jpg"
                          alt=""
                          className="img w-75 "
                        />
                      </div>
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">Belvedere Chaos</span>
                          <span className="p-company fs-6 ">E.H.C.S</span>
                        </div>
                      </div>
                    </div>

                    <div className="box-down my-5">
                      <div className="h-bg">
                        <div className="h-bg-inner"></div>
                      </div>

                      <a className="cart" href="#">
                        <span className="price fw-bold fs-5">100€</span>

                        <span className="add-to-cart">
                          <span className="txt fs-6">
                            Acquista su{" "}
                            <span
                              className="fw-bold"
                              style={{ color: "#2596be" }}
                            >
                              BandCamp
                            </span>{" "}
                            <i
                              className="fa-solid fa-cart-shopping fa-xl mx-2"
                              style={{ color: "white" }}
                            ></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <div data-aos="fade-left" data-aos-duration="2000">
                        <img
                          src="/public/img/artist/NTR-MISSION/cover/cover.jpg"
                          alt=""
                          className="img w-75 "
                        />
                      </div>
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">
                            Supernova Remnants
                          </span>
                          <span className="p-company fs-6 ">NTR Mission</span>
                        </div>
                      </div>
                    </div>

                    <div className="box-down my-5">
                      <div className="h-bg">
                        <div className="h-bg-inner"></div>
                      </div>

                      <a className="cart" href="#">
                        <span className="price fw-bold fs-5">100€</span>
                        <span className="add-to-cart">
                          <span className="txt fs-6">
                            Acquista su{" "}
                            <span
                              className="fw-bold"
                              style={{ color: "#2596be" }}
                            >
                              BandCamp
                            </span>{" "}
                            <i
                              class="fa-solid fa-cart-shopping fa-xl mx-2"
                              style={{ color: "white" }}
                            ></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
