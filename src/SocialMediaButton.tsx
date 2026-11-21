import styles from "./styles.module.css"

export default function SocialMediaButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-1"]} href="https://linkedin.com">
        <div className={styles["box"]}>
          <div className={styles["div-5"]} />
        </div>
      </a>
  )
}
