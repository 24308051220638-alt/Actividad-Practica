
import React from "react";
import { Link } from "react-router";

const reportes = [
  {
    id: "REP-001",
    titulo: "Lámpara fundida",
    categoria: "Electricidad",
    lugar: "Edificio A",
    fecha: "24/11/2026",
    estado: "Pendiente",
  },
  {
    id: "REP-002",
    titulo: "Fuga de agua",
    categoria: "Plomería",
    lugar: "Baños del edificio B",
    fecha: "23/11/2026",
    estado: "En proceso",
  },
  {
    id: "REP-003",
    titulo: "Mesa dañada",
    categoria: "Mobiliario",
    lugar: "Salón 204",
    fecha: "22/11/2026",
    estado: "Finalizado",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f6f4] flex flex-col md:flex-row">

      <aside className="w-full md:w-64 bg-[#7a1c30] text-white p-6">
        <h1 className="text-2xl font-bold mb-2">ReportaCBTis</h1>
        <p className="text-sm text-pink-100 mb-10">CBTis 122</p>

        <nav className="space-y-3">
          <div className="bg-white/15 rounded-lg px-4 py-3 font-semibold">
            ▦ Panel principal
          </div>
          <a href="#reportes" className="block px-4 py-3 rounded-lg hover:bg-white/10">
            ▤ Reportes
          </a>
          <a href="#resumen" className="block px-4 py-3 rounded-lg hover:bg-white/10">
            ◷ Resumen
          </a>
        </nav>

        <div className="mt-12 border-t border-white/20 pt-6">
          <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-white/10">
            ↪ Cerrar sesión
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">

        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
          <div>
            <p className="text-gray-500 text-sm">Bienvenido a</p>
            <h2 className="text-3xl font-bold text-[#7a1c30]">
              Panel principal
            </h2>
            <p className="text-gray-500 mt-1">
              Seguimiento de reportes escolares
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Institución</p>
            <p className="font-semibold text-gray-800">CBTis 122</p>
          </div>
        </header>

        <section id="resumen" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#7a1c30]">
            <p className="text-gray-500 text-sm">Total de reportes</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">24</h3>
            <p className="text-sm text-gray-400 mt-2">Reportes registrados</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <p className="text-gray-500 text-sm">Pendientes</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">8</h3>
            <p className="text-sm text-gray-400 mt-2">Requieren atención</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <p className="text-gray-500 text-sm">En proceso</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">10</h3>
            <p className="text-sm text-gray-400 mt-2">En seguimiento</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <p className="text-gray-500 text-sm">Finalizados</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">6</h3>
            <p className="text-sm text-gray-400 mt-2">Atendidos</p>
          </div>

        </section>

        <section id="reportes" className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#7a1c30]">
                Reportes recientes
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Consulta el estado de los reportes registrados
              </p>
            </div>

            <span className="bg-[#fff0f2] text-[#7a1c30] px-4 py-2 rounded-lg text-sm font-semibold">
              Últimos reportes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[650px]">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-4 px-3">Folio</th>
                  <th className="py-4 px-3">Reporte</th>
                  <th className="py-4 px-3">Categoría</th>
                  <th className="py-4 px-3">Ubicación</th>
                  <th className="py-4 px-3">Fecha</th>
                  <th className="py-4 px-3">Estado</th>
                </tr>
              </thead>

              <tbody>
                {reportes.map((reporte) => (
                  <tr key={reporte.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-4 px-3 text-sm font-semibold text-[#7a1c30]">
                      {reporte.id}
                    </td>
                    <td className="py-4 px-3 text-sm font-medium text-gray-800">
                      {reporte.titulo}
                    </td>
                    <td className="py-4 px-3 text-sm text-gray-600">
                      {reporte.categoria}
                    </td>
                    <td className="py-4 px-3 text-sm text-gray-600">
                      {reporte.lugar}
                    </td>
                    <td className="py-4 px-3 text-sm text-gray-600">
                      {reporte.fecha}
                    </td>
                    <td className="py-4 px-3">
                      <span className={`text-xs font-semibold px-3 py-2 rounded-full ${
                        reporte.estado === "Pendiente"
                          ? "bg-red-100 text-red-700"
                          : reporte.estado === "En proceso"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {reporte.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center text-gray-400 text-sm mt-10">
          ReportaCBTis · CBTis 122 · Proyecto académico
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
