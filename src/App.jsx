import React, { useEffect, useState, Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import I18nProvider from "./i18n/I18nProvider.jsx";
import Nav from "./components/Nav/Nav.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PageLoader from "./components/Spinner/PageLoader.jsx";

// Lazy-load sider
const HomePage = lazy(() => import("./pages/Home/HomePage.jsx"));
const MyDictionary = lazy(() => import("./pages/MyDictionary/Dictionary.jsx"));
const VSCode = lazy(() => import("./pages/VSCode/VSCode.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Feedback = lazy(() => import("./pages/Feedback/Feedback.jsx"));

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
        <main id="main">
          <Suspense fallback={<PageLoader label="Loading" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dictionary" element={<MyDictionary />} />
              <Route path="/vscode" element={<VSCode />} />
              <Route path="/about" element={<About />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </I18nProvider>
  );
}
