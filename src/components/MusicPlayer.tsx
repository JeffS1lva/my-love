import React, { useState, useRef } from 'react';
import { Pause, Play, RefreshCcw } from 'lucide-react';
import Music from "@/assets/07-Magic -  Coldplay-.mp3"

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Função para alternar entre play e pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Função para reiniciar a música
  const restartMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reinicia a música para o início
      audioRef.current.play(); // Começa a música imediatamente
      setIsPlaying(true); // Define o estado como tocando
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <audio ref={audioRef} src={Music} preload="auto">
        Seu navegador não suporta a tag de áudio.
      </audio>

      <div className="flex space-x-4">
        <button
          onClick={togglePlayPause}
          className="bg-slate-950 shadow-md shadow-emerald-500 text-white p-2 mt-4 rounded cursor-pointer"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button
          onClick={restartMusic}
          className="bg-slate-950 shadow-md shadow-emerald-500 text-white p-2 mt-4 rounded cursor-pointer"
        >
          <RefreshCcw />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
