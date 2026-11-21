import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import NavigationBar from "./NavigationBar"
import Button from "./Button"
import NorthEast from "./NorthEast"
import Button2 from "./Button2"
import SocialMediaButton from "./SocialMediaButton"
import Linkedin from "./Linkedin"
import Vector from "./Vector"
import Youtube from "./Youtube"
import Instagram from "./Instagram"
import LogoCompany from "./LogoCompany"
import Badge from "./Badge"
import ServiceCard from "./ServiceCard"
import Badge2 from "./Badge2"
import StartsCard from "./StartsCard"
import Badge3 from "./Badge3"
import ProcessCard from "./ProcessCard"
import ProcessCard2 from "./ProcessCard2"
import TestimonialCard from "./TestimonialCard"
import StartsCard2 from "./StartsCard2"
import TestimonialCard2 from "./TestimonialCard2"
import Badge4 from "./Badge4"
import HomeFAQ from "./HomeFAQ"
import FAQItem from "./FAQItem"
import Plus from "./Plus"
import Badge5 from "./Badge5"
import BlogCard from "./BlogCard"
import SmoothScroll from "./SmoothScroll"
import Footer from "./Footer"
import Template2 from "./Template2"
import Framer from "./Framer"
import Text from "./Text"
import ValueCard from "./ValueCard"
import Vector4 from "./Vector4"
import Vector2 from "./Vector2"
import Vector3 from "./Vector3"
import Vector1 from "./Vector1"
import Badge6 from "./Badge6"
import FounderCard from "./FounderCard"
import HeaderService from "./HeaderService"
import DetailServiceCard from "./DetailServiceCard"
import Vector5 from "./Vector5"
import Vector6 from "./Vector6"
import Vector7 from "./Vector7"
import Button3 from "./Button3"
import ButtonForm from "./ButtonForm"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-28"]}>
        <div className={styles["div-29"]}>
          <div className={styles["div-30"]}>
            <div className={styles["div-31"]}>
              <NavigationBar slots={["MOVORA","SERVICES","ABOUT US","PRICING","BLOG","LET’S TALK","LET’S TALK"]} />
            </div>
          </div>
          <div className={styles["div-32"]}>
            <header className={styles["hero"]}>
              <div className={styles["div-31"]}>
                <div className={styles["hero-image"]}>
                  <div className={styles["div-33"]}>
                    <img className={styles["img-12"]} src={slots[0] ?? "https://framerusercontent.com/images/mRe7LOZuGqhhyURF1gTl3FRIBPE.png?scale-down-to=1024&width=2048&height=2048"} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles["bg"]}>
                <div className={styles["div-34"]}>
                  <img className={styles["img-13"]} src={slots[1] ?? "https://framerusercontent.com/images/SQKcL2y3Nleq4ulG2ycXrslyHg.jpg?scale-down-to=2048&width=4096&height=2304"} alt="" />
                </div>
              </div>
              <SvgGraphic className={styles["movora-2"]} html={"<svg class=\"framer-12ie9us\" data-framer-appear-id=\"12ie9us\" data-framer-name=\"MOVORA\" data-framer-component-type=\"RichTextContainer\" viewBox=\"0 0 1380 305\" style=\"opacity: 1; transform: none; will-change: transform;\" data-f2c-idx=\"50\"><foreignObject width=\"100%\" height=\"100%\" class=\"framer-fit-text\" transform=\"scale(1)\" style=\"overflow:visible;transform-origin:center center;font-family:sans-serif;font-size:12px;font-weight:400;color:rgb(0, 0, 0);text-align:start;\" data-f2c-idx=\"51\"><p dir=\"auto\" style=\"--font-selector:R0Y7U3RhY2sgU2FucyBOb3RjaC03MDA=;--framer-font-family:&quot;Stack Sans Notch&quot;, &quot;Stack Sans Notch Placeholder&quot;, sans-serif;--framer-font-size:350px;--framer-font-weight:700;--framer-letter-spacing:-0.06em;--framer-line-height:300px;--framer-text-color:var(--token-125e3e87-caa9-4ed6-947c-99e1ece72c54, rgb(255, 255, 255));font-family:&quot;Stack Sans Notch&quot;, &quot;Stack Sans Notch Placeholder&quot;, sans-serif;font-size:350px;font-weight:700;letter-spacing:-21px;line-height:300px;color:rgb(255, 255, 255);text-align:start;\" class=\"framer-text\" data-f2c-idx=\"52\">MOVORA</p></foreignObject></svg>"} />
              <div className={styles["hero-bottom"]}>
                <div className={styles["container-24"]}>
                  <div className={styles["powering-industrial-movement-without-limits"]}>
                    <h3 className={styles["h3-10"]}>{slots[2] ?? "POWERING INDUSTRIAL MOVEMENT WITHOUT LIMITS, AT SCALE"}</h3>
                  </div>
                  <div className={styles["div-35"]}>
                    <Button2 slots={["GET A QUOTE","GET A QUOTE"]} />
                  </div>
                </div>
                <div className={styles["container-25"]}>
                  <div className={styles["div-36"]}>
                    <SocialMediaButton slots={[]} />
                  </div>
                  <div className={styles["div-36"]}>
                    <SocialMediaButton slots={[]} />
                  </div>
                  <div className={styles["div-36"]}>
                    <SocialMediaButton slots={[]} />
                  </div>
                  <div className={styles["div-36"]}>
                    <SocialMediaButton slots={[]} />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles["logo-12"]}>
              <ul className={styles["ul"]}>
                <li className={styles["li"]}>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-37"]}>
                      <LogoCompany slots={["https://framerusercontent.com/images/fwNGxJ4Z3p3ye56pNxlLfo4AQ.png?width=335&height=99"]} />
                    </div>
                  </div>
                </li>
                <li className={styles["li"]}>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-37"]}>
                      <LogoCompany slots={["https://framerusercontent.com/images/9Btx8Gukxj3xFhP1gT7mcMIGzY8.png?width=415&height=99"]} />
                    </div>
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-37"]}>
                      <LogoCompany slots={["https://framerusercontent.com/images/axIYopako8zHHeijSXAqobI.png?width=350&height=99"]} />
                    </div>
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-37"]}>
                      <LogoCompany slots={["https://framerusercontent.com/images/0odBCMU8SX35JwBUwzkOmb1R5w.png?width=374&height=99"]} />
                    </div>
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-37"]}>
                      <LogoCompany slots={["https://framerusercontent.com/images/Wr65XcmzNrsmhpdjMvTsVbpxrY.png?width=389&height=99"]} />
                    </div>
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-37"]}>
                    <LogoCompany slots={["https://framerusercontent.com/images/fwNGxJ4Z3p3ye56pNxlLfo4AQ.png?width=335&height=99"]} />
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-37"]}>
                    <LogoCompany slots={["https://framerusercontent.com/images/9Btx8Gukxj3xFhP1gT7mcMIGzY8.png?width=415&height=99"]} />
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-37"]}>
                    <LogoCompany slots={["https://framerusercontent.com/images/axIYopako8zHHeijSXAqobI.png?width=350&height=99"]} />
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-37"]}>
                    <LogoCompany slots={["https://framerusercontent.com/images/0odBCMU8SX35JwBUwzkOmb1R5w.png?width=374&height=99"]} />
                  </div>
                </li>
                <li className={styles["li-2"]}>
                  <div className={styles["div-37"]}>
                    <LogoCompany slots={["https://framerusercontent.com/images/Wr65XcmzNrsmhpdjMvTsVbpxrY.png?width=389&height=99"]} />
                  </div>
                </li>
              </ul>
            </div>
            <section className={styles["about-section"]}>
              <div className={styles["heading-1-2"]}>
                <div className={styles["div-38"]}>
                  <Badge slots={["ABOUT US"]} />
                </div>
                <div className={styles["engineering-logistics-for-the-world-s-most-demanding-industries"]}>
                  <h2 className={styles["h2-4"]}>
                    <span className={styles["span-60"] + " " + styles["rv-8"]} data-reveal>{slots[3] ?? "ENGINEERING"}</span>
                    {" "}
                    <span className={styles["span-61"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "86ms" }}>{slots[4] ?? "LOGISTICS"}</span>
                    {" "}
                    <span className={styles["span-62"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "141ms" }}>{slots[5] ?? "FOR"}</span>
                    {" "}
                    <span className={styles["span-63"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "230ms" }}>{slots[6] ?? "THE"}</span>
                    {" "}
                    <span className={styles["span-64"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "315ms" }}>{slots[7] ?? "WORLD'S"}</span>
                    {" "}
                    <span className={styles["span-65"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "372ms" }}>{slots[8] ?? "MOST"}</span>
                    {" "}
                    <span className={styles["span-66"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "458ms" }}>{slots[9] ?? "DEMANDING"}</span>
                    {" "}
                    <span className={styles["span-66"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "515ms" }}>{slots[10] ?? "INDUSTRIES."}</span>
                  </h2>
                </div>
              </div>
              <div className={styles["about-cards"]}>
                <div className={styles["card-1"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "629ms" }}>
                  <div className={styles["div-31"]}>
                    <div className={styles["about-card1"]}>
                      <div className={styles["div-39"]}>
                        <img className={styles["img-14"]} src={slots[11] ?? "https://framerusercontent.com/images/OwALmTqZHtrWH3U1vmPqbOsB18.png?scale-down-to=1024&width=2220&height=2476"} alt="" />
                      </div>
                      <div className={styles["content-about-cards1"]}>
                        <div className={styles["speed"]}>
                          <h3 className={styles["h3-11"]}>{slots[12] ?? "SPEED"}</h3>
                        </div>
                        <div className={styles["container-26"]}>
                          <div className={styles["01-delivery-performance-optimization"]}>
                            <p className={styles["p-48"]}>{slots[13] ?? "(01) Delivery performance optimization"}</p>
                          </div>
                        </div>
                        <div className={styles["container-26"]}>
                          <div className={styles["01-delivery-performance-optimization"]}>
                            <p className={styles["p-48"]}>{slots[14] ?? "(02) Operational efficiency improvement"}</p>
                          </div>
                        </div>
                        <div className={styles["container-26"]}>
                          <div className={styles["01-delivery-performance-optimization"]}>
                            <p className={styles["p-48"]}>{slots[15] ?? "(03) Real-time logistics coordination"}</p>
                          </div>
                        </div>
                        <div className={styles["container-26"]}>
                          <div className={styles["01-delivery-performance-optimization"]}>
                            <p className={styles["p-48"]}>{slots[16] ?? "(04) Reduced transportation downtime"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["card-2"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "856ms" }}>
                  <div className={styles["div-31"]}>
                    <div className={styles["container-image"]}>
                      <div className={styles["div-40"]}>
                        <img className={styles["img-15"]} src={slots[17] ?? "https://framerusercontent.com/images/KpuLauhp6cf7nLpynq8MJFmCbg.png?scale-down-to=1024&width=1300&height=1484"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["content-about-cards2"]}>
                    <div className={styles["every-movora-solution-is-engineered-for-complex-industrial-operations"]}>
                      <p className={styles["p-49"]}>{slots[18] ?? "Every Movora solution is engineered for complex industrial operations."}</p>
                    </div>
                    <div className={styles["div-41"]}>
                      <Button2 slots={["LEARN MORE","LEARN MORE"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["card-3"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "939ms" }}>
                  <div className={styles["about-card3"]}>
                    <div className={styles["proven"]}>
                      <p className={styles["p-50"]}>{slots[19] ?? "PROVEN"}</p>
                    </div>
                    <div className={styles["ellipse-2-1"]}>
                      <div className={styles["div-42"]}>
                        <img className={styles["img-16"]} src={slots[20] ?? "https://framerusercontent.com/images/KMZ3pE0jiwyDgYpfYkgKCbgwxI.png?width=532&height=533"} alt="" />
                      </div>
                    </div>
                    <div className={styles["gemini-generated-image-jknd5ejknd5ejknd-1-1"]}>
                      <div className={styles["div-43"]}>
                        <img className={styles["img-17"]} src={slots[21] ?? "https://framerusercontent.com/images/gBjUTgdx8pMhJy24Wgtx4lRukvI.png?scale-down-to=1024&width=1428&height=1852"} alt="" />
                      </div>
                    </div>
                    <div className={styles["built-around-operational-accuracy-cargo-planning-and-transportation-systems-designed-for-industrial-scale-execution"]}>
                      <p className={styles["p-51"]}>{slots[22] ?? "Built around operational accuracy, cargo planning, and transportation systems designed for industrial-scale execution."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["services-2"]}>
              <div className={styles["container-27"]}>
                <div className={styles["heading-1-3"]}>
                  <div className={styles["div-44"]}>
                    <Badge slots={["SERVICES"]} />
                  </div>
                  <div className={styles["cargo-solutions"]}>
                    <h1 className={styles["h1-2"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-57"] + " " + styles["rv-8"]} data-reveal>{slots[23] ?? "C"}</span>
                        <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "84ms" }}>{slots[24] ?? "A"}</span>
                        <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "167ms" }}>{slots[25] ?? "R"}</span>
                        <span className={styles["span-57"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "221ms" }}>{slots[26] ?? "G"}</span>
                        <span className={styles["span-59"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "304ms" }}>{slots[27] ?? "O"}</span>
                      </div>
                      <br className={styles["br"]} />
                      <div className={styles["span-52"]}>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "360ms" }}>{slots[28] ?? "S"}</span>
                        <span className={styles["span-59"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "443ms" }}>{slots[29] ?? "O"}</span>
                        <span className={styles["span-68"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "527ms" }}>{slots[30] ?? "L"}</span>
                        <span className={styles["span-53"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "613ms" }}>{slots[31] ?? "U"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "667ms" }}>{slots[32] ?? "T"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "754ms" }}>{slots[33] ?? "I"}</span>
                        <span className={styles["span-59"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "839ms" }}>{slots[34] ?? "O"}</span>
                        <span className={styles["span-71"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "894ms" }}>{slots[35] ?? "N"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "982ms" }}>{slots[36] ?? "S"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["service-cards"]}>
                <div className={styles["div-31"]}>
                  <div className={styles["div-45"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "613ms" }}>
                    <div className={styles["div-31"]}>
                      <ServiceCard slots={["01","https://framerusercontent.com/images/Z1l1AbgqYQPKtb5JHqNSW8rt4.jpg?scale-down-to=512&width=1135&height=619","H","E","A","V","Y","C","A","R","G","O","(01) Oversized cargo transport","(02) Heavy equipment movement","(03) Route optimization planning","(04) Industrial freight coordination","LEARN MORE","LEARN MORE"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-46"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1262ms" }}>
                    <div className={styles["div-31"]}>
                      <States
                        a={<>
                          <div className={styles["desktop-7"]}>
                            <div className={styles["container-28"]}>
                              <div className={styles["service-content-3"]}>
                                <div className={styles["01"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1262ms" }}>
                                  <h3 className={styles["h3"]}>{"02"}</h3>
                                </div>
                                <div className={styles["vertical-20px-4"]}>
                                  <div className={styles["heavy-cargo"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1262ms" }}>{"M"}</span>
                                        <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1317ms" }}>{"I"}</span>
                                        <span className={styles["span-74"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1399ms" }}>{"N"}</span>
                                        <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1481ms" }}>{"I"}</span>
                                        <span className={styles["span-74"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1563ms" }}>{"N"}</span>
                                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1619ms" }}>{"G"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1728ms" }}>{"L"}</span>
                                        <span className={styles["span-8"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1788ms" }}>{"O"}</span>
                                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1843ms" }}>{"G"}</span>
                                        <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1929ms" }}>{"I"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1986ms" }}>{"S"}</span>
                                        <span className={styles["span-5"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2069ms" }}>{"T"}</span>
                                        <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2151ms" }}>{"I"}</span>
                                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2233ms" }}>{"C"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2315ms" }}>{"S"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                        b={<>
                          <div className={styles["desktop-open-2"]}>
                            <div className={styles["container-29"]}>
                              <div className={styles["service-content-4"]}>
                                <div className={styles["01-4"]}>
                                  <h3 className={styles["h3"]}>{"02"}</h3>
                                </div>
                                <div className={styles["service-image-2"]}>
                                  <div className={styles["div-7"]}>
                                    <img className={styles["img-18"]} src="https://framerusercontent.com/images/1fNbKJKI5CqG2AJPo4HJ69P391I.jpg?scale-down-to=512&width=1609&height=983" alt="" />
                                  </div>
                                </div>
                                <div className={styles["vertical-20px-5"]}>
                                  <div className={styles["heavy-cargo-3"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-72"]}>{"M"}</span>
                                        <span className={styles["span-73"]}>{"I"}</span>
                                        <span className={styles["span-74"]}>{"N"}</span>
                                        <span className={styles["span-73"]}>{"I"}</span>
                                        <span className={styles["span-74"]}>{"N"}</span>
                                        <span className={styles["span-6"]}>{"G"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-75"]}>{"L"}</span>
                                        <span className={styles["span-8"]}>{"O"}</span>
                                        <span className={styles["span-6"]}>{"G"}</span>
                                        <span className={styles["span-73"]}>{"I"}</span>
                                        <span className={styles["span-7"]}>{"S"}</span>
                                        <span className={styles["span-5"]}>{"T"}</span>
                                        <span className={styles["span-73"]}>{"I"}</span>
                                        <span className={styles["span-6"]}>{"C"}</span>
                                        <span className={styles["span-7"]}>{"S"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                  <div className={styles["badges-3"]}>
                                    <div className={styles["badge-7"]}>
                                      <div className={styles["01-oversized-cargo-transport-2"]}>
                                        <p className={styles["p-52"]}>{"(01) Mining Equipment Delivery"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-8"]}>
                                      <div className={styles["02-heavy-equipment-movement-2"]}>
                                        <p className={styles["p-53"]}>{"(02) Remote Site Logistics"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-9"]}>
                                      <div className={styles["03-route-optimization-planning-2"]}>
                                        <p className={styles["p-54"]}>{"(03) Heavy Machinery Transport"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-10"]}>
                                      <div className={styles["04-industrial-freight-coordination-2"]}>
                                        <p className={styles["p-55"]}>{"(04) Resource Supply Support"}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["div-47"]}>
                                    <Button2 slots={["LEARN MORE","LEARN MORE"]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-46"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1262ms" }}>
                    <div className={styles["div-31"]}>
                      <States
                        a={<>
                          <div className={styles["desktop-7"]}>
                            <div className={styles["container-28"]}>
                              <div className={styles["service-content-3"]}>
                                <div className={styles["01"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1816ms" }}>
                                  <h3 className={styles["h3"]}>{"03"}</h3>
                                </div>
                                <div className={styles["vertical-20px-4"]}>
                                  <div className={styles["heavy-cargo"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-8"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1262ms" }}>{"O"}</span>
                                        <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1344ms" }}>{"I"}</span>
                                        <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1399ms" }}>{"L"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-2"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1481ms" }}>{"&"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-6"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1563ms" }}>{"G"}</span>
                                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1619ms" }}>{"A"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1728ms" }}>{"S"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                        b={<>
                          <div className={styles["desktop-open-3"]}>
                            <div className={styles["container-29"]}>
                              <div className={styles["service-content-4"]}>
                                <div className={styles["01-5"]}>
                                  <h3 className={styles["h3"]}>{"03"}</h3>
                                </div>
                                <div className={styles["service-image-3"]}>
                                  <div className={styles["div-7"]}>
                                    <img className={styles["img-19"]} src="https://framerusercontent.com/images/uGnRWGLXua19DM1iRBkbAW2MM.jpg?scale-down-to=512&width=1555&height=1037" alt="" />
                                  </div>
                                </div>
                                <div className={styles["vertical-20px-5"]}>
                                  <div className={styles["heavy-cargo-4"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-8"]}>{"O"}</span>
                                        <span className={styles["span-73"]}>{"I"}</span>
                                        <span className={styles["span-75"]}>{"L"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-2"]}>{"&"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-6"]}>{"G"}</span>
                                        <span className={styles["span-4"]}>{"A"}</span>
                                        <span className={styles["span-7"]}>{"S"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                  <div className={styles["badges-4"]}>
                                    <div className={styles["badge-11"]}>
                                      <div className={styles["01-oversized-cargo-transport-3"]}>
                                        <p className={styles["p-56"]}>{"(01) Pipeline Equipment Transport"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-12"]}>
                                      <div className={styles["02-heavy-equipment-movement-3"]}>
                                        <p className={styles["p-57"]}>{"(02) Offshore Logistics"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-13"]}>
                                      <div className={styles["03-route-optimization-planning-3"]}>
                                        <p className={styles["p-58"]}>{"(03) Energy Infrastructure Cargo"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["badge-14"]}>
                                      <div className={styles["04-industrial-freight-coordination-3"]}>
                                        <p className={styles["p-59"]}>{"(04) Specialized Freight Handling"}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["div-48"]}>
                                    <Button2 slots={["LEARN MORE","LEARN MORE"]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-46"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "1843ms" }}>
                    <div className={styles["div-31"]}>
                      <States
                        a={<>
                          <div className={styles["desktop-7"]}>
                            <div className={styles["container-28"]}>
                              <div className={styles["service-content-3"]}>
                                <div className={styles["01"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1843ms" }}>
                                  <h3 className={styles["h3"]}>{"04"}</h3>
                                </div>
                                <div className={styles["vertical-20px-4"]}>
                                  <div className={styles["heavy-cargo"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1843ms" }}>{"L"}</span>
                                        <span className={styles["span-8"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1929ms" }}>{"O"}</span>
                                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "1986ms" }}>{"A"}</span>
                                        <span className={styles["span-76"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2069ms" }}>{"D"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-5"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2151ms" }}>{"T"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2233ms" }}>{"R"}</span>
                                        <span className={styles["span-4"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2315ms" }}>{"A"}</span>
                                        <span className={styles["span-74"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2369ms" }}>{"N"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2451ms" }}>{"S"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2533ms" }}>{"P"}</span>
                                        <span className={styles["span-8"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2587ms" }}>{"O"}</span>
                                        <span className={styles["span-7"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2668ms" }}>{"R"}</span>
                                        <span className={styles["span-5"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "2752ms" }}>{"T"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                        b={<>
                          <div className={styles["desktop-open-3"]}>
                            <div className={styles["container-29"]}>
                              <div className={styles["service-content-4"]}>
                                <div className={styles["01-5"]}>
                                  <h3 className={styles["h3"]}>{"04"}</h3>
                                </div>
                                <div className={styles["service-image-3"]}>
                                  <div className={styles["div-7"]}>
                                    <img className={styles["img-20"]} src="https://framerusercontent.com/images/xWUJ5rj0LZy0bTuPSFus8adsYMY.jpg?scale-down-to=512&width=2000&height=1333" alt="" />
                                  </div>
                                </div>
                                <div className={styles["vertical-20px-5"]}>
                                  <div className={styles["heavy-cargo-4"]}>
                                    <h2 className={styles["h2"]}>
                                      <div className={styles["span"]}>
                                        <span className={styles["span-75"]}>{"L"}</span>
                                        <span className={styles["span-8"]}>{"O"}</span>
                                        <span className={styles["span-4"]}>{"A"}</span>
                                        <span className={styles["span-76"]}>{"D"}</span>
                                      </div>
                                      {" "}
                                      <div className={styles["span"]}>
                                        <span className={styles["span-5"]}>{"T"}</span>
                                        <span className={styles["span-7"]}>{"R"}</span>
                                        <span className={styles["span-4"]}>{"A"}</span>
                                        <span className={styles["span-74"]}>{"N"}</span>
                                        <span className={styles["span-7"]}>{"S"}</span>
                                        <span className={styles["span-7"]}>{"P"}</span>
                                        <span className={styles["span-8"]}>{"O"}</span>
                                        <span className={styles["span-7"]}>{"R"}</span>
                                        <span className={styles["span-5"]}>{"T"}</span>
                                      </div>
                                    </h2>
                                  </div>
                                  <div className={styles["badges-4"]}>
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
                                  <div className={styles["div-48"]}>
                                    <Button2 slots={["LEARN MORE","LEARN MORE"]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["compliance"]}>
              <div className={styles["abstract-background-design-hd-olive-green-color-2"]}>
                <div className={styles["div-49"]}>
                  <img className={styles["img-21"]} src={slots[37] ?? "https://framerusercontent.com/images/SQKcL2y3Nleq4ulG2ycXrslyHg.jpg?scale-down-to=2048&width=4096&height=2304"} alt="" />
                </div>
              </div>
              <div className={styles["container-27"]}>
                <div className={styles["heading-1-3"]}>
                  <div className={styles["div-50"]}>
                    <Badge2 slots={["COMPLIANCE"]} />
                  </div>
                  <div className={styles["cargo-solutions"]}>
                    <h1 className={styles["h1-2"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-59"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2479ms" }}>{slots[38] ?? "Q"}</span>
                        <span className={styles["span-53"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2533ms" }}>{slots[39] ?? "U"}</span>
                        <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2614ms" }}>{slots[40] ?? "A"}</span>
                        <span className={styles["span-68"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2698ms" }}>{slots[41] ?? "L"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2752ms" }}>{slots[42] ?? "I"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2832ms" }}>{slots[43] ?? "T"}</span>
                        <span className={styles["span-56"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2913ms" }}>{slots[44] ?? "Y"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-52"]}>
                        <span className={styles["span-77"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2968ms" }}>{slots[45] ?? "&"}</span>
                      </div>
                      <br className={styles["br"]} />
                      <div className={styles["span-52"]}>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3054ms" }}>{slots[46] ?? "S"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3161ms" }}>{slots[47] ?? "T"}</span>
                        <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3243ms" }}>{slots[48] ?? "A"}</span>
                        <span className={styles["span-71"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3270ms" }}>{slots[49] ?? "N"}</span>
                        <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3377ms" }}>{slots[50] ?? "D"}</span>
                        <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3485ms" }}>{slots[51] ?? "A"}</span>
                        <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3513ms" }}>{slots[52] ?? "R"}</span>
                        <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3593ms" }}>{slots[53] ?? "D"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3674ms" }}>{slots[54] ?? "S"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["compliance-2"]}>
                <div className={styles["rows-20"]}>
                  <div className={styles["row"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "3054ms" }}>
                    <div className={styles["safety-compliance"]}>
                      <p className={styles["p-60"]}>{slots[55] ?? "SAFETY COMPLIANCE"}</p>
                    </div>
                  </div>
                  <div className={styles["row"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "3161ms" }}>
                    <div className={styles["safety-compliance"]}>
                      <p className={styles["p-60"]}>{slots[56] ?? "CARGO SECURITY"}</p>
                    </div>
                  </div>
                  <div className={styles["row"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "3270ms" }}>
                    <div className={styles["safety-compliance"]}>
                      <p className={styles["p-60"]}>{slots[57] ?? "ROUTE ASSESSMENT"}</p>
                    </div>
                  </div>
                  <div className={styles["row"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "3350ms" }}>
                    <div className={styles["safety-compliance"]}>
                      <p className={styles["p-60"]}>{slots[58] ?? "QUALITY SYSTEM"}</p>
                    </div>
                  </div>
                  <div className={styles["row"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "4105ms" }}>
                    <div className={styles["safety-compliance"]}>
                      <p className={styles["p-60"]}>{slots[59] ?? "OPERATIONAL RATE"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["gemini-generated-image-j16mhaj16mhaj16m-1-2"] + " " + styles["rv-10"]} data-reveal style={{ transitionDelay: "3054ms" }}>
                    <div className={styles["div-51"]}>
                      <img className={styles["img-22"]} src={slots[60] ?? "https://framerusercontent.com/images/HbO5Tosp9jF3yP188N54zPfHQ.png?scale-down-to=1024&width=1439&height=736"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["cards-horizontal"]}>
                <div className={styles["div-31"]}>
                  <div className={styles["div-52"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "3701ms" }}>
                    <StartsCard slots={["Operational Rate","96%"]} />
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-52"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "3781ms" }}>
                    <StartsCard slots={["Monitoring & Support","24/7"]} />
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-52"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "3888ms" }}>
                    <StartsCard slots={["Faster Delivery","2.8x"]} />
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-52"] + " " + styles["rv-9"]} data-reveal style={{ transitionDelay: "3996ms" }}>
                    <StartsCard slots={["Industrial Shipments","4500+"]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["process"]}>
              <div className={styles["heading-1-4"]}>
                <div className={styles["div-53"]}>
                  <Badge3 slots={["PROCESS"]} />
                </div>
                <div className={styles["cargo-solutions"]}>
                  <h1 className={styles["h1-3"]}>
                    <div className={styles["span-79"]}>
                      <span className={styles["span-80"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4270ms" }}>{slots[61] ?? "E"}</span>
                      <span className={styles["span-81"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4350ms" }}>{slots[62] ?? "N"}</span>
                      <span className={styles["span-82"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4406ms" }}>{slots[63] ?? "G"}</span>
                      <span className={styles["span-83"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4464ms" }}>{slots[64] ?? "I"}</span>
                      <span className={styles["span-81"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4570ms" }}>{slots[65] ?? "N"}</span>
                      <span className={styles["span-80"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4650ms" }}>{slots[66] ?? "E"}</span>
                      <span className={styles["span-80"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4703ms" }}>{slots[67] ?? "E"}</span>
                      <span className={styles["span-84"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4783ms" }}>{slots[68] ?? "R"}</span>
                      <span className={styles["span-80"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4863ms" }}>{slots[69] ?? "E"}</span>
                      <span className={styles["span-85"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4945ms" }}>{slots[70] ?? "D"}</span>
                    </div>
                    <br className={styles["br-2"]} />
                    <div className={styles["span-79"]}>
                      <span className={styles["span-84"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "4999ms" }}>{slots[71] ?? "R"}</span>
                      <span className={styles["span-80"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5080ms" }}>{slots[72] ?? "E"}</span>
                      <span className={styles["span-86"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5160ms" }}>{slots[73] ?? "L"}</span>
                      <span className={styles["span-83"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5240ms" }}>{slots[74] ?? "I"}</span>
                      <span className={styles["span-87"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5294ms" }}>{slots[75] ?? "A"}</span>
                      <span className={styles["span-88"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5400ms" }}>{slots[76] ?? "B"}</span>
                      <span className={styles["span-83"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5453ms" }}>{slots[77] ?? "I"}</span>
                      <span className={styles["span-86"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5533ms" }}>{slots[78] ?? "L"}</span>
                      <span className={styles["span-83"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5613ms" }}>{slots[79] ?? "I"}</span>
                      <span className={styles["span-89"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5696ms" }}>{slots[80] ?? "T"}</span>
                      <span className={styles["span-90"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "5749ms" }}>{slots[81] ?? "Y"}</span>
                    </div>
                  </h1>
                </div>
              </div>
              <div className={styles["cards-vertical"]}>
                <div className={styles["div-31"]}>
                  <div className={styles["div-54"]}>
                    <ProcessCard slots={["https://framerusercontent.com/images/DhNXzUaSKfT67AfM1cvdERD0900.svg?width=404&height=404","01","INDUSTRIAL ASSESSMENT","Cargo requirement analysis and assessment."]} />
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-55"]}>
                    <ProcessCard slots={["https://framerusercontent.com/images/6qOknzciy1uVjUFa2xYmZRi9C8.png?width=340&height=340","02","TRANSPORT EXECUTION","Coordinated transport with real-time monitoring."]} />
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-56"] + " " + styles["rv-11"]} data-reveal style={{ transitionDelay: "4243ms" }}>
                    <ProcessCard2 slots={["https://framerusercontent.com/images/JkwP2l4zED09ZUEEgSd6jyOhkoQ.png?width=340&height=340","03","DELIVER & OPTIMIZE","Project completion and final verification."]} />
                  </div>
                </div>
              </div>
              <div className={styles["bg-line"]}>
                <div className={styles["div-57"]}>
                  <SvgGraphic className={styles["svg-4"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 796 2159\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"563\"><use href=\"#svg-503176887_185\" data-f2c-idx=\"564\"></use></svg>"} />
                </div>
              </div>
            </section>
            <section className={styles["testimonal"]}>
              <div className={styles["container-27"]}>
                <div className={styles["heading-1-3"]}>
                  <div className={styles["div-58"]}>
                    <Badge2 slots={["TESTIMONIAL"]} />
                  </div>
                  <div className={styles["cargo-solutions"]}>
                    <h1 className={styles["h1-2"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal>{slots[82] ?? "T"}</span>
                        <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "56ms" }}>{slots[83] ?? "R"}</span>
                        <span className={styles["span-53"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "139ms" }}>{slots[84] ?? "U"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "221ms" }}>{slots[85] ?? "S"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "275ms" }}>{slots[86] ?? "T"}</span>
                        <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "354ms" }}>{slots[87] ?? "E"}</span>
                        <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "439ms" }}>{slots[88] ?? "D"}</span>
                      </div>
                      <br className={styles["br"]} />
                      <div className={styles["span-52"]}>
                        <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "492ms" }}>{slots[89] ?? "D"}</span>
                        <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "581ms" }}>{slots[90] ?? "E"}</span>
                        <span className={styles["span-68"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "660ms" }}>{slots[91] ?? "L"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "741ms" }}>{slots[92] ?? "I"}</span>
                        <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "825ms" }}>{slots[93] ?? "V"}</span>
                        <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "883ms" }}>{slots[94] ?? "E"}</span>
                        <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "966ms" }}>{slots[95] ?? "R"}</span>
                        <span className={styles["span-56"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "1024ms" }}>{slots[96] ?? "Y"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["vertical-40px"]}>
                <div className={styles["div-31"]}>
                  <div className={styles["div-59"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "608ms" }}>
                    <div className={styles["div-31"]}>
                      <TestimonialCard slots={["https://framerusercontent.com/images/c0GL7XZHEeye7Q670ksa3hq80A.jpg?scale-down-to=1024&width=2731&height=4096","MICHAEL ANDERSON","HEAD OF OPERATIONS","“OUR","LOGISTICS","OPERATION","IMPROVED","SIGNIFICANTLY","AFTER","WORKING","WITH","THE","TEAM.","THEIR","EXPERTISE","IN","INDUSTRIAL","TRANSPORTATION","HELPED","US","REDUCE","DELAYS,","IMPROVE","DELIVERY","COORDINATION,","AND","MAINTAIN","BETTER","VISIBILITY","ACROSS","COMPLEX","CARGO","MOVEMENTS.”","Lower Delays","47%","Faster Delivery","2.8x"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-31"]}>
                  <div className={styles["div-60"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1793ms" }}>
                    <div className={styles["div-31"]}>
                      <TestimonialCard2 slots={["https://framerusercontent.com/images/EsIz3eIj0fjomfM6JSx5NOygLk.jpg?width=400&height=515","JULIAN HAYES","PROJECT MANAGER","“WE","NEEDED","A","LOGISTICS","PARTNER","CAPABLE","OF","HANDLING","OVERSIZED","INDUSTRIAL","CARGO","WITH","PRECISION.","THEIR","PLANNING","PROCESS,","ROUTE","COORDINATION,","AND","OPERATIONAL","TRANSPARENCY","EXCEEDED","EXPECTATIONS.”","Faster transportation","70%","Improved cargo","3.1x"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["faq"]}>
              <div className={styles["bg-2"]}>
                <div className={styles["div-61"]}>
                  <img className={styles["img-23"]} src={slots[97] ?? "https://framerusercontent.com/images/IZ4jaD8apxIZ0cQtlRkUuwK5sP0.jpg?scale-down-to=2048&width=4096&height=2303"} alt="" />
                </div>
              </div>
              <div className={styles["headline-1"]}>
                <div className={styles["div-62"]}>
                  <Badge4 slots={["FAQ"]} />
                </div>
                <div className={styles["trusted-delivery"]}>
                  <h1 className={styles["h1-4"]}>
                    <div className={styles["span-52"]}>
                      <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2416ms" }}>{slots[98] ?? "T"}</span>
                      <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2472ms" }}>{slots[99] ?? "R"}</span>
                      <span className={styles["span-53"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2550ms" }}>{slots[100] ?? "U"}</span>
                      <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2607ms" }}>{slots[101] ?? "S"}</span>
                      <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2688ms" }}>{slots[102] ?? "T"}</span>
                      <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2767ms" }}>{slots[103] ?? "E"}</span>
                      <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2845ms" }}>{slots[104] ?? "D"}</span>
                    </div>
                    {" "}
                    <div className={styles["span-52"]}>
                      <span className={styles["span-78"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "2924ms" }}>{slots[105] ?? "D"}</span>
                      <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3002ms" }}>{slots[106] ?? "E"}</span>
                      <span className={styles["span-68"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3083ms" }}>{slots[107] ?? "L"}</span>
                      <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3135ms" }}>{slots[108] ?? "I"}</span>
                      <span className={styles["span-55"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3239ms" }}>{slots[109] ?? "V"}</span>
                      <span className={styles["span-54"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3321ms" }}>{slots[110] ?? "E"}</span>
                      <span className={styles["span-58"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3348ms" }}>{slots[111] ?? "R"}</span>
                      <span className={styles["span-56"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "3431ms" }}>{slots[112] ?? "Y"}</span>
                    </div>
                  </h1>
                </div>
              </div>
              <div className={styles["rows-faq"]}>
                <div className={styles["div-31"]}>
                  <div className={styles["div-63"]}>
                    <HomeFAQ slots={["01. What industries does Movora serve?","Movora supports a wide range of industrial sectors, including mining, oil & gas, energy, construction, manufacturing, and large-scale infrastructure projects that require specialized logistics and transportation solutions.","02. What types of cargo can Movora transport?","We handle oversized cargo, heavy machinery, industrial equipment, project cargo, construction materials, energy infrastructure components, and other high-value freight requiring specialized transportation.","03. Do you serve remote project locations?","Yes. Our logistics network is designed to support remote and challenging environments, including mining sites, energy facilities, industrial zones, and infrastructure projects located in hard-to-access areas.","04. How do you ensure cargo safety?","Every project undergoes route analysis, risk assessment, cargo securing planning, and operational monitoring. Our team follows strict safety procedures and industry standards throughout the transportation process.","05. Can Movora handle permits?","Absolutely. We coordinate transportation permits, route approvals, compliance documentation, and regulatory requirements to ensure smooth project execution."]} />
                  </div>
                </div>
                <div className={styles["faq-2"] + " " + styles["rv-2"]} data-reveal>
                  <div className={styles["title-faq"]}>
                    <div className={styles["have-any-questions"]}>
                      <h3 className={styles["h3-12"]}>{slots[113] ?? "HAVE ANY QUESTIONS?"}</h3>
                    </div>
                    <div className={styles["we-re-hare-to-help-reach-out-anytime-our-team-is-always-ready-to-assist-you"]}>
                      <p className={styles["p-61"]}>{slots[114] ?? "We’re hare to help-reach out anytime. Our team is always ready to assist you."}</p>
                    </div>
                  </div>
                  <div className={styles["div-31"]}>
                    <div className={styles["div-64"]}>
                      <Button slots={["REACH OUT","REACH OUT"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["teams"]}>
              <div className={styles["container-30"]}>
                <div className={styles["heading-1-5"]}>
                  <div className={styles["div-65"]}>
                    <Badge5 slots={["BLOG"]} />
                  </div>
                  <div className={styles["logistics-insights"]}>
                    <h1 className={styles["h1-5"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-68"] + " " + styles["rv-8"]} data-reveal>{slots[115] ?? "L"}</span>
                        <span className={styles["span-59"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "77ms" }}>{slots[116] ?? "O"}</span>
                        <span className={styles["span-57"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "154ms" }}>{slots[117] ?? "G"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "206ms" }}>{slots[118] ?? "I"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "283ms" }}>{slots[119] ?? "S"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "364ms" }}>{slots[120] ?? "T"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "441ms" }}>{slots[121] ?? "I"}</span>
                        <span className={styles["span-57"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "518ms" }}>{slots[122] ?? "C"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "597ms" }}>{slots[123] ?? "S"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-52"]}>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "649ms" }}>{slots[124] ?? "I"}</span>
                        <span className={styles["span-71"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "752ms" }}>{slots[125] ?? "N"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "803ms" }}>{slots[126] ?? "S"}</span>
                        <span className={styles["span-70"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "883ms" }}>{slots[127] ?? "I"}</span>
                        <span className={styles["span-57"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "960ms" }}>{slots[128] ?? "G"}</span>
                        <span className={styles["span-53"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "1036ms" }}>{slots[129] ?? "H"}</span>
                        <span className={styles["span-69"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "1113ms" }}>{slots[130] ?? "T"}</span>
                        <span className={styles["span-67"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "1193ms" }}>{slots[131] ?? "S"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
                <div className={styles["div-41"] + " " + styles["rv-2"]} data-reveal>
                  <Button2 slots={["LEARN MORE","LEARN MORE"]} />
                </div>
              </div>
              <div className={styles["div-66"]}>
                <a className={styles["a-3"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "545ms" }} href="./blog/the-future-of-sustainable-industrial-transportation">
                  <div className={styles["div-67"]}>
                    <div className={styles["div-68"]}>
                      <BlogCard slots={["https://framerusercontent.com/images/wtKz2hRGVZTanTeFPTwlgLuMyRU.webp?scale-down-to=1024&width=1704&height=1136","THE FUTURE OF SUSTAINABLE INDUSTRIAL TRANSPORTATION","Jun 12, 2026","Sustainability"]} />
                    </div>
                  </div>
                </a>
                <a className={styles["a-3"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "545ms" }} href="./blog/optimizing-fleet-performance-with-smart-technology">
                  <div className={styles["div-67"]}>
                    <div className={styles["div-68"]}>
                      <BlogCard slots={["https://framerusercontent.com/images/RrwvFunUiNvQ2RK0oWjKfmQZMM.webp?scale-down-to=1024&width=1695&height=1362","OPTIMIZING FLEET PERFORMANCE WITH SMART TECHNOLOGY","Jun 18, 2026","Technology"]} />
                    </div>
                  </div>
                </a>
                <a className={styles["a-3"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1140ms" }} href="./blog/how-mining-logistics-keeps-operations-running">
                  <div className={styles["div-67"]}>
                    <div className={styles["div-68"]}>
                      <BlogCard slots={["https://framerusercontent.com/images/hlCizL0sDFKCLzXdxRwZooVI.webp?scale-down-to=1024&width=1695&height=951","HOW MINING LOGISTICS KEEPS OPERATIONS RUNNING","Jun 25, 2026","Mining"]} />
                    </div>
                  </div>
                </a>
                <a className={styles["a-3"] + " " + styles["rv-2"]} data-reveal style={{ transitionDelay: "1140ms" }} href="./blog/reducing-downtime-through-smart-industrial-logistics">
                  <div className={styles["div-67"]}>
                    <div className={styles["div-68"]}>
                      <BlogCard slots={["https://framerusercontent.com/images/nVUHW3rUNiuApEyNoAdeAohmuM0.webp?scale-down-to=1024&width=1903&height=1277","REDUCING DOWNTIME THROUGH SMART INDUSTRIAL LOGISTICS","Jun 28, 2026","Operations"]} />
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <div className={styles["div-19"]} />
          <div className={styles["div-69"]} />
          <div className={styles["div-70"]}>
            <SmoothScroll slots={[]} />
          </div>
          <div className={styles["div-71"]}>
            <div className={styles["div-31"]}>
              <Footer slots={["CONTACT US","Reliable heavy cargo logistics for industrial operations.","Quick Links","ABOUT US","SERVICE","CONTACT US","HOW WE WORK","Social Media","LINKEDIN","INSTAGRAM","YOUTUBE","FACEBOOK","Others","404 PAGE","https://framerusercontent.com/images/Uqfa7M2fqMqsBvdapoMNEPX5kA.png?width=1360&height=341","© 2026 Movora Logistics. All Rights Reserved."]} />
            </div>
          </div>
        </div>
        <Template2 slots={[]} />
      </div>
      <div className={styles["div-72"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content"]}>
            <div className={styles["div-73"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-62"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom-2"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-74"]}>
        <SvgGraphic className={styles["svg-5"]} html={"<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" id=\"svg-448492977_306\" data-f2c-idx=\"1030\">\n<g opacity=\"0.84\" data-f2c-idx=\"1031\">\n<path d=\"M9.375 3.33333C9.375 8.58003 5.17767 12.8333 0 12.8333V19.1667H9.375V28.6667H15.625C15.625 23.42 19.8223 19.1667 25 19.1667V12.8333H15.625V3.33333H9.375Z\" fill=\"white\" data-f2c-idx=\"1032\"></path>\n</g>\n</svg>"} />
        <SvgGraphic className={styles["svg-6"]} html={"<svg viewBox=\"0 0 20 20\" id=\"svg9547161324\" data-f2c-idx=\"1033\"><path d=\"M 7.5 0 C 7.5 4.142 4.142 7.5 0 7.5 L 0 12.5 L 7.5 12.5 L 7.5 20 L 12.5 20 C 12.5 15.858 15.858 12.5 20 12.5 L 20 7.5 L 12.5 7.5 L 12.5 0 Z\" fill=\"var(--token-125e3e87-caa9-4ed6-947c-99e1ece72c54, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */\" data-f2c-idx=\"1034\"></path></svg>"} />
        <SvgGraphic className={styles["svg-7"]} html={"<svg width=\"796\" height=\"2159\" viewBox=\"0 0 796 2159\" fill=\"none\" id=\"svg-503176887_185\" data-f2c-idx=\"1035\">\n<path d=\"M0 0V2159\" stroke=\"white\" data-f2c-idx=\"1036\"></path>\n<path d=\"M796 0V2159\" stroke=\"white\" data-f2c-idx=\"1037\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-8"]} html={"<svg width=\"140\" height=\"140\" viewBox=\"0 0 140 140\" fill=\"none\" id=\"svg-1325469922_645\" data-f2c-idx=\"1038\">\n<path d=\"M108.182 63.6362L108.182 76.3635L101.818 76.3635L101.818 82.7271L95.4544 82.7271L95.4544 89.0907L89.0907 89.0907L89.0907 95.4544L82.7271 95.4544L82.7271 101.818L69.9998 101.818L69.9998 89.0907L76.3635 89.0907L76.3635 82.7271L82.7271 82.7271L82.7271 76.3635L25.4544 76.3635L25.4544 63.6362L82.7271 63.6362L82.7271 57.2726L76.3635 57.2726L76.3635 50.9089L69.9998 50.9089L69.9998 38.1816L82.7271 38.1816L82.7271 44.5453L89.0907 44.5453L89.0907 50.9089L95.4544 50.9089L95.4544 57.2726L101.818 57.2726L101.818 63.6362\" fill=\"white\" data-f2c-idx=\"1039\"></path>\n</svg>"} />
      </div>
      <div className={styles["div-75"]}>
        <span className={styles["span-91"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-9"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"1043\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"1044\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
