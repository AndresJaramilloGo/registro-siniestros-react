/**
 * Componente Sidebar (Barra Lateral de Navegacion).
 * Muestra el menu institucional de la plataforma con secciones desplegables.
 * Existe para estructurar la navegacion de la aseguradora y dar una experiencia de panel profesional.
 */

import { useState } from 'react';

/**
 * CONCEPTO: Menu Desplegable (Dropdown) con Estado Local
 * Usamos una variable de estado (useState) para recordar que secciones del menu estan abiertas y cuales cerradas.
 * Cuando el usuario hace clic en una categoria, cambiamos ese valor entre verdadero (true) y falso (false)
 * para que React vuelva a dibujar la interfaz mostrando u ocultando los subelementos.
 */

function Sidebar() {
  // Estado para controlar que secciones estan abiertas o cerradas (Siniestros inicia abierto por ser la vista actual)
  const [openSections, setOpenSections] = useState({
    claims: true,
    policies: false,
    reports: false
  });

  // Estado para abrir o cerrar la barra lateral en pantallas pequenas (moviles o tablets)
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // QUE HACE: Abre o cierra la categoria del menu sobre la que el usuario hizo clic.
  // POR QUE: Permite que el usuario despliegue unicamente las opciones que le interesan sin recargar la pagina.
  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // QUE HACE: Alterna la visibilidad de la barra lateral en dispositivos moviles.
  // POR QUE: Ahorra espacio en pantallas chicas permitiendo ocultar o mostrar el menu con un boton.
  const toggleMobileSidebar = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* Boton flotante para abrir/cerrar el sidebar en dispositivos moviles */}
      <button
        type="button"
        className="sidebar-mobile-toggle"
        onClick={toggleMobileSidebar}
        aria-label="Alternar menu de navegacion"
      >
        <span className="sidebar-toggle-bar"></span>
        <span className="sidebar-toggle-bar"></span>
        <span className="sidebar-toggle-bar"></span>
      </button>

      {/* Capa oscura de fondo para cerrar el menu en moviles al tocar afuera */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={toggleMobileSidebar}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${isMobileOpen ? 'sidebar-open' : ''}`}>
        {/* Cabecera del Sidebar con identidad corporativa */}
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="sidebar-brand-name">Ecua<span className="sidebar-brand-accent">RE</span></span>
            <span className="sidebar-brand-tag">Portal Aseguradora</span>
          </div>
        </div>

        {/* Lista de navegacion con menus desplegables */}
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {/* 1. SECCION: Siniestros (Desplegable) */}
            <li className="sidebar-menu-item">
              <button
                type="button"
                className={`sidebar-dropdown-btn ${openSections.claims ? 'active' : ''}`}
                onClick={() => toggleSection('claims')}
                aria-expanded={openSections.claims}
              >
                <span className="sidebar-item-icon" aria-hidden="true">📋</span>
                <span className="sidebar-item-text">Siniestros</span>
                <span className={`sidebar-chevron ${openSections.claims ? 'rotated' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {openSections.claims && (
                <ul className="sidebar-submenu">
                  <li className="sidebar-submenu-item">
                    <a href="#registro" className="sidebar-sublink active">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Registrar Siniestro
                    </a>
                  </li>
                  <li className="sidebar-submenu-item">
                    <a href="#historial" className="sidebar-sublink disabled" title="Proximamente en Fase 3">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Historial de Siniestros
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* 2. SECCION: Polizas (Desplegable) */}
            <li className="sidebar-menu-item">
              <button
                type="button"
                className={`sidebar-dropdown-btn ${openSections.policies ? 'active' : ''}`}
                onClick={() => toggleSection('policies')}
                aria-expanded={openSections.policies}
              >
                <span className="sidebar-item-icon" aria-hidden="true">🛡️</span>
                <span className="sidebar-item-text">Pólizas</span>
                <span className={`sidebar-chevron ${openSections.policies ? 'rotated' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {openSections.policies && (
                <ul className="sidebar-submenu">
                  <li className="sidebar-submenu-item">
                    <a href="#polizas-activas" className="sidebar-sublink">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Consultar Pólizas
                    </a>
                  </li>
                  <li className="sidebar-submenu-item">
                    <a href="#coberturas" className="sidebar-sublink">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Tipos de Cobertura
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* 3. SECCION: Reportes (Desplegable) */}
            <li className="sidebar-menu-item">
              <button
                type="button"
                className={`sidebar-dropdown-btn ${openSections.reports ? 'active' : ''}`}
                onClick={() => toggleSection('reports')}
                aria-expanded={openSections.reports}
              >
                <span className="sidebar-item-icon" aria-hidden="true">📊</span>
                <span className="sidebar-item-text">Reportes</span>
                <span className={`sidebar-chevron ${openSections.reports ? 'rotated' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              {openSections.reports && (
                <ul className="sidebar-submenu">
                  <li className="sidebar-submenu-item">
                    <a href="#estadisticas" className="sidebar-sublink">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Estadísticas de Pérdidas
                    </a>
                  </li>
                  <li className="sidebar-submenu-item">
                    <a href="#exportar" className="sidebar-sublink">
                      <span className="sidebar-bullet" aria-hidden="true">•</span>
                      Exportar Datos
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Pie de la barra lateral */}
        <div className="sidebar-footer">
          <p className="sidebar-footer-text">Reaseguradora del Ecuador S.A.</p>
          <span className="sidebar-footer-badge">v1.0 - Modo Aprendizaje</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
