import { Grid, makeStyles, Typography } from "@material-ui/core";
import TitleText from "../ui/TitleText";
import Pointer from "../../assets/lotties/pointer.json"
import JobsIcon2 from "../../assets/lotties/work.json"
import Lottie from "react-lottie";
import { defaultOptions } from "../../lottieConfig";



const useStyles = makeStyles(() => ({
    root:{        
        background: '#eeeeee'
    },
    root2:{
        minHeight:'60vh',
    },    
    containerDescription:{
        alignContent:'center'
    },
    divTitleJob:{
        display:'inline-flex',
        alignItems:'center'
    }
}))

function Jobs(){
    const { root, root2, containerDescription, divTitleJob} = useStyles()
    return(
        <Grid container className={root} justifyContent="center" >
            <Grid item xs={8} sm={4} md={3} >
                <TitleText label="Jobs" />
            </Grid>
            <Grid container spacing={5} className={root2} alignContent="center">
                <Grid item xs={10} sm={6}>
                    <Lottie options={{animationData: JobsIcon2, ...defaultOptions}} width={500} height={500} />
                </Grid>
                <Grid item xs={10} sm={6} className={containerDescription}>
                    <Grid item xs={12} className={divTitleJob}>
                        <Lottie options={{animationData: Pointer, ...defaultOptions}} width={50} height={50} />
                        <Typography variant="h5">
                            Front end Developer
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Swiss Medical groups
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
        </Grid>
    )
}

export default Jobs;