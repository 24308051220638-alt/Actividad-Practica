import React from "react";
import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col justify-between font-sans text-gray-800">
      {/* Navbar institucional */}
      <header className="bg-[#7a1c30] text-white px-6 sm:px-10 py-3.5 flex justify-between items-center shadow-sm">
        <Link to="/" className="flex items-center gap-3.5">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
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
        <Link
          to="/"
          className="text-sm font-semibold text-white/90 hover:text-[#f4c550] transition-colors"
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl w-full mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-10">
          <span className="inline-block bg-[#fdf2f4] text-[#7a1c30] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Información Institucional
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h1>

          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>ReportaCBTis</strong> es una propuesta de plataforma
              digital desarrollada con la intención de contribuir al mejoramiento
              de las instalaciones del <strong>CBTis 122</strong>. Surge al
              identificar que dentro del entorno escolar pueden presentarse
              diferentes situaciones que afectan las actividades diarias de
              estudiantes, docentes y personal administrativo, como lámparas que
              no funcionan, fugas de agua, baños en malas condiciones,
              mobiliario dañado o problemas relacionados con la limpieza y el
              mantenimiento de los espacios.
            </p>

            <p>
              A través de esta plataforma buscamos ofrecer una forma más
              organizada y accesible de comunicar este tipo de situaciones a las
              personas responsables de atenderlas. La idea es que los
              integrantes de la comunidad escolar puedan registrar un reporte
              indicando el lugar donde se presenta el problema, describiendo lo
              ocurrido y agregando fotografías que ayuden a comprender mejor la
              situación. De esta manera, la información puede mantenerse
              organizada y facilitar su revisión y seguimiento.
            </p>

            <p>
              Consideramos que el cuidado de las instalaciones es una
              responsabilidad compartida, ya que los espacios escolares son
              utilizados diariamente por muchas personas. Por ello,{" "}
              <strong>ReportaCBTis</strong> busca fomentar la participación de
              la comunidad estudiantil y aprovechar la tecnología como una
              herramienta que permita identificar necesidades, mejorar la
              comunicación y contribuir a que el plantel sea un lugar más
              seguro, funcional y agradable para todos.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-5 px-6 text-center text-xs text-gray-500 border-t border-gray-200 bg-white">
        ReportaCBTis 122 • Sistema de Mantenimiento Escolar — Chihuahua, Chih.
      </footer>
    </div>
  );
}