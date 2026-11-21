import styles from "./styles.module.css"
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

export default function About({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-76"]}>
        <div className={styles["div-77"]}>
          <div className={styles["div-30"]}>
            <NavigationBar slots={["MOVORA","SERVICES","ABOUT US","PRICING","BLOG","LET’S TALK","LET’S TALK"]} />
          </div>
          <div className={styles["div-32"]}>
            <header className={styles["header-2"]}>
              <div className={styles["bg-3"]}>
                <div className={styles["div-78"]}>
                  <img className={styles["img-24"]} src={slots[0] ?? "https://framerusercontent.com/images/sFYzVTlEBePpI68ZgaSQgq2qjY.png?scale-down-to=2048&width=2880&height=1870"} alt="" />
                </div>
              </div>
              <div className={styles["content-2"]}>
                <div className={styles["founder-card"]}>
                  <div className={styles["profile-5"]}>
                    <div className={styles["div-79"]}>
                      <img className={styles["img-25"]} src={slots[1] ?? "https://framerusercontent.com/images/4hVeK6uwFEvj1e5tf7POgQLTU2Q.jpg?scale-down-to=512&width=800&height=538"} alt="" />
                    </div>
                  </div>
                  <div className={styles["founder-name-2"]}>
                    <div className={styles["julio-arafa-2"]}>
                      <p className={styles["p-63"]}>{slots[2] ?? "JULIO ARAFA"}</p>
                    </div>
                    <div className={styles["founder-ceo-2"]}>
                      <p className={styles["p-64"]}>{slots[3] ?? "Founder & CEO"}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["center"]}>
                  <div className={styles["heading-1-6"]}>
                    <div className={styles["div-38"]}>
                      <Badge slots={["ABOUT US"]} />
                    </div>
                    <div className={styles["industry-forward"]}>
                      <h2 className={styles["h2-5"]}>
                        <div className={styles["span-92"]}>
                          <span className={styles["span-93"]}>{slots[4] ?? "I"}</span>
                          <span className={styles["span-94"]}>{slots[5] ?? "N"}</span>
                          <span className={styles["span-95"]}>{slots[6] ?? "D"}</span>
                          <span className={styles["span-96"]}>{slots[7] ?? "U"}</span>
                          <span className={styles["span-97"]}>{slots[8] ?? "S"}</span>
                          <span className={styles["span-98"]}>{slots[9] ?? "T"}</span>
                          <span className={styles["span-97"]}>{slots[10] ?? "R"}</span>
                          <span className={styles["span-98"]}>{slots[11] ?? "Y"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-92"]}>
                          <span className={styles["span-99"]}>{slots[12] ?? "F"}</span>
                          <span className={styles["span-100"]}>{slots[13] ?? "O"}</span>
                          <span className={styles["span-97"]}>{slots[14] ?? "R"}</span>
                          <span className={styles["span-101"]}>{slots[15] ?? "W"}</span>
                          <span className={styles["span-102"]}>{slots[16] ?? "A"}</span>
                          <span className={styles["span-97"]}>{slots[17] ?? "R"}</span>
                          <span className={styles["span-95"]}>{slots[18] ?? "D"}</span>
                        </div>
                      </h2>
                    </div>
                  </div>
                  <div className={styles["container-31"]}>
                    <div className={styles["movora-was-founded-to-solve-complex-transportation-challenges-through-precision-safety-and-operational-excellence-we-believe-industrial-logistics-should-be-transparent-reliable-and-engineered-for-performance-helping-industries-move-forward-with-confidence"]}>
                      <p className={styles["p-65"]}>{slots[19] ?? "Movora was founded to solve complex transportation challenges through precision, safety, and operational excellence. We believe industrial logistics should be transparent, reliable, and engineered for performance, helping industries move forward with confidence."}</p>
                    </div>
                    <div className={styles["card"]}>
                      <div className={styles["div-80"]}>
                        <StartsCard slots={["Operational Rate","96%"]} />
                      </div>
                      <div className={styles["div-81"]}>
                        <StartsCard slots={["Industrial Shipments","4500+"]} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["image-container"]}>
                  <div className={styles["image-2"]}>
                    <div className={styles["div-82"]}>
                      <img className={styles["img-26"]} src={slots[20] ?? "https://framerusercontent.com/images/u3tSqNV07vinA6PlbgACQeLiWM.png?scale-down-to=512&width=1300&height=1200"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className={styles["image-3"]}>
              <div className={styles["div-83"]}>
                <div className={styles["div-84"]}>
                  <img className={styles["img-27"]} src={slots[21] ?? "https://framerusercontent.com/images/HHovDQXr1lLKfKtD90jYVPSgkIA.webp?width=1901&height=1269"} alt="" />
                </div>
              </div>
            </div>
            <section className={styles["our-value"]}>
              <div className={styles["vector-3"]}>
                <div className={styles["div-85"]}>
                  <SvgGraphic className={styles["svg-10"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 692 701\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"112\"><use href=\"#svg1152179763_284\" data-f2c-idx=\"113\"></use></svg>"} />
                </div>
              </div>
              <div className={styles["container-27"]}>
                <div className={styles["heading-1-3"]}>
                  <div className={styles["div-86"]}>
                    <Badge slots={["OUR VALUES"]} />
                  </div>
                  <div className={styles["cargo-solutions"]}>
                    <h1 className={styles["h1-2"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-103"]}>{slots[22] ?? "M"}</span>
                        <span className={styles["span-59"]}>{slots[23] ?? "O"}</span>
                        <span className={styles["span-55"]}>{slots[24] ?? "V"}</span>
                        <span className={styles["span-70"]}>{slots[25] ?? "I"}</span>
                        <span className={styles["span-71"]}>{slots[26] ?? "N"}</span>
                        <span className={styles["span-57"]}>{slots[27] ?? "G"}</span>
                      </div>
                      <br className={styles["br"]} />
                      <div className={styles["span-52"]}>
                        <span className={styles["span-104"]}>{slots[28] ?? "F"}</span>
                        <span className={styles["span-59"]}>{slots[29] ?? "O"}</span>
                        <span className={styles["span-58"]}>{slots[30] ?? "R"}</span>
                        <span className={styles["span-105"]}>{slots[31] ?? "W"}</span>
                        <span className={styles["span-55"]}>{slots[32] ?? "A"}</span>
                        <span className={styles["span-58"]}>{slots[33] ?? "R"}</span>
                        <span className={styles["span-78"]}>{slots[34] ?? "D"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["cards"]}>
                <div className={styles["div-87"]}>
                  <ValueCard slots={["SAFETY FIRST","Safety is integrated into every transportation plan, operational process, and cargo movement we execute."]} />
                </div>
                <div className={styles["div-88"]}>
                  <ValueCard slots={["OPERATIONAL","We continuously optimize logistics performance through planning, monitoring, and disciplined execution."]} />
                </div>
                <div className={styles["div-87"]}>
                  <ValueCard slots={["RELIABILITY","Clients depend on us to move critical cargo on schedule and without compromise."]} />
                </div>
                <div className={styles["div-88"]}>
                  <ValueCard slots={["INNOVATION","Modern logistics technologies help us improve visibility, coordination, and decision-making across operations."]} />
                </div>
              </div>
            </section>
            <section className={styles["logo-12"]}>
              <ul className={styles["ul-2"]}>
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
            </section>
            <section className={styles["vision-mission"]}>
              <div className={styles["bg-4"]}>
                <div className={styles["div-89"]}>
                  <img className={styles["img-28"]} src={slots[35] ?? "https://framerusercontent.com/images/IZ4jaD8apxIZ0cQtlRkUuwK5sP0.jpg?scale-down-to=2048&width=4096&height=2303"} alt="" />
                </div>
              </div>
              <div className={styles["container-32"]}>
                <div className={styles["heading-1-7"]}>
                  <div className={styles["div-90"]}>
                    <Badge6 slots={["FUTURE DIRECTION"]} />
                  </div>
                  <div className={styles["reliable-execution"]}>
                    <h1 className={styles["h1-6"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-58"]}>{slots[36] ?? "R"}</span>
                        <span className={styles["span-54"]}>{slots[37] ?? "E"}</span>
                        <span className={styles["span-68"]}>{slots[38] ?? "L"}</span>
                        <span className={styles["span-70"]}>{slots[39] ?? "I"}</span>
                        <span className={styles["span-55"]}>{slots[40] ?? "A"}</span>
                        <span className={styles["span-106"]}>{slots[41] ?? "B"}</span>
                        <span className={styles["span-68"]}>{slots[42] ?? "L"}</span>
                        <span className={styles["span-54"]}>{slots[43] ?? "E"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-52"]}>
                        <span className={styles["span-54"]}>{slots[44] ?? "E"}</span>
                        <span className={styles["span-55"]}>{slots[45] ?? "X"}</span>
                        <span className={styles["span-54"]}>{slots[46] ?? "E"}</span>
                        <span className={styles["span-57"]}>{slots[47] ?? "C"}</span>
                        <span className={styles["span-53"]}>{slots[48] ?? "U"}</span>
                        <span className={styles["span-69"]}>{slots[49] ?? "T"}</span>
                        <span className={styles["span-70"]}>{slots[50] ?? "I"}</span>
                        <span className={styles["span-59"]}>{slots[51] ?? "O"}</span>
                        <span className={styles["span-71"]}>{slots[52] ?? "N"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
                <div className={styles["image-4"]}>
                  <div className={styles["image-5"]}>
                    <div className={styles["div-91"]}>
                      <img className={styles["img-29"]} src={slots[53] ?? "https://framerusercontent.com/images/JoetDiAowPMDCFJLaaPMUsLzk.webp?width=900&height=926"} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles["bottom-3"]}>
                  <div className={styles["card-2"]}>
                    <div className={styles["container-33"]}>
                      <div className={styles["our-vision"]}>
                        <p className={styles["p-66"]}>{slots[54] ?? "OUR VISION"}</p>
                      </div>
                      <div className={styles["we-envision-a-future-where-industrial-cargo-moves-with-greater-precision-safety-and-efficiency-through-engineered-logistics-solutions-advanced-operational-planning-and-continuous-innovation-we-aim-to-become-a-trusted-partner-for-industries-that-power-global-progress"]}>
                        <p className={styles["p-67"]}>{slots[55] ?? "We envision a future where industrial cargo moves with greater precision, safety, and efficiency. Through engineered logistics solutions, advanced operational planning, and continuous innovation, we aim to become a trusted partner for industries that power global progress."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["card-3"]}>
                    <div className={styles["container-34"]}>
                      <div className={styles["our-vision"]}>
                        <p className={styles["p-66"]}>{slots[56] ?? "OUR MISSION"}</p>
                      </div>
                      <div className={styles["our-mission-is-to-deliver-reliable-logistics-solutions-for-mining-energy-infrastructure-and-industrial-sectors-through-operational-excellence-safety-first-execution-and-real-time-coordination-by-optimizing-every-stage-of-the-transportation-process-we-help-clients-reduce-risk-improve-performance-and-keep-critical-operations-moving-forward"]}>
                        <p className={styles["p-68"]}>{slots[57] ?? "Our mission is to deliver reliable logistics solutions for mining, energy, infrastructure, and industrial sectors through operational excellence, safety-first execution, and real-time coordination. By optimizing every stage of the transportation process, we help clients reduce risk, improve performance, and keep critical operations moving forward."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["teams-2"]}>
              <div className={styles["bg-5"]}>
                <div className={styles["div-92"]}>
                  <img className={styles["img-30"]} src={slots[58] ?? "https://framerusercontent.com/images/LJStJuSx9D5r0nkBPI7El7UwPSQ.jpg?scale-down-to=2048&width=4096&height=2621"} alt="" />
                </div>
              </div>
              <div className={styles["container-35"]}>
                <div className={styles["heading-1-3"]}>
                  <div className={styles["div-93"]}>
                    <Badge5 slots={["TEAMS"]} />
                  </div>
                  <div className={styles["cargo-solutions"]}>
                    <h1 className={styles["h1-7"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-68"]}>{slots[59] ?? "L"}</span>
                        <span className={styles["span-59"]}>{slots[60] ?? "O"}</span>
                        <span className={styles["span-57"]}>{slots[61] ?? "G"}</span>
                        <span className={styles["span-70"]}>{slots[62] ?? "I"}</span>
                        <span className={styles["span-67"]}>{slots[63] ?? "S"}</span>
                        <span className={styles["span-69"]}>{slots[64] ?? "T"}</span>
                        <span className={styles["span-70"]}>{slots[65] ?? "I"}</span>
                        <span className={styles["span-57"]}>{slots[66] ?? "C"}</span>
                        <span className={styles["span-67"]}>{slots[67] ?? "S"}</span>
                      </div>
                    </h1>
                    <h1 className={styles["h1-7"]}>
                      <div className={styles["span-52"]}>
                        <span className={styles["span-54"]}>{slots[68] ?? "E"}</span>
                        <span className={styles["span-55"]}>{slots[69] ?? "X"}</span>
                        <span className={styles["span-67"]}>{slots[70] ?? "P"}</span>
                        <span className={styles["span-54"]}>{slots[71] ?? "E"}</span>
                        <span className={styles["span-58"]}>{slots[72] ?? "R"}</span>
                        <span className={styles["span-69"]}>{slots[73] ?? "T"}</span>
                        <span className={styles["span-67"]}>{slots[74] ?? "S"}</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles["team-cards"]}>
                <div className={styles["div-94"]}>
                  <FounderCard slots={["https://framerusercontent.com/images/4hVeK6uwFEvj1e5tf7POgQLTU2Q.jpg?width=800&height=538","LUCA BANNET","Founder & CEO"]} />
                </div>
                <div className={styles["div-94"]}>
                  <FounderCard slots={["https://framerusercontent.com/images/MK5jS4lnr2d4p3hqfnyQIWwLmkQ.jpg?width=800&height=538","ALEXANDER WARD","Chief Executive Officer"]} />
                </div>
                <div className={styles["div-94"]}>
                  <FounderCard slots={["https://framerusercontent.com/images/0CoH5mqLrkfae11Eq6MuPtwPfUo.jpg?width=800&height=538","DANIEL BROOKS","Project Delivery Director"]} />
                </div>
                <div className={styles["div-94"]}>
                  <FounderCard slots={["https://framerusercontent.com/images/X49J3cTTsvGq8ggP5EpPl6b4YJ0.jpg?width=800&height=538","SOPHIA CARTER","Transport Specialist"]} />
                </div>
              </div>
            </section>
          </div>
          <div className={styles["div-19"]} />
          <div className={styles["div-95"]} />
          <div className={styles["div-70"]}>
            <SmoothScroll slots={[]} />
          </div>
          <div className={styles["div-71"]}>
            <Footer slots={["CONTACT US","Reliable heavy cargo logistics for industrial operations.","Quick Links","ABOUT US","SERVICE","CONTACT US","HOW WE WORK","Social Media","LINKEDIN","INSTAGRAM","YOUTUBE","FACEBOOK","Others","404 PAGE","https://framerusercontent.com/images/Uqfa7M2fqMqsBvdapoMNEPX5kA.png?width=1360&height=341","© 2026 Movora Logistics. All Rights Reserved."]} />
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
        <SvgGraphic className={styles["svg-5"]} html={"<svg width=\"25\" height=\"32\" viewBox=\"0 0 25 32\" fill=\"none\" id=\"svg-448492977_306\" data-f2c-idx=\"454\">\n<g opacity=\"0.84\" data-f2c-idx=\"455\">\n<path d=\"M9.375 3.33333C9.375 8.58003 5.17767 12.8333 0 12.8333V19.1667H9.375V28.6667H15.625C15.625 23.42 19.8223 19.1667 25 19.1667V12.8333H15.625V3.33333H9.375Z\" fill=\"white\" data-f2c-idx=\"456\"></path>\n</g>\n</svg>"} />
        <SvgGraphic className={styles["svg-11"]} html={"<svg width=\"692\" height=\"701\" viewBox=\"0 0 692 701\" fill=\"none\" id=\"svg1152179763_284\" data-f2c-idx=\"457\">\n<path opacity=\"0.3\" d=\"M259.5 0C259.5 145.182 143.318 262.875 0 262.875V438.125H259.5V701H432.5C432.5 555.818 548.682 438.125 692 438.125V262.875H432.5V0H259.5Z\" fill=\"black\" data-f2c-idx=\"458\"></path>\n</svg>"} />
        <SvgGraphic className={styles["svg-8"]} html={"<svg width=\"140\" height=\"140\" viewBox=\"0 0 140 140\" fill=\"none\" id=\"svg-1325469922_645\" data-f2c-idx=\"459\">\n<path d=\"M108.182 63.6362L108.182 76.3635L101.818 76.3635L101.818 82.7271L95.4544 82.7271L95.4544 89.0907L89.0907 89.0907L89.0907 95.4544L82.7271 95.4544L82.7271 101.818L69.9998 101.818L69.9998 89.0907L76.3635 89.0907L76.3635 82.7271L82.7271 82.7271L82.7271 76.3635L25.4544 76.3635L25.4544 63.6362L82.7271 63.6362L82.7271 57.2726L76.3635 57.2726L76.3635 50.9089L69.9998 50.9089L69.9998 38.1816L82.7271 38.1816L82.7271 44.5453L89.0907 44.5453L89.0907 50.9089L95.4544 50.9089L95.4544 57.2726L101.818 57.2726L101.818 63.6362\" fill=\"white\" data-f2c-idx=\"460\"></path>\n</svg>"} />
      </div>
      <div className={styles["div-75"]}>
        <span className={styles["span-91"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-9"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"464\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"465\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
