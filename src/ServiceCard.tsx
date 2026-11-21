import styles from "./styles.module.css"
import States from "./States"

export default function ServiceCard({ slots = [] }: { slots?: string[] }) {
  return (
      <States
        a={<>
          <div className={styles["desktop-open"]}>
            <div className={styles["container-9"]}>
              <div className={styles["service-content"]}>
                <div className={styles["01"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "613ms" }}>
                  <h3 className={styles["h3"]}>{"01"}</h3>
                </div>
                <div className={styles["service-image"]}>
                  <div className={styles["div-7"]}>
                    <img className={styles["img-2"]} src="https://framerusercontent.com/images/Z1l1AbgqYQPKtb5JHqNSW8rt4.jpg?scale-down-to=512&width=1135&height=619" alt="" />
                  </div>
                </div>
                <div className={styles["vertical-20px"]}>
                  <div className={styles["heavy-cargo"]}>
                    <h2 className={styles["h2"]}>
                      <div className={styles["span"]}>
                        <span className={styles["span-2"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "613ms" }}>{"H"}</span>
                        <span className={styles["span-3"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "697ms" }}>{"E"}</span>
                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "783ms" }}>{"A"}</span>
                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "839ms" }}>{"V"}</span>
                        <span className={styles["span-5"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "921ms" }}>{"Y"}</span>
                      </div>
                      {" "}
                      <div className={styles["span"]}>
                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1009ms" }}>{"C"}</span>
                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1067ms" }}>{"A"}</span>
                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1180ms" }}>{"R"}</span>
                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1207ms" }}>{"G"}</span>
                        <span className={styles["span-8"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1289ms" }}>{"O"}</span>
                      </div>
                    </h2>
                  </div>
                  <div className={styles["badges"]}>
                    <div className={styles["badge"]}>
                      <div className={styles["01-oversized-cargo-transport"]}>
                        <p className={styles["p-10"]}>{"(01) Oversized cargo transport"}</p>
                      </div>
                    </div>
                    <div className={styles["badge-2"]}>
                      <div className={styles["02-heavy-equipment-movement"]}>
                        <p className={styles["p-11"]}>{"(02) Heavy equipment movement"}</p>
                      </div>
                    </div>
                    <div className={styles["badge-3"]}>
                      <div className={styles["03-route-optimization-planning"]}>
                        <p className={styles["p-12"]}>{"(03) Route optimization planning"}</p>
                      </div>
                    </div>
                    <div className={styles["badge-4"]}>
                      <div className={styles["04-industrial-freight-coordination"]}>
                        <p className={styles["p-13"]}>{"(04) Industrial freight coordination"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-8"]}>
                    <a className={styles["fit-4"]} href="./detail-service-1">
                      <div className={styles["container-10"]}>
                        <div className={styles["container-11"]}>
                          <div className={styles["arrow"]}>
                            <div className={styles["div-3"]} />
                            <div className={styles["div-4"]} />
                          </div>
                          <div className={styles["text-box-4"]}>
                            <div className={styles["get-a-quote-7"]}>
                              <p className={styles["p-14"]}>{"LEARN MORE"}</p>
                            </div>
                            <div className={styles["get-a-quote-8"]}>
                              <p className={styles["p-14"]}>{"LEARN MORE"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
        b={<>
          <div className={styles["div-9"]}>
            <div className={styles["container-12"]}>
              <div className={styles["service-content-2"]}>
                <div className={styles["01"]}>
                  <h3 className={styles["h3"]}>{"01"}</h3>
                </div>
                <div className={styles["vertical-20px-2"]}>
                  <div className={styles["heavy-cargo"]}>
                    <h2 className={styles["h2"]}>
                      <div className={styles["span"]}>
                        <span className={styles["span-2"]}>{"H"}</span>
                        <span className={styles["span-3"]}>{"E"}</span>
                        <span className={styles["span-4"]}>{"A"}</span>
                        <span className={styles["span-4"]}>{"V"}</span>
                        <span className={styles["span-5"]}>{"Y"}</span>
                      </div>
                      {" "}
                      <div className={styles["span"]}>
                        <span className={styles["span-6"]}>{"C"}</span>
                        <span className={styles["span-4"]}>{"A"}</span>
                        <span className={styles["span-7"]}>{"R"}</span>
                        <span className={styles["span-6"]}>{"G"}</span>
                        <span className={styles["span-8"]}>{"O"}</span>
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
      />
  )
}
