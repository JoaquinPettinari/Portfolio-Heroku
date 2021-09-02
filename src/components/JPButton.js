import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({    
    button:{
        padding:'1em',        
        borderRadius:'0.5em',
        fontWeight:'bold',
        fontSize:'1em'
    }
}))

function JPButton(props){
    const classes = useStyles()
    const { onClick, label } = props

    return(
        <Button
            variant="contained"
            onClick={onClick}
            color="primary"
            className={classes.button}
            {...props}
        >
            {label}
        </Button>
    )
}

export default JPButton;