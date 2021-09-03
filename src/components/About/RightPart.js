import { Grid, makeStyles, Typography } from '@material-ui/core'
import LinearSkillWithTitle from './LinearSkillWithTitle'

const knowledge = [
    { name: 'React JS', level: 80, },
    { name: 'JavaScript', level: 80, },
    { name: 'Material UI', level: 75, },
    { name: 'Redux', level: 75, },
    { name: 'NodeJS', level: 70, },
    { name: 'MongoDB', level: 70, },
    { name: 'Git', level: 80, },
    { name: 'Scrum - Kanban', level: 70, },
]

const useStyles = makeStyles(() => ({    
    title:{
        fontWeight:'bold'
    },    
}))

function RightPart(){
    const { title } = useStyles();
    return(
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h5" className={title} >
                    Skills
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {
                    knowledge.map(({name, level}, id) => <LinearSkillWithTitle key={id} knowledge={level} technology={name} /> )
                }
            </Grid>
        </Grid>
    )
}

export default RightPart;