import newsData from "../data/news";

function getAOSAnimation(index) {
  switch (index) {
    case 0:
      return "fade-right";
    case 1:
      return "fade-left";
    case 2:
      return "fade-right";
    default:
      return "";
  }
}

export default function News() {
  return (
    <section id="news" className="py-0 py-lg-5">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="container">
            <div data-aos="fade-down" data-aos-duration="2000">
              <h2 className="text-uppercase text-center fs-1 my-3 fw-bold">
                Ultime News
              </h2>
              <p className="text-center">
                Scopri le ultime novità musicali nella sezione "News" del nostro
                sito! <br /> Resta aggiornato su nuove uscite, recensioni e
                tendenze che stanno definendo il panorama musicale attuale.{" "}
                <br /> Entra e lasciati ispirare!
              </p>
            </div>
          </div>

          <section id="focus" className="focus-section">
            <div className="container  my-0 my-lg-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {newsData.map((newsItem, index) => (
                  <div
                    key={newsItem.id}
                    data-aos={getAOSAnimation(index)}
                    data-aos-duration="2000"
                  >
                    <div className="col my-5">
                      <div>
                        <article className="card shadow-lg">
                          <header className="card__thumb">
                            <img src={newsItem.imageUrl} alt="News" />
                          </header>

                          <div className="card__body">
                            <div className="card__category">
                              {newsItem.category}
                            </div>
                            <h2 className="card__title">
                              {newsItem.title}
                            </h2>
                            <div className="card__subtitle">
                              {newsItem.subtitle}
                            </div>
                            <p className="card__description">
                              {newsItem.description}
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
