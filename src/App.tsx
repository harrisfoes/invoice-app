import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header";

function App() {
  const [theme, handleThemeSwitch] = useTheme();

  return (
    <>
      <BrowserRouter>
        <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <Routes>
          <Route path="/invoice-app" element={<Home />} />
          <Route path="/invoice-app/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
