import newsData from "../data/news";

// Componente News
export default function News() {
  return (
    <section id="news" className="py-5">
      <div className="container-fluid py-5">
        <div className="row">
          <h2 className="text-uppercase text-center fs-1 my-3 fw-bold">
            Ultime News
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eius
            quisquam asperiores ipsam maiores atque!
          </p>

          <section id="focus" className="focus-section">
            <div className="container-lg py-0 py-lg-5 my-0 my-lg-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {newsData.map((newsItem) => (
                  <div className="col mt-5 p-5" key={newsItem.id}>
                    <div>
                      <article className="card shadow-lg">
                        <header className="card__thumb">
                          <a href="#">
                            <img src={newsItem.imageUrl} alt="News" />
                          </a>
                        </header>
                        <date className="card__date">
                          <span className="card__date__day">
                            {newsItem.date.day}
                          </span>
                          <br />
                          <span className="card__date__month">
                            {newsItem.date.month}
                          </span>
                        </date>
                        <div className="card__body">
                          <div className="card__category">
                            <a href="#">{newsItem.category}</a>
                          </div>
                          <h2 className="card__title">
                            <a href="#">{newsItem.title}</a>
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
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
