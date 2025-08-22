import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import I18nProvider from "./i18n/I18nProvider.jsx";
import Nav from "./components/Nav/Nav.jsx";
import MyDictionary from "./pages/MyDictionary/Dictionary.jsx";
import VSCode from "./pages/VSCode/VSCode.jsx";
import HomePage from "./pages/Home/HomePage";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer/Footer.jsx";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (a) {
    void a;
  }
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  )?.matches;
  return prefersDark ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (a) {
      void a;
    }
  }, [theme]);

  return (
    <I18nProvider>
      <Router>
        <ScrollToTop />
        <Nav theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dictionary" element={<MyDictionary />} />
          <Route path="/vscode" element={<VSCode />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </I18nProvider>
  );
}
