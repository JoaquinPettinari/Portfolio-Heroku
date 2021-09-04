import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    buttonStyle:{
        borderBottom:'1px solid black',
        borderTop:'1px solid black',
        borderRadius:'0',
        marginTop:'50px',
        textAlign:'center',
    },
    fontStyle:{
        fontSize:'1.5em',
        fontWeight:'bold',
    }
}))

function TitleText({ label }) {
    const { buttonStyle, fontStyle } = useStyles()

    return(
        <Box className={buttonStyle}>
            <Typography variant="h6" className={fontStyle} >
                {label}
            </Typography>
        </Box>     
    )
}


export default TitleText