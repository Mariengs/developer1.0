import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyDictionary from "./pages/MyDictionary/Dictionary.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dictionary" replace />} />
        <Route path="/dictionary" element={<MyDictionary />} />
      </Routes>
    </Router>
  );
}
