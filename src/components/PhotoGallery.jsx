export default function PhotoGallery() {
  
  const sm = window.innerWidth < 576;

  function getAOSAnimation(index, sm) {
    switch (index) {
      case 0:
        return "fade-right";
      case 1:
        return sm ? "fade-left" : "fade-up";
      case 2:
        return sm ? "fade-right" : "fade-left";
      default:
        return "";
    }
  }

  return (
    <section id="photo-gallery">
      <div className="container-fluid px-0 mt-5 pt-5">
        <div className="row">
          <div
            className="col-12 col-lg-3 px-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/NTR-MISSION/foto/2.jpg"
              className="w-100 h-100 object-fit-cover "
              alt="Foto NTR MISSION"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos={sm ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/NTR-MISSION/cover/cover.jpg"
              className="w-100 h-100 object-fit-cover"
              alt="Vinile NTR MISSION"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/EHCS/ehcs.jpeg"
              className="w-100 h-100 object-fit-cover"
              alt="Foto EHCS"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos={sm ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/EHCS/cover/cover.jpg"
              className="w-100 h-100 object-fit-cover"
              alt="Vinile EHCS"
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 col-lg-3 px-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/ANZWART/anzwart.jpeg"
              className="w-100 h-100 object-fit-cover"
              alt="Foto ANZWART"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos={sm ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/ANZWART/cover/cover.png"
              className="w-100 h-100 object-fit-cover"
              alt="Vinile ANZWART"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/LAC/lac.jpeg"
              className="w-100 h-100 object-fit-cover"
              alt="Foto LAC"
            />
          </div>
          <div
            className="col-12 col-lg-3 px-0"
            data-aos={sm ? "fade-left" : "fade-right"}
            data-aos-duration="2000"
          >
            <img
              src="/img/artist/LAC/cover/lac-vinile.jpeg"
              className="w-100 h-100 object-fit-cover"
              alt="Vinile LAC"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
