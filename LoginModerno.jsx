import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import "./LoginModerno.css";

export default function LoginModerno() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [esRegistro, setEsRegistro] = useState(false);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPass, setMostrarPass] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setEsRegistro(searchParams.get("modo") === "registro");
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 450);
  };

  return (
    <div className="login-fondo" style={{ backgroundColor: "#f4f5f7" }}>
      <div className="login-tarjeta">
        {/* Panel Izquierdo: Cambia su mensaje según si es Login o Registro */}
        <div
          className="login-izq"
          style={{
            background:
              "linear-gradient(135deg, #7a1c30 0%, #4b1826 55%, #1d2536 100%)",
            transition: "all 0.3s ease",
          }}
        >
          <div>
            {/* Logo idéntico al Dashboard */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7a1c30",
                  fontWeight: "800",
                  fontSize: "16px",
                }}
              >
                122
              </div>
              <div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    lineHeight: "1.1",
                  }}
                >
                  Reporta<span style={{ color: "#f4c550" }}>CBTis 122</span>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1.4px",
                    opacity: 0.8,
                    marginTop: "2px",
                  }}
                >
                  SISTEMA DE MANTENIMIENTO
                </div>
              </div>
            </div>

            {/* Título y descripción dinámicos */}
            <h2
              style={{
                color: "#f4c550",
                fontSize: "22px",
                fontWeight: "800",
                margin: "0 0 10px 0",
                lineHeight: "1.25",
              }}
            >
              {esRegistro
                ? "Forma parte del cuidado de tu escuela."
                : "Tu plantel, en mejores condiciones."}
            </h2>

            <p>
              {esRegistro
                ? "Como nuevo usuario podrás crear reportes de infraestructura, mobiliario o servicios dañados dentro del CBTis 122 para agilizar su reparación."
                : "Gestiona reportes de infraestructura, electricidad, limpieza o equipo escolar y consulta su estado de atención."}
            </p>
          </div>

          {/* Puntos inferiores dinámicos */}
          <div className="login-beneficios">
            <div className="login-beneficio-item">
              <span className="login-check">1</span>
              <span>
                {esRegistro
                  ? "Crea tu cuenta con tu correo escolar."
                  : "Registra incidencias por edificio, aula o folio."}
              </span>
            </div>
            <div className="login-beneficio-item">
              <span className="login-check">2</span>
              <span>
                {esRegistro
                  ? "Levanta reportes de infraestructura y recibe seguimiento."
                  : "Monitorea reportes pendientes, en revisión o solucionados."}
              </span>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Formulario */}
        <div className="login-der">
          <div
            style={{
              display: "flex",
              backgroundColor: "#f3f4f6",
              padding: "4px",
              borderRadius: "10px",
              marginBottom: "24px",
            }}
          >
            <button
              type="button"
              onClick={() => setEsRegistro(false)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: !esRegistro ? "#7a1c30" : "transparent",
                color: !esRegistro ? "#ffffff" : "#4b5563",
                transition: "all 0.2s ease",
              }}
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              onClick={() => setEsRegistro(true)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "700",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: esRegistro ? "#7a1c30" : "transparent",
                color: esRegistro ? "#ffffff" : "#4b5563",
                transition: "all 0.2s ease",
              }}
            >
              Registrarse
            </button>
          </div>

          <h2>{esRegistro ? "Crear cuenta" : "Bienvenido de nuevo"}</h2>
          <p className="login-subtitulo">
            {esRegistro
              ? "Completa tus datos para registrarte en el sistema"
              : "Ingresa tus credenciales para acceder al Dashboard"}
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            {esRegistro && (
              <div>
                <label className="login-label">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre y apellidos"
                  className="login-input"
                />
              </div>
            )}

            <div>
              <label className="login-label">Correo electrónico</label>
              <input
                type="email"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="usuario@cbtis122.edu.mx"
                className="login-input"
              />
            </div>

            <div>
              <label className="login-label">Contraseña</label>
              <div className="login-input-wrap">
                <input
                  type={mostrarPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="login-input"
                  style={{ paddingRight: "65px" }}
                />
                <button
                  type="button"
                  onClick={() => setMostrarPass(!mostrarPass)}
                  className="login-btn-ver"
                >
                  {mostrarPass ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="login-btn-submit"
            >
              {cargando ? (
                <>
                  <span className="login-spinner" /> Accediendo...
                </>
              ) : esRegistro ? (
                "Crear cuenta y entrar"
              ) : (
                "Entrar al Dashboard"
              )}
            </button>
          </form>

          <div className="login-footer">
            <Link to="/" className="login-volver">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}