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
  Link,
} from "@mui/material";
import React from "react";
import { User } from "../services/user";
import { Paper } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22918d",
    },
    secondary: {
      main: "#e8a444",
    },
    error: {
      main: "#d75242",
    },
    background: {
      paper: "#2e2e2e",
      default: "#f7f7f7",
    },
    text: {
      primary: "#f7f7f7",
      secondary: "#adadad",
      disabled: "#5a5a5a",
    },
  },
});
type MyProps = { user: User };
class ProfilePageComponent extends React.Component<MyProps, {}> {
  constructor(props: { user: User }) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="container">
        <ThemeProvider theme={theme}>
          <Paper
            className="paper-container"
            elevation={24}
            style={{
              backgroundColor: "background.paper",
            }}
          >
            <Avatar
              className="user-avatar"
              sx={{
                bgcolor: deepOrange[700],
                height: 100,
                width: 100,
                fontSize: 32,
              }}
            >
              VG
            </Avatar>
            <Typography variant="h4" className="fullname-container">
              <span>Vlad</span> <span>Golovatyuk</span>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              aquaprogit
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              className="info-container"
            >
              <Grid className="info-content" xs>
                <Paper
                  className="right"
                  style={{ backgroundColor: "#3c3c3c", padding: "10 5" }}
                  elevation={24}
                >
                  <div className="side-content">
                    <Typography variant="h5">Personal info</Typography>
                    <Typography variant="body1">
                      email:&emsp;
                      <span>vladd.golovatyuk@gmail.com</span>
                    </Typography>
                    <Typography variant="body1">
                      phone:&emsp;
                      <span>1-777-546-3246 x5556</span>
                    </Typography>
                    <Typography variant="body1">
                      web:&emsp;
                      <Link href={"https://google.com"} variant="body2">
                        google.com
                      </Link>
                    </Typography>
                    <Typography variant="body1">
                      address:&emsp;
                      <span>Gwenbordough Kulas weilthweilth Apt 556</span>
                    </Typography>
                    <Typography variant="body1">
                      z-code:&emsp;
                      <span>vladd.golovatyuk@gmail.com</span>
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid>
                <div style={{ width: 20 }}></div>
              </Grid>
              <Grid className="info-content" xs>
                <Paper
                  style={{ backgroundColor: "#3c3c3c", padding: "10 5" }}
                  elevation={24}
                  className="left"
                >
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
