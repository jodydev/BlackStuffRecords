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
  ]);
  // Stato per l'indice della traccia corrente
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Ref per l'elemento audio
  const audioRef = useRef(null);

  // Ref per la barra di ricerca della traccia
  const seekBarRef = useRef(null);

  // Stato per indicare se la traccia è in riproduzione
  const [isPlaying, setIsPlaying] = useState(false);

  // Stato per indicare se l'utente sta cercando nella barra di ricerca
  const [isSeeking, setIsSeeking] = useState(false);

  // Stato per la durata totale della traccia
  const [trackDuration, setTrackDuration] = useState(0);

  // Stato per il tempo corrente della traccia
  const [currentTime, setCurrentTime] = useState(0);

  // Componente per visualizzare il tempo della traccia
  const TimeDisplay = ({ currentTime, duration }) => {
    // Funzione per formattare il tempo in minuti e secondi
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
      <p className="fs-6 d-none d-lg-block text-light fw-lighter   my-3">
        {audioRef.current
          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
          : "00:00 / 00:00"}
      </p>
    );
  };

  // Funzione per aggiornare l'elemento audio con la traccia corrente
  const updateAudio = () => {
    const currentSong = currentTrack[currentTrackIndex];

    audioRef.current.src = currentSong.mp3;

    // Verifica se l'elemento audio è stato caricato
    audioRef.current.onloadeddata = () => {
      if (isPlaying) {
        audioRef.current.play();
      }
      // Cancella l'evento per evitare di essere chiamato più volte
      audioRef.current.onloadeddata = null;
    };
  };

  // Gestore del click sul pulsante "Precedente"
  const handlePrevClick = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentTrack.length - 1
    );
    updateAudio();
  };

  // Gestore del click sul pulsante "Successivo"
  const handleNextClick = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < currentTrack.length - 1 ? prevIndex + 1 : 0
    );
    updateAudio();
  };

  // Gestore del click sul pulsante "Play/Pausa"
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

  // Gestore del mousedown sulla barra di ricerca della traccia
  const handleSeekBarMouseDown = () => {
    setIsSeeking(true);
  };

  // Gestore del mouseup sulla barra di ricerca della traccia
  const handleSeekBarMouseUp = (event) => {
    if (isSeeking) {
      const { offsetX, target } = event.nativeEvent;
      const percent = (offsetX / target.clientWidth) * 100;

      // Verifica se la percentuale è un numero valido
      if (!isNaN(percent) && isFinite(percent)) {
        audioRef.current.currentTime =
          (percent / 100) * audioRef.current.duration;
      }

      setIsSeeking(false);
    }
  };

  // Effetto per impostare la sorgente audio iniziale e aggiornare l'audio in base all'indice della traccia corrente
  useEffect(() => {
    audioRef.current.src = currentTrack[currentTrackIndex].mp3;
    updateAudio();
  }, [currentTrackIndex]);

  // Effetto per aggiornare la posizione della barra di ricerca durante la riproduzione
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

  // Effetto per aggiornare la barra di ricerca e il tempo corrente durante la riproduzione
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

  // Effetto per gestire gli eventi "playing" e "pause" dell'elemento audio
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

  // Effetto per aggiornare la barra di ricerca e il tempo corrente durante la riproduzione
  useEffect(() => {
    const handleLoadedMetadata = () => {
      // Imposta la durata solo se l'elemento audio è pronto e la durata è valida
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

    // Aggiungi gestore per l'evento loadedmetadata
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", updateSeekBar);

    return () => {
      // Rimuovi gli eventi al cambio della traccia o alla dismissione del componente
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef.current.removeEventListener("timeupdate", updateSeekBar);
    };
  }, [isSeeking, isPlaying]);

  // Renderizza il componente MusicPlayer
  return (
    <div className="container position-absolute container-music" data-aos="fade-up" data-aos-duration="2000">
      <div className="row">
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
