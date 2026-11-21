import styles from "./styles.module.css"

export default function Badge2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-2"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "1843ms" }}>
        <div className={styles["logo-3"]}>
          <div className={styles["vector"]} />
        </div>
        <div className={styles["about-us-3"]}>
          <p className={styles["p-15"]}>{slots[0] ?? "COMPLIANCE"}</p>
        </div>
      </div>
  )
}
