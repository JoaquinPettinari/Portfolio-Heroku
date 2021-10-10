import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({    
    button:{
        padding:'1em',        
        borderRadius:'0.5em',
        fontWeight:'bold',
        fontSize:'1em',
        "&:hover": {
            backgroundColor: 'white',
            color:'black',            
          }
    },
    capitalize:{
        textTransform:'none'
    }
}))

function JPButton(props){
    const classes = useStyles()
    const { onClick, label, capitalize, loading } = props

    return(
        <Button
            variant="contained"
            onClick={onClick}
            color="primary"
            className={`${classes.button} ${capitalize ? classes.capitalize : ''}`}
            disabled={loading ? true : false }
            {...props}
        >
            {loading ? <CircularProgress color="primary" /> : label}
        </Button>
    )
}

JPButton.propTypes={
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    capitalize: PropTypes.string,
    loading: PropTypes.string
}

export default JPButton;