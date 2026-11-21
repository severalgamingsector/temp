import styles from "./styles.module.css"

export default function Badge({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary"] + " " + styles["rv-1"]} data-reveal>
        <div className={styles["logo-2"]}>
          <div className={styles["vector"]} />
        </div>
        <div className={styles["about-us-2"]}>
          <p className={styles["p-9"]}>{slots[0] ?? "ABOUT US"}</p>
        </div>
      </div>
  )
}
