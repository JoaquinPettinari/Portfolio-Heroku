import { Dialog, Grid, makeStyles, Typography } from "@material-ui/core"
import { Trans, useTranslation } from "react-i18next";
import Lottie from "react-lottie"
import { defaultOptions } from "../../lottieConfig"

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
    const { t } = useTranslation()

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
                <Grid xs={12} >
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

export default ModalAfterMail