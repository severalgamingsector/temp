import styles from "./styles.module.css"

export default function FounderCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-8"]}>
        <div className={styles["profile-4"]}>
          <div className={styles["div-24"]}>
            <img className={styles["img-9"]} src={slots[0] ?? "https://framerusercontent.com/images/4hVeK6uwFEvj1e5tf7POgQLTU2Q.jpg?width=800&height=538"} alt="" />
          </div>
        </div>
        <div className={styles["founder-name"]}>
          <div className={styles["julio-arafa"]}>
            <p className={styles["p-42"]}>{slots[1] ?? "LUCA BANNET"}</p>
          </div>
          <div className={styles["founder-ceo"]}>
            <p className={styles["p-43"]}>{slots[2] ?? "Founder & CEO"}</p>
          </div>
        </div>
      </div>
  )
}
