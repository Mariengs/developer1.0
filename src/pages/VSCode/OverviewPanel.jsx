import { useContext, useEffect } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import CodeBlock from "../../components/Code/CodeBlock.jsx";
import styles from "./OverviewPanel.module.css";

export default function OverviewPanel() {
  const { t } = useContext(I18nContext);

  useEffect(() => {
    document.title = t("vscode.title");
  }, [t]);

  return (
    <section className={styles.cards}>
      {/* Anbefalte utvidelser */}
      <article className={styles.card}>
        <h2 className={styles.h2}>
          {t("vscode.overview.sections.extensions")}
        </h2>
        <ul className={styles.ul}>
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
        <CodeBlock lang="jsonc">{`// .vscode/extensions.json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "eamodio.gitlens",
    "streetsidesoftware.code-spell-checker",
    "christian-kohler.path-intellisense",
    "wix.vscode-import-cost"
  ]
}`}</CodeBlock>
      </article>

      {/* Editor & filer (settings.json) */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.overview.sections.settings")}</h2>
        <p className={styles.muted}>{t("vscode.overview.text.settings")}</p>
        <CodeBlock lang="jsonc">{`// .vscode/settings.json
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
}`}</CodeBlock>
      </article>

      {/* Prettier + ESLint */}
      <article className={styles.card}>
        <h2 className={styles.h2}>
          {t("vscode.overview.sections.lintformat")}
        </h2>
        <p className={styles.muted}>{t("vscode.overview.text.lintformat")}</p>
        <CodeBlock lang="json">{`// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 100
}`}</CodeBlock>
        <CodeBlock lang="json">{`// .eslintrc.json
{
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  "parserOptions": { "ecmaVersion": 2022, "sourceType": "module", "ecmaFeatures": { "jsx": true } },
  "settings": { "react": { "version": "detect" } },
  "env": { "browser": true, "es2022": true },
  "rules": { "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] }
}`}</CodeBlock>
        <CodeBlock lang="json">{`// package.json (utdrag)
{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx",
    "format": "prettier -w ."
  }
}`}</CodeBlock>
      </article>

      {/* Snippets */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.overview.sections.snippets")}</h2>
        <p className={styles.muted}>{t("vscode.overview.text.snippets")}</p>
        <CodeBlock lang="jsonc">{`// .vscode/react-component.code-snippets
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
}`}</CodeBlock>
      </article>

      {/* Debug */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.overview.sections.debug")}</h2>
        <p className={styles.muted}>{t("vscode.overview.text.debug")}</p>
        <CodeBlock lang="jsonc">{`// .vscode/launch.json
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
}`}</CodeBlock>
      </article>

      {/* Git + EditorConfig */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.overview.sections.git")}</h2>
        <p className={styles.muted}>{t("vscode.overview.text.git")}</p>
        <CodeBlock lang="bash">{`# .gitignore (utdrag)
node_modules
dist
.vscode/*.log
.DS_Store
.env`}</CodeBlock>
        {/* Bruk 'properties' for å unngå ini-bundle-varsel */}
        <CodeBlock lang="properties">{`; .editorconfig
root = true

[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true`}</CodeBlock>
      </article>
    </section>
  );
}
