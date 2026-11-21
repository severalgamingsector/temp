import styles from "./styles.module.css"

export default function Vector7({ slots = [] }: { slots?: string[] }) {
  return (
      <img className={styles["img-11"]} src={slots[0] ?? "data:image/svg+xml,<svg display=\"block\" id=\"2058272040\" role=\"presentation\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 14.287 33.445 C 15.751 38.589 19.802 42.64 24.945 44.104 L 24.945 58.391 C 12.055 56.531 1.86 46.336 0 33.445 Z M 58.391 33.445 C 56.531 46.336 46.336 56.531 33.445 58.391 L 33.445 44.104 C 38.589 42.64 42.639 38.589 44.103 33.445 Z M 29.195 25.945 C 30.99 25.945 32.445 27.401 32.445 29.195 C 32.445 30.99 30.99 32.445 29.195 32.445 C 27.4 32.445 25.945 30.99 25.945 29.195 C 25.946 27.4 27.4 25.945 29.195 25.945 Z M 33.445 0 C 46.336 1.86 56.531 12.055 58.391 24.945 L 44.103 24.945 C 42.639 19.802 38.589 15.751 33.445 14.287 Z M 24.945 14.287 C 19.802 15.751 15.751 19.802 14.287 24.945 L 0 24.945 C 1.86 12.055 12.055 1.86 24.945 0 Z\" fill=\"transparent\" height=\"58.39063538818359px\" id=\"evoCcjeyp\" stroke-dasharray=\"\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-width=\"1\" stroke=\"rgb(229, 30, 49)\" transform=\"translate(0.572 0.572)\" width=\"58.39063538818359px\"/></svg>"} alt="" />
  )
}
