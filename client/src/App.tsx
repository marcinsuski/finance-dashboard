import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./pages/navbar";
import Dashboard from "./pages/dashboard";
import Predictions from "./pages/predictions";

function App() {
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        width="100%"
                        height="100%"
                        padding="1rem 2rem 4rem 2rem"
                    >
                        <Navbar />
                        <Routes>
                            <Route
                                path="/predictions"
                                element={<Predictions />}
                            />
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
