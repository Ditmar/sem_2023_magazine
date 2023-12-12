
import volumenes from '@/data/volumenes'
import VolumenCard from '@/components/volumenes';


const Volumes = async () => { 
    
    return (
        <main className="flex flex-col items-center justify-center mt-9" color="red">
            <h6 className='text-[60px] text-[#01461D] font-montserrat font-bold' >
                VOLUMENES
            </h6>
            <div className="w-4/5 my-6 grid sm:gap-6 xl:gap-16 sm:grid-cols-2 xl:grid-cols-3 space-12">          
                {volumenes
                    .sort( (a, b) => a.numberVol.localeCompare(b.numberVol))
                    .map((props) => (
                    <VolumenCard               
                    key={props.id}
                    { ...props }               
                    />            
                ))}
            </div>
        
      </main>
    )
}
export default Volumes
