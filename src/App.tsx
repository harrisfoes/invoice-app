import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import useTheme from "./hooks/useTheme";
import Header from "./components/Header";
import Demo from "./pages/Demo";
import { AddNewProvider } from "./context/AddNewContext";

function App() {
  const [theme, handleThemeSwitch] = useTheme();

  return (
    <>
      <BrowserRouter>
        <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <AddNewProvider>
          <Routes>
            <Route path="/invoice-app" element={<Home />} />
            <Route path="/invoice-app/:id" element={<Update />} />
            <Route path="/invoice-app/demo" element={<Demo />} />
          </Routes>
        </AddNewProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
