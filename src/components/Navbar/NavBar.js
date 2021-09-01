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
import { Link as RouterLink } from "react-router-dom";
import i18n from '../../translation';
import spainImage from '../../assets/spain.png'
import englandImage from '../../assets/england.png'
  
  
  const useStyles = makeStyles(() => ({   
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function NavBar() {
    const { logo, menuButton, toolbar, drawerContainer, flexGrowOnMobile } = useStyles();
    const { t } = useTranslation()
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;

    const headersData = [
        {
            label: t("buttonHome"),
            href: "/listings",
        },
        {
            label: t("buttonAbout"),
            href: "/mentors",
        },
        {
            label: t("buttonJobs"),
            href: "/account",
        },
        {
            label: t("buttonStudys"),
            href: "/logout",
        },
        {
            label: t("buttonContact"),
            href: "/contact"
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
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
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
                    <MenuItem value="en"><img src={englandImage} /></MenuItem>
                    <MenuItem value="sp"><img src={spainImage} /></MenuItem>
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
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
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