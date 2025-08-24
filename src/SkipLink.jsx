export default function SkipLink() {
  const onActivate = (e) => {
    e.preventDefault();
    const el = document.getElementById("main");
    if (el) {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href="#main" className="skip-link sr-only" onClick={onActivate}>
      Hopp til hovedinnhold
    </a>
  );
}
