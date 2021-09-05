import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import Studying from '../../assets/lotties/studying.json'
import { useTranslate as t } from '../../translation';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Layout from "../ui/Layout";

const useStyles = makeStyles(() => ({
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
    const { divTitleJob, dividerStyle, iconWidth, bold } = useStyles();

    return (
        <Layout
            lottieIcon={Studying}
            title="buttonStudys"
        >
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
        </Layout>
    )
}

const listOfStudys = [
    { studyUniversity:'studyUniversity', studyTitleName:'studyFirstTitleName', studyDate: 'studyFirstDate', studyAverage:'studyAverage', studyAverageValue: '8,90'},
    { studyUniversity:'studyUniversity', studyTitleName:'studySecondTitleName', studyDate: 'studySecondDate', studyAverage:'studyAverage' ,studyAverageValue: '8,95'}
]

export default Studys;