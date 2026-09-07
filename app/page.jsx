'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AccesosModulos, CapaModulos } from '@/components/modulos/Modulos';

// El simulador lee window en el arranque (medida de viewport, Leaflet), asi
// que se monta solo en el cliente.
const Simulador = dynamic(() => import('@/components/simulador/Simulador'), {
  ssr: false,
  loading: () => <div style={{ position: 'fixed', inset: 0, background: '#0B0D10' }} />,
});

export default function Pagina() {
  // Que modulo de marketplace esta abierto. Vive aca y no dentro del
  // simulador porque ese componente es generado desde legacy/index.html y no
  // se edita a mano: los modulos entran por sus dos ranuras.
  const [modulo, setModulo] = useState(null);

  return (
    <Simulador
      vista="Presentación"
      pantallaInicial="Login"
      mostrarTotales
      __inicioExtra={<AccesosModulos abrir={setModulo} />}
      __modulos={<CapaModulos modulo={modulo} cerrar={() => setModulo(null)} />}
    />
  );
}
