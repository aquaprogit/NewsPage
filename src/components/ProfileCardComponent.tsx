import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Avatar,
    Button,
    IconButton,
    CardActions,
    Box,
    createTheme,
    ThemeProvider,
    CssBaseline,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Link
} from "@mui/material";
import React from "react";
import {User} from "../services/user";
import {Paper} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import {deepOrange} from "@mui/material/colors";

const theme = createTheme({
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
                <ThemeProvider theme={theme}>
                    <Paper className="paper-container"
                        elevation={24}
                        style={
                            {backgroundColor: "background.paper"}
                    }>
                        <Avatar className="user-avatar"
                            sx={
                                {
                                    bgcolor: this.generateColor(),
                                    height: 100,
                                    width: 100,
                                    fontSize: 32
                                }
                        }>
                            {
                            this.props.user.name[0] + this.props.user.name[this.props.user.name.indexOf(' ') + 1]
                        } </Avatar>
                        <Typography variant="h4" className="fullname-container">
                            <span>{
                                this.props.user.name
                            }</span>
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {
                            this.props.user.username
                        }
                            {" "} </Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="stretch" className="info-container">
                            <Grid className="info-content" xs>
                                <Paper className="right"
                                    style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}>
                                    <div className="side-content">
                                        <Typography variant="h4">Personal info</Typography>
                                        <Typography variant="h6">
                                            email:&emsp;
                                            <span>{
                                                this.props.user.email
                                            }</span>
                                        </Typography>
                                        <Typography variant="h6">
                                            phone:&emsp;
                                            <span>{
                                                this.props.user.phone
                                            }</span>
                                        </Typography>
                                        <Typography variant="h6">
                                            web:&emsp;
                                            <Link color={"secondary"}
                                                href={
                                                    "https://" + this.props.user.website
                                            }>
                                                {
                                                this.props.user.website
                                            }
                                                {" "} </Link>
                                        </Typography>
                                        <Typography variant="h6">
                                            address:&emsp;
                                            <span> {" "}
                                                {
                                                this.props.user.address.city + ", " + this.props.user.address.street + ", " + this.props.user.address.suite
                                            }
                                                {" "} </span>
                                        </Typography>
                                        <Typography variant="h6">
                                            z-code:&emsp;
                                            <span>{
                                                this.props.user.address.zipcode
                                            }</span>
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid>
                                <div style={
                                    {width: 20}
                                }></div>
                            </Grid>
                            <Grid className="info-content" xs>
                                <Paper style={
                                        {
                                            backgroundColor: "#3c3c3c",
                                            padding: "10 5"
                                        }
                                    }
                                    elevation={24}
                                    className="left">
                                    <div className="side-content">
                                        <Typography variant="h5">Job info</Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </div>
        );
    }
}
export default ProfilePageComponent;
