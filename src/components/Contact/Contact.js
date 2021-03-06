import { Grid, makeStyles, Paper, TextareaAutosize, Typography } from "@material-ui/core";
import PaperCustom from "./PaperCustom";
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import JPButton from '../ui/JPButton'
import emailjs from 'emailjs-com';
import { MAIL_SERVICE_ID, MAIL_TEMPLATE_ID, MAIL_USER_ID } from "../../constants";
import { useTranslate as t } from '../../translation';
import { useState } from "react";
import ModalAfterMail from "./ModalAfterMail";
import ErrorIconLottie from '../../assets/lotties/errorMail.json'
import SuccessMail from '../../assets/lotties/successMail.json'
import TitleText from "../ui/TitleText";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
    root:{        
        minHeight:'80vh',
    },
    mailContainer:{
        marginTop:'50px',
        padding:'15px'
    },
    textBox:{
        width:'100%'
    },
    submitButton:{
        marginTop:'20px'
    },
    divTitleButton:{
        marginBottom:'30px'
    },
    bold:{
        fontWeight:'bold',
        textAlign:'center'
    }
}))

function Contact(){
    const { root, mailContainer, textBox, submitButton, divTitleButton, bold } = useStyles();
    const [ dataModal, setDataModal ] = useState({iconModal: '', titleModal:'', subtitleModal:'' });
    const [ textFieldData, setTextFieldData ] = useState({subject: '', name: '', email: '' })
    const [ loading, setLoading ] = useState('')
    const [ isOpen, setIsOpen ] = useState(false);

    const textFiledData = [
        { name: 'subject', label: "contactMailSubject", validators: ['required'], errorMessages:[t("textFieldMailRequired")] },
        { name: 'name', label: "contactMailName", validators: ['required'], errorMessages:[t("textFieldMailRequired")] },
        { name: 'email', label: "contactMailEmail", validators: ['required', 'isEmail'], errorMessages:[t("textFieldMailRequired"), t("textFieldMailErrorMail")] },
    ]

    const dataModalMail = {
        RESULT_ERROR: { iconModal: ErrorIconLottie, titleModal:t("contactModalErrorTitle"), subtitleModal:"contactModalErrorSubtitle" },
        RESULT_SUCCESS: { iconModal: SuccessMail, titleModal:t("contactModalSuccessTitle"), subtitleModal:"contactModalSuccessSubtitle" }
    }
    
    const sendMail = (e) => {
        setLoading(true);
        emailjs.sendForm(MAIL_SERVICE_ID, MAIL_TEMPLATE_ID , e.target, MAIL_USER_ID)
            .then((result) => {
                handleOpenModal(dataModalMail.RESULT_SUCCESS)
            }, (error) => {
                handleOpenModal(dataModalMail.RESULT_ERROR)
            })            
    }

    const goToLinkedin = () => {
        window.open("https://www.linkedin.com/in/joaquin-pettinari/", "_blank")
    }

    const goToInstagram = () => {
        window.open("https://www.instagram.com/joacoopettinari/", "_blank")
    }

    const goToGithub = () => {
        window.open("https://github.com/JoaquinPettinari", "_blank")
    }

    const getSubtitleInSocialMedia = () => {
        return(
            <>
                <LinkedInIcon onClick={goToLinkedin} />
                <InstagramIcon onClick={goToInstagram} />
                <GitHubIcon onClick={goToGithub} />
            </>
        )
    }

    const onChangeInputs = (e) => {
        setTextFieldData({...textFieldData, [e.target.name]: e.target.value})
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleOpenModal = (data) => {
        setLoading('')
        setDataModal(data)
        setIsOpen(true)
    }

    return(
        <ValidatorForm onSubmit={sendMail} instantValidate={false}>
            <Grid container className={root} justifyContent="center">
                <Grid item xs={8} sm={4} md={3} className={divTitleButton}>
                    <TitleText label={t("buttonContact")} />
                </Grid>
                <Grid item xs={11}>
                    <Grid container justifyContent="center" spacing={3} >
                        <Grid item xs={11} sm={5} md={3}>
                            <PaperCustom
                                icon={<HomeIcon />}
                                title={t("contactLocation")}
                                subtitle="Castelar, Buenos Aires"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom 
                                icon={<PhoneEnabledIcon />}
                                title={t("contactPhone")}
                                subtitle="(+54) 11-6151-1893"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom
                                icon={<EmailIcon />}
                                title={t("contactEmail")}
                                subtitle="joaquinpettinari@hotmail.com"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom
                                icon={<AlternateEmailIcon />} 
                                title={t("contactSocialMedia")}
                                subtitle={getSubtitleInSocialMedia()}
                                />
                        </Grid>
                    </Grid>
                    <Paper className={mailContainer} elevation={3}>
                        <Grid container justifyContent="center" spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="h5" className={bold} >
                                    {t("contactLeaveMeYourMessage")}
                                </Typography>
                            </Grid>
                            { textFiledData.map(({name, label, validators, errorMessages}, key) =>  {
                                return (
                                    <Grid item xs={12} sm={4} key={key}>
                                        <TextValidator
                                            fullWidth
                                            name={name}
                                            onChange={onChangeInputs}
                                            value={textFieldData[name]}
                                            label={t(label)}
                                            validators={validators}
                                            errorMessages={errorMessages}
                                        />
                                    </Grid>
                                );
                            })}                           
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={textBox}                                    
                                    name="message"
                                    placeholder={t("contactMailMessage")}
                                    minRows={5}
                                    maxRows={8}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} className={submitButton}>
                            <JPButton
                                loading={loading.toString()}
                                label={t("contactMailSendMessage")}
                                type="submit"
                                fullWidth
                            />
                        </Grid>
                    </Paper>
                </Grid>
                <ModalAfterMail
                    open={isOpen}
                    icon={dataModal.iconModal}
                    title={dataModal.titleModal}
                    subtitle={dataModal.subtitleModal}
                    handleClose={handleCloseModal}
                />
            </Grid>
        </ValidatorForm>
    );
}

export default Contact;