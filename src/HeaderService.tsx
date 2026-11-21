import styles from "./styles.module.css"

export default function HeaderService({ slots = [] }: { slots?: string[] }) {
  return (
      <header className={styles["desktop-5"]}>
        <div className={styles["div-25"]}>
          <img className={styles["img-10"]} src={slots[0] ?? "https://framerusercontent.com/images/4arE3wgxmriQVFSw1MoeAJNEGM.png?scale-down-to=2048&width=2880&height=1242"} alt="" />
        </div>
        <div className={styles["heading-1"]}>
          <div className={styles["div-26"]}>
            <div className={styles["primary-6"]}>
              <div className={styles["logo-11"]}>
                <div className={styles["vector"]} />
              </div>
              <div className={styles["about-us-9"]}>
                <p className={styles["p-44"]}>{slots[1] ?? "SERVICE"}</p>
              </div>
            </div>
          </div>
          <div className={styles["heavy-cargo-2"]}>
            <h1 className={styles["h1"]}>
              <div className={styles["span-52"]}>
                <span className={styles["span-53"]}>{slots[2] ?? "H"}</span>
                <span className={styles["span-54"]}>{slots[3] ?? "E"}</span>
                <span className={styles["span-55"]}>{slots[4] ?? "A"}</span>
                <span className={styles["span-55"]}>{slots[5] ?? "V"}</span>
                <span className={styles["span-56"]}>{slots[6] ?? "Y"}</span>
              </div>
              {" "}
              <div className={styles["span-52"]}>
                <span className={styles["span-57"]}>{slots[7] ?? "C"}</span>
                <span className={styles["span-55"]}>{slots[8] ?? "A"}</span>
                <span className={styles["span-58"]}>{slots[9] ?? "R"}</span>
                <span className={styles["span-57"]}>{slots[10] ?? "G"}</span>
                <span className={styles["span-59"]}>{slots[11] ?? "O"}</span>
              </div>
            </h1>
          </div>
        </div>
        <div className={styles["overlay"]} />
      </header>
  )
}
