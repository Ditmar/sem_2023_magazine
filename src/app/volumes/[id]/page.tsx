
import volumenes from "@/data/volumenes"

const Volume = async ({params}: any) => { 
    
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <div className="flex flex-col">
                {volumenes
                    .filter((volume) => volume.id === params.id)
                    .map((volume) => (
                    <div key={volume.id} className="flex flex-col border-2 border-gray-300 rounded-lg p-4 m-4">
                        <h3 className="text-xl font-bold">{volume.numberVol} - {volume.dateYear}</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, eum corrupti molestias sed asperiores sequi incidunt vitae eius. Labore dolore ipsam at quam, quod praesentium excepturi necessitatibus fuga minus fugit.</span>                        
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Volume
