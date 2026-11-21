import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Badge3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["white"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "4270ms" }}>
        <div className={styles["logo-4"]}>
          <div className={styles["vector-2"]}>
            <div className={styles["div-10"]}>
              <SvgGraphic className={styles["svg-2"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"485\"><use href=\"#svg9547161324\" data-f2c-idx=\"486\"></use></svg>"} />
            </div>
          </div>
        </div>
        <div className={styles["about-us-4"]}>
          <p className={styles["p-17"]}>{slots[0] ?? "PROCESS"}</p>
        </div>
      </div>
  )
}
