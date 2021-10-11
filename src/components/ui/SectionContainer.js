import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root:{        
        minHeight: '100vh !important'
    },
    greyBackground:{
        background:'#eeeeee'
    }
}))

export default function SectionContainer(props){
    const { children } = props;
    const classes = useStyles();

    return(
        <Grid className={`${classes.root} ${props.greyBackground ? classes.greyBackground : ''}`} >
            {children}
        </Grid>
    )
}