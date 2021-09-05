import { Grid, makeStyles, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lottieConfig";
import TitleText from "../ui/TitleText";
import ProyectIcon from '../../assets/lotties/proyect.json'
import LogoUnahur from '../../assets/isologo.svg'
import { useTranslate as t } from '../../translation';

const useStyles = makeStyles(() => ({
    root:{        
        background: '#eeeeee',
        minHeight:'60vh'
    },    
    containerDescription:{        
        display:'grid'        
    },
    titleJobs:{
        fontWeight:'bold'
    },
  }));

function Proyects(){

    const { root, titleJobs, containerDescription } = useStyles();    

    return (
        <Grid container justifyContent="center" id="proyectContainer" className={root}>
            <Grid item xs={8} sm={4} md={3} >                
                <TitleText label={t("buttonProyects")} />
            </Grid>
            <Grid container spacing={5} alignContent="center" justifyContent="center">
                <Grid item xs={8} sm={6}>
                    <Lottie options={{animationData: ProyectIcon, ...defaultOptions}} />
                </Grid>
                <Grid item xs={8} sm={6} className={containerDescription}>
                    <Grid container spacing={3} alignContent="center">
                        <Grid item xs={12}>
                            <Grid item xs={8} sm={6} md={4}>
                                <img src={LogoUnahur} alt="Logo Unahur"  />
                            </Grid>
                        </Grid>
                            <Grid item xs={10}>
                            <Typography variant="h6" className={titleJobs} >
                                {t("proyectDescription")}
                                <li><a href="https://github.com/unahur-turnos/" rel="noopener noreferrer" target="_blank">{t("proyectRepository")}</a ></li>
                                <li><a href="https://turnos.unahur.edu.ar/login" rel="noopener noreferrer" target="_blank">{t("proyectPage")}</a></li>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Proyects;