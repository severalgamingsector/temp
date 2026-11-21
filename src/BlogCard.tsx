import styles from "./styles.module.css"

export default function BlogCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-6"]}>
        <div className={styles["profile-2"]}>
          <div className={styles["profile-3"]}>
            <div className={styles["div-18"]}>
              <img className={styles["img-7"]} src={slots[0] ?? "https://framerusercontent.com/images/wtKz2hRGVZTanTeFPTwlgLuMyRU.webp?scale-down-to=1024&width=1704&height=1136"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["container-18"]}>
          <div className={styles["how-heavy-cargo-transportation-drives-industrial-project-success"]}>
            <p className={styles["p-33"]}>{slots[1] ?? "THE FUTURE OF SUSTAINABLE INDUSTRIAL TRANSPORTATION"}</p>
          </div>
          <div className={styles["badges-2"]}>
            <div className={styles["badge-5"]}>
              <div className={styles["may-18-2026"]}>
                <p className={styles["p-34"]}>{slots[2] ?? "Jun 12, 2026"}</p>
              </div>
            </div>
            <div className={styles["badge-6"]}>
              <div className={styles["get-a-quote-5"]}>
                <p className={styles["p-35"]}>{slots[3] ?? "Sustainability"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
