import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n.js";
import VscodeShortcutsPanel from "./VscodeShortcutsPanel.jsx";
import OverviewPanel from "./OverviewPanel.jsx";
import ProjectStructurePanel from "./ProjectStructurePanel.jsx";
import styles from "./VSCode.module.css";

export default function VSCode() {
  const { t } = useI18n();
  const [tab, setTab] = useState("overview");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    document.title = t("vscode.title") || "VSCode";
  }, [t]);

  useEffect(() => {
    const section = params.get("section");
    const valid =
      section === "overview" ||
      section === "shortcuts" ||
      section === "structure";
    const next = valid ? section : "overview";
    setTab(next);

    if (next && next !== "overview") {
      setTimeout(() => {
        document.getElementById(next)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [params]);

  const switchTab = (next) => {
    setTab(next);
    setParams({ section: next }, { replace: true });
  };

  return (
    <section className={styles.container}>
      <h1 style={{ marginTop: 0 }}>{t("vscode.title")}</h1>

      <div role="tablist" aria-label="VSCode sections" className={styles.tabs}>
        <button
          id="tab-overview"
          role="tab"
          aria-selected={tab === "overview"}
          aria-controls="panel-overview"
          onClick={() => switchTab("overview")}
          className={styles.tabBtn}
        >
          {t("vscode.tab.overview")}
        </button>
        <button
          id="tab-shortcuts"
          role="tab"
          aria-selected={tab === "shortcuts"}
          aria-controls="panel-shortcuts"
          onClick={() => switchTab("shortcuts")}
          className={styles.tabBtn}
        >
          {t("vscode.tab.shortcuts")}
        </button>
        <button
          id="tab-structure"
          role="tab"
          aria-selected={tab === "structure"}
          aria-controls="panel-structure"
          onClick={() => switchTab("structure")}
          className={styles.tabBtn}
        >
          {t("vscode.tab.structure")}
        </button>
      </div>

      {tab === "overview" && (
        <div id="panel-overview" role="tabpanel" aria-labelledby="tab-overview">
          <p style={{ color: "var(--muted)" }}>{t("vscode.overview.lead")}</p>
          <OverviewPanel />
        </div>
      )}

      {tab === "shortcuts" && (
        <div
          id="panel-shortcuts"
          role="tabpanel"
          aria-labelledby="tab-shortcuts"
        >
          <div id="shortcuts">
            <VscodeShortcutsPanel />
          </div>
        </div>
      )}

      {tab === "structure" && (
        <div
          id="panel-structure"
          role="tabpanel"
          aria-labelledby="tab-structure"
        >
          <div id="structure">
            <ProjectStructurePanel />
          </div>
        </div>
      )}
    </section>
  );
}
