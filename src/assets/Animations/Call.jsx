import { useState, useRef, useEffect } from 'react';
import call from "../sounds/sound_call.mp3"

function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(call));

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);

  return {
    isPlaying,
    play,
    pause,
  };
}

export default useAudio;
