import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import JPButton from "../ui/JPButton";
import CVJoaquin from './JoaquinPettinariCV2021.pdf'
const useStyles = makeStyles(() => ({
    bold:{        
        fontWeight:'bold',
    },
    aboutMySelf:{
        lineHeight: '1',
    },
    marginTop:{
        marginTop:'20px'
    }
}))

function LeftPart(){
    const { t } = useTranslation()
    const { bold, aboutMySelf, marginTop } = useStyles()   

    return(
        <>
            <Typography variant="h5" className={bold}>
                Joaquín Salvador Pettinari
            </Typography>
            <Typography variant="h6" >
                {t("aboutProfession")}
            </Typography>            
            <Typography variant="subtitle2" className={`${aboutMySelf} ${bold}`} >
                <br />
                <Trans components={{ br: <br />}}>
                    {t("aboutMySelf")}
                </Trans>
            </Typography>
            <Grid className={marginTop} >
                <JPButton
                    label={t("homeDownloadCV")}
                    capitalize
                    href={CVJoaquin}
                    target="_blank"
                    download="Joaquin-Pettinari-CV.pdf"
                    />
            </Grid>
        </>
    )
}

export default LeftPart;