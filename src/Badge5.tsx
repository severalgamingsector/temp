import styles from "./styles.module.css"

export default function Badge5({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-4"] + " " + styles["rv-1"]} data-reveal>
        <div className={styles["logo-6"]}>
          <div className={styles["vector"]} />
        </div>
        <div className={styles["about-us-6"]}>
          <p className={styles["p-32"]}>{slots[0] ?? "BLOG"}</p>
        </div>
      </div>
  )
}
