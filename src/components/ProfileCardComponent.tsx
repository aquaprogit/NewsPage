import * as mat from "@mui/material";
import React from "react";
import {User} from "../services/user";
import {Paper} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import NumbersIcon from '@mui/icons-material/Numbers';
import Utils from "../services/utilities";
import WorkIcon from '@mui/icons-material/Work';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const leftStyle = {
    marginRight: '15px'
}
const rightStyle = {
    marginLeft: '15px'
}

const theme = mat.createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    verticalAlign: 'middle',
                    fontSize: '25px',
                    marginBottom: '3px',
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
    render() {
        return (
            <div className="container">
                <mat.ThemeProvider theme={theme}>
                    <Paper className="paper-container"
                        elevation={24}
                        style={
                            {backgroundColor: "background.paper"}
                    }>
                        <mat.Avatar className="user-avatar"
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
                        } </mat.Avatar>
                        <mat.Typography variant="h4" className="fullname-container">
                            <span>{
                                this.props.user.name
                            }</span>
                        </mat.Typography>
                        <mat.Typography variant="h6" color="text.secondary">
                            {
                            this.props.user.username
                        } </mat.Typography>
                        <mat.Grid container direction="row" justifyContent="center" alignItems="stretch" className="info-container">
                            <mat.Grid className="info-content" xs>
                                <Paper className="right"
                                    style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}>
                                    <div className="side-content">
                                        <mat.Typography variant="h4">Personal info</mat.Typography>
                                        <mat.Typography variant="h6">
                                            <span>{
                                                this.props.user.email
                                            }</span>
                                            <AlternateEmailIcon></AlternateEmailIcon>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <span>{
                                                this.props.user.phone
                                            }</span>
                                            <LocalPhoneIcon></LocalPhoneIcon>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <mat.Link color={"#1FF4F4"}

                                                href={
                                                    "https://" + this.props.user.website
                                            }>
                                                {
                                                this.props.user.website
                                            } </mat.Link>
                                            <LanguageIcon></LanguageIcon>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <span> {
                                                this.props.user.address.city + ", " + this.props.user.address.street + ", " + this.props.user.address.suite
                                            } </span>
                                            <HomeIcon></HomeIcon>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <span>{
                                                this.props.user.address.zipcode
                                            }</span>
                                            <NumbersIcon></NumbersIcon>
                                        </mat.Typography>
                                    </div>
                                </Paper>
                            </mat.Grid>
                            <mat.Grid>
                                <div style={
                                    {width: 20}
                                }></div>
                            </mat.Grid>
                            <mat.Grid className="info-content" xs>
                                <Paper style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}
                                    className="left">
                                    <div className="side-content">
                                        <mat.Typography variant="h4">Job info</mat.Typography>
                                        <mat.Typography variant="h6">
                                            <WorkIcon style={leftStyle}></WorkIcon>
                                            <span>{
                                                this.props.user.company.name
                                            }</span>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <TipsAndUpdatesIcon style={leftStyle}></TipsAndUpdatesIcon>
                                            <span>{
                                                this.props.user.company.catchPhrase
                                            }</span>
                                        </mat.Typography>
                                        <mat.Typography variant="h6">
                                            <HomeIcon style={leftStyle}></HomeIcon>
                                            <span> {
                                                this.props.user.company.bs
                                            } </span>
                                        </mat.Typography>
                                    </div>
                                </Paper>
                            </mat.Grid>
                        </mat.Grid>
                    </Paper>
                </mat.ThemeProvider>
            </div>
        );
    }
}
export default ProfilePageComponent;
