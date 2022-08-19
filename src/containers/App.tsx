import {
    Button,
    Card,
    createTheme,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import NewsCardComponent from "../components/NewsCardComponent";
import {useState, useEffect} from "react";
import {getPosts, PostData} from "../services/post";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({

    palette: {
        primary: {
            main: "#efa039"

        },
        secondary: {
            main: "#e8a444"
        },
        error: {
            main: "#d75242"
        },
        background: {
            paper: "#1c364b",


            default: "#f7f7f7"
        },
        text: {
            primary: "#e9ebf3",
            secondary: "#c0c0c0",
            disabled: "#5a5a5a"
        }
    }
});


function App() {
    const [posts, setPosts] = useState < PostData[] > ([]);
    useEffect(() => {
        let mounted = true;
        getPosts().then((items) => {
            if (mounted) {
                setPosts(items);
            }
        });
    }, []);
    return (
        <div className="app">
            <div className="side-bar-container">
                <Stack spacing={5}
                    className="stack">
                    {
                    posts.map((item) => (
                        <NewsCardComponent body={
                                item.body
                            }
                            title={
                                item.title
                            }
                            id={
                                item.userId
                            }/>
                    ))
                } </Stack>
            </div>
            <div className="add-menu"
                style={
                    {position: 'relative'}
            }>
                <ThemeProvider theme={theme}>
                    <Card className="body-card"
                        style={
                            {position: 'relative'}
                    }>
                        <Typography variant="h4"
                            style={
                                {marginTop: 20}
                            }
                            className="card-header">
                            Add new post
                        </Typography>
                        <TextField className="field"
                            style={
                                {
                                    marginLeft: '30px',
                                    marginTop: '20px'
                                }
                            }
                            label="Title"
                            variant="standard"/>
                        <TextField className="field"
                            style={
                                {
                                    marginLeft: '30px',
                                    marginTop: '20px',
                                    maxHeight: '90px'
                                }
                            }
                            label="Body"
                            placeholder="Content text..."
                            multiline
                            variant="standard"/>
                        <div className="card-footer">
                            <Button variant="contained" color="warning"
                                style={
                                    {marginRight: 20}
                            }>
                                Publish
                            </Button>
                        </div>

                    </Card>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default App;
