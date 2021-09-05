import { Grid, makeStyles } from "@material-ui/core";
import TitleText from "../ui/TitleText";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lottieConfig";
import { useTranslate as t } from '../../translation';

const useStyles = makeStyles(() => ({
    root:{        
        background: '#eeeeee'
    },
    root2:{
        minHeight:'95vh',
    },    
    containerDescription:{
        alignContent:'center',
        display:'grid'        
    },
}))

function Layout(props){
    const { children, lottieIcon, title, background = false, minHeightStyle = false} = props;
    const { root, root2, containerDescription } = useStyles()    

    return(
        <Grid container className={background && root} justifyContent="center" id="MyContainerId">
            <Grid item xs={8} sm={4} md={3} >                
                <TitleText label={t(title)} />
            </Grid>
            <Grid container spacing={5} className={minHeightStyle && root2} alignContent="center" justifyContent="center">
                <Grid item xs={8} sm={6}>                    
                    <Lottie options={{animationData: lottieIcon, ...defaultOptions}} />
                </Grid>
                <Grid item xs={8} sm={6} className={containerDescription}>
                    {children}
                </Grid> 
            </Grid>
        </Grid>
    )
}

export default Layout;