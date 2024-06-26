import Countdown from "./Countdown";

const Events = () => {
  const isMobile = window.innerWidth < 576;

  return (
    <section id="events" className="video-background position-relative">
      <div>
        {isMobile ? (
          <video className="video-event" autoPlay loop muted playsInline>
            <source
              src="/video/event/video-event-mobile.mp4"
              type="video/mp4"
            />
            Il tuo browser non supporta il tag video.
          </video>
        ) : (
          <video className="video-event" autoPlay loop muted>
            <source src="/video/event/video-event.mp4" type="video/mp4" />
            Il tuo browser non supporta il tag video.
          </video>
        )}
      </div>

      <div className="container-fluid position-absolute container-countdown">
        <div className="row">
          <div className="col-12 text-center">
            <div className="content">
              <div data-aos="fade-down" data-aos-duration="2000">
                <h2 className="text-white text-uppercase fw-bold fs-1 my-5">
                  SEXTO GRINDHOUSE LIVE PERFORMANCE
                </h2>
                <p className="text-white fw-normal my-0 my-lg-5">
                  il 29/09/2024 si terrà il prossimo evento live!
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
