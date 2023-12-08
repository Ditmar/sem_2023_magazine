import volumenes from "@/data/Volumenes";

const Volume = ({ params }: any) => {
  // Verificar si params está definido y tiene la propiedad dateYear
  if (!params || !params.dateYear) {
    // Mostrar todos los datos de volumenes
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {volumenes.map((volume) => (
          <div key={volume.id} className="flex flex-col border-2 border-gray-300 rounded-lg p-4 m-4">
            <h3 className="text-xl font-bold">
              {volume.numberVol} - {volume.dateYear}
            </h3>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
              eum corrupti molestias sed asperiores sequi incidunt vitae eius.
              Labore dolore ipsam at quam, quod praesentium excepturi
              necessitatibus fuga minus fugit.
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Si params.dateYear está definido, filtrar y mostrar datos específicos
  return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {volumenes
          .filter((volume) => volume.dateYear === params.dateYear)
          .map((volume) => (
            <div key={volume.id} className="flex flex-col border-2 border-gray-300 rounded-lg p-4 m-4">
              <h3 className="text-xl font-bold">
                {volume.numberVol} - {volume.dateYear}
              </h3>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
                eum corrupti molestias sed asperiores sequi incidunt vitae eius.
                Labore dolore ipsam at quam, quod praesentium excepturi
                necessitatibus fuga minus fugit.
              </span>
            </div>
          ))}
      </div>
  );
};

export default Volume;
