import { makeStyles, Typography } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import JPButton from "../JPButton";

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
    const history = useHistory()

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
            <JPButton
                label={t("homeDownloadCV")}
                capitalize={true}
                component={Link}
                to=""
            />
        </>
    )
}

export default LeftPart;