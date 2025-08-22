import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>Sorry, the page could not be found.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
