import { Grid, makeStyles, Typography, Paper } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import AboutMeText from "./AboutMeText";
import MyPhoto3 from '../../assets/me3.png'
import ReactIcon from '../../assets/ReactImage.png'
import JSIcon from '../../assets/jsImage.png'
import ReduxImage from '../../assets/reduxImage.png'
import MaterialUiImage from '../../assets/material-ui.png'
import GitImage from '../../assets/gitImage.png'
import PostmanImage from '../../assets/postmanImage.png'
import PostgreSQLImage from '../../assets/postgresImage.png'
import MongoDBImage from '../../assets/mongoDBImage.png'
import JavaImage from '../../assets/javaImage.png'
import { useTranslate as t } from '../../translation';

const useStyles = makeStyles(({theme}) => ({    
    root:{
        minHeight:'90vh',
        padding:'30px 0',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: 'auto',
            margin: '50px 0'
        },
    },    
    photos:{
        height: '300px',
        width:'300px',        
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key            
            height:'400px',
            width:'400px'
        },
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key            
            height:'auto',
            width:'90%'
        },
    },
    photoContainer:{
        display:'flex',
        justifyContent:'flex-end',
        ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
            justifyContent:'flex-start',
        },
    },
    technologysImage:{
        objectFit:'container',
        width:'5rem',
        height:'5rem',
        // ['@media (max-width:1100px)']: { // eslint-disable-line no-useless-computed-key
        //     width:'4rem',
        //     height:'4rem',
        // },
    },
    paperStyle:{
        padding:'13px',
        textAlign:'center',
        borderRadius:'6px'
    },
    titleTechnology:{        
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'2vh'
    },
    textBold:{
        fontWeight:'bold'
    }
}))

function About() {
    const { root, descriptionContainer, photos, photoContainer, technologysImage, paperStyle, titleTechnology, textBold } = useStyles()

    return(
        <Grid container justifyContent="center" spacing={4} alignContent="center" className={root}>
            <Grid item xs={8} md={4} className={photoContainer}>
                <img src={MyPhoto3} alt="Joaquin's Photo3" className={photos}/>
            </Grid>
            <Grid item xs={8} md={4} className={descriptionContainer}>
                <AboutMeText />
            </Grid>         
            <Grid item xs={8}>
                <Grid container spacing={3} alignContent="center">
                    <Grid item xs={12} >
                        <Typography variant="h5" className={textBold} >
                            {t("aboutSkills")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h6">
                            {t("aboutSkillsPrimary")}
                        </Typography>                        
                    </Grid>
                    {
                        primaryTechnologys.map(({Icon, alt}, index) => {
                            return(
                                <Grid item xs={6} sm={4} md={3} key={index} style={{minHeight:'max-content'}}>
                                    <Paper className={paperStyle}>
                                        <img src={Icon} alt={alt} className={technologysImage} />
                                        <Typography variant="h6" className={titleTechnology}>
                                            {alt}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                    <Grid item xs={12} >
                        <Typography variant="h6" >
                            {t("aboutSkillsSecondary")}
                        </Typography>                        
                    </Grid>
                    {
                        secondaryTechnologys.map(({Icon, alt}, index) => {
                            return(
                                <Grid item xs={6} sm={4} md={3} key={index} style={{minHeight:'max-content'}}>
                                    <Paper className={paperStyle}>
                                        <img src={Icon} alt={alt} className={technologysImage} />
                                        <Typography variant="h6" className={titleTechnology}>
                                            {alt}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

const primaryTechnologys = [
    {Icon: ReactIcon, alt:"React"},
    {Icon: JSIcon, alt:"JavaScript"},
    {Icon: ReduxImage, alt:"Redux"},
    {Icon: MaterialUiImage, alt:"MaterialUi"},
    {Icon: GitImage, alt:"Git"},
]

const secondaryTechnologys = [
    {Icon: MongoDBImage, alt:"MongoDB"},
    {Icon: PostmanImage, alt:"Postman"},
    {Icon: PostgreSQLImage, alt:"PostgreSQL"},
    {Icon: JavaImage, alt:"Java"},
]

export default About;