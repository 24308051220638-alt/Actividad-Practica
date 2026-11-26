import React from "react";
import { Link } from "react-router";

export default function Terminos() {
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

      {/* Contenido completo */}
      <main className="max-w-4xl w-full mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-10">
          <span className="inline-block bg-[#fef9ec] text-[#b47b12] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Normativa del Sistema
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Términos y condiciones
          </h1>

          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>ReportaCBTis</strong> es una propuesta de plataforma
              digital creada para facilitar el registro y seguimiento de
              situaciones relacionadas con el mantenimiento y las condiciones de
              las instalaciones del <strong>CBTis 122</strong>. Al utilizar esta
              plataforma, los usuarios aceptan hacer un uso responsable de sus
              herramientas y proporcionar información que contribuya a
              identificar los problemas que se presentan dentro del plantel. Su
              finalidad es mejorar la comunicación entre la comunidad escolar y
              las personas encargadas de atender este tipo de situaciones, por
              lo que su uso debe mantenerse relacionado exclusivamente con las
              necesidades de la institución.
            </p>

            <p>
              Al registrar un reporte, el usuario deberá proporcionar
              información verdadera y procurar que la descripción corresponda con
              el problema que desea comunicar. Es importante indicar
              correctamente el lugar donde se presenta la situación, explicar de
              manera clara lo que ocurre y, cuando sea necesario, adjuntar
              fotografías que permitan comprender mejor el problema. Los reportes
              falsos, realizados como broma, duplicados intencionalmente o que
              contengan información que pueda perjudicar a otras personas no
              corresponden al propósito de la plataforma.
            </p>

            <p>
              Los usuarios también deberán mantener una conducta respetuosa al
              utilizar <strong>ReportaCBTis</strong>. No está permitido utilizar
              el espacio de reportes para publicar insultos, amenazas,
              acusaciones personales, contenido ofensivo o información que no
              tenga relación con el mantenimiento escolar. En caso de adjuntar
              fotografías, estas deberán utilizarse únicamente como evidencia del
              problema reportado, evitando mostrar información personal o
              imágenes de otras personas sin su autorización.
            </p>

            <p>
              La información proporcionada durante el registro de un reporte
              será utilizada únicamente para facilitar su identificación,
              revisión y seguimiento dentro del proyecto. Los datos de los
              usuarios, como su número de control, deberán manejarse con
              responsabilidad y no deberán mostrarse públicamente ni compartirse
              con personas que no estén autorizadas para consultarlos. El acceso
              a esta información deberá limitarse a quienes tengan una función
              relacionada con la administración y revisión de los reportes.
            </p>

            <p>
              Es importante mencionar que el registro de un reporte no significa
              que el problema será solucionado de manera inmediata, ya que cada
              situación requiere una revisión y puede depender de los recursos
              disponibles, la prioridad del problema y la autorización de las
              personas responsables. <strong>ReportaCBTis</strong> funciona como
              una herramienta de comunicación y organización, por lo que no
              sustituye los procedimientos oficiales de atención y mantenimiento
              establecidos por la institución.
            </p>

            <p>
              Debido a que <strong>ReportaCBTis</strong> forma parte de una
              propuesta escolar, sus condiciones de uso podrán modificarse
              conforme avance su desarrollo y se definan nuevas necesidades. En
              caso de que la plataforma llegue a implementarse formalmente
              dentro del plantel, estos términos deberán revisarse y contar con
              la autorización correspondiente para garantizar que su
              funcionamiento sea adecuado para toda la comunidad escolar.
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