import styles from "../styles/categoryLink.module.css";

export function getDomain(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("developer.mozilla.org")) return "mdn";
    if (host.includes("react.dev")) return "react";
    if (host.includes("nextjs.org")) return "next";
    if (host.includes("redux.js.org")) return "redux";
    if (host.includes("tailwindcss.com")) return "tailwind";
    if (host.includes("typescriptlang.org")) return "typescript";
    if (host.includes("vitejs.dev")) return "vite";
    if (host.includes("webpack.js.org")) return "webpack";
    if (host.includes("graphql.org")) return "graphql";
    if (host.includes("jwt.io")) return "jwt";
    if (host.includes("sass-lang.com")) return "sass";
    if (host.includes("lodash.com")) return "lodash";
    if (host.includes("docs.cypress.io")) return "cypress";
    if (host.includes("jestjs.io")) return "jest";
    if (host.includes("docker.com")) return "docker";
    if (host.includes("web.dev")) return "webdev";
    if (host.includes("postgresql.org")) return "postgresql";
    if (host.includes("pmnd.rs")) return "zustand";
    return "default";
  } catch {
    return "default";
  }
}

export function linkClassFor(category, domainKey) {
  // base + domenefarge
  const domainClass = styles[domainKey] || styles.default;
  return `${styles.link} ${domainClass}`;
}
