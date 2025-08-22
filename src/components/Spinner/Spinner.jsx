import styles from "./Spinner.module.css";

export default function Spinner({ size = 32, label = "Loading…" }) {
  return (
    <div
      className={styles.wrap}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <svg
        className={styles.spinner}
        width={size}
        height={size}
        viewBox="0 0 50 50"
        aria-hidden="true"
      >
        <circle
          className={styles.track}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="6"
        />
        <circle
          className={styles.indicator}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="6"
        />
      </svg>
      <span className={styles.srOnly}>{label}</span>
    </div>
  );
}
