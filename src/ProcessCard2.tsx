import styles from "./styles.module.css"

export default function ProcessCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-4"]}>
        <div className={styles["container-13"]}>
          <div className={styles["image"]}>
            <div className={styles["div-11"]}>
              <img className={styles["img-4"]} src={slots[0] ?? "https://framerusercontent.com/images/JkwP2l4zED09ZUEEgSd6jyOhkoQ.png?width=340&height=340"} alt="" />
            </div>
          </div>
          <div className={styles["container-14"]}>
            <div className={styles["frame-41-2"]}>
              <div className={styles["01-3"]}>
                <p className={styles["p-20"]}>{slots[1] ?? "03"}</p>
              </div>
              <div className={styles["industrial-assessment-2"]}>
                <h3 className={styles["h3-3"]}>{slots[2] ?? "DELIVER & OPTIMIZE"}</h3>
              </div>
            </div>
            <div className={styles["cargo-requirement-analysis-and-assessment"]}>
              <p className={styles["p-19"]}>{slots[3] ?? "Project completion and final verification."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
