import React from "react";
import { Routes, Route, Link } from "react-router";

import LoginModerno from "./pages/LoginModerno.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import QuienesSomos from "./pages/QuieneSomos.jsx";
import Terminos from "./pages/Terminos.jsx";
import Politicas from "./pages/Politicas.jsx";
import NotFound from "./pages/NotFound.jsx";

function Inicio() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between font-sans text-gray-800">
      {/* Animaciones CSS garantizadas */}
      <style>{`
        @keyframes subirSuave {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes flotar {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .anim-banner {
          animation: subirSuave 0.55s ease-out forwards;
        }
        .anim-card-1 {
          opacity: 0;
          animation: subirSuave 0.5s ease-out 0.12s forwards;
        }
        .anim-card-2 {
          opacity: 0;
          animation: subirSuave 0.5s ease-out 0.24s forwards;
        }
        .anim-card-3 {
          opacity: 0;
          animation: subirSuave 0.5s ease-out 0.36s forwards;
        }
        .edificio-flotante {
          animation: flotar 4.5s ease-in-out infinite;
        }
        .card-interactiva {
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
        }
        .card-interactiva:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(122, 28, 48, 0.14);
          border-color: rgba(122, 28, 48, 0.35);
        }
        .card-interactiva:hover .card-icono {
          transform: scale(1.1) rotate(-4deg);
        }
        .card-interactiva:hover .card-flecha {
          transform: translateX(5px);
        }
        .card-icono, .card-flecha {
          transition: transform 0.25s ease;
        }
        .btn-hero {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .btn-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      {/* NAVBAR SUPERIOR */}
      <header className="bg-[#7a1c30] text-white px-6 sm:px-10 py-3.5 flex justify-between items-center shadow-sm">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-[#7a1c30] font-extrabold text-base tracking-tighter">
              122
            </span>
          </div>
          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-extrabold tracking-tight">
              <span className="text-white">Reporta</span>
              <span className="text-[#f4c550]">CBTis 122</span>
            </div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-white/80 uppercase">
              SISTEMA DE MANTENIMIENTO
            </p>
          </div>
        </Link>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl w-full mx-auto px-6 py-10 sm:py-12">
        {/* BANNER PRINCIPAL CON ELEMENTO ARQUITECTÓNICO FLOTANTE */}
        <section
          style={{
            background:
              "linear-gradient(115deg, #7a1c30 0%, #4b1826 52%, #1d2536 100%)",
          }}
          className="anim-banner rounded-3xl p-8 sm:p-12 text-white shadow-lg mb-8 relative overflow-hidden"
        >
          {/* Silueta decorativa del plantel */}
          <svg
            viewBox="0 0 200 160"
            className="edificio-flotante hidden md:block absolute right-10 bottom-4 w-56 h-44 text-white/[0.07] pointer-events-none"
            fill="currentColor"
          >
            <path d="M100 15L35 55v90h45v-40h40v40h45V55L100 15zm0 25a14 14 0 110 28 14 14 0 010-28zM55 70h18v20H55V70zm0 32h18v20H55v-20zm72-32h18v20h-18V70zm0 32h18v20h-18v-20z" />
          </svg>

          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/15 text-[#f4c550] text-xs font-semibold px-3.5 py-1 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f4c550]" />
              CBTis 122 • Chihuahua, Chih.
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#f4c550] leading-tight mb-4">
              Tu plantel, en mejores condiciones.
            </h1>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">
              Reporta fallas de infraestructura, electricidad, limpieza o equipo
              escolar en un solo lugar. Da seguimiento a cada incidencia y ayuda
              a mantener el CBTis 122 funcionando mejor.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/login"
                className="btn-hero bg-[#f4c550] hover:bg-[#e5b53e] text-[#2a1217] px-6 py-3 rounded-xl font-bold text-sm shadow"
              >
                Iniciar sesión
              </Link>

              <Link
                to="/login?modo=registro"
                className="btn-hero bg-white/10 hover:bg-white/20 text-white border border-white/15 px-6 py-3 rounded-xl font-semibold text-sm"
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </section>

        {/* TARJETAS INFORMATIVAS CON DISEÑO TIPO MÉTRICAS DEL DASHBOARD */}
        <section className="grid md:grid-cols-3 gap-5">
          <Tarjeta
            animClass="anim-card-1"
            etiqueta="INFORMACIÓN"
            titulo="¿Quiénes somos?"
            descripcion="Conoce el propósito de ReportaCBTis y cómo buscamos mejorar las instalaciones de nuestro plantel."
            ruta="/quienes-somos"
            colorFondoIcono="#fdf2f4"
            colorIcono="#7a1c30"
            colorBordeSuperior="#7a1c30"
            icono={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />

          <Tarjeta
            animClass="anim-card-2"
            etiqueta="NORMATIVA"
            titulo="Términos y condiciones"
            descripcion="Lineamientos de uso responsable, veracidad de reportes y manejo de datos dentro del sistema."
            ruta="/terminos"
            colorFondoIcono="#fef9ec"
            colorIcono="#b47b12"
            colorBordeSuperior="#f4c550"
            icono={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
          />

          <Tarjeta
            animClass="anim-card-3"
            etiqueta="OPERACIÓN"
            titulo="Políticas de servicio"
            descripcion="Conoce cómo se revisan los reportes, el semáforo de seguimiento y el alcance de atención."
            ruta="/politicas"
            colorFondoIcono="#eff6ff"
            colorIcono="#1e40af"
            colorBordeSuperior="#1d2536"
            icono={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
        </section>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="py-5 px-6 text-center text-xs text-gray-500 border-t border-gray-200 bg-white">
        ReportaCBTis 122 • Sistema de Mantenimiento Escolar — Chihuahua, Chih.
      </footer>
    </div>
  );
}

function Tarjeta({
  animClass,
  etiqueta,
  titulo,
  descripcion,
  ruta,
  icono,
  colorFondoIcono,
  colorIcono,
  colorBordeSuperior,
}) {
  return (
    <Link
      to={ruta}
      style={{ borderTopWidth: "3px", borderTopColor: colorBordeSuperior }}
      className={`${animClass} card-interactiva bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
            {etiqueta}
          </span>
          <div
            style={{ backgroundColor: colorFondoIcono, color: colorIcono }}
            className="card-icono w-9 h-9 rounded-xl flex items-center justify-center"
          >
            {icono}
          </div>
        </div>

        <h3 className="text-lg font-extrabold text-gray-900 mb-2">{titulo}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-5">
          {descripcion}
        </p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[#7a1c30] text-xs font-bold">
          Consultar sección
        </span>
        <span className="card-flecha text-[#7a1c30] text-sm font-bold">→</span>
      </div>
    </Link>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<LoginModerno />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/politicas" element={<Politicas />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}