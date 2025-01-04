import { CarouselPlugin } from "./components/Carrosel";
import React, { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer'; // Importar o componente de música

const CronometroTempo: React.FC = () => {
  const dataInicio = new Date('2024-12-04T00:00:00'); 

  const [tempo, setTempo] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calcularTempo = () => {
      const agora = new Date();
      const diffTime = agora.getTime() - dataInicio.getTime();

      const dias = Math.floor(diffTime / (1000 * 3600 * 24));
      const horas = Math.floor((diffTime % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutos = Math.floor((diffTime % (1000 * 3600)) / (1000 * 60));
      const segundos = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTempo({ dias, horas, minutos, segundos });
    };

    const intervalo = setInterval(calcularTempo, 1000);
    calcularTempo();

    return () => clearInterval(intervalo);
  }, [dataInicio]);

  return (
    <div className="grid grid-cols-2 gap-4 text-center mt-4 font-secondFont">
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
        <p className="text-xl font-thin">{tempo.dias}</p>
        <p className="text-sm">Dias</p>
      </div>
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
        <p className="text-xl font-thin">{tempo.horas}</p>
        <p className="text-sm">Horas</p>
      </div>
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
        <p className="text-xl font-thin">{tempo.minutos}</p>
        <p className="text-sm">Minutos</p>
      </div>
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
        <p className="text-xl font-thin">{tempo.segundos}</p>
        <p className="text-sm">Segundos</p>
      </div>
    </div>
  );
};

export function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="flex text-center">
        <CarouselPlugin />
      </div>
      <div>
        <h1 className="text-center font-primayFont font-light text-4xl mt-10 text-red-500">Amor ♥</h1>
        <p className="text-white max-w-xs text-center m-auto font-thin">
          Evelyn, desde o dia em que te conheci e começamos a conversar tive a certeza que queria você na minha vida. Com você eu aprendi o que é amar e permitir também ser amado. Você é uma mulher incrível e é com você que quero passar o resto dos meus dias! Te amo ♥.
        </p>
        <h3 className="text-center mt-10 text-lg text-white font-thin">Compartilhando momentos há:</h3>
        {/* Exibindo o cronômetro */}
        <CronometroTempo />
        {/* Adicionando o player de música */}
        <MusicPlayer />
      </div>
    </div>
  );
}