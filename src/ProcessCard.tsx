import styles from "./styles.module.css"

export default function ProcessCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-4"]}>
        <div className={styles["container-13"]}>
          <div className={styles["image"]}>
            <div className={styles["div-11"]}>
              <img className={styles["img-3"]} src={slots[0] ?? "https://framerusercontent.com/images/DhNXzUaSKfT67AfM1cvdERD0900.svg?width=404&height=404"} alt="" />
            </div>
          </div>
          <div className={styles["container-14"]}>
            <div className={styles["frame-41"]}>
              <div className={styles["01-2"]}>
                <p className={styles["p-18"]}>{slots[1] ?? "01"}</p>
              </div>
              <div className={styles["industrial-assessment"]}>
                <h3 className={styles["h3-2"]}>{slots[2] ?? "INDUSTRIAL ASSESSMENT"}</h3>
              </div>
            </div>
            <div className={styles["cargo-requirement-analysis-and-assessment"]}>
              <p className={styles["p-19"]}>{slots[3] ?? "Cargo requirement analysis and assessment."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
