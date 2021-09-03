import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    FormControl,
    Select,
  } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../translation';
import spainImage from '../../assets/spain.png'
import englandImage from '../../assets/england.png'
import { useScrollSection } from "react-scroll-section";
  
  
  const useStyles = makeStyles(() => ({   
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {      
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
      textTransform: 'capitalize'
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
    menuButtonDesktop:{
      fontWeight:'bold',
      fontSize:'1em'
    }
  }));
  
  export default function NavBar({ onClickSectionButtons }) {
    const { logo, menuButton, toolbar, drawerContainer, menuButtonDesktop } = useStyles();
    const { t } = useTranslation()
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');
    const jobsSection = useScrollSection('jobs');
    const studysSection = useScrollSection('studys');
    const contactSection = useScrollSection('contact');  
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;

    const headersData = [
        {
            label: t("buttonHome"),
            section: homeSection,
        },
        {
            label: t("buttonAbout"),
            section: aboutSection,
        },
        {
            label: t("buttonJobs"),
            section: jobsSection,
        },
        {
            label: t("buttonStudys"),
            section: studysSection,
        },
        {
            label: t("buttonContact"),
            section: contactSection
        }
    ];
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {joaquinPettinariLogo}
          <div>{getMenuButtons()}</div>
          <div>{getLanguageInput()}</div>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar className={toolbar}>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>          
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >            
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
            
          <div>{joaquinPettinariLogo}</div>
          <div>{getLanguageInput()}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, section }) => {
        return (
          <Link
            {...{
              // component: RouterLink,
              // to: href,
              onClick: section.onClick,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem >{label}</MenuItem>
          </Link>
        );
      });
    };

    const getLanguageInput = () => {
        return (
            <FormControl>                
                <Select
                value={i18n.language}
                onChange={handleChangeLanguage}                
                displayEmpty
                disableUnderline
                >
                  <MenuItem value="en"><img src={englandImage} alt="Spain Icon" /></MenuItem>
                  <MenuItem value="sp"><img src={spainImage} alt="British Icon" /></MenuItem>
                </Select>
            </FormControl>
        )
    }

    const handleChangeLanguage = (event) => {    
        i18n.changeLanguage(event.target.value);        
      };
  
    const joaquinPettinariLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        JP
      </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, section }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              // to: href,
              // component: RouterLink,
              onClick: section.onClick,
              className: `${menuButton} ${menuButtonDesktop}`,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header style={{ display:'flex'}}>
        <AppBar color="primary">
          {mobileView ? displayMobile() : displayDesktop()}        
        </AppBar>
      </header>
    );
  }