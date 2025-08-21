export function getDomain(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("developer.mozilla.org")) return "mdn";
    if (host.includes("react.dev")) return "react.dev";
    if (host.includes("nextjs.org")) return "nextjs.org";
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
    if (host.includes("web.dev")) return "web.dev";
    if (host.includes("postgresql.org")) return "postgresql";
    if (host.includes("pmnd.rs")) return "zustand";
    return host;
  } catch {
    return "";
  }
}
