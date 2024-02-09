import Carousel from "../components/Carousel";
import Discografia from "../components/Discografia";
import AlbumTrack from "../components/AlbumTrack";
import Events from "../components/Events";
import News from "../components/News";
import PhotoGallery from "../components/PhotoGallery";
import Video from "../components/Video";
import Shop from "../components/Shop";
import ArtistBio from "../components/ArtistBio";
import Social from "../components/Social";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <section id="home">
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

      {/* <!-- Biografia Artista --> */}
      <ArtistBio />

      {/* <!-- Footer --> */}
      <Footer />
    </section>
  );
}
