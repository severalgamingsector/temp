import styles from "./styles.module.css"

export default function ButtonForm({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["default"]}>
        <div className={styles["container-23"]}>
          <div className={styles["div-27"]}>
            <p className={styles["p-47"]}>{slots[0] ?? "SUBMIT"}</p>
          </div>
        </div>
      </button>
  )
}
