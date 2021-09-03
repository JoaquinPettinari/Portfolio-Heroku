import { makeStyles, Typography } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import JPButton from "../JPButton";
import CVJoaquin from './JoaquinPettinariCV2021.pdf'
const useStyles = makeStyles(() => ({
    bold:{        
        fontWeight:'bold',
    },
    aboutMySelf:{
        lineHeight: '1',
    },    
}))

function LeftPart(){
    const { t } = useTranslation()
    const { bold, aboutMySelf } = useStyles()

    const downloadCV = () => {
        window.open("https://drive.google.com/file/d/1c0Uk-cYi5Ghe-C2G9kfqDwvphclwwU99/view?usp=sharing", "_blank")
    }

    return(
        <>
            <Typography variant="h5" className={bold}>
                Joaquín Salvador Pettinari
            </Typography>
            <Typography variant="subtitle2" className={bold}>
                {t("aboutProfession")}
            </Typography>            
            <Typography variant="subtitle1" className={`${aboutMySelf} ${bold}`} >
                <br />
                <Trans components={{ br: <br />}}>
                    {t("aboutMySelf")}
                </Trans>
            </Typography>
            <a href={CVJoaquin} target="_blank" download="Joaquin-Pettinari-CV.pdf">
                <JPButton
                    label={t("homeDownloadCV")}
                    capitalize
                />
            </a>
        </>
    )
}

export default LeftPart;