import styles from "./styles.module.css"

export default function Button3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["fit-5"]} href="./detail-service-2">
        <div className={styles["container-21"]}>
          <div className={styles["container-22"]}>
            <div className={styles["arrow"]}>
              <div className={styles["div-3"]} />
              <div className={styles["div-4"]} />
            </div>
            <div className={styles["text-box-6"]}>
              <div className={styles["get-a-quote-9"]}>
                <p className={styles["p-46"]}>{slots[0] ?? "NEXT SERVICES"}</p>
              </div>
              <div className={styles["get-a-quote-10"]}>
                <p className={styles["p-46"]}>{slots[1] ?? "NEXT SERVICES"}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
