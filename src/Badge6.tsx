import styles from "./styles.module.css"

export default function Badge6({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-5"]}>
        <div className={styles["logo-10"]}>
          <div className={styles["vector"]} />
        </div>
        <div className={styles["about-us-8"]}>
          <p className={styles["p-41"]}>{slots[0] ?? "FUTURE DIRECTION"}</p>
        </div>
      </div>
  )
}
