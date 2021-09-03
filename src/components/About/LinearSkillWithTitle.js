import { LinearProgress, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({    
    root:{
        marginTop:'15px'
    },    
}))

function LinearSkillWithTitle(props){
    const { technology, knowledge } = props
    const { root } = useStyles()

    return(
        <div className={root}>
            <Typography>
                {technology}
            </Typography>
            <LinearProgress value={knowledge} variant="determinate" />
        </div>
    );
}

export default LinearSkillWithTitle;