'use client'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VolumenCard: React.FC = ({ id, numberVol, dateYear, image }: any) => {
  
    const router = useRouter()
    const onVolume = () => {
        router.push(`/volumes/${id}`)
    }

    return (
        <Card 
            onClick={ onVolume }
            className="shadow-sm max-w-sm"
        >
            <CardBody className="pt-0 ">
                <Image loader={() => image} src={image} width={500} height={500} alt='imgVolumenes'/>
                {/* <Image src={image} alt="imagen de footer" width={100} height={100} /> */}
                              
                <Typography className="text-[26px] font-mono text-center text-black font-lato" >
                    {dateYear}
                </Typography>
                <Typography className='text-[36px] font-mono text-center text-[#01461D] font-roboto font-bold' >
                    {numberVol }
                </Typography>
            </CardBody>            
        </Card>
    );
}
export default VolumenCard;