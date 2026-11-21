import styles from "./styles.module.css"

export default function ValueCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-7"]}>
        <div className={styles["container-19"]}>
          <div className={styles["div-23"]} />
          <div className={styles["text-box-5"]}>
            <div className={styles["safety-first"]}>
              <h3 className={styles["h3-8"]}>{slots[0] ?? "SAFETY FIRST"}</h3>
            </div>
            <div className={styles["safety-is-integrated-into-every-transportation-plan-operational-process-and-cargo-movement-we-execute"]}>
              <p className={styles["p-40"]}>{slots[1] ?? "Safety is integrated into every transportation plan, operational process, and cargo movement we execute."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
