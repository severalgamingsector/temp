import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function NavigationBar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["container"]}>
          <a className={styles["logo"]} href="./">
            <div className={styles["logomark"]}>
              <div className={styles["div"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 25 32\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"11\"><use href=\"#svg-448492977_306\" data-f2c-idx=\"12\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["movora"]}>
              <p className={styles["p"]}>{slots[0] ?? "MOVORA"}</p>
            </div>
          </a>
          <div className={styles["gap-40-horizontal"]}>
            <div className={styles["services"]}>
              <div className={styles["p-2"]}>
                <a className={styles["a"]} href="./#services">{slots[1] ?? "SERVICES"}</a>
              </div>
            </div>
            <div className={styles["about-us"]}>
              <div className={styles["p-3"]}>
                <a className={styles["a"]} href="./about">{slots[2] ?? "ABOUT US"}</a>
              </div>
            </div>
            <div className={styles["pricing"]}>
              <div className={styles["p-4"]}>
                <a className={styles["a"]} href="./pricing">{slots[3] ?? "PRICING"}</a>
              </div>
            </div>
            <div className={styles["blog"]}>
              <div className={styles["p-5"]}>
                <a className={styles["a"]} href="./blog">{slots[4] ?? "BLOG"}</a>
              </div>
            </div>
            <div className={styles["div-2"]}>
              <a className={styles["fit"]} href="./contact">
                <div className={styles["container-2"]}>
                  <div className={styles["container-3"]}>
                    <div className={styles["arrow"]}>
                      <div className={styles["div-3"]} />
                      <div className={styles["div-4"]} />
                    </div>
                    <div className={styles["text-box"]}>
                      <div className={styles["get-a-quote"]}>
                        <p className={styles["p-6"]}>{slots[5] ?? "LET’S TALK"}</p>
                      </div>
                      <div className={styles["get-a-quote-2"]}>
                        <p className={styles["p-6"]}>{slots[6] ?? "LET’S TALK"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}
