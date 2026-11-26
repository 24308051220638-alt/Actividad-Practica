import React from "react";
import { Link } from "react-router";

export default function NotFound() {
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
      </header>

      {/* Tarjeta central 404 */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white max-w-lg w-full p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fdf2f4] text-[#7a1c30] font-extrabold text-2xl mb-4">
            404
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
            Página no encontrada
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            La dirección que intentas consultar no existe o fue movida dentro de{" "}
            <strong>ReportaCBTis 122</strong>.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#7a1c30] hover:bg-[#5c1323] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="py-5 px-6 text-center text-xs text-gray-500 border-t border-gray-200 bg-white">
        ReportaCBTis 122 • Sistema de Mantenimiento Escolar — Chihuahua, Chih.
      </footer>
    </div>
  );
}