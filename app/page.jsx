'use client';

import dynamic from 'next/dynamic';

// El simulador lee window en el arranque (medida de viewport, Leaflet), asi
// que se monta solo en el cliente.
const Simulador = dynamic(() => import('@/components/simulador/Simulador'), {
  ssr: false,
  loading: () => <div style={{ position: 'fixed', inset: 0, background: '#0B0D10' }} />,
});

export default function Pagina() {
  return <Simulador vista="Presentación" pantallaInicial="Login" mostrarTotales />;
}
