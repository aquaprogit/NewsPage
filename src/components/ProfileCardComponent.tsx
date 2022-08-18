import * as material from "@mui/material";
import React from "react";
import {User} from "../services/user";
import {Paper} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import NumbersIcon from '@mui/icons-material/Numbers';
import Utils from "../services/utilities";


const themeInversed = material.createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    verticalAlign: 'middle',
                    fontSize: '25px',
                    marginBottom: '3px',
                    marginRight: '15px',
                    color: '#1FF4F4'
                }
            }
        }
    }
});

const theme = material.createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    verticalAlign: 'middle',
                    fontSize: '25px',
                    marginBottom: '3px',
                    marginLeft: '15px',
                    color: '#1FF4F4'
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#22918d"
        },
        secondary: {
            main: "#e8a444"
        },
        error: {
            main: "#d75242"
        },
        background: {
            paper: "#2e2e2e",
            default: "#f7f7f7"
        },
        text: {
            primary: "#f7f7f7",
            secondary: "#adadad",
            disabled: "#5a5a5a"
        }
    }
});

type MyProps = {
    user: User;
};
class ProfilePageComponent extends React.Component < MyProps, {} > {
    constructor(props : {
        user: User
    }) {
        super(props);
        this.state = props;
    }
    generateColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return `#${randomColor}`;
    };

    render() {
        return (
            <div className="container">
                <material.ThemeProvider theme={theme}>
                    <Paper className="paper-container"
                        elevation={24}
                        style={
                            {backgroundColor: "background.paper"}
                    }>
                        <material.Avatar className="user-avatar"
                            sx={
                                {
                                    bgcolor: Utils.generateColorFromName(this.props.user.name),
                                    height: 100,
                                    width: 100,
                                    fontSize: 32
                                }
                        }>
                            {
                            Utils.getInitialsFromName(this.props.user.name)
                        } </material.Avatar>
                        <material.Typography variant="h4" className="fullname-container">
                            <span>{
                                this.props.user.name
                            }</span>
                        </material.Typography>
                        <material.Typography variant="h6" color="text.secondary">
                            {
                            this.props.user.username
                        } </material.Typography>
                        <material.Grid container direction="row" justifyContent="center" alignItems="stretch" className="info-container">
                            <material.Grid className="info-content" xs>
                                <Paper className="right"
                                    style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}>
                                    <div className="side-content">
                                        <material.Typography variant="h4">Personal info</material.Typography>
                                        <material.Typography variant="h6">
                                            <span>{
                                                this.props.user.email
                                            }</span>
                                            <AlternateEmailIcon></AlternateEmailIcon>
                                        </material.Typography>
                                        <material.Typography variant="h6">
                                            <span>{
                                                this.props.user.phone
                                            }</span>
                                            <LocalPhoneIcon></LocalPhoneIcon>
                                        </material.Typography>
                                        <material.Typography variant="h6">
                                            <material.Link color={"#1FF4F4"}

                                                href={
                                                    "https://" + this.props.user.website
                                            }>
                                                {
                                                this.props.user.website
                                            } </material.Link>
                                            <LanguageIcon></LanguageIcon>
                                        </material.Typography>
                                        <material.Typography variant="h6">
                                            <span> {
                                                this.props.user.address.city + ", " + this.props.user.address.street + ", " + this.props.user.address.suite
                                            } </span>
                                            <HomeIcon></HomeIcon>
                                        </material.Typography>
                                        <material.Typography variant="h6">
                                            <span>{
                                                this.props.user.address.zipcode
                                            }</span>
                                            <NumbersIcon></NumbersIcon>
                                        </material.Typography>
                                    </div>
                                </Paper>
                            </material.Grid>
                            <material.Grid>
                                <div style={
                                    {width: 20}
                                }></div>
                            </material.Grid>
                            <material.Grid className="info-content" xs>
                                <Paper style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}
                                    className="left">
                                    <div className="side-content">
                                        <material.Typography variant="h4">Job info</material.Typography>
                                        <material.ThemeProvider theme={themeInversed}>
                                            <material.Typography variant="h6">
                                                <AlternateEmailIcon></AlternateEmailIcon>
                                                <span>{
                                                    this.props.user.email
                                                }</span>
                                            </material.Typography>
                                            <material.Typography variant="h6">
                                                <LocalPhoneIcon></LocalPhoneIcon>
                                                <span>{
                                                    this.props.user.phone
                                                }</span>
                                            </material.Typography>
                                            <material.Typography variant="h6">
                                                <LanguageIcon></LanguageIcon>
                                                <material.Link color={"#1FF4F4"}

                                                    href={
                                                        "https://" + this.props.user.website
                                                }>
                                                    {
                                                    this.props.user.website
                                                } </material.Link>
                                            </material.Typography>
                                            <material.Typography variant="h6">
                                                <HomeIcon></HomeIcon>
                                                <span> {
                                                    this.props.user.address.city + ", " + this.props.user.address.street + ", " + this.props.user.address.suite
                                                } </span>
                                            </material.Typography>
                                            <material.Typography variant="h6">
                                                <NumbersIcon></NumbersIcon>
                                                <span>{
                                                    this.props.user.address.zipcode
                                                }</span>
                                            </material.Typography>


                                        </material.ThemeProvider>
                                    </div>
                                </Paper>
                            </material.Grid>
                        </material.Grid>
                    </Paper>
                </material.ThemeProvider>
            </div>
        );
    }
}
export default ProfilePageComponent;
