import React, { useState, useRef } from 'react';

const AudioPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2>Reproductor de audio</h2>
      <audio ref={audioRef} src={currentSong} />
      <p>Canción actual: {currentSong}</p>
      <button onClick={handlePreviousSong}>Anterior</button>
      {isPlaying ? (
        <button onClick={handlePause}>Pausa</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}
      <button onClick={handleNextSong}>Siguiente</button>
    </div>
  );
};

export default AudioPlayer;
