import styles from "./styles.module.css"

export default function Vector6({ slots = [] }: { slots?: string[] }) {
  return (
      <img className={styles["img-11"]} src={slots[0] ?? "data:image/svg+xml,<svg display=\"block\" id=\"3641249074\" role=\"presentation\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 59 59 L 37.27 59 C 47.87 56.216 56.216 47.87 59 37.27 Z M 0 37.27 C 2.784 47.87 11.13 56.216 21.73 59 L 0 59 Z M 29.5 24.375 C 32.331 24.375 34.625 26.669 34.625 29.5 C 34.625 32.331 32.331 34.625 29.5 34.625 C 26.669 34.625 24.375 32.331 24.375 29.5 C 24.375 26.669 26.669 24.375 29.5 24.375 Z M 21.73 0 C 11.13 2.784 2.785 11.129 0 21.73 L 0 0 Z M 59 0 L 59 21.73 C 56.215 11.129 47.87 2.784 37.27 0 Z\" fill=\"transparent\" height=\"59.000000732421874px\" id=\"ZTxhmg2o7\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(229, 30, 49)\" transform=\"translate(0.5 0.5)\" width=\"59.000000732421874px\"/></svg>"} alt="" />
  )
}
