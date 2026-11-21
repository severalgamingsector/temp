import styles from "./styles.module.css"

export default function DetailServiceCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-6"]}>
        <div className={styles["container-20"]}>
          <div className={styles["top"]}>
            <img className={styles["img-11"]} src={slots[0] ?? "data:image/svg+xml,<svg display=\"block\" id=\"2963819043\" role=\"presentation\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 29 6.5 C 16.528 6.766 6.5 16.959 6.5 29.494 C 6.5 42.197 16.797 52.494 29.5 52.494 C 42.035 52.494 52.227 42.466 52.493 29.994 L 58.993 29.994 C 58.726 46.056 45.625 58.994 29.5 58.994 C 13.208 58.994 0 45.786 0 29.494 C 0 13.369 12.938 0.267 29 0 Z M 29 19.631 C 23.779 19.891 19.625 24.208 19.625 29.494 C 19.625 34.948 24.046 39.369 29.5 39.369 C 34.786 39.369 39.102 35.216 39.362 29.994 L 45.867 29.994 C 45.603 38.806 38.376 45.869 29.5 45.869 C 20.456 45.869 13.125 38.538 13.125 29.494 C 13.125 20.618 20.188 13.391 29 13.127 Z\" fill=\"transparent\" height=\"58.994141px\" id=\"W5_dI7_XB\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(229, 30, 49)\" transform=\"translate(0.5 0.506)\" width=\"58.9932px\"/></svg>"} alt="" />
            <div className={styles["duration"]}>
              <h3 className={styles["h3-9"]}>{slots[1] ?? "DURATION"}</h3>
            </div>
          </div>
          <div className={styles["1-12-weeks-depending-on-cargo-size-transportation-distance-permits-and-project-complexity"]}>
            <p className={styles["p-45"]}>{slots[2] ?? "1–12 Weeks, depending on cargo size, transportation distance, permits, and project complexity."}</p>
          </div>
        </div>
      </div>
  )
}
