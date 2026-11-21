import styles from "./styles.module.css"

export default function StartsCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-3"]}>
        <div className={styles["number-card"]}>
          <div className={styles["lower-delays"]}>
            <p className={styles["p-16"]}>{slots[0] ?? "Operational Rate"}</p>
          </div>
          <div className={styles["47"]}>
            <h2 className={styles["h2-2"]}>{slots[1] ?? "96%"}</h2>
          </div>
        </div>
      </div>
  )
}
