import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import ProyectIcon from '../../assets/lotties/proyect.json'
import LogoUnahur from '../../assets/isologo.svg'
import { useTranslate as t } from '../../translation';
import Layout from "../ui/Layout";

const useStyles = makeStyles(() => ({
    titleJobs:{
        fontWeight:'bold'
    },
    dividerStyle:{
        margin: '20px 0'
    }
  }));

function Proyects(){

    const { titleJobs, dividerStyle } = useStyles();    

    return (
        <Layout
            title="buttonProyects"
            lottieIcon={ProyectIcon}
            background="true"
        >
            {
                listOfProyects.map(({ image, alt, proyectDescription,proyectRepository, proyectPage, proyectRepositoryValue, proyectPageValue}, index) => {
                    return(
                        <Grid container spacing={3} alignContent="center">
                            <Grid item xs={12}>
                                <Grid item xs={8} sm={6} md={4}>
                                    <img src={image} alt={alt}  />
                                </Grid>
                            </Grid>
                            <Grid item xs={10}>
                            <Typography variant="h6" className={titleJobs} >
                                {t(proyectDescription)}
                                <li><a href={proyectRepositoryValue} rel="noopener noreferrer" target="_blank">{t(proyectRepository)}</a ></li>
                                <li><a href={proyectPageValue} rel="noopener noreferrer" target="_blank">{t(proyectPage)}</a></li>
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} className={dividerStyle} >
                                {index !== listOfProyects.length - 1 && <Divider color="primary"  /> }
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Layout>
    )
}

const listOfProyects = [
    {image: LogoUnahur, alt:"Logo unahur", proyectDescription: 'proyectFirstDescription', proyectRepository: 'proyectFirstRepository', proyectPage:'proyectFirstPage', proyectRepositoryValue: 'https://github.com/unahur-turnos/', proyectPageValue:'https://turnos.unahur.edu.ar/login'}
]

export default Proyects;