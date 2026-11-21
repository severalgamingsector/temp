import styles from "./styles.module.css"

export default function HomeFAQ({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["all-closed"]}>
        <div className={styles["div-14"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "3589ms" }}>
          <div className={styles["closed"]}>
            <div className={styles["container-17"]}>
              <div className={styles["header"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-30"]}>{slots[0] ?? "01. What industries does Movora serve?"}</p>
                </div>
                <div className={styles["icon"]}>
                  <div className={styles["div-16"]} />
                </div>
              </div>
              <div className={styles["answer"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-31"]}>{slots[1] ?? "Movora supports a wide range of industrial sectors, including mining, oil & gas, energy, construction, manufacturing, and large-scale infrastructure projects that require specialized logistics and transportation solutions."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-14"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "3589ms" }}>
          <div className={styles["closed"]}>
            <div className={styles["container-17"]}>
              <div className={styles["header"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-30"]}>{slots[2] ?? "02. What types of cargo can Movora transport?"}</p>
                </div>
                <div className={styles["icon"]}>
                  <div className={styles["div-16"]} />
                </div>
              </div>
              <div className={styles["answer"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-31"]}>{slots[3] ?? "We handle oversized cargo, heavy machinery, industrial equipment, project cargo, construction materials, energy infrastructure components, and other high-value freight requiring specialized transportation."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-14"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "3589ms" }}>
          <div className={styles["closed"]}>
            <div className={styles["container-17"]}>
              <div className={styles["header"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-30"]}>{slots[4] ?? "03. Do you serve remote project locations?"}</p>
                </div>
                <div className={styles["icon"]}>
                  <div className={styles["div-16"]} />
                </div>
              </div>
              <div className={styles["answer"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-31"]}>{slots[5] ?? "Yes. Our logistics network is designed to support remote and challenging environments, including mining sites, energy facilities, industrial zones, and infrastructure projects located in hard-to-access areas."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-14"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "3589ms" }}>
          <div className={styles["closed"]}>
            <div className={styles["container-17"]}>
              <div className={styles["header"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-30"]}>{slots[6] ?? "04. How do you ensure cargo safety?"}</p>
                </div>
                <div className={styles["icon"]}>
                  <div className={styles["div-16"]} />
                </div>
              </div>
              <div className={styles["answer"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-31"]}>{slots[7] ?? "Every project undergoes route analysis, risk assessment, cargo securing planning, and operational monitoring. Our team follows strict safety procedures and industry standards throughout the transportation process."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-14"] + " " + styles["rv-2"]} data-reveal>
          <div className={styles["closed"]}>
            <div className={styles["container-17"]}>
              <div className={styles["header"]}>
                <div className={styles["div-15"]}>
                  <p className={styles["p-30"]}>{slots[8] ?? "05. Can Movora handle permits?"}</p>
                </div>
                <div className={styles["icon"]}>
                  <div className={styles["div-16"]} />
                </div>
              </div>
              <div className={styles["answer"]}>
                <div className={styles["div-17"]}>
                  <p className={styles["p-31"]}>{slots[9] ?? "Absolutely. We coordinate transportation permits, route approvals, compliance documentation, and regulatory requirements to ensure smooth project execution."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
