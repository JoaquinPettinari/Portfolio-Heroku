import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root:{        
        padding:'20px',
        textAlign:'center',
        minHeight:'100px',
        overflowWrap: 'break-word'
    },
    titleStyle:{
        fontWeight:'bold'
    },  
}))

function PaperCustom(props){
    const { icon, title, subtitle } = props;
    const { root, titleStyle } = useStyles()

    return(
        <Paper className={root}>
            <div>
                {icon}
            </div>
            <Typography variant="h6" className={titleStyle}>
                {title}
            </Typography>
            <Typography variant="subtitle1">
                {subtitle}
            </Typography>
        </Paper>
    )
}

export default PaperCustom;