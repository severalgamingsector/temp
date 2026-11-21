import styles from "./styles.module.css"

export default function LogoCompany({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-2"]}>
        <div className={styles["container-8"]}>
          <div className={styles["fictional-company-logo-9-1"]}>
            <div className={styles["div-6"]}>
              <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/fwNGxJ4Z3p3ye56pNxlLfo4AQ.png?width=335&height=99"} alt="" />
            </div>
          </div>
        </div>
      </div>
  )
}
