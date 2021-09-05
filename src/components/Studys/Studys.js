import { Grid } from "@material-ui/core";
import TitleText from "../ui/TitleText";
import Studying from '../../assets/lotties/studying.json'
import { defaultOptions } from "../../lottieConfig";
import Lottie from "react-lottie";

function Studys(){

    return (
        <Grid container justifyContent="center">
            <Grid item xs={8} sm={4} md={3} >    
                <TitleText label="Studys" />
            </Grid>
            <Grid container spacing={5} alignContent="center" justifyContent="center">
                <Grid item xs={8} sm={6}>
                    <Lottie options={{animationData: Studying, ...defaultOptions}} />
                </Grid>
                <Grid item xs={8} sm={6}>
                    <Grid container spacing={1} >
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Studys;