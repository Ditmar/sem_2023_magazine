import ItemVolumes from "@/components/ItemVolumes/ItemVolumes";
import ItemVolumesFilter from "@/components/ItemVolumes/ItemVolumesFilter";

const Volume = ({ params }: any) => {
  // Verificar si params está definido y tiene la propiedad dateYear
  if (!params || !params.dateYear) {
    // Mostrar todos los datos de volumenes
    return (
      <ItemVolumes/>
    );
  }
  // Si params.dateYear está definido, filtrar y mostrar datos específicos
  return (
      <ItemVolumesFilter params={params.dateYear} />
  );
};

export default Volume;
