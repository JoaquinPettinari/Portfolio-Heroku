import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useTranslate as t } from '../../translation';
import { useScrollSection } from "react-scroll-section"
import HomeBackground from '../../assets/homeBackground.jpg'
import JPButton from "../ui/JPButton"
import LessIcon from "../../assets/lotties/>Icon.json"
import Lottie from "react-lottie"
import { defaultOptions } from "../../lottieConfig"


const useStyles = makeStyles(() => ({
    root:{
        backgroundImage: `url(${HomeBackground})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%',
        minHeight:'100vh',
        textAlign: 'center',
    },    
    welcomeText:{
        fontSize:'3.5vw',
        color:'#ffffff',
        fontWeight:'bold',
        display:'inline-flex',
        alignItems:'center'
    }
}))

function Home() {
    const classes = useStyles()    
    const contactSection = useScrollSection('contact');
    

    return(    
        <Grid container className={classes.root} justifyContent="center" alignContent="center">
            <Grid item xs={12}>
                <Typography className={classes.welcomeText} variant="h1">
                    {"<JoaquinPettinari /"}
                    <Lottie options={{animationData: LessIcon, ...defaultOptions}} width={60} height={60}  />
                </Typography>
            </Grid>
            <Grid item xs={5} sm={3} md={2}>
                <JPButton
                    label={t("homeContactMeButton")}
                    onClick={contactSection.onClick}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}


export default Home