import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { I18nProvider } from "./i18n/I18nProvider.jsx";
import Nav from "./components/Nav/Nav.jsx";
import MyDictionary from "./pages/MyDictionary/Dictionary.jsx";
import VSCode from "./pages/VSCode/VSCode.jsx";

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MyDictionary />} />
          <Route path="/vscode" element={<VSCode />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}
