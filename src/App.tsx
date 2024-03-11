import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, handleThemeSwitch] = useTheme();

  return (
    <>
      <BrowserRouter>
        <header className="bg-amber-200">This is the header</header>
        <button onClick={handleThemeSwitch}>Switch Theme: {theme}</button>
        <Routes>
          <Route path="/invoice-app" element={<Home />} />
          <Route path="/invoice-app/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
