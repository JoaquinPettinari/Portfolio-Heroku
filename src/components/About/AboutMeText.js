import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Trans } from "react-i18next";
import { useTranslate as t } from '../../translation';
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

function AboutMeText(){
    const { bold, aboutMySelf, marginTop } = useStyles()   

    return(
        <>
            <Typography variant="h5" className={bold}>
                Joaquín Salvador Pettinari
            </Typography>
            <Typography variant="h6" >
                {t("aboutProfession")}
            </Typography>            
            <Typography variant="subtitle1" className={`${aboutMySelf} ${bold}`} >
                <br />
                <Trans components={{ br: <br />}}>
                    {t("aboutMySelf")}
                </Trans>
            </Typography>
            <Grid className={marginTop} >
                <JPButton
                    label={t("homeDownloadCV")}
                    capitalize="true"
                    href={CVJoaquin}
                    target="_blank"
                    download="Joaquin-Pettinari-CV.pdf"
                    />
            </Grid>
        </>
    )
}

export default AboutMeText;