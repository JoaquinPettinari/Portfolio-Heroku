import { Grid, makeStyles, Paper, TextareaAutosize } from "@material-ui/core";
import PaperCustom from "./PaperCustom";
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import JPButton from '../JPButton'
import emailjs from 'emailjs-com';
import { MAIL_SERVICE_ID, MAIL_TEMPLATE_ID, MAIL_USER_ID } from "../../constants";

const useStyles = makeStyles(() => ({
    root:{        
        minHeight:'50vh',
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
    }

}))


function Contact(){
    const { root, mailContainer, textBox, submitButton } = useStyles();    
    
    const sendMail = (e) => {        
        emailjs.sendForm(MAIL_SERVICE_ID, MAIL_TEMPLATE_ID , e.target, MAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    const goToLinkedin = () => {
        window.open("https://www.linkedin.com/in/joaquin-pettinari/", "_blank")
    }

    const goToInstagram = () => {
        window.open("https://www.instagram.com/joacoopettinari/", "_blank")
    }

    const getSubtitleInSocialMedia = () => {
        return(
            <>
                <LinkedInIcon onClick={goToLinkedin} />
                <InstagramIcon onClick={goToInstagram} />
            </>
        )
    }

    return(
        <ValidatorForm onSubmit={sendMail}>            
            <Grid container className={root} justifyContent="center">
                <Grid item xs={11}>
                    <Grid container justifyContent="center" spacing={3} >
                        <Grid item xs={11} sm={5} md={3}>
                            <PaperCustom
                                icon={<HomeIcon />}
                                title="Location"
                                subtitle="Castelar, Buenos Aires"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom 
                                icon={<PhoneEnabledIcon />}
                                title="Phone"
                                subtitle="(+54) 11-6151-1893"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom
                                icon={<EmailIcon />}
                                title="Email"
                                subtitle="joaquinpettinari@hotmail.com"
                                />
                        </Grid>
                        <Grid item xs={11} sm={5} md={3} >
                            <PaperCustom
                                icon={<AlternateEmailIcon />} 
                                title="Social media"
                                subtitle={getSubtitleInSocialMedia()}
                                />
                        </Grid>
                    </Grid>
                    <Paper className={mailContainer}>
                        <Grid container justifyContent="center" spacing={4}>
                            <Grid item xs={12} sm={4}>
                                <TextValidator
                                    fullWidth
                                    name="subject"
                                    label="Subject"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextValidator
                                    fullWidth
                                    name="name"
                                    label="Nombre"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextValidator
                                    fullWidth
                                    name="email"
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={textBox}                                    
                                    name="message"
                                    placeholder="Mensaje"
                                    minRows={5}
                                    maxRows={8}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} className={submitButton}>
                            <JPButton
                                label="Send message"
                                type="submit"
                                fullWidth
                            />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </ValidatorForm>
    );
}

export default Contact;