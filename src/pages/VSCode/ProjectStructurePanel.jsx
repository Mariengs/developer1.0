import { useContext } from "react";
import { I18nContext } from "../../i18n/I18nContext.js";
import CodeBlock from "../../components/Code/CodeBlock.jsx";
import styles from "./ProjectStructurePanel.module.css";

export default function ProjectStructurePanel() {
  const { t } = useContext(I18nContext);

  return (
    <section className={styles.wrap}>
      <p className={styles.lead}>{t("vscode.structure.lead")}</p>

      {/* React + Vite */}
      <article className={styles.card}>
        <h2 className={styles.h2}>
          {t("vscode.structure.sections.reactVite")}
        </h2>
        <CodeBlock lang="text">{`my-app/
  public/
  src/
    assets/
    components/
    hooks/
    lib/
    pages/
    styles/
    App.jsx
    main.jsx
  .editorconfig
  .eslintrc.json
  .prettierrc
  index.html
  package.json
  vite.config.js`}</CodeBlock>
        <ul className={styles.ul}>
          <li>
            <strong>components/</strong>:{" "}
            {t("vscode.structure.reactVite.points.components")}
          </li>
          <li>
            <strong>pages/</strong>:{" "}
            {t("vscode.structure.reactVite.points.pages")}
          </li>
          <li>
            <strong>hooks/</strong>:{" "}
            {t("vscode.structure.reactVite.points.hooks")}
          </li>
          <li>
            <strong>lib/</strong>: {t("vscode.structure.reactVite.points.lib")}
          </li>
          <li>
            <strong>styles/</strong>:{" "}
            {t("vscode.structure.reactVite.points.styles")}
          </li>
        </ul>
      </article>

      {/* Next.js */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.structure.sections.next")}</h2>
        <CodeBlock lang="text">{`my-next-app/
  app/
    (marketing)/
    (app)/
    api/
    layout.tsx
    page.tsx
  components/
  lib/
  public/
  styles/
  next.config.js
  package.json`}</CodeBlock>
        <ul className={styles.ul}>
          <li>
            <strong>app/</strong>: {t("vscode.structure.next.points.app")}
          </li>
          <li>
            <strong>(groups)/</strong>:{" "}
            {t("vscode.structure.next.points.groups")}
          </li>
          <li>
            <strong>lib/</strong>: {t("vscode.structure.next.points.lib")}
          </li>
          <li>
            <strong>components/</strong>:{" "}
            {t("vscode.structure.next.points.components")}
          </li>
        </ul>
      </article>

      {/* Node/Express */}
      <article className={styles.card}>
        <h2 className={styles.h2}>
          {t("vscode.structure.sections.nodeExpress")}
        </h2>
        <CodeBlock lang="text">{`api/
  src/
    routes/
    controllers/
    services/
    models/
    middlewares/
    utils/
    index.js
  .env
  .editorconfig
  .eslintrc.json
  package.json`}</CodeBlock>
        <ul className={styles.ul}>
          <li>
            <strong>routes/</strong>: {t("vscode.structure.node.points.routes")}
          </li>
          <li>
            <strong>controllers/</strong>:{" "}
            {t("vscode.structure.node.points.controllers")}
          </li>
          <li>
            <strong>services/</strong>:{" "}
            {t("vscode.structure.node.points.services")}
          </li>
          <li>
            <strong>models/</strong>: {t("vscode.structure.node.points.models")}
          </li>
          <li>
            <strong>middlewares/</strong>:{" "}
            {t("vscode.structure.node.points.middlewares")}
          </li>
        </ul>
      </article>

      {/* Monorepo */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.structure.sections.monorepo")}</h2>
        <CodeBlock lang="text">{`my-workspace/
  packages/
    web/        # vite/next app
    api/        # express service
    ui/         # shared components
    config/     # eslint, tsconfig, prettier
  pnpm-workspace.yaml
  package.json`}</CodeBlock>
        <ul className={styles.ul}>
          <li>
            <strong>ui/</strong>: {t("vscode.structure.monorepo.points.ui")}
          </li>
          <li>
            <strong>config/</strong>:{" "}
            {t("vscode.structure.monorepo.points.config")}
          </li>
          <li>
            <strong>pnpm workspaces</strong>:{" "}
            {t("vscode.structure.monorepo.points.pnpm")}
          </li>
        </ul>
      </article>

      {/* Prinsipper */}
      <article className={styles.card}>
        <h2 className={styles.h2}>{t("vscode.structure.sections.rules")}</h2>
        <ul className={styles.ul}>
          <li>{t("vscode.structure.rules.sepPresentationLogic")}</li>
          <li>{t("vscode.structure.rules.srp")}</li>
          <li>{t("vscode.structure.rules.noDumpUtils")}</li>
          <li>{t("vscode.structure.rules.importDirection")}</li>
          <li>{t("vscode.structure.rules.barrels")}</li>
        </ul>
      </article>

      {/* Sjekkliste */}
      <article className={styles.card}>
        <h2 className={styles.h2}>
          {t("vscode.structure.sections.checklist")}
        </h2>
        <ul className={styles.ul}>
          <li>{t("vscode.structure.checklist.setup")}</li>
          <li>{t("vscode.structure.checklist.discoverability")}</li>
          <li>{t("vscode.structure.checklist.modularity")}</li>
          <li>{t("vscode.structure.checklist.scripts")}</li>
        </ul>
      </article>
    </section>
  );
}
