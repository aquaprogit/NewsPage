import {
    Button,
    Card,
    createTheme,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import React from "react";

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

// export class AddNewNewsConponent extends React.Component {

//     render(): React.ReactNode {
//         return ();
//     }
// }
