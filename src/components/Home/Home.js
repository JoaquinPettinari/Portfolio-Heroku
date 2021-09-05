import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
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
        fontSize:'50px',
        color:'#ffffff',
        fontWeight:'bold',
        display:'inline-flex',
        alignItems:'center',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '40px'
          }
    }
}))

function Home() {
    const classes = useStyles()    
    const contactSection = useScrollSection('contact');
    const matches = useMediaQuery('(min-width:600px)');
    

    return(    
        <Grid container className={classes.root} justifyContent="center" alignContent="center">
            <Grid item xs={12}>
                <Typography className={classes.welcomeText} variant="h1">
                    {"<JoaquinPettinari /"}
                    <Lottie options={{animationData: LessIcon, ...defaultOptions}} width={matches ? 60 : 45} height={ matches ? 60 : 45}  />
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