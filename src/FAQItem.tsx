import styles from "./styles.module.css"

export default function FAQItem({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["closed"]}>
        <div className={styles["container-17"]}>
          <div className={styles["header"]}>
            <div className={styles["div-15"]}>
              <p className={styles["p-30"]}>{slots[0] ?? "01. What industries does Movora serve?"}</p>
            </div>
            <div className={styles["icon"]}>
              <div className={styles["div-16"]} />
            </div>
          </div>
          <div className={styles["answer"]}>
            <div className={styles["div-17"]}>
              <p className={styles["p-31"]}>{slots[1] ?? "Movora supports a wide range of industrial sectors, including mining, oil & gas, energy, construction, manufacturing, and large-scale infrastructure projects that require specialized logistics and transportation solutions."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
