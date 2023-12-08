
import volumenes from "@/data/Volumenes"
import Volume from "./[dateYear]/page"

const Volumes = async () => { 
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6">
            <h6 className="text-xl font-bold">
                VOLUMENES
            </h6>
            <div>          
                {<Volume/>}
            </div>
        
      </main>
    )
}
export default Volumes