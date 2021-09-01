import { Button, Grid, makeStyles, Paper } from "@material-ui/core"
import HomeBackground from '../../assets/homeBackground.jpg'


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
    },
    button:{
        position:''
    }
}))

function Home() {
    const classes = useStyles()

    return(    
        <Grid container className={classes.root} justifyContent="center" alignContent="center">
            <Grid item>
                <Button>
                    asad
                </Button>
            </Grid>
        </Grid>
    )
}


export default Home