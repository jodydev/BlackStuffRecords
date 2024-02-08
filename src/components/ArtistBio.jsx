export default function ArtistBio() {
  return (
    <section id="artist-bio">
      <div className="container-fluid bg-img-artist position-relative">
        <div className="row">
          <div className="col-12">
            <div
              className="container position-absolute "
              style={{ top: "25%", left: "50%" }}
            >
              <div className="row">
                <div className="col-12 col-lg-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
