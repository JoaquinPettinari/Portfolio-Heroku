import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { useScrollSection } from "react-scroll-section"
import HomeBackground from '../../assets/homeBackground.jpg'
import JPButton from "../JPButton"


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
        fontSize:'3vw',
        color:'#ffffff',
        fontWeight:'bold'
    }
}))

function Home() {
    const classes = useStyles()
    const { t } = useTranslation()
    const contactSection = useScrollSection('contact');
    

    return(    
        <Grid container className={classes.root} justifyContent="center" alignContent="center">
            <Grid item xs={12}>
                <Typography className={classes.welcomeText} variant="h2">
                    {t("homeWelcome")}
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