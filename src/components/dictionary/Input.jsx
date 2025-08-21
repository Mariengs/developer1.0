import { Search } from "lucide-react";
import styles from "./Input.module.css";

export default function Input({ value, onChange, placeholder }) {
  return (
    <div className={styles.row}>
      <Search className={styles.icon} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.field}
      />
    </div>
  );
}
