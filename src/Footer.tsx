import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["desktop-4"]}>
        <div className={styles["contact-us"]}>
          <div className={styles["vertical-20px-3"]}>
            <div className={styles["contact-us-2"] + " " + styles["rv-6"]} data-reveal>
              <h2 className={styles["h2-3"]}>{slots[0] ?? "CONTACT US"}</h2>
            </div>
            <div className={styles["reliable-heavy-cargo-logistics-for-industrial-operations"] + " " + styles["rv-6"]} data-reveal>
              <p className={styles["p-36"]}>{slots[1] ?? "Reliable heavy cargo logistics for industrial operations."}</p>
            </div>
          </div>
          <a className={styles["logo-7"] + " " + styles["rv-6"]} data-reveal href="./contact">
            <div className={styles["memory-arrow-up"]}>
              <div className={styles["div-20"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 140 140\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"951\"><use href=\"#svg-1325469922_645\" data-f2c-idx=\"952\"></use></svg>"} />
              </div>
            </div>
          </a>
        </div>
        <div className={styles["middle"]}>
          <div className={styles["card-link1"]}>
            <div className={styles["quick-links"] + " " + styles["rv-7"]} data-reveal>
              <p className={styles["p-37"]}>{slots[2] ?? "Quick Links"}</p>
            </div>
            <div className={styles["about-us-7"] + " " + styles["rv-7"]} data-reveal>
              <h3 className={styles["h3-6"]}>
                <a className={styles["a-2"]} href="./about">{slots[3] ?? "ABOUT US"}</a>
              </h3>
            </div>
            <div className={styles["about-us-7"] + " " + styles["rv-7"]} data-reveal>
              <h3 className={styles["h3-6"]}>
                <a className={styles["a-2"]} href="./#services">{slots[4] ?? "SERVICE"}</a>
              </h3>
            </div>
            <div className={styles["about-us-7"] + " " + styles["rv-7"]} data-reveal>
              <h3 className={styles["h3-6"]}>
                <a className={styles["a-2"]} href="./contact">{slots[5] ?? "CONTACT US"}</a>
              </h3>
            </div>
            <div className={styles["about-us-7"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "564ms" }}>
              <h3 className={styles["h3-6"]}>
                <a className={styles["a-2"]} href="./#process">{slots[6] ?? "HOW WE WORK"}</a>
              </h3>
            </div>
          </div>
          <div className={styles["card-link2"]}>
            <div className={styles["social-media"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "102ms" }}>
              <p className={styles["p-38"]}>{slots[7] ?? "Social Media"}</p>
            </div>
            <div className={styles["linkedin"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "102ms" }}>
              <h3 className={styles["h3-7"]}>
                <a className={styles["a-2"]} href="https://www.linkedin.com/">{slots[8] ?? "LINKEDIN"}</a>
              </h3>
            </div>
            <div className={styles["linkedin"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "102ms" }}>
              <h3 className={styles["h3-7"]}>
                <a className={styles["a-2"]} href="https://www.instagram.com/">{slots[9] ?? "INSTAGRAM"}</a>
              </h3>
            </div>
            <div className={styles["linkedin"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "102ms" }}>
              <h3 className={styles["h3-7"]}>
                <a className={styles["a-2"]} href="https://www.youtube.com/">{slots[10] ?? "YOUTUBE"}</a>
              </h3>
            </div>
            <div className={styles["linkedin"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "671ms" }}>
              <h3 className={styles["h3-7"]}>
                <a className={styles["a-2"]} href="https://www.facebook.com/">{slots[11] ?? "FACEBOOK"}</a>
              </h3>
            </div>
          </div>
          <div className={styles["card-link1"]}>
            <div className={styles["quick-links"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "205ms" }}>
              <p className={styles["p-37"]}>{slots[12] ?? "Others"}</p>
            </div>
            <div className={styles["about-us-7"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "205ms" }}>
              <h3 className={styles["h3-6"]}>
                <a className={styles["a-2"]} href="./404">{slots[13] ?? "404 PAGE"}</a>
              </h3>
            </div>
          </div>
        </div>
        <div className={styles["logo-8"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "564ms" }}>
          <div className={styles["div-21"]}>
            <img className={styles["img-8"]} src={slots[14] ?? "https://framerusercontent.com/images/Uqfa7M2fqMqsBvdapoMNEPX5kA.png?width=1360&height=341"} alt="" />
          </div>
        </div>
        <div className={styles["bottom"]}>
          <div className={styles["2026-movora-logistics-all-rights-reserved"]}>
            <p className={styles["p-39"]}>{slots[15] ?? "© 2026 Movora Logistics. All Rights Reserved."}</p>
          </div>
        </div>
      </footer>
  )
}
