import { useContext, useEffect } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";

function Code({ children }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (e) {
      void e;
    }
  };
  return (
    <div style={{ position: "relative", margin: "0.5rem 0 1rem" }}>
      <button
        onClick={copy}
        style={{
          position: "absolute",
          right: 8,
          top: 8,
          fontSize: 12,
          padding: "4px 8px",
          borderRadius: 8,
          border: "1px solid var(--card-border)",
          background: "var(--surface-2)",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        Copy
      </button>
      <pre
        style={{
          margin: 0,
          padding: "0.75rem 1rem",
          overflow: "auto",
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
        }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function OverviewPanel() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    document.title = t("vscode.title");
  }, [t]);

  return (
    <section style={{ display: "grid", gap: "1.25rem" }}>
      {/* Anbefalte utvidelser */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.extensions")}</h2>
        <ul style={ulMuted}>
          <li>
            ESLint (<code>dbaeumer.vscode-eslint</code>)
          </li>
          <li>
            Prettier (<code>esbenp.prettier-vscode</code>)
          </li>
          <li>
            GitLens (<code>eamodio.gitlens</code>)
          </li>
          <li>
            Code Spell Checker (
            <code>streetsidesoftware.code-spell-checker</code>)
          </li>
          <li>
            Path Intellisense (<code>christian-kohler.path-intellisense</code>)
          </li>
          <li>
            Import Cost (<code>wix.vscode-import-cost</code>)
          </li>
          {/* legg til Tailwind IntelliSense hvis prosjektet bruker Tailwind */}
        </ul>
        <p style={{ marginTop: 8 }}>
          {t("vscode.overview.tip.recommendations")}
        </p>
        <Code>{`// .vscode/extensions.json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "eamodio.gitlens",
    "streetsidesoftware.code-spell-checker",
    "christian-kohler.path-intellisense",
    "wix.vscode-import-cost"
  ]
}`}</Code>
      </article>

      {/* Editor & filer (settings.json) */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.settings")}</h2>
        <p style={muted}>{t("vscode.overview.text.settings")}</p>
        <Code>{`// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80, 120],
  "files.eol": "\\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "emmet.includeLanguages": { "javascript": "javascriptreact" },
  "search.exclude": { "**/node_modules": true, "**/dist": true },
  "files.exclude": { "**/node_modules": true, "**/dist": true }
}`}</Code>
      </article>

      {/* Prettier + ESLint */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.lintformat")}</h2>
        <p style={muted}>{t("vscode.overview.text.lintformat")}</p>
        <Code>{`// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 100
}`}</Code>
        <Code>{`// .eslintrc.json
{
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  "parserOptions": { "ecmaVersion": 2022, "sourceType": "module", "ecmaFeatures": { "jsx": true } },
  "settings": { "react": { "version": "detect" } },
  "env": { "browser": true, "es2022": true },
  "rules": { "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] }
}`}</Code>
        <Code>{`// package.json (utdrag)
{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx",
    "format": "prettier -w ."
  }
}`}</Code>
      </article>

      {/* Snippets */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.snippets")}</h2>
        <p style={muted}>{t("vscode.overview.text.snippets")}</p>
        <Code>{`// .vscode/react-component.code-snippets
{
  "React FC": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "export default function \${1:ComponentName}(\${2:props}) {",
      "  return <div>\${1:ComponentName}</div>;",
      "}"
    ],
    "description": "React functional component"
  },
  "clg": {
    "prefix": "clg",
    "body": ["console.log('▶', \${1:val});"],
    "description": "console.log"
  }
}`}</Code>
      </article>

      {/* Debug */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.debug")}</h2>
        <p style={muted}>{t("vscode.overview.text.debug")}</p>
        <Code>{`// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome: Vite",
      "request": "launch",
      "type": "pwa-chrome",
      "url": "http://localhost:5173",
      "webRoot": "\${workspaceFolder}/src"
    }
  ]
}`}</Code>
      </article>

      {/* Git + EditorConfig */}
      <article style={card}>
        <h2 style={h2}>{t("vscode.overview.sections.git")}</h2>
        <p style={muted}>{t("vscode.overview.text.git")}</p>
        <Code>{`# .gitignore (utdrag)
node_modules
dist
.vscode/*.log
.DS_Store
.env`}</Code>
        <Code>{`; .editorconfig
root = true

[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true`}</Code>
      </article>
    </section>
  );
}

const card = {
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
  borderRadius: 14,
  padding: "1rem",
};
const h2 = { margin: "0 0 .25rem" };
const muted = { color: "var(--muted)", marginTop: 0 };
const ulMuted = { color: "var(--text)", marginTop: 0, paddingLeft: "1.2rem" };
