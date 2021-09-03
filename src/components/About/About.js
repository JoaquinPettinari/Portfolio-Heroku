import { Grid, makeStyles, Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import LeftPart from "./LeftPart";
import CentralPart from "./CentralPart";

const useStyles = makeStyles(() => ({    
    root:{
        height:'100vh'
    },
    descriptionContainer:{
        textAlign:'end'
    },  
}))

function About() {
    const classes = useStyles()    

    return(
        <Grid container justifyContent="space-evenly" alignContent="center" className={classes.root}>
            <Grid item xs={12} sm={6} md={4} className={classes.descriptionContainer} spacing={4}>
                <LeftPart />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <CentralPart />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography>
                    Heelooo
                </Typography>
            </Grid>
        </Grid>
    )
}

export default About;