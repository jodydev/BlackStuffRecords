import albumsData from "../data/discografia";

export default function Discografia () {
  return (
    <section id="discografia">
      <div className="container py-5">
        <div className="row text-center my-5 py-3 py-lg-5">
          <h3 className="fs-1 fw-bold ">Ultimi album</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam illo fugit blanditiis voluptas perferendis magni quod nam unde cumque.
          </p>
        
          {albumsData.map(album => (
            <div className="col-12 col-lg-4 mt-3 my-3 my-lg-5 px-5 p-lg-3" key={album.id}>
              <div className="card-discografia">
                <img src={album.imageUrl} alt="Album Cover" />
                <figcaption>
                  <h3>{album.songName}</h3>
                  <h4 className="my-1">{album.artist}</h4>
                </figcaption>
                <a href="#"></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
