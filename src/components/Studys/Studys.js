import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import TitleText from "../ui/TitleText";
import Studying from '../../assets/lotties/studying.json'
import { defaultOptions } from "../../lottieConfig";
import Lottie from "react-lottie";
import { useTranslate as t } from '../../translation';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles(() => ({   
    containerDescription:{
        alignContent:'center',
        display:'grid'        
    },
    divTitleJob:{
        display:'inline-flex',
        alignItems:'center'
    },
    dividerStyle:{
        margin: '20px 0'
    },
    iconWidth:{
        width: '30px',
        height:'30px',
        marginRight:'8px'
    },
    bold:{
        fontWeight:'bold'
    }
}))

function Studys(){
    const { containerDescription, divTitleJob, dividerStyle, iconWidth, bold } = useStyles();

    return (
        <Grid container justifyContent="center">
            <Grid item xs={8} sm={4} md={3} >    
                <TitleText label={t("buttonStudys")} />
            </Grid>
            <Grid container spacing={5} alignContent="center" justifyContent="center">
                <Grid item xs={8} sm={6}>
                    <Lottie options={{animationData: Studying, ...defaultOptions}} />
                </Grid>
                <Grid item xs={8} sm={6} className={containerDescription}>
                    { listOfStudys.map(({ studyUniversity, studyTitleName, studyDate, studyAverage, studyAverageValue }, index ) => {
                            return (
                                <Grid container spacing={1} key={index}>
                                    <Grid item xs={12} className={divTitleJob} >
                                        <ApartmentIcon className={iconWidth} />
                                        <Typography variant="h5" className={bold}>
                                            {t(studyUniversity)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={divTitleJob}>
                                        <SchoolIcon className={iconWidth} />
                                        <Typography variant="h6">
                                            {t(studyTitleName)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={divTitleJob}>
                                        <DateRangeIcon className={iconWidth} />
                                        <Typography variant="subtitle1">
                                            {t(studyDate)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={divTitleJob}>
                                        <ImportExportIcon className={iconWidth} />
                                        <Typography variant="subtitle1">
                                            {t(studyAverage) + studyAverageValue}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className={dividerStyle} >
                                        {index !== listOfStudys.length - 1 && <Divider color="primary"  /> }
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

const listOfStudys = [
    { studyUniversity:'studyUniversity', studyTitleName:'studyFirstTitleName', studyDate: 'studyFirstDate', studyAverage:'studyAverage', studyAverageValue: '8,90'},
    { studyUniversity:'studyUniversity', studyTitleName:'studySecondTitleName', studyDate: 'studySecondDate', studyAverage:'studyAverage' ,studyAverageValue: '8,95'}
]

export default Studys;