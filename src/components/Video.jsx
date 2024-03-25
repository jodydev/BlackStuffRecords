import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Video = () => {
  const [videoData, setVideoData] = useState(null);
  const videoId = "vCVaT3iJlu0";
  const apiKey = "AIzaSyDS79jvUTG_3BoWK647CHd-Gd0EJ-PRUJA";

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video details");
        }

        const data = await response.json();
        setVideoData(data.items[0].snippet);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoData();
  }, [videoId, apiKey]);

  return (
    <section id="video" className="video">
      <div className="container-fluid px-0 py-0">
        <div className="container bg-black shadow-lg">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              {videoData && (
                <div className="container-fluid p-5 m-5">
                  <h2 className="text-white text-center fw-bold fs-1">
                    Ultimi video
                  </h2>
                  <h3 className="text-white text-center fs-5 my-4">
                    {videoData && videoData.title} - {videoData.channelTitle}
                  </h3>

                  <YouTube
                    className="d-flex justify-content-center align-items-center my-0 my-lg-5 py-5 w-100"
                    videoId={videoId}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
