import gallery from "../data/gallery";

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
          {gallery.map((image, index) => (
            <div
              key={index}
              className="col-12 col-lg-3 px-0"
              data-aos={getAOSAnimation(index % 3, sm)}
              data-aos-duration="2000"
            >
              <img
                src={image.src}
                className="w-100 h-100 object-fit-cover"
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
