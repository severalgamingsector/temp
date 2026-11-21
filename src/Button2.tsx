import styles from "./styles.module.css"

export default function Button2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["fit-3"]} href="./contact">
        <div className={styles["container-6"]}>
          <div className={styles["container-7"]}>
            <div className={styles["arrow"]}>
              <div className={styles["div-3"]} />
              <div className={styles["div-4"]} />
            </div>
            <div className={styles["text-box-3"]}>
              <div className={styles["get-a-quote-5"]}>
                <p className={styles["p-8"]}>{slots[0] ?? "GET A QUOTE"}</p>
              </div>
              <div className={styles["get-a-quote-6"]}>
                <p className={styles["p-8"]}>{slots[1] ?? "GET A QUOTE"}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
