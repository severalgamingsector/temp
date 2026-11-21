import styles from "./styles.module.css"

export default function TestimonialCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop-2"]}>
        <div className={styles["container-15"]}>
          <div className={styles["profile-card"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1024ms" }}>
            <div className={styles["profile"]}>
              <div className={styles["div-12"]}>
                <img className={styles["img-5"]} src={slots[0] ?? "https://framerusercontent.com/images/c0GL7XZHEeye7Q670ksa3hq80A.jpg?scale-down-to=1024&width=2731&height=4096"} alt="" />
              </div>
            </div>
            <div className={styles["name"]}>
              <div className={styles["michael-anderson"]}>
                <p className={styles["p-21"]}>{slots[1] ?? "MICHAEL ANDERSON"}</p>
              </div>
              <div className={styles["head-of-operations"]}>
                <p className={styles["p-22"]}>{slots[2] ?? "HEAD OF OPERATIONS"}</p>
              </div>
            </div>
          </div>
          <div className={styles["testimonial-content"]}>
            <div className={styles["our-logistics-operation-improved-significantly-after-working-with-the-team-their-expertise-in-industrial-transportation-helped-us-reduce-delays-improve-delivery-coordination-and-maintain-better-visibility-across-complex-cargo-movements"]}>
              <h3 className={styles["h3-4"]}>
                <span className={styles["span-9"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "825ms" }}>{slots[3] ?? "“OUR"}</span>
                {" "}
                <span className={styles["span-10"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "856ms" }}>{slots[4] ?? "LOGISTICS"}</span>
                {" "}
                <span className={styles["span-11"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "909ms" }}>{slots[5] ?? "OPERATION"}</span>
                {" "}
                <span className={styles["span-12"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "939ms" }}>{slots[6] ?? "IMPROVED"}</span>
                {" "}
                <span className={styles["span-13"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "966ms" }}>{slots[7] ?? "SIGNIFICANTLY"}</span>
                {" "}
                <span className={styles["span-14"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1024ms" }}>{slots[8] ?? "AFTER"}</span>
                {" "}
                <span className={styles["span-15"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1052ms" }}>{slots[9] ?? "WORKING"}</span>
                {" "}
                <span className={styles["span-16"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1107ms" }}>{slots[10] ?? "WITH"}</span>
                {" "}
                <span className={styles["span-17"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1133ms" }}>{slots[11] ?? "THE"}</span>
                {" "}
                <span className={styles["span-18"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1159ms" }}>{slots[12] ?? "TEAM."}</span>
                {" "}
                <span className={styles["span-19"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1216ms" }}>{slots[13] ?? "THEIR"}</span>
                {" "}
                <span className={styles["span-20"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1248ms" }}>{slots[14] ?? "EXPERTISE"}</span>
                {" "}
                <span className={styles["span-21"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1301ms" }}>{slots[15] ?? "IN"}</span>
                {" "}
                <span className={styles["span-22"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1328ms" }}>{slots[16] ?? "INDUSTRIAL"}</span>
                {" "}
                <span className={styles["span-23"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1383ms" }}>{slots[17] ?? "TRANSPORTATION"}</span>
                {" "}
                <span className={styles["span-24"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1409ms" }}>{slots[18] ?? "HELPED"}</span>
                {" "}
                <span className={styles["span-25"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1462ms" }}>{slots[19] ?? "US"}</span>
                {" "}
                <span className={styles["span-26"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1489ms" }}>{slots[20] ?? "REDUCE"}</span>
                {" "}
                <span className={styles["span-27"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1542ms" }}>{slots[21] ?? "DELAYS,"}</span>
                {" "}
                <span className={styles["span-28"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1568ms" }}>{slots[22] ?? "IMPROVE"}</span>
                {" "}
                <span className={styles["span-29"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1594ms" }}>{slots[23] ?? "DELIVERY"}</span>
                {" "}
                <span className={styles["span-30"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1651ms" }}>{slots[24] ?? "COORDINATION,"}</span>
                {" "}
                <span className={styles["span-31"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1680ms" }}>{slots[25] ?? "AND"}</span>
                {" "}
                <span className={styles["span-32"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1732ms" }}>{slots[26] ?? "MAINTAIN"}</span>
                {" "}
                <span className={styles["span-33"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1759ms" }}>{slots[27] ?? "BETTER"}</span>
                {" "}
                <span className={styles["span-34"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1824ms" }}>{slots[28] ?? "VISIBILITY"}</span>
                {" "}
                <span className={styles["span-35"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1851ms" }}>{slots[29] ?? "ACROSS"}</span>
                {" "}
                <span className={styles["span-36"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1903ms" }}>{slots[30] ?? "COMPLEX"}</span>
                {" "}
                <span className={styles["span-37"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1929ms" }}>{slots[31] ?? "CARGO"}</span>
                {" "}
                <span className={styles["span-38"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "1958ms" }}>{slots[32] ?? "MOVEMENTS.”"}</span>
              </h3>
            </div>
            <div className={styles["horizontal-40px"]}>
              <div className={styles["div-13"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1594ms" }}>
                <div className={styles["variant-1-5"]}>
                  <div className={styles["number-card-2"]}>
                    <div className={styles["lower-delays-2"]}>
                      <p className={styles["p-23"]}>{slots[33] ?? "Lower Delays"}</p>
                    </div>
                    <div className={styles["47"]}>
                      <h2 className={styles["h2-2"]}>{slots[34] ?? "47%"}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-13"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1706ms" }}>
                <div className={styles["variant-1-5"]}>
                  <div className={styles["number-card-2"]}>
                    <div className={styles["lower-delays-3"]}>
                      <p className={styles["p-24"]}>{slots[35] ?? "Faster Delivery"}</p>
                    </div>
                    <div className={styles["47"]}>
                      <h2 className={styles["h2-2"]}>{slots[36] ?? "2.8x"}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
