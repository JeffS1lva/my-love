// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { CarouselPlugin } from "./components/Carrosel";
import MusicPlayer from "./components/MusicPlayer";

const CronometroTempo: React.FC = () => {
  const dataInicio = new Date("2024-12-04T00:00:00");

  const [tempo, setTempo] = React.useState({
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  React.useEffect(() => {
    const calcularTempo = () => {
      const agora = new Date();

      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();
      let dias = agora.getDate() - dataInicio.getDate();
      let horas = agora.getHours() - dataInicio.getHours();
      let minutos = agora.getMinutes() - dataInicio.getMinutes();
      let segundos = agora.getSeconds() - dataInicio.getSeconds();

      // Ajustando valores negativos
      if (segundos < 0) {
        segundos += 60;
        minutos -= 1;
      }
      if (minutos < 0) {
        minutos += 60;
        horas -= 1;
      }
      if (horas < 0) {
        horas += 24;
        dias -= 1;
      }
      if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(
          agora.getFullYear(),
          agora.getMonth(),
          0
        ).getDate();
        dias += ultimoDiaMesAnterior;
        meses -= 1;
      }
      if (meses < 0) {
        meses += 12;
        anos -= 1;
      }

      setTempo({
        meses: anos * 12 + meses,
        dias,
        horas,
        minutos,
        segundos,
      });
    };

    const intervalo = setInterval(calcularTempo, 1000);
    calcularTempo();

    return () => clearInterval(intervalo);
  }, [dataInicio]);

  return (
    <div className="grid grid-cols-2 gap-3 text-center mt-4 font-secondFont">
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
        <p className="text-xl font-thin">{tempo.meses}</p>
        <p className="text-sm">Mês</p>
      </div>
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
      <div className="text-white bg-slate-950 rounded-md p-3 border-4 border-transparent shadow-md shadow-emerald-500">
      <p className="text-xl text-center font-thin ml-3">Futuro💭</p>
      <p className="text-sm">espero um dia voltar...</p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center text-white">
      <button
        className="bg-red-500 text-white font-bold py-3 px-6 rounded hover:bg-red-600"
        onClick={() => navigate("/surprise")}
      >
        Surpresa
      </button>
    </div>
  );
};

const SurprisePage: React.FC = () => (
  <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center text-white">
    <div className="flex text-center">
      <CarouselPlugin />
    </div>
    <div>
      <h1 className="text-center font-primayFont font-light text-4xl mt-10 text-red-500">Amor ♥</h1>
      <p className="text-white max-w-xs text-center m-auto font-thin">
        Evelyn, desde o dia em que te conheci e começamos a conversar tive a certeza que queria você na minha vida.
        Com você eu aprendi o que é amar e permitir também ser amado. Você é uma mulher incrível e é com você que quero
        passar o resto dos meus dias! Te amo ♥.
      </p>
      <h3 className="text-center mt-10 text-lg text-white font-semibold">Compartilhando momentos há:</h3>
      <CronometroTempo />
      <MusicPlayer />
    </div>
  </div>
);

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}
