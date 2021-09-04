import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import TitleText from "../ui/TitleText";
import Pointer from "../../assets/lotties/pointer.json"
import JobsIcon2 from "../../assets/lotties/work.json"
import Lottie from "react-lottie";
import { defaultOptions } from "../../lottieConfig";
import WorkIcon from '@material-ui/icons/Work';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CodeIcon from '@material-ui/icons/Code';
import { useTranslation } from "react-i18next";


const useStyles = makeStyles(() => ({
    root:{        
        background: '#eeeeee'
    },
    root2:{
        minHeight:'60vh',
    },    
    containerDescription:{
        alignContent:'center'
    },
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
    const { root, root2, containerDescription, divTitleJob, titleJobs, iconWidth, compañyTextStyle, dividerStyle} = useStyles()
    const { t } = useTranslation()    

    return(
        <Grid container className={root} justifyContent="center" >
            <Grid item xs={8} sm={4} md={3} >
                <TitleText label="Jobs" />
            </Grid>
            <Grid container spacing={5} className={root2} alignContent="center" justifyContent="center">
                <Grid item xs={10} sm={6}>
                    <Lottie options={{animationData: JobsIcon2, ...defaultOptions}}  />
                </Grid>
                <Grid item xs={10} sm={6} className={containerDescription}>
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
                </Grid> 
            </Grid>
        </Grid>
    )
}

const listOfJobs = [
    { positionName: "secondJobPosition", positionDate: "secondJobDate", positionCompanyName: 'Swiss Medical Group', positionStack:'React - Redux' },
    { positionName: "firstJobPosition", positionDate: "firstJobDate", positionCompanyName: 'Botmaker', positionStack:'React - Java' },
]

export default Jobs;