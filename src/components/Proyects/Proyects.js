import { Grid } from "@material-ui/core";
import TitleText from "../ui/TitleText";

function Proyects(){
    return (
        <Grid container justifyContent="center" >
            <Grid item xs={8} sm={4} md={3} >
                <TitleText
                    label="Proyects"
                />
            </Grid>
        </Grid>
    )
}

export default Proyects;