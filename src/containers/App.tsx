import { Stack } from "@mui/material";
import NewsCardComponent from "../components/NewsCardComponent";
import { fetchPosts } from "../components/NewsCardComponent";
import { useState, useEffect } from 'react';
import { getPosts, PostData } from "../services/post";
import React from 'react';

function App() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    let mounted = true;
    getPosts()
      .then(items => {
        if (mounted) {
          setPosts(items)
        }
      });
  }, []);
      return (
    <div className="app">
      <div className="side-bar-container">
            {posts.map(item => <NewsCardComponent body={item.body} title={item.title} src={'https://thumbs.dreamstime.com/b/news-paper-background-indoor-hand-made-taken-lahore-pakistan-171259538.jpg'} />)}
      </div>
      <div className="content">
        <p>content gocontent goes herecontent goes herecontent goes herecontent goes herecontent goes herecontent goes hecontent goes herecontent goes herecontent goes herecontent goes herecontent goes herecontent goes hererecontent goes herecontent goes herecontent goes herecontent goes herecontent goes herees here</p>
      </div>
    </div>
  )
}

export default App;