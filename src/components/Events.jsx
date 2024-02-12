import Countdown from "./Countdown";

const Events = () => {
  return (
    <section id="events" className="video-background position-relative">
      <video className="video-event" autoPlay loop muted>
        <source src="/public/video/2.mp4" type="video/mp4" />
        Il tuo browser non supporta il tag video.
      </video>

      <div className="container-fluid position-absolute container-countdown">
        <div className="row">
          <div className="col-12 text-center">
           

            <div className="content">
            <div data-aos="fade-down" data-aos-duration="2000">
            <h2 className="text-white text-uppercase fw-bold">
                Prossimi eventi
              </h2>
              <p className="text-white  text-uppercase fw-normal my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                quos?
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2000">
          <Countdown />
          </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
