import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";

type MyProps = { title: string; body: string; src: string; id: number };
class NewsCardComponent extends React.Component<MyProps, {}> {
  constructor(props: { title: string; body: string; src: string; id: number }) {
    super(props);
    this.state = props;
  }
  static defaultProps = {
    title: "Empty title",
    body: "Empty body",
    src: "https://images.unsplash.com/photo-1658183095401-523212b6df01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };
  render(): React.ReactNode {
    return (
      <Card
        className="paper-card"
        square={true}
        sx={{ backgroundColor: "#2e2e2e", position: "relative" }}
        elevation={24}
      >
        <CardMedia
          component={"img"}
          height={160}
          src={this.props.src}
        ></CardMedia>
        <CardContent>
          <Typography color="whitesmoke" variant="h4" className="title-content">
            {this.props.title}
          </Typography>
          <Typography>
            <br />
          </Typography>
          <div className="card-body">
            <Typography variant="body1" color="white" className="body-content">
              {this.props.body}
            </Typography>
          </div>
        </CardContent>
        <div className="card-footer">
          <Button className="footer-button" size="large">
            {this.props.id}
          </Button>
          <Button className="footer-button" size="large">
            Learn More
          </Button>
          <div className="avatar-container">
            <IconButton
              onClick={() => {
                window.location.href =
                  "../../profile/index.html?id=" + this.props.id.toString();
              }}
            >
              <Avatar className="avatar">F</Avatar>
            </IconButton>
          </div>
        </div>
      </Card>
    );
  }
}
export default NewsCardComponent;
