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
        </div>
    );
}

export default App;
