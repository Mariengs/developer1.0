// src/App.jsx
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Nav from "./components/Nav/Nav.jsx";
import MyDictionary from "./pages/MyDictionary/Dictionary.jsx";
import VSCode from "./pages/VSCode/VSCode.jsx"; // lag gjerne en enkel placeholder

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MyDictionary />} />
        <Route path="/vscode" element={<VSCode />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
