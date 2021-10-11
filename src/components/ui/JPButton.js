import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({    
    button:{
        border: 'none',
        background: '#191919',
        color: '#ffffff !important',
        textAlign:'center',
        fontWeight: 'bold',
        padding: '20px',
        textTransform: 'uppercase',
        borderRadius: '6px',
        display: 'inline-block',
        transition: 'all 0.3s ease 0s',
        fontSize:'16px',
        "&:hover": {
            color: '#404040 !important',
            fontWeight: '700 !important',
            letterSpacing: '2px',
            background: 'white',            
            boxShadow: '0px 5px 40px -10px rgba(0,0,0,0.57)',
            transition: 'all 0.3s ease 0s',
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