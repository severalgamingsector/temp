import styles from "./styles.module.css"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["fit-2"]} href="./contact">
        <div className={styles["container-4"]}>
          <div className={styles["container-5"]}>
            <div className={styles["arrow"]}>
              <div className={styles["div-3"]} />
              <div className={styles["div-4"]} />
            </div>
            <div className={styles["text-box-2"]}>
              <div className={styles["get-a-quote-3"]}>
                <p className={styles["p-7"]}>{slots[0] ?? "LET’S TALK"}</p>
              </div>
              <div className={styles["get-a-quote-4"]}>
                <p className={styles["p-7"]}>{slots[1] ?? "LET’S TALK"}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
