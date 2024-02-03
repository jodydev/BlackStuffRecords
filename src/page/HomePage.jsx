import Carousel from "../components/Carousel";
import Discografia from "../components/Discografia";
import AlbumTrack from "../components/AlbumTrack";
import Events from "../components/Events";
import News from "../components/News";
import PhotoGallery from "../components/PhotoGallery";
import Video from "../components/Video";
import Shop from "../components/Shop";

export default function HomePage() {
  return (
    <>
      {/* <!-- Carousel con Navbar --> */}
      <Carousel />

      {/* <!-- Sezione Discografia --> */}
      <Discografia />

      {/* <!-- Senzione Album Track --> */}
      <AlbumTrack />

      {/* <!-- Sezione Eventi --> */}
      <Events />

      {/* <!-- Sezione News --> */}
      <News />

      {/* <!-- Galleria Foto --> */}
      <PhotoGallery />

      {/* <!-- Video --> */}
      <Video />

      {/* <!-- Shop --> */}
      <Shop />
    </>
  );
}
