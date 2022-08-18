import {Stack} from "@mui/material";
import NewsCardComponent from "../components/NewsCardComponent";
import {useState, useEffect} from "react";
import {getPosts, PostData} from "../services/post";

function App() {
    const [posts, setPosts] = useState < PostData[] > ([]);
    useEffect(() => {
        console.log('HH')
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
