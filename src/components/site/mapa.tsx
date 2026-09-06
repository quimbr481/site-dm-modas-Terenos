import { Suspense, lazy, useEffect, useState } from "react";

const MapaLeaflet = lazy(() => import("./mapa-leaflet"));

function Skeleton() {
  return (
    <div className="grid h-full w-full place-items-center bg-muted">
      <span className="eyebrow">Carregando mapa…</span>
    </div>
  );
}

export function MapaInterativo() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="h-[62vh] min-h-[360px] w-full overflow-hidden rounded-lg border border-border shadow-soft sm:h-[520px]">
      {mounted ? (
        <Suspense fallback={<Skeleton />}>
          <MapaLeaflet />
        </Suspense>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
