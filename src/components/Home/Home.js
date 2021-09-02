import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { Link, useHistory } from "react-router-dom"
import HomeBackground from '../../assets/homeBackground.jpg'
import JPButton from "../JPButton"


const useStyles = makeStyles(() => ({
    root:{
        backgroundImage: `url(${HomeBackground})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight:'100vh',
        textAlign: 'center',        
        "&:before":{
            backgroundColor: 'rgba(0,0,0,0.6)'
        }
    },    
    welcomeText:{
        fontSize:'5vw',
        color:'#ffffff',
        fontWeight:'bold'
    }
}))

function Home() {
    const classes = useStyles()
    const history = useHistory()
    const { t } = useTranslation()

    const contactMeClick = () => {
        history.push("#contact")
    }

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
                    onClick={contactMeClick}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}


export default Home