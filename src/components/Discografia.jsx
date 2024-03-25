import albumsData from "../data/discografia";

export default function Discografia() {
  function getAOSAnimation(index) {
    switch (index) {
      case 0:
        return "fade-right";
      case 1:
        return "fade-up";
      case 2:
        return "fade-left";
      default:
        return "";
    }
  }

  return (
    <section id="discografia">
      <div className="container py-0 py-lg-5">
        <div className="text-center my-5 py-3 py-lg-5">
          <div data-aos="fade-down" data-aos-duration="2000">
            <div className="px-0 px-lg-5">
              <h2 className="text-uppercase text-center fs-1 my-3 fw-bold">
                Ultimi Album
              </h2>

              <p className="text-center">
                Esplora gli ultimi album musicali e scopri un mondo di suoni
                innovativi e stili unici. <br /> Dalla sperimentazione audace
                alle melodie accattivanti, c'è qualcosa per tutti i gusti.
              </p>
            </div>
          </div>


          <div className="row">
            {albumsData.map((album, index) => (
              <div
                key={album.id}
                data-aos={getAOSAnimation(index)}
                data-aos-duration="2000"
                className="col-12 col-lg-4 my-5 p-lg-3"
              >
                <div className="card-discografia">
                  <img src={album.cover} alt="Album Cover" />
                  <figcaption>
                    <h3>{album.songName}</h3>
                    <h4 className="my-1">{album.artist}</h4>
                  </figcaption>
                  <a href={album.linkBandcamp}></a>
                </div>
              </div>
            ))}
          </div>


          
        </div>
      </div>
    </section>
  );
}
