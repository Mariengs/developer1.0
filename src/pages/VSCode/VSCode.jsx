import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { I18nContext } from "../../i18n/I18nContext.js";
import VscodeShortcutsPanel from "./VscodeShortcutsPanel.jsx";
import OverviewPanel from "./OverviewPanel.jsx";
import styles from "./VSCode.module.css";

export default function VSCode() {
  const { t } = useContext(I18nContext);
  const [tab, setTab] = useState("overview");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    document.title = t("vscode.title");
  }, [t]);

  useEffect(() => {
    const section = params.get("section");
    if (section === "shortcuts") {
      setTab("shortcuts");
      setTimeout(() => {
        document
          .getElementById("shortcuts")
          ?.scrollIntoView({ behavior: "smooth" });
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
          role="tab"
          aria-selected={tab === "overview"}
          onClick={() => switchTab("overview")}
          className={styles.tabBtn}
        >
          {t("vscode.tab.overview")}
        </button>
        <button
          role="tab"
          aria-selected={tab === "shortcuts"}
          onClick={() => switchTab("shortcuts")}
          className={styles.tabBtn}
        >
          {t("vscode.tab.shortcuts")}
        </button>
      </div>

      {tab === "overview" && (
        <div>
          <p style={{ color: "var(--muted)" }}>{t("vscode.overview.lead")}</p>
          <OverviewPanel />
        </div>
      )}

      {tab === "shortcuts" && (
        <div id="shortcuts">
          <VscodeShortcutsPanel />
        </div>
      )}
    </section>
  );
}
