import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Planet from "./pages/planet";
import Planets from "./pages/planets";
import theme from "./Theme";
import "./App.css";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/planets" element={<Planets/>} />
            <Route path="/planet/:slug" element={<Planet/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
