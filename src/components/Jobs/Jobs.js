import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import Pointer from "../../assets/lotties/pointer.json"
import Working from "../../assets/lotties/working.json"
import Lottie from "react-lottie";
import { defaultOptions } from "../../lottieConfig";
import WorkIcon from '@material-ui/icons/Work';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CodeIcon from '@material-ui/icons/Code';
import { useTranslate as t } from '../../translation';
import Layout from "../ui/Layout";

const useStyles = makeStyles(() => ({  
    divTitleJob:{
        display:'inline-flex',
        alignItems:'center'
    },
    titleJobs:{
        fontWeight:'bold'
    },
    iconWidth:{
        width: '30px',
        height:'30px',
        marginLeft:'9px'
    },
    compañyTextStyle:{
        marginLeft: '8px'
    },
    dividerStyle:{
        margin: '20px 0'
    }
}))

function Jobs(){
    const { divTitleJob, titleJobs, iconWidth, compañyTextStyle, dividerStyle} = useStyles()    

    return(
        <Layout
            title="buttonJobs"
            lottieIcon={Working}
            background="true"
            minHeightStyle="true"
        > 
            { listOfJobs.map(({ positionName, positionDate, positionCompanyName, positionStack }, index ) => {
                    return (
                        <Grid container spacing={1} key={index}>
                            <Grid item xs={12} className={divTitleJob} >
                                <Lottie options={{animationData: Pointer, ...defaultOptions}} width={50} height={50} style={{ margin:0}}/>
                                <Typography variant="h5" className={titleJobs} >
                                    {t(positionName)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={divTitleJob}>
                                <WorkIcon className={iconWidth} />
                                <Typography variant="h6" className={compañyTextStyle}>
                                    {positionCompanyName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={divTitleJob}>
                                <DateRangeIcon className={iconWidth} />
                                <Typography variant="subtitle1" className={compañyTextStyle}>
                                    {t(positionDate)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={divTitleJob}>
                                <CodeIcon className={iconWidth} />
                                <Typography variant="subtitle1" className={compañyTextStyle}>
                                    {positionStack}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} className={dividerStyle} >
                                {index !== listOfJobs.length - 1 && <Divider color="primary"  /> }
                            </Grid>
                        </Grid>
                    )
                })
            }                
        </Layout>
    )
}

const listOfJobs = [
    { positionName: "secondJobPosition", positionDate: "secondJobDate", positionCompanyName: 'Swiss Medical Group', positionStack:'React - Redux' },
    { positionName: "firstJobPosition", positionDate: "firstJobDate", positionCompanyName: 'Botmaker', positionStack:'React - Java' },
]

export default Jobs;