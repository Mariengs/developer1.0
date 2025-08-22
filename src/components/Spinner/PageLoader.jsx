import { useEffect } from "react";
import Spinner from "./Spinner.jsx";

export default function PageLoader({ label = "Loading…" }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${label} • ${prevTitle}`;
    return () => {
      document.title = prevTitle;
    };
  }, [label]);

  return (
    <div style={{ minHeight: "40vh", display: "grid", placeItems: "center" }}>
      <Spinner size={40} label={label} />
    </div>
  );
}
