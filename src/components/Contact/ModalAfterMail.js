import { Dialog, Grid, makeStyles, Typography } from "@material-ui/core"
import { Trans } from "react-i18next";
import Lottie from "react-lottie"
import { defaultOptions } from "../../lottieConfig"
import { useTranslate as t } from '../../translation';
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    modal: {
      textAlign:'center',
      padding:'0 30px 30px 30px'
    },
    subtitleStyle:{
        marginTop:'15px'
    }
  }));

function ModalAfterMail(props){
    const { open, handleClose, icon, title, subtitle} = props;
    const { modal, subtitleStyle} = useStyles();    

    return(
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"            
        >
            <Grid container justifyContent="center" className={modal}>
                <Grid item xs={12} >
                    <Lottie options={{animationData: icon, ...defaultOptions, loop: false}} width={120} height={120} />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h4">{title}</Typography>
                </Grid>
                <Grid item xs={9} >
                    <Typography variant="h6" className={subtitleStyle}>
                        <Trans components={{ br: <br />}}>
                            {t(subtitle)}
                        </Trans>
                    </Typography>
                </Grid>
            </Grid>
        </Dialog>
    )
}

ModalAfterMail.propTypes={
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default ModalAfterMail