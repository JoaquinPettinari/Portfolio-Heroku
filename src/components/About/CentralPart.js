import { makeStyles } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import MyPhoto1 from '../../assets/me1.jpeg'
import MyPhoto2 from '../../assets/me2.png'
import MyPhoto3 from '../../assets/me3.png'

const useStyles = makeStyles(({theme}) => ({
    photos:{        
        height: '300px',        
    }
}))

function CentralPart(){
    const { photos } = useStyles()
    
    return(
        <Carousel autoPlay showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop>
            <div>
                <img src={MyPhoto1} alt="Joaquin's Photo1" className={photos} />
            </div>
            <div>
                <img src={MyPhoto2} alt="Joaquin's Photo2" className={photos}/>
            </div>
            <div>
                <img src={MyPhoto3} alt="Joaquin's Photo3" className={photos}/>
            </div>
        </Carousel>
    )
}

export default CentralPart;