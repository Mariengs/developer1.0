import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MyDictionary from "../pages/MyDictionary/Dictionary.jsx";
// ...
<Router>
  <Routes>
    <Route path="/dictionary" element={<MyDictionary />} />
    {/* osv */}
  </Routes>
</Router>;
