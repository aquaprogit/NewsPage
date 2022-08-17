import { Stack } from "@mui/material";
import NewsCardComponent from "../components/NewsCardComponent";

function App() {
  return (
    <div className="app">
      <div className="side-bar-container">
        <Stack spacing={2}>
          <NewsCardComponent/>
          <NewsCardComponent/>
          <NewsCardComponent/>
        </Stack>
      </div>
      <div className="content">
        <p>content gocontent goes herecontent goes herecontent goes herecontent goes herecontent goes herecontent goes hecontent goes herecontent goes herecontent goes herecontent goes herecontent goes herecontent goes hererecontent goes herecontent goes herecontent goes herecontent goes herecontent goes herees here</p>
      </div>
    </div>
  )
}

export default App;