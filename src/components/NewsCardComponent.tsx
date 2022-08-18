import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Avatar,
    Button,
    IconButton,
    Grid
} from "@mui/material";
import React from "react";
import {getUser} from "../containers/ProfilePage";
import Utils from '../services/utilities';

type MyProps = {
    title: string;
    body: string;
    src: string;
    id: number;
};
class NewsCardComponent extends React.Component < MyProps, {} > {
    private name: string = "";
    constructor(props : {
        title: string;
        body: string;
        src: string;
        id: number;
    }) {
        super(props);
        this.state = props;
        getUser(this.props.id).then(user => {
            this.name = user.name;
        });
    }
    static defaultProps = {
        title: "Empty title",
        body: "Empty body",
        src: "https://thumbs.dreamstime.com/b/news-paper-background-indoor-hand-made-taken-lahore-pakistan-171259538.jpg"
    };
    render() {
        return (
            <Card className="paper-card"
                square={true}
                sx={
                    {
                        backgroundColor: "#2e2e2e",
                        position: "relative"
                    }
                }
                elevation={24}>
                <CardMedia component={"img"}
                    height={160}
                    src={
                        this.props.src
                }></CardMedia>
                <CardContent>
                    <Typography color="whitesmoke" variant="h4" className="title-content">
                        {
                        this.props.title
                    } </Typography>
                    <Typography>
                        <br/>
                    </Typography>
                    <div className="card-body">
                        <Typography variant="body1" color="white" className="body-content">
                            {
                            this.props.body
                        } </Typography>
                    </div>
                </CardContent>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-end"
                    style={
                        {
                            position: 'absolute',
                            bottom: 10,
                            padding: '0 10px'
                        }
                }>
                    <Grid xs={10}
                        container
                        justifyContent='flex-start'>
                        <Button className="footer-button" size="large">Share</Button>
                        <Button className="footer-button" size="large">Learn More</Button>
                    </Grid>

                    <Grid className="avatar-container" xs>
                        <IconButton onClick={
                            () => {
                                window.location.href = "../../profile/index.html?id=" + this.props.id.toString();
                            }
                        }>
                            <Avatar className="avatar"
                                sx={
                                    {
                                        bgcolor: Utils.generateColorFromName(this.name)
                                    }
                            }>
                                {
                                Utils.getInitialsFromName(this.name)
                            }</Avatar>
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
export default NewsCardComponent;
