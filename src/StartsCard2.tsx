import styles from "./styles.module.css"

export default function StartsCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-5"]}>
        <div className={styles["number-card-2"]}>
          <div className={styles["lower-delays-4"]}>
            <p className={styles["p-25"]}>{slots[0] ?? "Lower Delays"}</p>
          </div>
          <div className={styles["47"]}>
            <h2 className={styles["h2-2"]}>{slots[1] ?? "47%"}</h2>
          </div>
        </div>
      </div>
  )
}
