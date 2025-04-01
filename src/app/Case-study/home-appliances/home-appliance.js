import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../home-appliances/home-appliances.css";

const page = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/check.png"}
              width={0}
              height={0}
              alt="Logo"
              unoptimized
              priority
            ></Image>
          </Link>
        </div>

        <div className="sign-contact">
          <Link href={"/"} id="contact-btns">
            <button>+91 9315003754</button>
            <button className="animate__animated animate__jello">
              Sign up
            </button>
          </Link>
        </div>
      </header>

      <section className="section-one">
        <div className="section-one-left">
          <h1>Case Study: Of India Largest Home-Appliance Brand</h1>
          <p>
            Mission to dominate the digital advertising space through Google
            Ads. The journey began with scaling efforts, but the initial
            performance did not meet expectations. A deep dive into the campaign
            structures and budget management was initiated to pinpoint the
            underlying issues and rectify them for improved results.
          </p>
          <p>
            Through meticulous analysis and strategic restructuring, Home
            appliances India's advertising campaigns were transformed. This case
            study explores the challenges faced, the innovative solutions
            implemented, and the remarkable outcomes achieved in their quest for
            ecommerce excellence
          </p>
        </div>

        <div className="section-one-right">
          <Image
            src={"/home11.jpg"}
            width={0}
            height={0}
            alt="Home-image"
            priority
            unoptimized
          ></Image>
        </div>
      </section>

      <section className="section-two">
        <div className="section-two-header">
          <h1>Initial Scaling Efforts</h1>
          <p>
            The initial phase of the campaign focused on scaling up the ads.
            However, the performance was not aligning with the set benchmarks,
            leading to a comprehensive review of the campaign strategies.
          </p>
        </div>

        <div className="setion-two-df">
          <div className="section-two-left">
            <Image
              id="des"
              src={"/appliance-line.png"}
              width={0}
              height={0}
              alt="appliance"
              unoptimized
            ></Image>

            <Image
              id="mob"
              src={"/appliance-mob.png"}
              width={0}
              height={0}
              alt="appliance"
              unoptimized
            ></Image>
          </div>

          <div className="section-two-right">
            <div className="">
              <h3>Scaling Attempts</h3>
              <p>
                Efforts to amplify the reach and impact of the ads were met with
                subpar performance, necessitating a reevaluation of tactics.
              </p>
            </div>

            <div className="">
              <h3>Performance Analysis</h3>
              <p>
                An in-depth analysis was conducted to understand the reasons
                behind the lackluster results, revealing the need for a more
                targeted approach
              </p>
            </div>

            <div className="">
              <h3>Strategy Overhaul</h3>
              <p>
                A strategic overhaul was imperative to address the issues and
                steer the campaigns towards the desired outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-threee">
        <div className="section-threee-img">
          <Image
            src={"/background-home.jpg"}
            width={0}
            height={0}
            alt="challenges"
            unoptimized
          ></Image>
        </div>

        <div className="section-threee-text">
          <h1>Conversion Rate Challenges</h1>
          <p>
            The team delved into the intricacies of the campaigns to uncover the
            reasons behind the low conversion rates. This investigation was
            critical to identify and address the root causes of the problem.
          </p>

          <div className="aero-info">
            <div className="home-aero">
              <span>
                <Image
                  src={"/appliance-down.png"}
                  width={0}
                  height={0}
                  alt="Blue-aero"
                  unoptimized
                ></Image>
              </span>

              <span>
                <h4>Deep Analysis</h4>
                <p>
                  An exhaustive analysis was conducted to understand the factors
                  contributing to the low conversion rates.
                </p>
              </span>
            </div>

            <div className="home-aero">
              <span>
                <Image
                  src={"/appliance-down.png"}
                  width={0}
                  height={0}
                  alt="Blue-aero"
                  unoptimized
                ></Image>
              </span>

              <span>
                <h4>Pinpointing Issues</h4>
                <p>
                  The issue of Pincodes emerged as a significant barrier, with a
                  vast product range and limited availability across locations.
                </p>
              </span>
            </div>

            <div className="home-aero">
              <span>
                <Image
                  src={"/appliance-down.png"}
                  width={0}
                  height={0}
                  alt="Blue-aero"
                  unoptimized
                ></Image>
              </span>

              <span>
                <h4>Complexity of Delivery</h4>
                <p>
                  The complexity of managing deliveries for over 2,000 products
                  across various Pincodes was a daunting task that required a
                  strategic solution.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="section-threee-background"></div>
      </section>

      <section className="section-fourr">
        <div className="section-fourr-header">
          <h1>Restructuring Campaigns</h1>
          <p>
            With a determination to optimize performance, multiple campaign
            structures were tested. The goal was to find the sweet spot that
            would prevent budget leakages and maximize returns.
          </p>
        </div>

        <div className="section-fourr-bottom">
          <div className="section-fourr-bottom-box">
            <h3>Experimentation</h3>
            <p>
              Various campaign structures were trialed, searching for the most
              effective way to reach potential customers without overspending
            </p>
          </div>

          <div className="section-fourr-bottom-box">
            <h3>Budget Management</h3>
            <p>
              Close attention was paid to budget allocation, ensuring that funds
              were directed towards the most promising campaigns.
            </p>
          </div>

          <div className="section-fourr-bottom-box">
            <h3>Performance Tracking</h3>
            <p>
              Continuous tracking of campaign performance allowed for quick
              adjustments and fine-tuning to avoid any wastage of resources.
            </p>
          </div>
        </div>
      </section>

      <section className="section-fivee">
        <div className="section-fivee-header">
          <h1>Revamping Delivery Methods</h1>
          <p>
            The internal delivery method was dissected and restructured to align
            with the advertising strategy. With nine warehouses across India, a
            tailored approach was necessary to ensure efficient product
            delivery.
          </p>
        </div>

        <div className="section-fivee-df">
          <div className="section-fivee-box">
            <h1>Delivery Breakdown</h1>
            <p>
              The existing delivery method was broken down to its core to
              understand the logistics and streamline the process.
            </p>
          </div>

          <div className="section-fivee-box">
            <h1>Warehouse Integration</h1>
            <p>
              Each of the nine warehouses was integrated into the ad strategy,
              allowing for specific product delivery from the nearest location.
            </p>
          </div>

          <div className="section-fivee-box">
            <h1>Efficiency Boost</h1>
            <p>
              This restructuring led to a more efficient delivery system,
              directly impacting the customer experience and conversion rates.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sixx">
        <Image
          src={"/home6.png"}
          width={0}
          height={0}
          alt="home-six"
          unoptimized
        ></Image>
      </section>

      <section className="section-sevenn">
        <div className="implementing-header">
          <h1>Implementing Autotag Technology</h1>
          <p>
            Autotag technology was identified as a tool to bridge the gap
            between ad interactions and product availability. The development
            team played a crucial role in integrating this solution.
          </p>
        </div>
        <div className="implementing-df">
          <div className="autotag">
            <div className="autotag-left">1</div>
            <div className="autotag-right">
              <h1>Autotag Integration</h1>
              <p>
                The Autotag tool was seamlessly integrated, prompting users for
                their Pincode upon website interaction.
              </p>
            </div>
          </div>
          <div className="autotag" id="pincode-spec">
            <div className="autotag-left">2</div>
            <div className="autotag-right">
              <h1>Pincode Specific Display</h1>
              <p>
                Products available in the user's location were dynamically
                displayed, enhancing the relevance of the website's offerings
              </p>
            </div>
          </div>
          <div className="autotag">
            <div className="autotag-left">3</div>
            <div className="autotag-right">
              <h1>Conversion Uplift</h1>
              <p>
                This targeted approach led to a significant increase in
                conversion rates, as users were presented with deliverable
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-eightt">
        <div className="section-eight-header"></div>
      </section>

      <section className="section-ninee">
        <div className="section-ninee-header">
          <h1>Custom Labels and Inventory Management</h1>
          <p>
            Custom labels were created to sync with the inventory updates,
            allowing for a dynamic and responsive ad campaign that reflected
            real-time product availability.
          </p>
        </div>

        <div className="section-ninee-df">
          <div className="section-ninee-box">
            <span>
              <h2>Custom Label Creation</h2>
            </span>
            <span>
              <h3>
                Labels were tailored to match inventory specifics, ensuring
                accurate ad representation.
              </h3>
            </span>
          </div>
          <div className="section-ninee-box" id="color-white">
            <span>
              <h2>Automatic Updates</h2>
            </span>
            <span>
              <h3>
                As inventory levels changed, the custom labels were
                automatically updated to maintain consistency.
              </h3>
            </span>
          </div>

          <div className="section-ninee-box">
            <span>
              <h2>Conversion-Focused Campaigns</h2>
            </span>
            <span>
              <h3>
                The integration of custom labels allowed for more targeted
                campaigns, driving conversions.
              </h3>
            </span>
          </div>
        </div>
      </section>

      <section className="section-tenn">
        <div className="outcome">
          <h1>Outcome: Enhanced Ad Delivery</h1>
          <p>
            The culmination of these efforts resulted in ads being displayed
            only in locations where delivery was available, ensuring maximum
            relevance and efficiency.
          </p>
        </div>

        <div className="outcome-df">
          <div className="revenue">
            <h1>86%</h1>
            <h3>Increased Revenue</h3>
            <p>
              Revenue increased from the cities where we are targeting. Instock
              products reflected in cities targeted now
            </p>
          </div>

          <div className="cr">
            <h1>44%</h1>
            <h3>Increased Conversion Rate</h3>
            <p>
              Increase in conversion rate drastically reason being products
              reflected
            </p>
          </div>

          <div className="revenue">
            <h1>91%</h1>
            <h3>Increased in Orders</h3>
            <p>
              Orders increased that helped supported organically and for the ads
              purpose as well
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          <Image
            src="/check.png"
            width={0}
            height={0}
            alt="logo-image"
            unoptimized
            style={{ width: "150px", height: "85px" }}
          ></Image>
        </div>
        <div className="footer-text">
          <span className="footer-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            <h6>Phone No - +91 93150 03754</h6>
          </span>
          <span className="footer-email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <h6>Email Id : sayam@unnity.in</h6>
          </span>
          <span className="footer-address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <h6>
              Address : SF-40 2nd Floor, Pearl Omaxe, Netaji Subhash Place,
              Pitampura, New Delhi - 110034
            </h6>
          </span>
        </div>

        <div className="form-boottom">
          <div className="footer-services">
            <h4>Services</h4>
            <li>SEO</li>
            <li>Gogle Ads</li>
            <li>Meta Ads</li>
            <li>UI/UX</li>
            <li>Website Devlopment</li>
            <li>Brand Consult</li>
          </div>
          <div className="follow-us">
            <h4>Follow Us</h4>
            <Link href="https://www.instagram.com/_unnity/">
              <span id="insta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <h6>Instagram</h6>
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/sayam-jain-2708031b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span id="linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <h6>Linkedin</h6>
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
