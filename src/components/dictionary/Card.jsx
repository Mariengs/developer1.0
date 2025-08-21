import styles from "./Card.module.css";

export default function Card({ children, isDark, className = "" }) {
  return (
    <div
      className={[
        styles.card,
        isDark ? styles.dark : styles.light,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
