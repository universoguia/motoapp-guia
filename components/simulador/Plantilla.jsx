// GENERADO por scripts/convertir-plantilla.mjs desde legacy/index.html (v0.0.7).
// No editar a mano: volver a correr `npm run convertir`.
import React from 'react';

export default function Plantilla(v) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: v.gapExterior, padding: v.padExterior, height: v.altoExterior, minHeight: v.altoExterior, overflow: v.overflowExterior, boxSizing: "border-box", background: "#0B0D10", color: "#F2F4F6", fontFamily: "'Archivo', system-ui, sans-serif" }}>
        {v.panelTrabajo ? (<>
          <div style={{ width: "262px", flex: "none", paddingTop: "18px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <img src="/img/motoapp-logo.png" alt="Motoapp" style={{ width: "32px", height: "32px", borderRadius: "8px", display: "block" }} />
              <span style={{ fontFamily: "'Racing Sans One', sans-serif", fontSize: "17px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Moto
                <span style={{ color: "#E10600" }}>
                  app
                </span>
              </span>
            </div>
            <div>
              <div style={{ fontSize: "21px", fontWeight: "600", lineHeight: "1.25", letterSpacing: "-0.02em" }}>
                Master v0.0.7
              </div>
              <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.55", color: "#98A1AB" }}>
                Alquiler de motos de particular a particular. Una cuenta, dos contextos: la reserva del cliente vista desde el propietario.
              </div>
            </div>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ fontSize: "12.5px", lineHeight: "1.6", color: "#7D858E" }}>
              Fotografía demo en PCX 125 y MT-07, asociada por listing. El resto conserva la placa gráfica como fallback hasta recibir su foto.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "12.5px", color: "#7D858E" }}>
              <div style={{ color: "#C6CCD3", fontWeight: "600", letterSpacing: "0.06em", fontSize: "11px", textTransform: "uppercase" }}>
                Ruta de ensayo
              </div>
              <button onClick={v.reiniciar} style={{ marginBottom: "4px", height: "38px", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "10px", background: "rgba(255,255,255,0.06)", color: "#F2F4F6", fontFamily: "inherit", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }}>
                Reiniciar ensayo
              </button>
              <div style={{ color: "#E7EAEE" }}>
                Inicio → Buscar → Ciudad y fechas → Resultados
              </div>
              <div style={{ color: "#E7EAEE" }}>
                Lista/Mapa → Ficha → Reservar → Checkout
              </div>
              <div style={{ color: "#E7EAEE" }}>
                Confirmación → Mis reservas → Conversación
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ color: "#C6CCD3", fontWeight: "600", letterSpacing: "0.06em", fontSize: "11px", textTransform: "uppercase" }}>
                Última operación
              </div>
              {(v.depuracion || []).map((dp, __i) => (
                <React.Fragment key={dp && dp.id != null ? dp.id : __i}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px", fontSize: "11.5px", color: "#7D858E" }}>
                    <span>
                      {dp.etiqueta}
                    </span>
                    <span style={{ color: "#C6CCD3", fontFamily: "ui-monospace, monospace" }}>
                      {dp.valor}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div style={{ fontSize: "11.5px", lineHeight: "1.6", color: "#6C737B" }}>
              Datos, fianzas y seguros son simulados para la demostración.
            </div>
          </div>
        </>) : null}
        <div style={{ flex: "none", width: v.anchoMarco, maxWidth: "408px", height: v.altoMarco, borderRadius: v.radioMarco, background: "#0D0D0D", padding: v.padMarco, boxSizing: "border-box", boxShadow: v.sombraMarco }}>
          <div style={{ position: "relative", width: v.anchoPantalla, maxWidth: "100%", height: v.altoPantalla, maxHeight: "100%", borderRadius: v.radioPantalla, overflow: "hidden", background: "#F4F4F3", display: "flex", flexDirection: "column", color: "#14171B" }}>
            <div style={{ position: "relative", zIndex: "5", flex: "none", height: "46px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 30px 0 34px", fontSize: "13.5px", fontWeight: "700", color: v.colorStatus }}>
              <span onClick={v.tocarHora} style={{ cursor: "default", userSelect: "none" }}>
                9:41
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                  <rect x="0" y="7" width="3" height="4" rx="1" />
                  <rect x="4.5" y="5" width="3" height="6" rx="1" />
                  <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
                  <rect x="13.5" y="0" width="3" height="11" rx="1" />
                </svg>
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <rect x="0.6" y="0.6" width="19" height="10.8" rx="3" stroke="currentColor" strokeOpacity="0.5" />
                  <rect x="2.4" y="2.4" width="15.4" height="7.2" rx="1.8" fill="currentColor" />
                  <path d="M21.4 4.2v3.6c1.1-.3 1.6-.9 1.6-1.8s-.5-1.5-1.6-1.8z" fill="currentColor" />
                </svg>
              </span>
            </div>
            {v.sinSesion ? (<>
              <div style={{ position: "absolute", inset: "0", zIndex: "3", background: "#0E1013" }}>
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, #22262C 0%, #14171B 52%, #0B0D10 100%)" }} />
                <div style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "46px 26px 34px", color: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "auto", marginTop: "12px" }}>
                    <img src="/img/motoapp-logo.png" alt="Motoapp" style={{ width: "40px", height: "40px", borderRadius: "10px", display: "block" }} />
                    <span style={{ fontFamily: "'Racing Sans One', sans-serif", fontSize: "22px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      Moto
                      <span style={{ color: "#E10600" }}>
                        app
                      </span>
                    </span>
                  </div>
                  <div style={{ fontSize: "30px", fontWeight: "700", lineHeight: "1.14", letterSpacing: "-0.03em", textWrap: "pretty" }}>
                    La moto que quieres,
                    <br />
                    los días que la necesitas.
                  </div>
                  <div style={{ marginTop: "11px", fontSize: "14.5px", lineHeight: "1.5", color: "rgba(255,255,255,0.72)" }}>
                    Motos de propietarios verificados, con casco, seguro y precio cerrado.
                  </div>
                  <div style={{ marginTop: "24px" }}>
                    <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                      Entrar como
                    </div>
                    <div role="group" aria-label="Elegí con qué rol entrar" style={{ marginTop: "9px", display: "flex", gap: "10px" }}>
                      <button className="dc-focusvisible-1" onClick={v.elegirConsumidor} aria-pressed={v.rolEsConsumidor} style={{ flex: "1", minHeight: "64px", padding: "11px 13px", textAlign: "left", borderRadius: "13px", cursor: "pointer", fontFamily: "inherit", color: "#fff", border: `1px solid ${v.bordeConsumidor}`, background: v.fondoConsumidor }}>
                        <span style={{ display: "block", fontSize: "13.5px", fontWeight: "700" }}>
                          Consumidor
                        </span>
                        <span style={{ display: "block", marginTop: "3px", fontSize: "11px", lineHeight: "1.35", color: "rgba(255,255,255,0.62)" }}>
                          Alquilo, compro y pujo
                        </span>
                      </button>
                      <button className="dc-focusvisible-1" onClick={v.elegirEmprendedor} aria-pressed={v.rolEsEmprendedor} style={{ flex: "1", minHeight: "64px", padding: "11px 13px", textAlign: "left", borderRadius: "13px", cursor: "pointer", fontFamily: "inherit", color: "#fff", border: `1px solid ${v.bordeEmprendedor}`, background: v.fondoEmprendedor }}>
                        <span style={{ display: "block", fontSize: "13.5px", fontWeight: "700" }}>
                          Emprendedor
                        </span>
                        <span style={{ display: "block", marginTop: "3px", fontSize: "11px", lineHeight: "1.35", color: "rgba(255,255,255,0.62)" }}>
                          Publico y gestiono mis motos
                        </span>
                      </button>
                    </div>
                  </div>
                  <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input value={v.correo} onChange={v.onCorreo} placeholder="Correo electrónico" style={{ height: "50px", padding: "0 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "inherit", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                    <input value={v.clave} onChange={v.onClave} type="password" placeholder="Contraseña" style={{ height: "50px", padding: "0 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "inherit", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                    <button onClick={v.onEntrar} style={{ height: "52px", marginTop: "4px", border: "none", borderRadius: "12px", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                      {v.textoEntrar}
                    </button>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button onClick={v.onEntrar} style={{ flex: "1", height: "48px", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "12px", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
                        Google
                      </button>
                      <button onClick={v.onEntrar} style={{ flex: "1", height: "48px", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "12px", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
                        Apple
                      </button>
                    </div>
                    <div style={{ marginTop: "10px", textAlign: "center", fontSize: "12.5px", color: "rgba(255,255,255,0.55)" }}>
                      ¿Olvidaste tu contraseña?
                    </div>
                  </div>
                </div>
              </div>
            </>) : null}
            {v.conSesion ? (<>
              <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none" }}>
                {v.esInicio ? (<>
                  <div data-screen-label="Inicio" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                      <div>
                        <div style={{ fontSize: "13px", color: "#6E747C" }}>
                          Hola, 
                          {v.nombreUsuario}
                        </div>
                        <div style={{ marginTop: "3px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.18" }}>
                          ¿Qué moto quieres
                          <br />
                          conducir y cuándo?
                        </div>
                      </div>
                      <button onClick={v.irPerfil} aria-label="Abrir mi cuenta" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
                        {v.inicialUsuario}
                      </button>
                    </div>
                    <button className="dc-focusvisible-1" onClick={v.irBuscar} aria-label="Buscar moto: elegí ciudad y fechas" style={{ marginTop: "20px", width: "100%", display: "flex", alignItems: "center", gap: "12px", height: "58px", padding: "0 18px", borderRadius: "14px", border: "1px solid #E4E3E0", background: "#fff", boxShadow: "0 6px 18px rgba(14,16,19,0.05)", fontFamily: "inherit", cursor: "pointer", textAlign: "left" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E10600" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7.5" />
                        <path d="M21 21l-4.3-4.3" />
                      </svg>
                      <span style={{ flex: "1", minWidth: "0" }}>
                        <span style={{ display: "block", fontSize: "14.5px", fontWeight: "600", color: "#14171B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          Buscar moto
                        </span>
                        <span style={{ display: "block", marginTop: "1px", fontSize: "12px", color: "#6E747C" }}>
                          Elegí ciudad y fechas
                        </span>
                      </span>
                    </button>
                    <div style={{ marginTop: "26px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Motos destacadas
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                        {v.conteoInicio}
                      </div>
                    </div>
                    {v.sinInicio ? (<>
                      <div style={{ marginTop: "14px", padding: "24px 20px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", textAlign: "center" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700" }}>
                          Todavía no hay motos que puedas alquilar
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                          {v.textoSinInicio}
                        </div>
                        <button className="dc-focusvisible-1" onClick={v.irBuscar} style={{ marginTop: "16px", height: "44px", padding: "0 20px", borderRadius: "11px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                          Buscar moto
                        </button>
                      </div>
                    </>) : null}
                    <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "18px" }}>
                      {(v.listingsInicio || []).map((b, __i) => (
                        <React.Fragment key={b && b.id != null ? b.id : __i}>
                          <div onClick={b.abrir} onKeyDown={b.teclas} role="button" tabIndex={0} aria-label={b.etiquetaAbrir} style={{ borderRadius: "18px", overflow: "hidden", background: "#fff", border: "1px solid #E4E3E0", boxShadow: "0 8px 24px rgba(14,16,19,0.05)", cursor: "pointer" }}>
                            <div style={{ position: "relative", aspectRatio: "3 / 2", background: b.placa }}>
                              {b.hayFoto ? (<>
                                <div role="img" aria-label={b.altFoto} style={{ position: "absolute", inset: "0", backgroundImage: b.cardCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                              </>) : null}
                              {b.sinFoto ? (<>
                                <div style={{ position: "absolute", bottom: "14px", left: "18px", height: "26px", display: "inline-flex", alignItems: "center", padding: "0 12px", borderRadius: "999px", background: "rgba(255,255,255,0.16)", color: "#fff", fontSize: "11.5px", fontWeight: "600", letterSpacing: "0.02em" }}>
                                  {b.categoria}
                                </div>
                              </>) : null}
                              <button onClick={b.fav} aria-label={b.etiquetaFav} style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.94)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                                <svg width="19" height="19" viewBox="0 0 24 24" fill={b.corazonRelleno} stroke={b.corazonBorde} strokeWidth="1.8" strokeLinecap="round">
                                  <path d="M12 20.3l-1.4-1.3C5 15 2 12.3 2 8.9 2 6.1 4.1 4 6.9 4c1.6 0 3.1.7 4.1 1.9C12.1 4.7 13.6 4 15.2 4 18 4 20 6.1 20 8.9c0 3.4-3 6.1-8.6 11.1z" />
                                </svg>
                              </button>
                            </div>
                            <div style={{ padding: "14px 16px 16px" }}>
                              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                                <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.02em", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {b.titulo}
                                </div>
                                <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: "600" }}>
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#E8A83C">
                                    <path d="M12 2l2.9 6.3 6.9.8-5 4.8 1.3 6.8L12 17.4 5.9 20.7 7.2 13.9l-5-4.8 6.9-.8z" />
                                  </svg>
                                  {b.rating}
                                  <span style={{ color: "#6E747C", fontWeight: "400" }}>
                                    (
                                    {b.resenas}
                                    )
                                  </span>
                                </div>
                              </div>
                              <div style={{ marginTop: "4px", fontSize: "13px", color: "#6E747C" }}>
                                {b.ubicacion}
                              </div>
                              <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #EDECE9", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                                <div>
                                  <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                    {b.precioDia}
                                  </span>
                                  <span style={{ fontSize: "13px", color: "#6E747C" }}>
                                     / día
                                  </span>
                                </div>
                                <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                                  {b.total}
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "30px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                      Explorar por categoría
                    </div>
                    <div style={{ position: "relative", marginTop: "12px" }}>
                      <div data-scroll style={{ display: "flex", gap: "10px", overflowX: "auto", scrollbarWidth: "none", padding: "0 26px 2px 0" }}>
                        {(v.categorias || []).map((c, __i) => (
                          <React.Fragment key={c && c.id != null ? c.id : __i}>
                            <button onClick={c.ir} style={{ flex: "none", width: "92px", border: "none", background: "none", padding: "0", fontFamily: "inherit", cursor: "pointer", textAlign: "left" }}>
                              <div style={{ position: "relative", height: "72px", borderRadius: "12px", overflow: "hidden", background: c.placa, boxShadow: `0 0 0 2px ${c.anillo}` }}>
                                <div style={{ position: "absolute", top: "11px", left: "11px", right: "10px", fontSize: "13px", fontWeight: "700", letterSpacing: "-0.02em", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {c.nombre}
                                </div>
                                <div style={{ position: "absolute", bottom: "10px", left: "11px", fontSize: "10.5px", fontWeight: "600", color: "rgba(255,255,255,0.66)" }}>
                                  {c.conteo}
                                </div>
                              </div>
                              <div style={{ marginTop: "7px", fontSize: "12px", fontWeight: "600", color: c.color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {c.accion}
                              </div>
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                      <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", bottom: "2px", width: "34px", background: "linear-gradient(90deg, rgba(244,244,243,0) 0%, #F4F4F3 78%)", pointerEvents: "none" }} />
                    </div>
                    <div style={{ marginTop: "30px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                      <div style={{ fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Dónde están
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                        {v.conteoMapa}
                      </div>
                    </div>
                    {v.mapaOk ? (<>
                      <div style={{ marginTop: "12px", borderRadius: "16px", overflow: "hidden", border: "1px solid #E4E3E0", background: "#0E1013" }}>
                        <div ref={v.mapaRef} style={{ width: "100%", height: v.altoMapaHome }} />
                      </div>
                      <div style={{ marginTop: "8px", fontSize: "12px", lineHeight: "1.5", color: "#6E747C" }}>
                        Cada pin muestra el precio por día. Los cercanos se agrupan; acercá el zoom para separarlos.
                      </div>
                    </>) : null}
                    {v.mapaFallido ? (<>
                      <div style={{ marginTop: "12px", padding: "22px 20px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", textAlign: "center" }}>
                        <div style={{ fontSize: "14px", fontWeight: "700" }}>
                          No pudimos cargar el mapa
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C" }}>
                          Puedes seguir viendo las motos en la lista.
                        </div>
                      </div>
                    </>) : null}
                    <div style={{ marginTop: "26px", display: "flex", gap: "10px", padding: "14px 16px", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="M12 3l7 3v6c0 4.2-2.8 7.5-7 9-4.2-1.5-7-4.8-7-9V6z" />
                        <path d="M9 12l2.2 2.2L15.5 10" />
                      </svg>
                      <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#4A4F57" }}>
                        Propietarios verificados, casco incluido y precio cerrado. Pago retenido hasta la entrega.
                      </div>
                    </div>
                    {v.__inicioExtra || null}
                  </div>
                </>) : null}
                {v.esBuscar ? (<>
                  <div data-screen-label="Buscar" style={{ padding: "6px 20px 26px" }}>
                    {v.buscarConfig ? (<>
                      <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                        Buscar moto
                      </div>
                      <div style={{ marginTop: "6px", fontSize: "13.5px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                        Elegí ciudad y fechas para encontrar motos disponibles.
                      </div>
                      <div style={{ marginTop: "22px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                          Ciudad
                        </div>
                        <div aria-live="polite" style={{ fontSize: "12.5px", fontWeight: "600", color: v.colorCiudadElegida }}>
                          {v.ciudadElegida}
                        </div>
                      </div>
                      <div role="group" aria-label="Ciudad" style={{ marginTop: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {(v.chipsCiudad || []).map((c, __i) => (
                          <React.Fragment key={c && c.id != null ? c.id : __i}>
                            <button className="dc-focusvisible-1" onClick={c.ir} aria-pressed={c.activo} aria-label={c.etiqueta} style={{ height: "48px", padding: "0 14px", borderRadius: "12px", border: `1px solid ${c.borde}`, background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                              {c.nombre}
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ marginTop: "24px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                          Fechas
                        </div>
                        <div aria-live="polite" style={{ fontSize: "12.5px", fontWeight: "600", color: v.colorRangoActual }}>
                          {v.rangoActual}
                        </div>
                      </div>
                      <div style={{ marginTop: "10px", padding: "14px 12px 12px", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                          <button className="dc-focusvisible-1" onClick={v.mesAnterior} aria-label="Mes anterior" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: v.colorMesAnterior, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 5l-7 7 7 7" />
                            </svg>
                          </button>
                          <div style={{ fontSize: "14.5px", fontWeight: "600", textTransform: "capitalize" }}>
                            {v.mesTitulo}
                          </div>
                          <button className="dc-focusvisible-1" onClick={v.mesSiguiente} aria-label="Mes siguiente" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: "#4A4F57", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                        <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                          {(v.diasSemana || []).map((w, __i) => (
                            <React.Fragment key={w && w.id != null ? w.id : __i}>
                              <div style={{ height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", color: "#9AA0A8" }}>
                                {w.letra}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                        <div role="group" aria-label="Elegí fecha de recogida y de devolución" style={{ marginTop: "2px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                          {(v.celdas || []).map((c, __i) => (
                            <React.Fragment key={c && c.id != null ? c.id : __i}>
                              <button className="dc-focusvisible-2" onClick={c.tocar} disabled={c.bloqueado} aria-label={c.etiqueta} aria-pressed={c.activo} style={{ height: "44px", border: "none", borderRadius: "10px", background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13.5px", fontWeight: c.peso, cursor: c.cursor }}>
                                {c.dia}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <div aria-live="polite" style={{ marginTop: "8px", fontSize: "11.5px", color: "#9AA0A8" }}>
                          {v.pistaFechas}
                        </div>
                      </div>
                      {v.hayAvisoBusqueda ? (<>
                        <div role="status" style={{ marginTop: "16px", display: "flex", gap: "11px", padding: "13px 15px", borderRadius: "12px", background: "#FDF3F2", border: "1px solid #F0D6D5" }}>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C00500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v4.5M12 16h.01" />
                          </svg>
                          <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#4A4F57" }}>
                            {v.avisoBusqueda}
                          </div>
                        </div>
                      </>) : null}
                      <button className="dc-focusvisible-1" onClick={v.verMotos} disabled={v.verMotosBloqueado} aria-label="Ver motos disponibles" style={{ marginTop: "18px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: v.colorVerMotos, color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: v.cursorVerMotos }}>
                        {v.textoVerMotos}
                      </button>
                      <div style={{ marginTop: "12px", fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8", textAlign: "center" }}>
                        Motoapp no elige la ciudad ni las fechas por vos.
                      </div>
                    </>) : null}
                    {v.buscarResultados ? (<>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ minWidth: "0" }}>
                          <div style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.2", textWrap: "pretty" }}>
                            {v.contextoTitulo}
                          </div>
                          <div aria-live="polite" style={{ marginTop: "4px", fontSize: "13.5px", color: "#6E747C" }}>
                            {v.contextoConteo}
                          </div>
                        </div>
                        <button className="dc-focusvisible-1" onClick={v.editarBusqueda} aria-label="Editar la búsqueda: ciudad y fechas" style={{ flex: "none", height: "44px", padding: "0 14px", borderRadius: "11px", border: "1px solid #DAD8D4", background: "#fff", color: "#C00500", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                          Editar búsqueda
                        </button>
                      </div>
                      {v.hayNoDisponibles ? (<>
                        <div style={{ marginTop: "10px", fontSize: "12px", lineHeight: "1.5", color: "#9AA0A8" }}>
                          {v.notaDisponibilidad}
                        </div>
                      </>) : null}
                      <div style={{ marginTop: "20px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                          Categoría
                        </div>
                        {v.filtrosActivos ? (<>
                          <button className="dc-focusvisible-1" onClick={v.limpiarFiltros} aria-label="Limpiar los filtros de categoría y precio" style={{ height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #DAD8D4", background: "#fff", color: "#C00500", fontFamily: "inherit", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
                            Limpiar filtros
                          </button>
                        </>) : null}
                      </div>
                      <div style={{ position: "relative", marginTop: "10px" }}>
                        <div data-scroll role="group" aria-label="Categoría" style={{ display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none", padding: "0 30px 2px 0" }}>
                          {(v.chipsCategoria || []).map((c, __i) => (
                            <React.Fragment key={c && c.id != null ? c.id : __i}>
                              <button className="dc-focusvisible-1" onClick={c.ir} aria-pressed={c.activo} style={{ flex: "none", height: "44px", display: "flex", alignItems: "center", gap: "8px", padding: "0 15px", borderRadius: "999px", border: `1px solid ${c.borde}`, background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>
                                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: c.punto }} />
                                {c.nombre}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", bottom: "2px", width: "38px", background: "linear-gradient(90deg, rgba(244,244,243,0) 0%, #F4F4F3 72%)", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", top: "50%", right: "6px", transform: "translateY(-50%)", pointerEvents: "none", color: "#9AA0A8" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ marginTop: "20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                        Precio por día
                      </div>
                      <div role="group" aria-label="Precio por día" style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
                        {(v.chipsPrecio || []).map((p, __i) => (
                          <React.Fragment key={p && p.id != null ? p.id : __i}>
                            <button className="dc-focusvisible-1" onClick={p.ir} aria-pressed={p.activo} style={{ flex: "1", minWidth: "0", height: "44px", borderRadius: "10px", border: `1px solid ${p.borde}`, background: p.fondo, color: p.color, fontFamily: "inherit", fontSize: "12.5px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
                              {p.etiqueta}
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                      <div role="group" aria-label="Ver los resultados en lista o en mapa" style={{ marginTop: "20px", display: "flex", gap: "6px", padding: "4px", borderRadius: "11px", background: "#EAE9E6", border: "1px solid #E4E3E0" }}>
                        <button className="dc-focusvisible-1" onClick={v.verLista} aria-pressed={v.esLista} style={{ flex: "1", height: "44px", borderRadius: "8px", border: "none", background: v.fondoLista, color: v.colorLista, fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>
                          Lista
                        </button>
                        <button className="dc-focusvisible-1" onClick={v.verMapa} aria-pressed={v.esMapa} style={{ flex: "1", height: "44px", borderRadius: "8px", border: "none", background: v.fondoMapa, color: v.colorMapa, fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>
                          Mapa
                        </button>
                      </div>
                      {v.esMapa ? (<>
                        {v.mapaOk ? (<>
                          <div style={{ marginTop: "14px", borderRadius: "14px", overflow: "hidden", border: "1px solid #E4E3E0", background: "#0E1013" }}>
                            <div ref={v.mapaRef} style={{ width: "100%", height: v.altoMapa }} />
                          </div>
                          <div style={{ marginTop: "10px", fontSize: "12px", lineHeight: "1.5", color: "#6E747C" }}>
                            Los pines son las mismas motos de la lista. Toca uno para ver su ficha.
                          </div>
                        </>) : null}
                        {v.mapaFallido ? (<>
                          <div role="status" style={{ marginTop: "14px", padding: "22px 20px", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0", textAlign: "center" }}>
                            <div style={{ fontSize: "14px", fontWeight: "700" }}>
                              No pudimos cargar el mapa
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C" }}>
                              Podés seguir viendo las motos en la lista.
                            </div>
                            <button className="dc-focusvisible-1" onClick={v.verLista} style={{ marginTop: "14px", height: "44px", padding: "0 20px", borderRadius: "11px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                              Ver la lista
                            </button>
                          </div>
                        </>) : null}
                      </>) : null}
                      {v.esLista ? (<>
                        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                          {(v.resultados || []).map((b, __i) => (
                            <React.Fragment key={b && b.id != null ? b.id : __i}>
                              <div className="dc-focusvisible-1" onClick={b.abrir} onKeyDown={b.teclas} role="button" tabIndex={0} aria-label={b.etiquetaAbrir} style={{ display: "flex", gap: "13px", alignItems: "stretch", cursor: "pointer" }}>
                                <div style={{ position: "relative", flex: "none", width: "106px", height: "84px", borderRadius: "12px", overflow: "hidden", background: b.placa }}>
                                  {b.hayFoto ? (<>
                                    <div role="img" aria-label={b.titulo} style={{ position: "absolute", inset: "0", backgroundImage: b.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                                  </>) : null}
                                  {b.sinFoto ? (<>
                                    <div style={{ position: "absolute", bottom: "10px", left: "11px", right: "10px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {b.categoria}
                                    </div>
                                  </>) : null}
                                </div>
                                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                                    <div style={{ flex: "1", minWidth: "0", fontSize: "14.5px", fontWeight: "700", letterSpacing: "-0.015em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {b.titulo}
                                    </div>
                                    <div style={{ flex: "none", fontSize: "12.5px", fontWeight: "600" }}>
                                      ★ 
                                      {b.rating}
                                    </div>
                                  </div>
                                  <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {b.ubicacion}
                                  </div>
                                  <div style={{ marginTop: "7px", fontSize: "13.5px" }}>
                                    <span style={{ fontWeight: "700" }}>
                                      {b.precioDia}
                                    </span>
                                    <span style={{ color: "#6E747C" }}>
                                       / día · 
                                      {b.total}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                        {v.sinResultados ? (<>
                          <div role="status" style={{ marginTop: "16px", padding: "24px 18px", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0", textAlign: "center" }}>
                            <div style={{ fontSize: "14.5px", fontWeight: "700", textWrap: "pretty" }}>
                              No encontramos motos disponibles para esa ciudad y esas fechas.
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C" }}>
                              {v.textoSinResultados}
                            </div>
                            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                              <button className="dc-focusvisible-1" onClick={v.editarBusqueda} style={{ height: "46px", borderRadius: "11px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                                Cambiar ciudad o fechas
                              </button>
                              {v.filtrosActivos ? (<>
                                <button className="dc-focusvisible-1" onClick={v.limpiarFiltros} style={{ height: "46px", borderRadius: "11px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                                  Limpiar filtros
                                </button>
                              </>) : null}
                            </div>
                          </div>
                        </>) : null}
                      </>) : null}
                    </>) : null}
                    {v.buscando ? (<>
                      <div role="status" style={{ padding: "46px 0 30px", textAlign: "center" }}>
                        <div style={{ width: "44px", height: "44px", margin: "0 auto", borderRadius: "50%", border: "3px solid #EDECE9", borderTopColor: "#E10600", animation: "moto-giro 0.9s linear infinite" }} />
                        <div style={{ marginTop: "18px", fontSize: "15.5px", fontWeight: "700" }}>
                          Buscando motos
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", color: "#6E747C" }}>
                          {v.contextoTitulo}
                        </div>
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.esFavoritos ? (<>
                  <div data-screen-label="Favoritos" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Favoritos
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "13px", color: "#6E747C" }}>
                      {v.textoFavoritos}
                    </div>
                    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                      {(v.listingsFavoritos || []).map((b, __i) => (
                        <React.Fragment key={b && b.id != null ? b.id : __i}>
                          <div onClick={b.abrir} onKeyDown={b.teclas} role="button" tabIndex={0} aria-label={b.etiquetaAbrir} style={{ display: "flex", gap: "13px", alignItems: "stretch", cursor: "pointer" }}>
                            <div style={{ position: "relative", flex: "none", width: "106px", height: "84px", borderRadius: "12px", overflow: "hidden", background: b.placa }}>
                              {b.hayFoto ? (<>
                                <div role="img" aria-label={b.altFoto} style={{ position: "absolute", inset: "0", backgroundImage: b.cardCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                              </>) : null}
                              {b.sinFoto ? (<>
                                <div style={{ position: "absolute", bottom: "10px", left: "11px", right: "10px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {b.categoria}
                                </div>
                              </>) : null}
                            </div>
                            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                              <div style={{ fontSize: "14.5px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {b.titulo}
                              </div>
                              <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {b.ubicacion}
                              </div>
                              <div style={{ marginTop: "7px", fontSize: "13.5px" }}>
                                <span style={{ fontWeight: "700" }}>
                                  {b.precioDia}
                                </span>
                                <span style={{ color: "#6E747C" }}>
                                   / día
                                </span>
                              </div>
                            </div>
                            <button onClick={b.fav} aria-label={b.etiquetaFav} style={{ flex: "none", alignSelf: "center", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="#E10600" stroke="#E10600" strokeWidth="1.8">
                                <path d="M12 20.3l-1.4-1.3C5 15 2 12.3 2 8.9 2 6.1 4.1 4 6.9 4c1.6 0 3.1.7 4.1 1.9C12.1 4.7 13.6 4 15.2 4 18 4 20 6.1 20 8.9c0 3.4-3 6.1-8.6 11.1z" />
                              </svg>
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {v.favoritosVacio ? (<>
                      <div style={{ marginTop: "60px", textAlign: "center", padding: "0 12px" }}>
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#B9BEC5" strokeWidth="1.4" strokeLinecap="round">
                          <path d="M12 20.3l-1.4-1.3C5 15 2 12.3 2 8.9 2 6.1 4.1 4 6.9 4c1.6 0 3.1.7 4.1 1.9C12.1 4.7 13.6 4 15.2 4 18 4 20 6.1 20 8.9c0 3.4-3 6.1-8.6 11.1z" />
                        </svg>
                        <div style={{ marginTop: "16px", fontSize: "16px", fontWeight: "700" }}>
                          Guardá motos para encontrarlas fácilmente después.
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.55", color: "#6E747C", textWrap: "pretty" }}>
                          Tocá el corazón en cualquier moto y la tendrás acá para compararla antes de decidir.
                        </div>
                        <button onClick={v.irBuscar} style={{ marginTop: "20px", height: "46px", padding: "0 22px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "700", cursor: "pointer" }}>
                          Buscar moto
                        </button>
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.esReservas ? (<>
                  <div data-screen-label="Mis reservas" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Mis reservas
                    </div>
                    {v.hayViajes ? (<>
                      <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "16px" }}>
                        {(v.reservas || []).map((r, __i) => (
                          <React.Fragment key={r && r.id != null ? r.id : __i}>
                            <div className="dc-focusvisible-1" onClick={r.abrir} onKeyDown={r.teclas} role="button" tabIndex={0} aria-label={r.etiqueta} style={{ borderRadius: "18px", overflow: "hidden", background: "#fff", border: "1px solid #E4E3E0", boxShadow: "0 8px 24px rgba(14,16,19,0.05)", cursor: "pointer" }}>
                              <div style={{ position: "relative", height: "132px", background: r.placa }}>
                                {r.hayFoto ? (<>
                                  <div role="img" aria-label={r.titulo} style={{ position: "absolute", inset: "0", backgroundImage: r.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                                  <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.62) 0%, rgba(11,13,16,0.1) 55%, rgba(11,13,16,0.55) 100%)", pointerEvents: "none" }} />
                                </>) : null}
                                <div style={{ position: "absolute", top: "14px", left: "16px" }}>
                                  <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                                    {r.marca}
                                  </div>
                                  <div style={{ marginTop: "2px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.025em", color: "#fff" }}>
                                    {r.modelo}
                                  </div>
                                </div>
                                <div style={{ position: "absolute", bottom: "14px", left: "16px", display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 11px", borderRadius: "999px", background: "rgba(47,191,113,0.92)", color: "#06301C", fontSize: "11.5px", fontWeight: "700" }}>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                  </svg>
                                   Confirmada 
                                </div>
                              </div>
                              <div style={{ padding: "14px 16px 16px" }}>
                                <div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.015em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {r.entrega}
                                </div>
                                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #EDECE9", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                                  <div>
                                    <div style={{ fontSize: "14px", fontWeight: "700" }}>
                                      {r.fechas}
                                    </div>
                                    <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C" }}>
                                      {r.detalle}
                                    </div>
                                  </div>
                                  <div style={{ textAlign: "right" }}>
                                    <div style={{ fontSize: "15px", fontWeight: "700" }}>
                                      {r.total}
                                    </div>
                                    <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#9AA0A8" }}>
                                      {r.codigo}
                                    </div>
                                  </div>
                                </div>
                                <div style={{ marginTop: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                                  <div style={{ fontSize: "12.5px", color: "#6E747C", minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {r.propietario}
                                  </div>
                                  <button onClick={r.chat} style={{ flex: "none", height: "36px", padding: "0 14px", borderRadius: "10px", border: "1px solid #F0D6D5", background: "#FDF3F2", color: "#C00500", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                                    Mensaje
                                  </button>
                                </div>
                                <button className="dc-focusvisible-1" onClick={r.verComoAnfitrion} style={{ marginTop: "10px", width: "100%", height: "40px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: "#6E747C", fontFamily: "inherit", fontSize: "12.5px", fontWeight: "600", cursor: "pointer" }}>
                                  Ver esta reserva como 
                                  {r.anfitrion}
                                </button>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </>) : null}
                    {v.sinViajes ? (<>
                      <div style={{ marginTop: "60px", textAlign: "center", padding: "0 12px" }}>
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#B9BEC5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                          <path d="M8 3v4M16 3v4M3.5 10h17" />
                        </svg>
                        <div style={{ marginTop: "16px", fontSize: "16px", fontWeight: "700" }}>
                          Cuando reserves una moto aparecerá aquí.
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.55", color: "#6E747C", textWrap: "pretty" }}>
                          Tendrás la confirmación, el punto de recogida y el contacto del anfitrión.
                        </div>
                        <button onClick={v.irBuscar} style={{ marginTop: "20px", height: "46px", padding: "0 22px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "700", cursor: "pointer" }}>
                          Buscar moto
                        </button>
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.esPerfil ? (<>
                  <div data-screen-label="Perfil" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Perfil
                    </div>
                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "14px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0" }}>
                      <div style={{ flex: "none", width: "54px", height: "54px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "700" }}>
                        {v.inicialUsuario}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontSize: "16px", fontWeight: "700" }}>
                          {v.nombreUsuario}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {v.correoUsuario}
                        </div>
                        <div style={{ marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "5px", height: "24px", padding: "0 10px", borderRadius: "999px", background: "#E7F3EC", color: "#1E7A4B", fontSize: "11.5px", fontWeight: "700" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                           Carnet verificado 
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "18px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                      {(v.filasPerfil || []).map((r, __i) => (
                        <React.Fragment key={r && r.id != null ? r.id : __i}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "15px 16px", borderBottom: "1px solid #EDECE9" }}>
                            <span style={{ fontSize: "14px", color: "#4A4F57" }}>
                              {r.etiqueta}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "600", color: "#14171B" }}>
                              {r.valor}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <button onClick={v.aPropietario} style={{ marginTop: "18px", width: "100%", display: "flex", alignItems: "center", gap: "13px", padding: "16px", borderRadius: "16px", border: "1px solid #F0D6D5", background: "#FDF3F2", fontFamily: "inherit", cursor: "pointer", textAlign: "left" }}>
                      <div style={{ flex: "none", width: "38px", height: "38px", borderRadius: "10px", background: "#E10600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="6" cy="16.5" r="3.4" />
                          <circle cx="18" cy="16.5" r="3.4" />
                          <path d="M6 16.5l4.4-5.5h4.4l3.2 5.5M10.5 8.5h3.5" />
                        </svg>
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontSize: "14.5px", fontWeight: "700", color: "#14171B" }}>
                          Cambiar a modo propietario
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#4A4F57" }}>
                          Gestiona tu moto y las reservas que recibes
                        </div>
                      </div>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C00500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button onClick={v.onSalir} style={{ marginTop: "14px", width: "100%", height: "48px", borderRadius: "12px", border: "1px solid #E4E3E0", background: "#fff", color: "#6E747C", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                      Cerrar sesión
                    </button>
                    <div style={{ marginTop: "14px", fontSize: "12px", lineHeight: "1.5", color: "#9AA0A8", textAlign: "center" }}>
                      Motoapp · Mobile Master v0.0.7
                    </div>
                    <div style={{ marginTop: "6px", display: "flex", justifyContent: "center" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", height: "24px", padding: "0 11px", borderRadius: "999px", background: "#F1F0ED", color: "#6E747C", fontSize: "11px", fontWeight: "700", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                        Modo demostración
                      </span>
                    </div>
                  </div>
                </>) : null}
              </div>
              {v.fichaAbierta ? (<>
                <div data-screen-label="Ficha" style={{ position: "absolute", inset: "0", zIndex: "4", background: "#F4F4F3", display: "flex", flexDirection: "column" }}>
                  <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none" }}>
                    <div onTouchStart={v.f.tocarInicio} onTouchEnd={v.f.tocarFin} style={{ position: "relative", aspectRatio: "3 / 2", background: v.f.placa }}>
                      {v.f.hayFoto ? (<>
                        <div role="img" aria-label={v.f.altActual} style={{ position: "absolute", inset: "0", backgroundImage: v.f.heroCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.62) 0%, rgba(11,13,16,0.5) 8%, rgba(11,13,16,0) 30%, rgba(11,13,16,0) 72%, rgba(11,13,16,0.3) 100%)", pointerEvents: "none" }} />
                      </>) : null}
                      {v.f.hayGaleria ? (<>
                        <button className="dc-focusvisible-3" onClick={v.f.anterior} aria-label="Foto anterior" style={{ position: "absolute", top: "50%", left: "14px", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "rgba(14,16,19,0.55)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 5l-7 7 7 7" />
                          </svg>
                        </button>
                        <button className="dc-focusvisible-3" onClick={v.f.siguiente} aria-label="Foto siguiente" style={{ position: "absolute", top: "50%", right: "14px", transform: "translateY(-50%)", width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "rgba(14,16,19,0.55)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div aria-live="polite" style={{ position: "absolute", bottom: "30px", right: "16px", height: "24px", display: "inline-flex", alignItems: "center", padding: "0 10px", borderRadius: "999px", background: "rgba(14,16,19,0.5)", color: "#fff", fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.02em" }}>
                          {v.f.indicador}
                        </div>
                        <div role="group" aria-label="Elegir foto" style={{ position: "absolute", bottom: "22px", left: "8px", display: "flex", gap: "0" }}>
                          {(v.f.puntos || []).map((p, __i) => (
                            <React.Fragment key={p && p.id != null ? p.id : __i}>
                              <button className="dc-focusvisible-4" onClick={p.ir} aria-label={p.etiqueta} aria-pressed={p.activo} style={{ width: "44px", height: "44px", border: "none", background: "none", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <span style={{ display: "block", width: p.ancho, height: "6px", borderRadius: "3px", background: p.color, boxShadow: "0 1px 3px rgba(11,13,16,0.4)" }} />
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                      </>) : null}
                      <button className="dc-focusvisible-1" onClick={v.cerrarFicha} aria-label="Volver" style={{ position: "absolute", top: "54px", left: "14px", width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.94)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 5l-7 7 7 7" />
                        </svg>
                      </button>
                      <button className="dc-focusvisible-1" onClick={v.f.fav} aria-label={v.f.etiquetaFav} style={{ position: "absolute", top: "54px", right: "14px", width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.94)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={v.f.corazonRelleno} stroke={v.f.corazonBorde} strokeWidth="1.8" strokeLinecap="round">
                          <path d="M12 20.3l-1.4-1.3C5 15 2 12.3 2 8.9 2 6.1 4.1 4 6.9 4c1.6 0 3.1.7 4.1 1.9C12.1 4.7 13.6 4 15.2 4 18 4 20 6.1 20 8.9c0 3.4-3 6.1-8.6 11.1z" />
                        </svg>
                      </button>
                    </div>
                    <div style={{ position: "relative", marginTop: "-16px", borderRadius: "20px 20px 0 0", background: "#F4F4F3", padding: "20px 20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                        <div style={{ minWidth: "0" }}>
                          <div style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9AA0A8" }}>
                            {v.f.marca}
                          </div>
                          <div style={{ marginTop: "3px", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.035em", lineHeight: "1.08", textWrap: "pretty" }}>
                            {v.f.modelo}
                          </div>
                        </div>
                        <div style={{ flex: "none", marginTop: "4px", display: "inline-flex", alignItems: "center", height: "26px", padding: "0 11px", borderRadius: "999px", background: "#EDECE9", color: "#4A4F57", fontSize: "11.5px", fontWeight: "600" }}>
                          {v.f.categoria}
                        </div>
                      </div>
                      <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: "#6E747C" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6E747C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                          <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.4" />
                        </svg>
                        <span style={{ minWidth: "0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {v.f.ubicacion}
                        </span>
                      </div>
                      <div style={{ marginTop: "9px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "13.5px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: "#4A4F57" }}>
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", border: "1px solid rgba(20,23,27,0.18)", background: v.f.colorMuestra }} />
                          {v.f.color}
                        </span>
                        <span style={{ color: "#DAD8D4" }}>
                          ·
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8A83C">
                          <path d="M12 2l2.9 6.3 6.9.8-5 4.8 1.3 6.8L12 17.4 5.9 20.7 7.2 13.9l-5-4.8 6.9-.8z" />
                        </svg>
                        <span style={{ fontWeight: "700" }}>
                          {v.f.rating}
                        </span>
                        <span style={{ color: "#6E747C" }}>
                          · 
                          {v.f.resenas}
                        </span>
                      </div>
                      <div style={{ marginTop: "18px", display: "flex", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                        {(v.f.stats || []).map((st, __i) => (
                          <React.Fragment key={st && st.id != null ? st.id : __i}>
                            <div style={{ flex: "1", padding: "14px 10px", textAlign: "center", borderRight: "1px solid #EDECE9" }}>
                              <div style={{ fontSize: "13.5px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                                {st.valor}
                              </div>
                              <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#6E747C" }}>
                                {st.etiqueta}
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      {v.f.noDisponible ? (<>
                        <div style={{ marginTop: "18px", display: "flex", gap: "11px", padding: "14px 16px", borderRadius: "14px", background: "#FDF3F2", border: "1px solid #F0D6D5" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C00500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v4.5M12 16h.01" />
                          </svg>
                          <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#4A4F57" }}>
                            No disponible 
                            {v.f.fechasTexto}
                            . 
                            {v.f.textoNoDisponible}
                          </div>
                        </div>
                      </>) : null}
                      <div style={{ marginTop: "22px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Tu reserva
                      </div>
                      <div style={{ marginTop: "11px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "4px 16px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #EDECE9" }}>
                          <div>
                            <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                              Fechas
                            </div>
                            <div style={{ marginTop: "2px", fontSize: "14.5px", fontWeight: "700" }}>
                              {v.f.fechasTexto}
                            </div>
                          </div>
                          <button className="dc-focusvisible-1" onClick={v.abrirSelector} aria-label={v.f.etiquetaFechas} style={{ flex: "none", height: "44px", padding: "0 14px", borderRadius: "10px", border: "1px solid #DAD8D4", background: "#fff", color: "#C00500", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                            {v.f.textoBotonFechas}
                          </button>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #EDECE9" }}>
                          <div style={{ minWidth: "0" }}>
                            <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                              Recogida y devolución
                            </div>
                            <div style={{ marginTop: "2px", fontSize: "14.5px", fontWeight: "700" }}>
                              {v.f.zonaEntrega}
                            </div>
                            <div style={{ marginTop: "2px", fontSize: "11.5px", color: "#9AA0A8" }}>
                              {v.f.horarioEntrega}
                            </div>
                            <div style={{ marginTop: "4px", fontSize: "11.5px", color: "#9AA0A8" }}>
                              La dirección exacta se comparte al confirmar la reserva.
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", padding: "14px 0 0" }}>
                          <div style={{ fontSize: "13.5px", color: "#4A4F57" }}>
                            {v.f.desglose}
                          </div>
                          <div style={{ fontSize: "17px", fontWeight: "700" }}>
                            {v.f.total}
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "24px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Qué incluye
                      </div>
                      <div style={{ marginTop: "11px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "6px 16px" }}>
                        {(v.f.incluye || []).map((i, __i) => (
                          <React.Fragment key={i && i.id != null ? i.id : __i}>
                            <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 0", borderBottom: "1px solid #EDECE9" }}>
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              <span style={{ fontSize: "14px", color: "#24282E" }}>
                                {i.texto}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ marginTop: "24px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Qué necesitas para conducirla
                      </div>
                      <div style={{ marginTop: "11px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "6px 16px" }}>
                        {(v.f.requisitos || []).map((q, __i) => (
                          <React.Fragment key={q && q.id != null ? q.id : __i}>
                            <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 0", borderBottom: "1px solid #EDECE9" }}>
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4A4F57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                                <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
                                <path d="M7 10h4M7 14h8" />
                              </svg>
                              <span style={{ fontSize: "14px", color: "#24282E" }}>
                                {q.texto}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ marginTop: "24px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Propietario
                      </div>
                      <div style={{ marginTop: "11px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
                          <div style={{ flex: "none", width: "48px", height: "48px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "700" }}>
                            {v.f.propietarioInicial}
                          </div>
                          <div style={{ flex: "1", minWidth: "0" }}>
                            <div style={{ fontSize: "15px", fontWeight: "700" }}>
                              {v.f.propietario}
                            </div>
                            <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C" }}>
                              {v.f.propietarioDesde}
                            </div>
                          </div>
                          <div style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "5px", height: "26px", padding: "0 10px", borderRadius: "999px", background: "#E7F3EC", color: "#1E7A4B", fontSize: "11.5px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                             Verificado 
                          </div>
                        </div>
                        <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #EDECE9", display: "flex", alignItems: "center", gap: "16px", fontSize: "12.5px", color: "#4A4F57" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="#E8A83C">
                              <path d="M12 2l2.9 6.3 6.9.8-5 4.8 1.3 6.8L12 17.4 5.9 20.7 7.2 13.9l-5-4.8 6.9-.8z" />
                            </svg>
                            {v.f.propietarioRating}
                          </span>
                          <span>
                            {v.f.propietarioRespuesta}
                          </span>
                        </div>
                      </div>
                      <div style={{ marginTop: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "6px 16px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 0", borderBottom: "1px solid #EDECE9" }}>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                            <path d="M12 3l7 3v6c0 4.2-2.8 7.5-7 9-4.2-1.5-7-4.8-7-9V6z" />
                          </svg>
                          <span style={{ fontSize: "13.5px", color: "#24282E" }}>
                            Pago retenido hasta la entrega de llaves
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 0" }}>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                            <path d="M4 7h16M4 12h16M4 17h9" />
                          </svg>
                          <span style={{ fontSize: "13.5px", color: "#24282E" }}>
                            Precio cerrado, sin cargos ocultos
                          </span>
                        </div>
                      </div>
                      <button onClick={v.alternarDetalles} style={{ marginTop: "20px", width: "100%", height: "50px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                        {v.textoDetalles}
                      </button>
                      {v.verDetalles ? (<>
                        <div style={{ marginTop: "14px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "6px 16px 16px" }}>
                          {(v.f.detalles || []).map((dt, __i) => (
                            <React.Fragment key={dt && dt.id != null ? dt.id : __i}>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "12px 0", borderBottom: "1px solid #EDECE9" }}>
                                <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                  {dt.etiqueta}
                                </span>
                                <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                  {dt.valor}
                                </span>
                              </div>
                            </React.Fragment>
                          ))}
                          <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {(v.f.equipamiento || []).map((eq, __i) => (
                              <React.Fragment key={eq && eq.id != null ? eq.id : __i}>
                                <span style={{ height: "32px", display: "inline-flex", alignItems: "center", padding: "0 12px", borderRadius: "999px", background: "#F1F0ED", color: "#4A4F57", fontSize: "12.5px" }}>
                                  {eq.texto}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                          <div style={{ marginTop: "14px", fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8" }}>
                            Fianza, seguro y cobertura son información simulada para la demostración.
                          </div>
                        </div>
                      </>) : null}
                    </div>
                  </div>
                  <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "14px", padding: `13px 20px ${v.padHoja}`, background: "rgba(255,255,255,0.98)", borderTop: "1px solid #E9E8E5" }}>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "17px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        {v.f.totalBarra}
                      </div>
                      <div style={{ marginTop: "1px", fontSize: "12px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {v.f.resumenReserva}
                      </div>
                    </div>
                    {v.f.sinFechas ? (<>
                      <button className="dc-focusvisible-1" onClick={v.abrirSelector} aria-label="Elegir fechas para reservar esta moto" style={{ flex: "none", height: "52px", padding: "0 26px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                        Elegir fechas
                      </button>
                    </>) : null}
                    {v.f.disponible ? (<>
                      <button className="dc-focusvisible-1" onClick={v.abrirResumen} aria-label="Reservar esta moto" style={{ flex: "none", height: "52px", padding: "0 30px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                        Reservar
                      </button>
                    </>) : null}
                    {v.f.noDisponible ? (<>
                      <button className="dc-focusvisible-1" onClick={v.abrirSelector} aria-label="Cambiar las fechas de la reserva" style={{ flex: "none", height: "52px", padding: "0 22px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#F1F0ED", color: "#6E747C", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "700", cursor: "pointer" }}>
                        Cambiar fechas
                      </button>
                    </>) : null}
                  </div>
                  {v.selectorAbierto ? (<>
                    <div style={{ position: "absolute", inset: "0", zIndex: "9", background: "rgba(11,13,16,0.55)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }} onClick={v.cerrarSelector}>
                      <div onClick={v.parar} role="dialog" aria-label="Elegir fechas" style={{ borderRadius: "22px 22px 0 0", background: "#fff", padding: `12px 20px ${v.padHoja}` }}>
                        <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#DAD8D4", margin: "0 auto 14px" }} />
                        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                          <div style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                            Elegí fechas
                          </div>
                          <div aria-live="polite" style={{ fontSize: "12.5px", fontWeight: "600", color: v.colorRangoActual }}>
                            {v.rangoActual}
                          </div>
                        </div>
                        <div style={{ marginTop: "10px", padding: "14px 12px 12px", borderRadius: "14px", background: "#fff", border: "1px solid #E4E3E0" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                            <button className="dc-focusvisible-1" onClick={v.mesAnterior} aria-label="Mes anterior" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: v.colorMesAnterior, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 5l-7 7 7 7" />
                              </svg>
                            </button>
                            <div style={{ fontSize: "14.5px", fontWeight: "600", textTransform: "capitalize" }}>
                              {v.mesTitulo}
                            </div>
                            <button className="dc-focusvisible-1" onClick={v.mesSiguiente} aria-label="Mes siguiente" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: "#4A4F57", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                          <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                            {(v.diasSemana || []).map((w, __i) => (
                              <React.Fragment key={w && w.id != null ? w.id : __i}>
                                <div style={{ height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", color: "#9AA0A8" }}>
                                  {w.letra}
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                          <div role="group" aria-label="Elegí fecha de recogida y de devolución" style={{ marginTop: "2px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                            {(v.celdas || []).map((c, __i) => (
                              <React.Fragment key={c && c.id != null ? c.id : __i}>
                                <button className="dc-focusvisible-2" onClick={c.tocar} disabled={c.bloqueado} aria-label={c.etiqueta} aria-pressed={c.activo} style={{ height: "44px", border: "none", borderRadius: "10px", background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13.5px", fontWeight: c.peso, cursor: c.cursor }}>
                                  {c.dia}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                          <div aria-live="polite" style={{ marginTop: "8px", fontSize: "11.5px", color: "#9AA0A8" }}>
                            {v.pistaFechas}
                          </div>
                        </div>
                        <div aria-live="polite" style={{ marginTop: "10px", fontSize: "12.5px", lineHeight: "1.5", color: "#6E747C" }}>
                          {v.avisoSelector}
                        </div>
                        <button className="dc-focusvisible-1" onClick={v.aplicarFechas} disabled={v.aplicarBloqueado} style={{ marginTop: "14px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: v.colorAplicar, color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: v.cursorAplicar }}>
                          Aplicar fechas
                        </button>
                      </div>
                    </div>
                  </>) : null}
                  {v.resumenAbierto ? (<>
                    <div style={{ position: "absolute", inset: "0", zIndex: "9", background: "rgba(11,13,16,0.55)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }} onClick={v.cerrarResumen}>
                      <div onClick={v.parar} style={{ borderRadius: "22px 22px 0 0", background: "#fff", padding: `12px 20px ${v.padHoja}` }}>
                        <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#DAD8D4", margin: "0 auto 16px" }} />
                        {v.pasoResumen ? (<>
                          <div style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                            Resumen de tu reserva
                          </div>
                          <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{ position: "relative", flex: "none", width: "76px", height: "58px", borderRadius: "10px", overflow: "hidden", background: v.f.placa }}>
                              {v.f.hayFoto ? (<>
                                <div role="img" aria-label={v.f.titulo} style={{ position: "absolute", inset: "0", backgroundImage: v.f.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                              </>) : null}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "-0.015em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {v.f.titulo}
                              </div>
                              <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {v.f.metaResumen}
                              </div>
                            </div>
                          </div>
                          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                Zona de recogida
                              </span>
                              <span style={{ flex: "1", minWidth: "0", textAlign: "right", fontSize: "13.5px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {v.f.zonaEntrega}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                Fechas
                              </span>
                              <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                {v.f.fechas}
                                 · 
                                {v.f.diasTexto}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                Fianza (simulada)
                              </span>
                              <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                {v.f.deposito}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", paddingTop: "12px", borderTop: "1px solid #EDECE9" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                {v.f.desglose}
                              </span>
                              <span style={{ fontSize: "18px", fontWeight: "700" }}>
                                {v.f.total}
                              </span>
                            </div>
                          </div>
                          <button onClick={v.continuarPago} style={{ marginTop: "20px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                            Continuar al pago
                          </button>
                          <div style={{ marginTop: "12px", textAlign: "center", fontSize: "12px", color: "#9AA0A8" }}>
                            No se cobra nada hasta confirmar
                          </div>
                        </>) : null}
                        {v.pasoPago ? (<>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <button onClick={v.volverResumen} style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 5l-7 7 7 7" />
                              </svg>
                            </button>
                            <div style={{ fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                              Pago
                            </div>
                          </div>
                          <div style={{ marginTop: "16px", borderRadius: "14px", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 16px", background: "#FDF3F2", borderBottom: "1px solid #E4E3E0" }}>
                              <div style={{ flex: "none", width: "34px", height: "24px", borderRadius: "5px", background: "#0E1013" }} />
                              <div style={{ flex: "1", minWidth: "0" }}>
                                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                                  {v.metodoPago}
                                </div>
                                <div style={{ marginTop: "1px", fontSize: "12px", color: "#6E747C" }}>
                                  Caduca 09/28
                                </div>
                              </div>
                              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E10600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                                <circle cx="12" cy="12" r="9" />
                                <path d="M8 12l2.6 2.6L16 9.5" />
                              </svg>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 16px" }}>
                              <div style={{ flex: "none", width: "34px", height: "24px", borderRadius: "5px", background: "#EDECE9" }} />
                              <div style={{ flex: "1", minWidth: "0", fontSize: "14px", color: "#6E747C" }}>
                                Añadir otro método
                              </div>
                            </div>
                          </div>
                          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                {v.f.desglose}
                              </span>
                              <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                {v.f.total}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px" }}>
                              <span style={{ fontSize: "13.5px", color: "#6E747C" }}>
                                Fianza retenida (simulada)
                              </span>
                              <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                {v.f.deposito}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", paddingTop: "10px", borderTop: "1px solid #EDECE9" }}>
                              <span style={{ fontSize: "14.5px", fontWeight: "700" }}>
                                Total a pagar hoy
                              </span>
                              <span style={{ fontSize: "19px", fontWeight: "700" }}>
                                {v.f.total}
                              </span>
                            </div>
                          </div>
                          <div style={{ marginTop: "16px", display: "flex", gap: "11px", padding: "13px 15px", borderRadius: "12px", background: "#F1F0ED" }}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
                              <path d="M12 3l7 3v6c0 4.2-2.8 7.5-7 9-4.2-1.5-7-4.8-7-9V6z" />
                              <path d="M9 12l2.2 2.2L15.5 10" />
                            </svg>
                            <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#4A4F57" }}>
                              Pago simulado. El propietario recibe el importe después de la devolución de la moto.
                            </div>
                          </div>
                          <button onClick={v.pagar} style={{ marginTop: "18px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                            {v.textoPagar}
                          </button>
                        </>) : null}
                        {v.pasoProcesando ? (<>
                          <div style={{ padding: "34px 0 26px", textAlign: "center" }}>
                            <div style={{ width: "46px", height: "46px", margin: "0 auto", borderRadius: "50%", border: "3px solid #EDECE9", borderTopColor: "#E10600", animation: "moto-giro 0.9s linear infinite" }} />
                            <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "700" }}>
                              Procesando el pago
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "13px", color: "#6E747C" }}>
                              Confirmando disponibilidad con el propietario
                            </div>
                          </div>
                        </>) : null}
                        {v.pasoConfirmada ? (<>
                          <div style={{ padding: "12px 0 0", textAlign: "center" }}>
                            <div style={{ width: "60px", height: "60px", margin: "0 auto", borderRadius: "50%", background: "#E7F3EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </div>
                            <div style={{ marginTop: "18px", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                              Reserva confirmada
                            </div>
                            <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                              {v.f.titulo}
                               · 
                              {v.f.fechas}
                              <br />
                              La tienes en Mis reservas, con la conversación del anfitrión abierta.
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "11.5px", color: "#9AA0A8" }}>
                              Reserva simulada: no se ha cobrado ni enviado ningún correo.
                            </div>
                            <div style={{ marginTop: "16px", display: "inline-flex", alignItems: "center", height: "30px", padding: "0 14px", borderRadius: "999px", background: "#F1F0ED", fontSize: "12.5px", fontWeight: "700", color: "#4A4F57" }}>
                              Código 
                              {v.reservaCodigo}
                            </div>
                          </div>
                          <button className="dc-focusvisible-1" onClick={v.verMiReserva} aria-label="Ver mi reserva" style={{ marginTop: "22px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                            Ver mi reserva
                          </button>
                          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                            <button className="dc-focusvisible-1" onClick={v.escribirAlAnfitrion} aria-label="Escribir al anfitrión" style={{ flex: "1", minWidth: "0", height: "48px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                              Escribir al anfitrión
                            </button>
                            <button className="dc-focusvisible-1" onClick={v.volverAlInicio} aria-label="Volver al inicio" style={{ flex: "1", minWidth: "0", height: "48px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                              Volver al inicio
                            </button>
                          </div>
                          <button className="dc-focusvisible-1" onClick={v.verUltimaComoAnfitrion} style={{ marginTop: "10px", width: "100%", height: "44px", borderRadius: "12px", border: "1px solid #E9E8E5", background: "none", color: "#6E747C", fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                            Ver como 
                            {v.anfitrionUltima}
                          </button>
                          <div style={{ marginTop: "8px", textAlign: "center", fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8" }}>
                            El escenario demo cambia de contexto a la cuenta del anfitrión: es la misma reserva vista desde el otro lado.
                          </div>
                        </>) : null}
                        {v.pasoError ? (<>
                          <div style={{ padding: "8px 0 0", textAlign: "center" }}>
                            <div style={{ width: "56px", height: "56px", margin: "0 auto", borderRadius: "50%", background: "#FDF3F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C00500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7.5v5M12 16.2h.01" />
                              </svg>
                            </div>
                            <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                              No hemos podido confirmar
                            </div>
                            <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                              Alguien ha reservado 
                              {v.f.titulo}
                               para 
                              {v.f.fechas}
                               mientras terminabas el pago. No se ha cobrado nada.
                            </div>
                          </div>
                          <button className="dc-focusvisible-1" onClick={v.cambiarFechasDesdeError} style={{ marginTop: "20px", width: "100%", height: "54px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15.5px", fontWeight: "700", cursor: "pointer" }}>
                            Cambiar fechas
                          </button>
                          <button className="dc-focusvisible-1" onClick={v.volverAResultados} style={{ marginTop: "10px", width: "100%", height: "48px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                            Volver a los resultados
                          </button>
                        </>) : null}
                      </div>
                    </div>
                  </>) : null}
                </div>
              </>) : null}
              {v.detalleUsuarioAbierto ? (<>
                <div data-screen-label="Detalle de mi reserva" style={{ position: "absolute", inset: "0", zIndex: "6", background: "#F4F4F3", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "12px", padding: "46px 18px 14px", background: "#fff", borderBottom: "1px solid #E9E8E5" }}>
                    <button className="dc-focusvisible-1" onClick={v.cerrarDetalleUsuario} aria-label="Volver a Mis reservas" style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 5l-7 7 7 7" />
                      </svg>
                    </button>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Reserva 
                        {v.ru.codigo}
                      </div>
                      <div style={{ marginTop: "1px", fontSize: "12.5px", color: "#1E7A4B", fontWeight: "700" }}>
                        {v.ru.estado}
                      </div>
                    </div>
                  </div>
                  <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", padding: "18px 20px 26px" }}>
                    <div style={{ position: "relative", height: "150px", borderRadius: "16px", overflow: "hidden", background: v.ru.placa }}>
                      {v.ru.hayFoto ? (<>
                        <div role="img" aria-label={v.ru.titulo} style={{ position: "absolute", inset: "0", backgroundImage: v.ru.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.1) 40%, rgba(11,13,16,0.72) 100%)", pointerEvents: "none" }} />
                      </>) : null}
                      <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
                        <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                          {v.ru.marca}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.03em", color: "#fff" }}>
                          {v.ru.modelo}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "13px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "14px 16px" }}>
                      <div style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "700" }}>
                        {v.ru.anfitrionInicial}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700" }}>
                          {v.ru.anfitrion}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C" }}>
                          Anfitrión · verificado
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "14px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "4px 16px" }}>
                      {(v.ru.filas || []).map((fl, __i) => (
                        <React.Fragment key={fl && fl.id != null ? fl.id : __i}>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", padding: "13px 0", borderBottom: "1px solid #EDECE9" }}>
                            <span style={{ flex: "none", fontSize: "13px", color: "#6E747C" }}>
                              {fl.etiqueta}
                            </span>
                            <span style={{ flex: "1", minWidth: "0", textAlign: "right", fontSize: "13.5px", fontWeight: "600" }}>
                              {fl.valor}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "12px", fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8" }}>
                      Reserva simulada: no se ha cobrado ningún importe ni retenido ninguna fianza real.
                    </div>
                    <button className="dc-focusvisible-1" onClick={v.ru.abrirChat} aria-label="Escribir al anfitrión" style={{ marginTop: "16px", width: "100%", height: "52px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
                      Mensaje al anfitrión
                    </button>
                    <button className="dc-focusvisible-1" onClick={v.ru.abrirFicha} style={{ marginTop: "10px", width: "100%", height: "48px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                      Ver la ficha de la moto
                    </button>
                  </div>
                </div>
              </>) : null}
              {v.mostrarNav ? (<>
                <div style={{ flex: "none", display: "flex", alignItems: "stretch", height: "78px", padding: `0 6px ${v.padNav}`, background: "rgba(255,255,255,0.97)", borderTop: "1px solid #E9E8E5" }}>
                  {(v.nav || []).map((n, __i) => (
                    <React.Fragment key={n && n.id != null ? n.id : __i}>
                      <button onClick={n.ir} style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", paddingTop: "10px", border: "none", background: "none", color: n.color, fontFamily: "inherit", cursor: "pointer" }}>
                        <svg width="23" height="23" viewBox="0 0 24 24" fill={n.relleno} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d={n.d} />
                        </svg>
                        <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "-0.005em" }}>
                          {n.etiqueta}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </>) : null}
            </>) : null}
            {v.modoPropietario ? (<>
              <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none" }}>
                {v.propPanel ? (<>
                  <div data-screen-label="Anfitrión · Panel" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                      <div>
                        <div style={{ display: "inline-flex", alignItems: "center", height: "24px", padding: "0 10px", borderRadius: "999px", background: "#FDF3F2", color: "#C00500", fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                          Modo anfitrión · 
                          {v.nombreUsuario}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1.18" }}>
                          Hola, 
                          {v.nombreUsuario}
                        </div>
                        <div style={{ marginTop: "4px", fontSize: "13.5px", color: "#6E747C" }}>
                          {v.resumenAnfitrion}
                        </div>
                      </div>
                      <div style={{ flex: "none", width: "42px", height: "42px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700" }}>
                        {v.inicialUsuario}
                      </div>
                    </div>
                    {v.viendoComoOtro ? (<>
                      <div style={{ marginTop: "18px", display: "flex", gap: "11px", padding: "13px 15px", borderRadius: "14px", background: "#F1F0ED" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6E747C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 8h.01M11 12h1v4h1" />
                        </svg>
                        <div style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#4A4F57" }}>
                          {v.avisoContexto}
                        </div>
                      </div>
                    </>) : null}
                    {v.hayProxima ? (<>
                      <div style={{ marginTop: "22px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Próxima entrega
                      </div>
                      <div className="dc-focusvisible-1" onClick={v.proxima.abrir} onKeyDown={v.proxima.teclas} role="button" tabIndex={0} aria-label={v.proxima.etiqueta} style={{ marginTop: "12px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden", boxShadow: "0 8px 24px rgba(14,16,19,0.05)", cursor: "pointer" }}>
                        <div style={{ position: "relative", height: "124px", background: v.proxima.placa }}>
                          {v.proxima.hayFoto ? (<>
                            <div role="img" aria-label={v.proxima.modelo} style={{ position: "absolute", inset: "0", backgroundImage: v.proxima.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.62) 0%, rgba(11,13,16,0.1) 55%, rgba(11,13,16,0.55) 100%)", pointerEvents: "none" }} />
                          </>) : null}
                          <div style={{ position: "absolute", top: "14px", left: "16px" }}>
                            <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                              {v.proxima.marca}
                            </div>
                            <div style={{ marginTop: "2px", fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em", color: "#fff" }}>
                              {v.proxima.modelo}
                            </div>
                          </div>
                          <div style={{ position: "absolute", bottom: "12px", left: "16px", display: "inline-flex", alignItems: "center", gap: "6px", height: "26px", padding: "0 11px", borderRadius: "999px", background: "rgba(47,191,113,0.92)", color: "#06301C", fontSize: "11.5px", fontWeight: "700" }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                             Confirmada 
                          </div>
                        </div>
                        <div style={{ padding: "14px 16px 16px" }}>
                          <div style={{ fontSize: "13px", color: "#6E747C" }}>
                            {v.proxima.fechas}
                             · 
                            {v.proxima.detalle}
                          </div>
                          <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #EDECE9", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                            <div style={{ fontSize: "13.5px", color: "#4A4F57" }}>
                              Cliente · 
                              {v.proxima.cliente}
                            </div>
                            <div style={{ fontSize: "15px", fontWeight: "700" }}>
                              {v.proxima.total}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>) : null}
                    {v.sinProxima ? (<>
                      <div style={{ marginTop: "22px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "26px 20px", textAlign: "center" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700" }}>
                          Sin reservas por ahora
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                          Cuando alguien reserve una de tus motos aparecerá aquí.
                        </div>
                      </div>
                    </>) : null}
                    <div style={{ marginTop: "22px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {(v.indicadores || []).map((k, __i) => (
                        <React.Fragment key={k && k.id != null ? k.id : __i}>
                          <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "14px 16px" }}>
                            <div style={{ fontSize: "11.5px", color: "#6E747C" }}>
                              {k.etiqueta}
                            </div>
                            <div style={{ marginTop: "4px", fontSize: "19px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                              {k.valor}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <div style={{ marginTop: "26px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                      <div style={{ fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Mis motos
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#6E747C" }}>
                        {v.conteoMotos}
                      </div>
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      {(v.misMotos || []).map((m, __i) => (
                        <React.Fragment key={m && m.id != null ? m.id : __i}>
                          <div className="dc-focusvisible-1" onClick={m.abrir} onKeyDown={m.teclas} role="button" tabIndex={0} aria-label={m.etiqueta} style={{ display: "flex", gap: "13px", alignItems: "center", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "12px", cursor: "pointer" }}>
                            <div style={{ position: "relative", flex: "none", width: "86px", height: "68px", borderRadius: "11px", overflow: "hidden", background: m.placa }}>
                              {m.hayFoto ? (<>
                                <div role="img" aria-label={m.titulo} style={{ position: "absolute", inset: "0", backgroundImage: m.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                              </>) : null}
                              {m.sinFoto ? (<>
                                <div style={{ position: "absolute", bottom: "9px", left: "10px", right: "9px", fontSize: "11px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {m.modelo}
                                </div>
                              </>) : null}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ fontSize: "14.5px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {m.titulo}
                              </div>
                              <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {m.ubicacion}
                              </div>
                              <div style={{ marginTop: "7px", display: "flex", alignItems: "center", gap: "8px" }}>
                                <span style={{ fontSize: "13.5px", fontWeight: "700" }}>
                                  {m.precioDia}
                                </span>
                                <span style={{ fontSize: "12px", color: "#6E747C" }}>
                                  / día
                                </span>
                                <span style={{ display: "inline-flex", alignItems: "center", height: "20px", padding: "0 8px", borderRadius: "999px", background: "#E7F3EC", color: "#1E7A4B", fontSize: "10.5px", fontWeight: "700" }}>
                                  Publicada
                                </span>
                              </div>
                            </div>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9AA0A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                              <path d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {v.sinMotos ? (<>
                      <div style={{ marginTop: "12px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "24px 20px", textAlign: "center" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700" }}>
                          Todavía no tienes motos publicadas
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C" }}>
                          Publica tu primera moto para empezar a recibir reservas.
                        </div>
                        <button onClick={v.irPublicar} style={{ marginTop: "16px", height: "44px", padding: "0 20px", borderRadius: "11px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>
                          Publicar una moto
                        </button>
                      </div>
                    </>) : null}
                    {v.hayActividad ? (<>
                      <div style={{ marginTop: "26px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Actividad
                      </div>
                      <div style={{ marginTop: "12px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "4px 16px" }}>
                        {(v.actividad || []).map((a, __i) => (
                          <React.Fragment key={a && a.id != null ? a.id : __i}>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", padding: "13px 0", borderBottom: "1px solid #EDECE9" }}>
                              <span style={{ flex: "1", minWidth: "0", fontSize: "13px", color: "#4A4F57", textWrap: "pretty" }}>
                                {a.texto}
                              </span>
                              <span style={{ flex: "none", fontSize: "11.5px", color: "#9AA0A8" }}>
                                {a.cuando}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.propAgenda ? (<>
                  <div data-screen-label="Anfitrión · Agenda" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Agenda
                    </div>
                    <div style={{ marginTop: "5px", fontSize: "12.5px", lineHeight: "1.5", color: "#6E747C" }}>
                      {v.resumenAgenda}
                    </div>
                    {v.hayVariasPublicaciones ? (<>
                      <div data-scroll style={{ marginTop: "14px", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }}>
                        {(v.chipsAgenda || []).map((c, __i) => (
                          <React.Fragment key={c && c.id != null ? c.id : __i}>
                            <button className="dc-focusvisible-1" onClick={c.ir} style={{ flex: "none", height: "36px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${c.borde}`, background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                              {c.etiqueta}
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </>) : null}
                    <div style={{ marginTop: "14px", padding: "14px 12px 12px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <button className="dc-focusvisible-1" onClick={v.agendaMesAnterior} aria-label="Mes anterior" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: "#4A4F57", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 5l-7 7 7 7" />
                          </svg>
                        </button>
                        <div style={{ fontSize: "14.5px", fontWeight: "600", textTransform: "capitalize" }}>
                          {v.mesAgendaTitulo}
                        </div>
                        <button className="dc-focusvisible-1" onClick={v.agendaMesSiguiente} aria-label="Mes siguiente" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "10px", border: "1px solid #E4E3E0", background: "#fff", color: "#4A4F57", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                        {(v.diasSemana || []).map((w, __i) => (
                          <React.Fragment key={w && w.id != null ? w.id : __i}>
                            <div style={{ height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", color: "#9AA0A8" }}>
                              {w.letra}
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ marginTop: "2px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
                        {(v.celdasAgenda || []).map((c, __i) => (
                          <React.Fragment key={c && c.id != null ? c.id : __i}>
                            <button className="dc-focusvisible-1" onClick={c.tocar} disabled={c.bloqueado} aria-label={c.etiqueta} style={{ position: "relative", height: "42px", border: "none", borderRadius: "10px", background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13.5px", fontWeight: c.peso, cursor: c.cursor }}>
                              {c.dia}
                              <span style={{ position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)", width: "5px", height: "5px", borderRadius: "50%", background: c.punto }} />
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ marginTop: "8px", fontSize: "11.5px", color: "#9AA0A8" }}>
                        {v.pistaAgenda}
                      </div>
                    </div>
                    <div style={{ marginTop: "22px", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                      {v.tituloAgenda}
                    </div>
                    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "12px" }}>
                      {(v.reservasAgenda || []).map((r, __i) => (
                        <React.Fragment key={r && r.id != null ? r.id : __i}>
                          <div className="dc-focusvisible-1" onClick={r.abrir} onKeyDown={r.teclas} role="button" tabIndex={0} aria-label={r.etiqueta} style={{ display: "flex", gap: "13px", alignItems: "center", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "12px", cursor: "pointer" }}>
                            <div style={{ position: "relative", flex: "none", width: "78px", height: "64px", borderRadius: "11px", overflow: "hidden", background: r.placa }}>
                              {r.hayFoto ? (<>
                                <div role="img" aria-label={r.titulo} style={{ position: "absolute", inset: "0", backgroundImage: r.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                              </>) : null}
                              {r.sinFoto ? (<>
                                <div style={{ position: "absolute", bottom: "8px", left: "9px", right: "8px", fontSize: "11px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {r.modelo}
                                </div>
                              </>) : null}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                                <div style={{ flex: "1", minWidth: "0", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {r.cliente}
                                </div>
                                <div style={{ flex: "none", fontSize: "11.5px", fontWeight: "700", color: "#1E7A4B" }}>
                                  Confirmada
                                </div>
                              </div>
                              <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {r.titulo}
                              </div>
                              <div style={{ marginTop: "6px", fontSize: "12.5px", color: "#4A4F57" }}>
                                {r.fechas}
                                 · 
                                {r.detalle}
                              </div>
                              <div style={{ marginTop: "6px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                                <span style={{ fontSize: "11.5px", color: "#9AA0A8" }}>
                                  {r.codigo}
                                </span>
                                <span style={{ fontSize: "14px", fontWeight: "700" }}>
                                  {r.total}
                                </span>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {v.sinAgenda ? (<>
                      <div style={{ marginTop: "12px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "26px 20px", textAlign: "center" }}>
                        <div style={{ fontSize: "14.5px", fontWeight: "700" }}>
                          {v.tituloVacioAgenda}
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                          Cuando alguien reserve una de tus motos, sus fechas se marcarán en esta agenda.
                        </div>
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.propPublicar ? (<>
                  <div data-screen-label="Anfitrión · Publicar" style={{ padding: "6px 20px 26px" }}>
                    {v.pubHecha ? (<>
                      <div style={{ padding: "40px 0 0", textAlign: "center" }}>
                        <div style={{ width: "60px", height: "60px", margin: "0 auto", borderRadius: "50%", background: "#E7F3EC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1E7A4B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <div style={{ marginTop: "18px", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.025em" }}>
                          Moto publicada
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                          {v.pubHechaTexto}
                           ya está en tu panel y en el catálogo de Motoapp.
                        </div>
                      </div>
                      <button onClick={v.irPanel} style={{ marginTop: "24px", width: "100%", height: "52px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
                        Ver en el panel
                      </button>
                      <button onClick={v.publicarOtra} style={{ marginTop: "10px", width: "100%", height: "48px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                        Publicar otra moto
                      </button>
                    </>) : null}
                    {v.pubEnCurso ? (<>
                      <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                        Publicar una moto
                      </div>
                      <div style={{ marginTop: "5px", fontSize: "12.5px", color: "#6E747C" }}>
                        Paso 
                        {v.pasoPub}
                         de 4 · 
                        {v.tituloPaso}
                      </div>
                      <div style={{ marginTop: "12px", display: "flex", gap: "5px" }}>
                        {(v.pasosPub || []).map((p, __i) => (
                          <React.Fragment key={p && p.id != null ? p.id : __i}>
                            <div style={{ flex: "1", height: "4px", borderRadius: "2px", background: p.fondo }} />
                          </React.Fragment>
                        ))}
                      </div>
                      {v.paso1 ? (<>
                        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Marca
                            </div>
                            <input value={v.form.marca} onChange={v.form.onMarca} placeholder="Yamaha, Honda, BMW…" aria-label="Marca de la moto" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Modelo
                            </div>
                            <input value={v.form.modelo} onChange={v.form.onModelo} placeholder="MT-07, PCX 125…" aria-label="Modelo de la moto" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Categoría
                            </div>
                            <div data-scroll style={{ marginTop: "8px", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }}>
                              {(v.form.categorias || []).map((c, __i) => (
                                <React.Fragment key={c && c.id != null ? c.id : __i}>
                                  <button className="dc-focusvisible-1" onClick={c.ir} style={{ flex: "none", height: "36px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${c.borde}`, background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                                    {c.nombre}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <div style={{ flex: "1" }}>
                              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                                Año
                              </div>
                              <input value={v.form.anio} onChange={v.form.onAnio} type="number" inputMode="numeric" min="1980" max="2027" placeholder="2023" aria-label="Año" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                            </div>
                            <div style={{ flex: "1" }}>
                              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                                Cilindrada
                              </div>
                              <input value={v.form.cc} onChange={v.form.onCc} type="number" inputMode="numeric" min="49" max="2500" placeholder="689" aria-label="Cilindrada en centímetros cúbicos" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Transmisión
                            </div>
                            <div style={{ marginTop: "8px", display: "flex", gap: "6px" }}>
                              {(v.form.transmisiones || []).map((t, __i) => (
                                <React.Fragment key={t && t.id != null ? t.id : __i}>
                                  <button className="dc-focusvisible-1" onClick={t.ir} style={{ flex: "1", height: "42px", borderRadius: "11px", border: `1px solid ${t.borde}`, background: t.fondo, color: t.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                                    {t.nombre}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>) : null}
                      {v.paso2 ? (<>
                        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Ciudad
                            </div>
                            <div data-scroll style={{ marginTop: "8px", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }}>
                              {(v.form.ciudades || []).map((c, __i) => (
                                <React.Fragment key={c && c.id != null ? c.id : __i}>
                                  <button className="dc-focusvisible-1" onClick={c.ir} style={{ flex: "none", height: "36px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${c.borde}`, background: c.fondo, color: c.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                                    {c.nombre}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Zona de entrega
                            </div>
                            <div data-scroll style={{ marginTop: "8px", display: "flex", gap: "8px", overflowX: "auto", scrollbarWidth: "none" }}>
                              {(v.form.zonas || []).map((z, __i) => (
                                <React.Fragment key={z && z.id != null ? z.id : __i}>
                                  <button className="dc-focusvisible-1" onClick={z.ir} style={{ flex: "none", height: "36px", padding: "0 14px", borderRadius: "999px", border: `1px solid ${z.borde}`, background: z.fondo, color: z.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}>
                                    {z.nombre}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Punto de entrega
                            </div>
                            <input value={v.form.punto} onChange={v.form.onPunto} placeholder="Calle y número" aria-label="Punto de entrega" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                          </div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <div style={{ flex: "1" }}>
                              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                                Precio / día
                              </div>
                              <input value={v.form.precioDia} onChange={v.form.onPrecio} type="number" inputMode="numeric" min="1" placeholder="55" aria-label="Precio por día en euros" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                            </div>
                            <div style={{ flex: "1" }}>
                              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                                Fianza demo
                              </div>
                              <input value={v.form.deposito} onChange={v.form.onDeposito} type="number" inputMode="numeric" min="0" placeholder="300" aria-label="Fianza simulada en euros" style={{ marginTop: "8px", width: "100%", height: "48px", padding: "0 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", outline: "none", boxSizing: "border-box" }} />
                            </div>
                          </div>
                          <div style={{ fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8" }}>
                            España y euros en esta versión. La fianza es simulada.
                          </div>
                        </div>
                      </>) : null}
                      {v.paso3 ? (<>
                        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.07em", textTransform: "uppercase", color: "#6E747C" }}>
                              Descripción
                            </div>
                            <textarea value={v.form.descripcion} onChange={v.form.onDescripcion} rows="3" maxLength="220" placeholder="Cómo es la moto y para qué va bien" aria-label="Descripción" style={{ marginTop: "8px", width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "14.5px", lineHeight: "1.5", outline: "none", resize: "none", boxSizing: "border-box" }} />
                          </div>
                          <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "14px 16px" }}>
                            <div style={{ fontSize: "13px", fontWeight: "700" }}>
                              Requisitos del conductor
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "12.5px", lineHeight: "1.5", color: "#6E747C" }}>
                              {v.form.requisitos}
                            </div>
                          </div>
                          <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "14px 16px" }}>
                            <div style={{ fontSize: "13px", fontWeight: "700" }}>
                              Fotografía
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "12.5px", lineHeight: "1.5", color: "#6E747C" }}>
                              Sin foto, tu moto usa la placa gráfica de su categoría. Podrás añadir fotos cuando llegue el pack completo.
                            </div>
                            <div style={{ marginTop: "12px", height: "110px", borderRadius: "12px", background: v.form.placa }} />
                          </div>
                        </div>
                      </>) : null}
                      {v.paso4 ? (<>
                        <div style={{ marginTop: "20px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                          <div style={{ position: "relative", height: "170px", background: v.form.placa }}>
                            <div style={{ position: "absolute", bottom: "18px", left: "18px" }}>
                              <div style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                                {v.form.marcaVista}
                              </div>
                              <div style={{ marginTop: "3px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em", color: "#fff" }}>
                                {v.form.modeloVista}
                              </div>
                            </div>
                          </div>
                          <div style={{ padding: "16px" }}>
                            <div style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "-0.015em" }}>
                              {v.form.tituloVista}
                            </div>
                            <div style={{ marginTop: "4px", fontSize: "13px", color: "#6E747C" }}>
                              {v.form.ubicacionVista}
                            </div>
                            <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #EDECE9", display: "flex", flexDirection: "column", gap: "11px" }}>
                              {(v.form.filasVista || []).map((f, __i) => (
                                <React.Fragment key={f && f.id != null ? f.id : __i}>
                                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                                    <span style={{ fontSize: "13px", color: "#6E747C" }}>
                                      {f.etiqueta}
                                    </span>
                                    <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                                      {f.valor}
                                    </span>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: "12px", fontSize: "11.5px", lineHeight: "1.5", color: "#9AA0A8" }}>
                          Publicación de demostración: entra en el mismo catálogo que usa el resto de la aplicación y desaparece al reiniciar el ensayo.
                        </div>
                      </>) : null}
                      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                        {v.hayAtras ? (<>
                          <button className="dc-focusvisible-1" onClick={v.pasoAtras} style={{ flex: "none", width: "110px", height: "52px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#fff", color: "#4A4F57", fontFamily: "inherit", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>
                            Atrás
                          </button>
                        </>) : null}
                        <button className="dc-focusvisible-1" onClick={v.pasoSiguiente} disabled={v.pasoBloqueado} style={{ flex: "1", height: "52px", borderRadius: "12px", border: "none", background: v.colorSiguiente, color: "#fff", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: v.cursorSiguiente }}>
                          {v.textoSiguiente}
                        </button>
                      </div>
                      {v.pasoBloqueado ? (<>
                        <div style={{ marginTop: "10px", fontSize: "12px", color: "#9AA0A8", textAlign: "center" }}>
                          {v.faltaTexto}
                        </div>
                      </>) : null}
                    </>) : null}
                  </div>
                </>) : null}
                {v.propMensajes ? (<>
                  <div data-screen-label="Anfitrión · Mensajes" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Mensajes
                    </div>
                    {v.hayHilos ? (<>
                      <div style={{ marginTop: "18px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                        {(v.hilos || []).map((c, __i) => (
                          <React.Fragment key={c && c.id != null ? c.id : __i}>
                            <div className="dc-focusvisible-1" onClick={c.abrir} onKeyDown={c.teclas} role="button" tabIndex={0} aria-label={c.etiqueta} style={{ display: "flex", gap: "12px", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid #EDECE9", cursor: "pointer" }}>
                              <div style={{ flex: "none", width: "42px", height: "42px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700" }}>
                                {c.inicial}
                              </div>
                              <div style={{ flex: "1", minWidth: "0" }}>
                                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                                  <span style={{ flex: "1", minWidth: "0", fontSize: "14.5px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {c.conQuien}
                                  </span>
                                  <span style={{ flex: "none", fontSize: "11.5px", color: "#9AA0A8" }}>
                                    {c.hora}
                                  </span>
                                </div>
                                <div style={{ marginTop: "2px", fontSize: "12px", color: "#9AA0A8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {c.contexto}
                                </div>
                                <div style={{ marginTop: "3px", fontSize: "12.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {c.ultimo}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </>) : null}
                    {v.sinHilos ? (<>
                      <div style={{ marginTop: "60px", textAlign: "center", padding: "0 12px" }}>
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#B9BEC5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 5h16v11H9l-5 4z" />
                        </svg>
                        <div style={{ marginTop: "16px", fontSize: "16px", fontWeight: "700" }}>
                          Sin conversaciones
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.55", color: "#6E747C", textWrap: "pretty" }}>
                          Las conversaciones relacionadas con tus reservas aparecerán aquí.
                        </div>
                      </div>
                    </>) : null}
                  </div>
                </>) : null}
                {v.propPerfil ? (<>
                  <div data-screen-label="Anfitrión · Perfil" style={{ padding: "6px 20px 26px" }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.03em" }}>
                      Perfil de anfitrión
                    </div>
                    <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "14px", padding: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0" }}>
                      <div style={{ flex: "none", width: "54px", height: "54px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "700" }}>
                        {v.inicialUsuario}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontSize: "16px", fontWeight: "700" }}>
                          {v.cuentaActivaNombre}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C" }}>
                          {v.perfilDesde}
                        </div>
                        <div style={{ marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "5px", height: "24px", padding: "0 10px", borderRadius: "999px", background: "#E7F3EC", color: "#1E7A4B", fontSize: "11.5px", fontWeight: "700" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                           Anfitrión verificado 
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "18px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                      {(v.filasAnfitrion || []).map((r, __i) => (
                        <React.Fragment key={r && r.id != null ? r.id : __i}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "15px 16px", borderBottom: "1px solid #EDECE9" }}>
                            <span style={{ fontSize: "14px", color: "#4A4F57" }}>
                              {r.etiqueta}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "600", color: "#14171B" }}>
                              {r.valor}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <button className="dc-focusvisible-1" onClick={v.aUsuario} style={{ marginTop: "18px", width: "100%", height: "52px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
                      {v.textoSalirAnfitrion}
                    </button>
                    <div style={{ marginTop: "12px", fontSize: "12px", lineHeight: "1.5", color: "#9AA0A8", textAlign: "center" }}>
                      Usuario y anfitrión son dos vistas sobre las mismas reservas. Modo demostración.
                    </div>
                  </div>
                </>) : null}
              </div>
              {v.detalleAbierto ? (<>
                <div data-screen-label="Propietario · Detalle reserva" style={{ position: "absolute", inset: "0", zIndex: "6", background: "#F4F4F3", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "12px", padding: "46px 18px 14px", background: "#fff", borderBottom: "1px solid #E9E8E5" }}>
                    <button onClick={v.cerrarDetalle} style={{ flex: "none", width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 5l-7 7 7 7" />
                      </svg>
                    </button>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                        Reserva 
                        {v.rp.codigo}
                      </div>
                      <div style={{ marginTop: "1px", fontSize: "12.5px", color: "#1E7A4B", fontWeight: "700" }}>
                        Confirmada
                      </div>
                    </div>
                  </div>
                  <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", padding: "18px 20px 26px" }}>
                    <div style={{ position: "relative", height: "140px", borderRadius: "16px", overflow: "hidden", background: v.rp.placa }}>
                      {v.rp.hayFoto ? (<>
                        <div role="img" aria-label={v.rp.modelo} style={{ position: "absolute", inset: "0", backgroundImage: v.rp.fotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.1) 40%, rgba(11,13,16,0.72) 100%)", pointerEvents: "none" }} />
                      </>) : null}
                      <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
                        <div style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                          {v.rp.marca}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.03em", color: "#fff" }}>
                          {v.rp.modelo}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "13px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "14px 16px" }}>
                      <div style={{ flex: "none", width: "44px", height: "44px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", fontWeight: "700" }}>
                        {v.rp.clienteInicial}
                      </div>
                      <div style={{ flex: "1", minWidth: "0" }}>
                        <div style={{ fontSize: "15px", fontWeight: "700" }}>
                          {v.rp.cliente}
                        </div>
                        <div style={{ marginTop: "2px", fontSize: "12.5px", color: "#6E747C" }}>
                          Cliente · carnet verificado
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "14px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "4px 16px" }}>
                      {(v.rp.filas || []).map((fl, __i) => (
                        <React.Fragment key={fl && fl.id != null ? fl.id : __i}>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "14px", padding: "13px 0", borderBottom: "1px solid #EDECE9" }}>
                            <span style={{ flex: "none", fontSize: "13px", color: "#6E747C" }}>
                              {fl.etiqueta}
                            </span>
                            <span style={{ flex: "1", minWidth: "0", textAlign: "right", fontSize: "13.5px", fontWeight: "600" }}>
                              {fl.valor}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    <button onClick={v.rp.abrirChat} style={{ marginTop: "18px", width: "100%", height: "52px", borderRadius: "12px", border: "none", background: "#E10600", color: "#fff", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
                      Mensaje al cliente
                    </button>
                  </div>
                </div>
              </>) : null}
              {v.pubAbierta ? (<>
                <div data-screen-label="Anfitrión · Publicación" style={{ position: "absolute", inset: "0", zIndex: "6", background: "#F4F4F3", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "12px", padding: "46px 18px 14px", background: "#fff", borderBottom: "1px solid #E9E8E5" }}>
                    <button className="dc-focusvisible-1" onClick={v.cerrarPub} aria-label="Volver" style={{ flex: "none", width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 5l-7 7 7 7" />
                      </svg>
                    </button>
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "-0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {v.pubTitulo}
                      </div>
                      <div style={{ marginTop: "1px", fontSize: "12.5px", color: "#1E7A4B", fontWeight: "700" }}>
                        Publicada
                      </div>
                    </div>
                  </div>
                  <div data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", padding: "18px 20px 26px" }}>
                    <div style={{ borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", overflow: "hidden" }}>
                      <div style={{ position: "relative", height: "170px", background: v.pubPlaca }}>
                        {v.pubHayFoto ? (<>
                          <div role="img" aria-label={v.pubTitulo} style={{ position: "absolute", inset: "0", backgroundImage: v.pubFotoCss, backgroundSize: "cover", backgroundPosition: "center" }} />
                          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(11,13,16,0.1) 40%, rgba(11,13,16,0.72) 100%)", pointerEvents: "none" }} />
                        </>) : null}
                        <div style={{ position: "absolute", bottom: "18px", left: "18px" }}>
                          <div style={{ fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                            {v.pubMarca}
                          </div>
                          <div style={{ marginTop: "3px", fontSize: "26px", fontWeight: "700", letterSpacing: "-0.03em", color: "#fff" }}>
                            {v.pubModelo}
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: "16px" }}>
                        <div style={{ fontSize: "13px", color: "#6E747C" }}>
                          {v.pubUbicacion}
                        </div>
                        <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #EDECE9", display: "flex", flexDirection: "column", gap: "11px" }}>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "#6E747C" }}>
                              Cilindrada
                            </span>
                            <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                              {v.pubCc}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "#6E747C" }}>
                              Transmisión
                            </span>
                            <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                              {v.pubTransmision}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "#6E747C" }}>
                              Categoría
                            </span>
                            <span style={{ fontSize: "13.5px", fontWeight: "600" }}>
                              {v.pubCategoria}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "13px", color: "#6E747C" }}>
                              Precio
                            </span>
                            <span style={{ fontSize: "13.5px", fontWeight: "700" }}>
                              {v.pubPrecio}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "16px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", padding: "16px" }}>
                      <div style={{ fontSize: "14px", fontWeight: "700" }}>
                        Reservas de esta moto
                      </div>
                      <div style={{ marginTop: "6px", fontSize: "13px", color: "#6E747C" }}>
                        {v.pubReservasTexto}
                      </div>
                      <button className="dc-focusvisible-1" onClick={v.irAgenda} style={{ marginTop: "14px", width: "100%", height: "44px", borderRadius: "11px", border: "1px solid #DAD8D4", background: "#fff", color: "#14171B", fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>
                        Ver en la agenda
                      </button>
                    </div>
                  </div>
                </div>
              </>) : null}
              <div style={{ flex: "none", display: "flex", alignItems: "stretch", height: "78px", padding: `0 6px ${v.padNav}`, background: "rgba(255,255,255,0.97)", borderTop: "1px solid #E9E8E5" }}>
                {(v.navProp || []).map((n, __i) => (
                  <React.Fragment key={n && n.id != null ? n.id : __i}>
                    <button className="dc-focusvisible-1" onClick={n.ir} aria-label={n.etiqueta} style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", paddingTop: "10px", border: "none", background: "none", color: n.color, fontFamily: "inherit", cursor: "pointer" }}>
                      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d={n.d} />
                      </svg>
                      <span style={{ fontSize: "10.5px", fontWeight: "600" }}>
                        {n.etiqueta}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </>) : null}
            {v.chatAbierto ? (<>
              <div data-screen-label="Conversación" style={{ position: "absolute", inset: "0", zIndex: "8", background: "#F4F4F3", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "12px", padding: "46px 18px 13px", background: "#fff", borderBottom: "1px solid #E9E8E5" }}>
                  <button onClick={v.cerrarChat} style={{ flex: "none", width: "38px", height: "38px", borderRadius: "50%", border: "1px solid #E4E3E0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14171B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 5l-7 7 7 7" />
                    </svg>
                  </button>
                  <div style={{ flex: "none", width: "38px", height: "38px", borderRadius: "50%", background: "#0E1013", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "700" }}>
                    {v.chatInicial}
                  </div>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ fontSize: "15px", fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {v.chatTitulo}
                    </div>
                    <div style={{ marginTop: "1px", fontSize: "11.5px", color: "#6E747C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {v.chatRol}
                       · 
                      {v.chatSubtitulo}
                    </div>
                  </div>
                </div>
                <div ref={v.chatRef} data-scroll style={{ flex: "1", minHeight: "0", overflowY: "auto", scrollbarWidth: "none", padding: "18px 18px 8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {v.chatVacio ? (<>
                    <div style={{ margin: "26px 8px 0", padding: "20px 18px", borderRadius: "16px", background: "#fff", border: "1px solid #E4E3E0", textAlign: "center" }}>
                      <div style={{ fontSize: "14.5px", fontWeight: "700", textWrap: "pretty" }}>
                        Todavía no hay mensajes.
                      </div>
                      <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.5", color: "#6E747C", textWrap: "pretty" }}>
                        {v.textoChatVacio}
                      </div>
                    </div>
                  </>) : null}
                  {(v.chatMensajes || []).map((m, __i) => (
                    <React.Fragment key={m && m.id != null ? m.id : __i}>
                      <div style={{ display: "flex", justifyContent: m.alineado }}>
                        <div style={{ maxWidth: "78%", padding: "11px 14px", borderRadius: m.radio, background: m.fondo, border: `1px solid ${m.borde}`, color: m.color }}>
                          <div style={{ fontSize: "13.5px", lineHeight: "1.45", textWrap: "pretty" }}>
                            {m.texto}
                          </div>
                          <div style={{ marginTop: "4px", fontSize: "10.5px", color: m.horaColor, textAlign: "right" }}>
                            {m.hora}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div aria-live="polite" style={{ flex: "none", padding: "0 18px", height: "16px", fontSize: "11px", color: "#9AA0A8", textAlign: "right" }}>
                  {v.avisoEnvio}
                </div>
                <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "10px", padding: `10px 16px ${v.padCompositor}`, background: "#fff", borderTop: "1px solid #E9E8E5" }}>
                  <input ref={v.inputRef} value={v.borrador} onChange={v.onBorrador} onKeyDown={v.teclaChat} enterKeyHint="send" aria-label="Escribí un mensaje" placeholder="Escribí un mensaje" style={{ flex: "1", minWidth: "0", height: "48px", padding: "0 15px", borderRadius: "12px", border: "1px solid #DAD8D4", background: "#F8F7F5", color: "#14171B", fontFamily: "inherit", fontSize: "15px", outline: "none", boxSizing: "border-box" }} />
                  <button className="dc-focusvisible-1" onClick={v.enviar} disabled={v.envioBloqueado} aria-label="Enviar mensaje" style={{ flex: "none", width: "48px", height: "48px", borderRadius: "12px", border: "none", background: v.colorEnviar, display: "flex", alignItems: "center", justifyContent: "center", cursor: v.cursorEnviar }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h15M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </>) : null}
            <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "134px", height: "5px", borderRadius: "3px", background: v.colorBarra, zIndex: "10", pointerEvents: "none" }} />
            {v.__modulos || null}
          </div>
        </div>
      </div>
    </>
  );
}
