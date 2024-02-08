import BandCampButton from "./BandCampButton";

export default function Shop() {
  return (
    <section id="shop">
      <div className="container my-5 py-5">
        <div className="row">
          <h3 className="text-center fw-bold fs-1">Shop</h3>
          <p className="text-center mt-3">
            Lorem dolor sit, amet consectetur adipisicing elit. Ipsum eius
            quisquam asperiores ipsam maiores atque!
          </p>

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <img
                        src="https://shop.warnermusic.it/cdn/shop/files/vinilemockup.png?v=1688394048"
                        alt=""
                        className="img w-75 "
                      />
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">Nome disco</span>
                          <span className="p-company fs-6 ">Artista</span>
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

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <img
                        src="https://shop.warnermusic.it/cdn/shop/files/vinilemockup.png?v=1688394048"
                        alt=""
                        className="img w-75 "
                      />
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">Nome disco</span>
                          <span className="p-company fs-6 ">Artista</span>
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

          <div className="col-12 col-lg-4 py-0 py-lg-5  px-3">
            <div className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <div className="box-up">
                      <img
                        src="https://shop.warnermusic.it/cdn/shop/files/vinilemockup.png?v=1688394048"
                        alt=""
                        className="img w-75 "
                      />
                      <div className="img-info">
                        <div className="info-inner mt-5">
                          <span className="p-name fs-4 ">Nome disco</span>
                          <span className="p-company fs-6 ">Artista</span>
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
