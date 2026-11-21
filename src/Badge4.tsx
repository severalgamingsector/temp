import styles from "./styles.module.css"

export default function Badge4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-3"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "2416ms" }}>
        <div className={styles["logo-5"]}>
          <div className={styles["vector"]} />
        </div>
        <div className={styles["about-us-5"]}>
          <p className={styles["p-29"]}>{slots[0] ?? "FAQ"}</p>
        </div>
      </div>
  )
}
