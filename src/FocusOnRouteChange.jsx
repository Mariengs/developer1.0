import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FocusOnRouteChange() {
  const loc = useLocation();
  useEffect(() => {
    const el = document.getElementById("main");
    el?.focus(); // flytt fokus til <main>
  }, [loc.pathname, loc.search, loc.hash]);
  return null;
}
