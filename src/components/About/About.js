import { Grid, makeStyles } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import LeftPart from "./LeftPart";
import CentralPart from "./CentralPart";
import RightPart from "./RightPart";
import MyPhoto3 from '../../assets/me3.png'

const useStyles = makeStyles(({theme}) => ({    
    root:{
        height:'140vh',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: 'auto',
            margin: '50px 0'
        },
    },
    descriptionContainer:{
        textAlign:'end',        
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            textAlign:'start'
        }
    },
    photos:{        
        height: '300px',        
    }
}))

function About() {
    const { root, descriptionContainer, photos } = useStyles()

    return(
        <Grid container justifyContent="center" spacing={2} alignContent="center" className={root}>
            <Grid item xs={8} sm={6} md={4} className={descriptionContainer}>
                <LeftPart />
            </Grid>
            <Grid item xs={8} sm={4} md={3} >
                <img src={MyPhoto3} alt="Joaquin's Photo3" className={photos}/>
            </Grid>
            <Grid item xs={8} sm={5} md={3} >
                <RightPart />
            </Grid>
        </Grid>
    )
}

export default About;