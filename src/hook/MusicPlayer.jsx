import { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState([
    
    {
      title: "Berlin",
      artist: "Anzwart",
      mp3: "/img/artist/ANZWART/mp3/Berlin.mp3",
      poster:
        "/img/artist/ANZWART/cover/cover.png",
    },
    {
      title: "Cup of Tea",
      artist: "E.H.C.S",
      mp3: "/img/artist/EHCS/mp3/CUP-OF-TEA.mp3",
      poster:
        "/img/artist/EHCS/cover/cover.jpg",
    },
    {
      title: "NGC 2080",
      artist: "NTR Mission",
      mp3: "/img/artist/NTR-MISSION/mp3/NGC-2080.mp3",
      poster:
        "/img/artist/NTR-MISSION/cover/cover.jpg",
    },
    {
      title: "Demo",
      artist: "XX CENTURY ZORRO",
      poster: "/img/artist/XXCZ/cover/cover.png",
      mp3: "/img/artist/XXCZ/mp3/demo.mp3",
    },
    {
      title: "Demo",
      artist: "el FUNERAL de Kocis",
      poster: "/img/artist/ELFDEK/cover/cover.png",
      mp3: "/img/artist/ELFDEK/mp3/demo.mp3",
    },
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const seekBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSeeking, setIsSeeking] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const TimeDisplay = ({ currentTime, duration }) => {
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${parseInt(minutes)}:${
        parseInt(seconds) < 10
          ? `0${parseInt(seconds)}`
          : `${parseInt(seconds)}`
      }`;
    };

    return (
      <p className="fs-6 d-none d-lg-block text-light fw-lighter mt-4">
        {audioRef.current
          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
          : "00:00 / 00:00"}
      </p>
    );
  };

  const updateAudio = () => {
    const currentSong = currentTrack[currentTrackIndex];
    audioRef.current.src = currentSong.mp3;

    audioRef.current.onloadeddata = () => {
      if (isPlaying) {
        audioRef.current.play();
      }
      audioRef.current.onloadeddata = null;
    };
  };

  const handlePrevClick = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentTrack.length - 1
    );
    updateAudio();
  };

  const handleNextClick = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < currentTrack.length - 1 ? prevIndex + 1 : 0
    );
    updateAudio();
  };

  const handlePlayPauseClick = () => {
    const icon = document.getElementById("play-pausa-icon");

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  };


  const handleSeekBarMouseDown = () => {
    setIsSeeking(true);
  };

  const handleSeekBarMouseUp = (event) => {
    if (isSeeking) {
      const { offsetX, target } = event.nativeEvent;
      const percent = (offsetX / target.clientWidth) * 100;

      if (!isNaN(percent) && isFinite(percent)) {
        audioRef.current.currentTime =
          (percent / 100) * audioRef.current.duration;
      }

      setIsSeeking(false);
    }
  };

  useEffect(() => {
    audioRef.current.src = currentTrack[currentTrackIndex].mp3;
    updateAudio();
  }, [currentTrackIndex]);

  useEffect(() => {
    const updateSeekBar = () => {
      if (!isSeeking) {
        const percent =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        seekBarRef.current.style.width = `${percent}%`;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateSeekBar);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateSeekBar);
    };
  }, [isSeeking]);

  useEffect(() => {
    const updateSeekBar = () => {
      if (!isSeeking) {
        const percent =
          (audioRef.current.currentTime /
            (trackDuration || audioRef.current.duration)) *
          100;
        seekBarRef.current.style.width = `${percent}%`;
        if (isPlaying || audioRef.current.paused) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }
    };

    audioRef.current.addEventListener("timeupdate", updateSeekBar);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateSeekBar);
    };
  }, [isSeeking, isPlaying, trackDuration]);

  useEffect(() => {
    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("playing", handlePlay);
    audioRef.current.addEventListener("pause", handlePause);

    return () => {
      audioRef.current.removeEventListener("playing", handlePlay);
      audioRef.current.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (audioRef.current.readyState >= 2) {
        setTrackDuration(audioRef.current.duration);
      }
    };

    const updateSeekBar = () => {
      if (!isSeeking) {
        const currentDuration = audioRef.current.duration || 0;
        const percent = (audioRef.current.currentTime / currentDuration) * 100;
        seekBarRef.current.style.width = `${percent}%`;

        if (isPlaying || audioRef.current.paused) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", updateSeekBar);

    return () => {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", updateSeekBar);
    };
  }, [isSeeking, isPlaying]);

  return (
    <div className="container px-0 py-0 container-music bg-black">
      <div className="row px-0 py-0">
        {/* Sezione dell'album */}
        <div className="col-3 col-lg-1 px-0 py-0 my-bg-transparent">          

          <img
            src={currentTrack[currentTrackIndex].poster}
            className="music-cover"
            alt="Album Cover"
          />
        </div>

        {/* Informazioni sulla traccia corrente */}
        <div className="col-3 col-lg-2 offset-lg-0 offset-0 offcanvas-1 flex-column justify-content-center align-items-center vertical-hr info-music-box px-2 px-lg-3 my-bg-transparent">
          <p className="music-title text-light fw-semibold mt-3">
            {currentTrack[currentTrackIndex].title}
          </p>
          <p className="music-author text-light fw-normal">
            {currentTrack[currentTrackIndex].artist}
          </p>
        </div>

        {/* Elemento audio */}
        <audio id="music-player" ref={audioRef}>
          {" "}
        </audio>

        {/* Pulsante "Precedente" */}
        <div
          id="precedente"
          onClick={handlePrevClick}
          className="col-2 col-lg-1 d-flex justify-content-center align-items-center vertical-hr my-bg-transparent"
        >
          <i className="fa-solid fa-angles-left control-player-icon"></i>
        </div>

        {/* Pulsante "Play/Pausa" */}
        <div
          id="play-pausa"
          onClick={handlePlayPauseClick}
          className="col-2 col-lg-1 d-flex justify-content-center align-items-center vertical-hr my-bg-transparent"
        >
          <i
            id="play-pausa-icon"
            className="fa-solid fa-play control-player-icon"
          ></i>
        </div>

        {/* Pulsante "Successivo" */}
        <div
          id="prossima"
          onClick={handleNextClick}
          className="col-2 col-lg-1 d-flex justify-content-center align-items-center vertical-hr my-bg-transparent"
        >
          <i className="fa-solid fa-angles-right control-player-icon"></i>
        </div>

        {/* Sezione della barra di ricerca e del tempo */}
        <div className="col-1 col-lg-4 d-none d-lg-block vertical-h d-flex justify-content-center align-items-center vertical-hr px-5 my-bg-transparent">
          <TimeDisplay
            currentTime={currentTime}
            duration={audioRef.current ? audioRef.current.duration : 0}
          />
          <div
            className={`jp-seek-bar ${isPlaying ? "playing" : ""}`}
            onMouseDown={handleSeekBarMouseDown}
            onMouseUp={handleSeekBarMouseUp}
          >
            <div ref={seekBarRef} className="jp-play-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
