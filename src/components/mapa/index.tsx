import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

const containerStyle = {
  width: "60%",
  height: "400px",
};

const center = {
  lat: -16.694511,
  lng: -49.103188,
};

// ✅ Declarar libraries fora do componente
const libraries: (
  | "places"
  | "marker"
  | "geometry"
  | "drawing"
  | "visualization"
)[] = ["marker"];

export function Mapa() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCjM309b-u7n-XXNPPpNtO_VB6WSIjmfb4",
    libraries,
  });

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    // ✅ Cria o marcador
    new google.maps.Marker({
      position: center,
      map,
      title: "Escritório – Senador Canedo, GO",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-7 pb-10 p-3 bg-[#DBDBDB]">
      <div className="flex flex-col">
        <h3 className="text-center text-2xl font-medium">Endereço</h3>
        <span className="text-center mt-5 text-xl">
          Rua 10, Quadra 02, Lote 05-B, Sala 01, Galeria 10, Conjunto Uirapuru,
          Senador Canedo - GO, CEP: 75261-211
        </span>
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
        />
      )}
    </div>
  );
}
