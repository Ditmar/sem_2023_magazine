//se elimino la importancion por que no era necesaria ya que no la usamos en esta seccion.
import Volume from './[dateYear]/page'

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