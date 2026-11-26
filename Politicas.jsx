import React from "react";
import { Link } from "react-router";

export default function Politicas() {
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
          <span className="inline-block bg-[#eff6ff] text-[#1e40af] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Operación y Seguimiento
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Políticas de servicio
          </h1>

          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
            <p>
              <strong>ReportaCBTis</strong> busca ofrecer una herramienta que
              permita a los estudiantes y demás integrantes de la comunidad
              escolar comunicar de manera sencilla los problemas relacionados
              con las instalaciones del <strong>CBTis 122</strong>. La
              plataforma está diseñada para organizar la información de los
              reportes y facilitar que las situaciones que requieren atención
              puedan identificarse con mayor claridad. Entre los problemas que
              se pueden registrar se encuentran las fallas en lámparas o
              instalaciones eléctricas, las condiciones de los baños, las fugas
              de agua, el mobiliario dañado, los problemas de limpieza, las
              puertas o ventanas deterioradas y otras situaciones que afecten el
              uso adecuado de los espacios escolares.
            </p>

            <p>
              El funcionamiento de la plataforma consiste en registrar la
              situación que se desea comunicar, seleccionar el área del plantel
              donde se encuentra el problema, indicar el tipo de reporte y
              agregar una descripción que explique lo ocurrido. Cuando sea
              necesario, también se podrán adjuntar fotografías como evidencia
              para facilitar la identificación de la situación. La información
              registrada permitirá mantener un control más organizado de los
              problemas que se presentan en las diferentes áreas de la
              institución y ayudará a evitar que las solicitudes se pierdan o
              queden sin seguimiento.
            </p>

            <p>
              Una vez enviado un reporte, este podrá ser revisado por las
              personas encargadas de administrar la plataforma, quienes tendrán
              la responsabilidad de verificar la información proporcionada,
              identificar el área afectada y determinar qué atención requiere la
              situación. Para facilitar la consulta de los reportes, se
              contempla un sistema de seguimiento mediante indicadores de
              colores. El color rojo representa los reportes que todavía se
              encuentran pendientes de atención, el amarillo señala aquellos que
              ya están siendo revisados o se encuentran en proceso de atención,
              mientras que el verde indica que el problema ha sido atendido y el
              reporte se encuentra finalizado. De esta manera, los usuarios
              podrán conocer el avance de cada situación sin necesidad de
              revisar nuevamente toda la información registrada.
            </p>

            <p>
              Para que el servicio funcione correctamente, es necesario que los
              usuarios proporcionen datos claros, seleccionen la ubicación
              adecuada y eviten registrar situaciones que no correspondan con
              las instalaciones del plantel. Por su parte, las personas
              responsables de administrar la plataforma deberán revisar los
              reportes, mantener actualizada su información y procurar que cada
              situación tenga un seguimiento adecuado. La información personal
              relacionada con los usuarios deberá manejarse de manera
              confidencial y únicamente podrá ser consultada por las personas
              autorizadas para realizar estas actividades.
            </p>

            <p>
              El tiempo necesario para atender un reporte puede variar
              dependiendo de la naturaleza del problema, su nivel de prioridad,
              los materiales disponibles y las posibilidades de atención de la
              institución. Por esta razón, la plataforma no establece un tiempo
              fijo para resolver todas las situaciones ni garantiza que cada
              reporte pueda solucionarse inmediatamente. Su propósito principal
              es facilitar la comunicación, mantener un registro de las
              necesidades del plantel y contribuir a que exista una mejor
              organización en los procesos de mantenimiento.
            </p>

            <p>
              <strong>ReportaCBTis</strong> es una propuesta que busca
              aprovechar la tecnología para mejorar las condiciones del entorno
              escolar y fomentar la participación de quienes forman parte de la
              institución. Su funcionamiento y alcance podrán ampliarse conforme
              se identifiquen nuevas necesidades y se reciban sugerencias de los
              usuarios. Cualquier actividad adicional relacionada con el
              mantenimiento, la participación estudiantil o la colaboración de
              otras personas deberá contar previamente con la autorización de
              las autoridades correspondientes del plantel.
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