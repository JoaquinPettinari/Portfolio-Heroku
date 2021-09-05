import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useTranslate as t } from '../../translation';

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor:'#191919',
        height:'70px',
        color:'white',
        textAlign:'center',
        marginTop:'20px',
        borderTopLeftRadius:'5px',
        borderTopRightRadius:'5px',
    },
    textColor: {
        color:'white',
        textDecoration:'none',        
    },
    divFooter:{
        display:'flex',
        justifyContent:'center'
    },
    marginLeftText:{
        marginLeft:'2px'
    }
}))

function Footer(){
    const { root, textColor, divFooter, marginLeftText } = useStyles();

    return (
        <Grid container className={root} justifyContent="center" alignContent="center">
            <Grid item xs={10} className={divFooter}>
                <Typography variant="subtitle1">
                    @2021
                </Typography>
                <Typography variant="subtitle1" className={marginLeftText}>                    
                    <a href="https://github.com/JoaquinPettinari/Portfolio-Joaquin-Pettinari" target="_blank" rel="noreferrer" textColor><div className={textColor} >{t("footer")}</div></a>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer