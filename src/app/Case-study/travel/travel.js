import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../travel/travel.css";

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
          <Link href={"#connect"} id="contact-btns">
            <button>+91 9315003754</button>
            <button className="animate__animated animate__jello">
              Sign up
            </button>
          </Link>
        </div>
      </header>

      <section className="google-story">
        <div className="google-story-left">
          <h1>E-sim: A Google Ads Success Story</h1>
          <p>
            Brand E-sim's journey with Google Ads is a testament to strategic
            scaling and optimization. From a modest beginning to achieving
            record-breaking sales and conversion rates, this case study
            showcases the power of targeted advertising and the effective use of
            Google's algorithms. Let's dive into the details of how E-sim
            leveraged Google Ads to maximize their ecommerce potential and
            outperform the competition
          </p>
        </div>

        <div className="google-story-right">
          <Image
            src={"/travel6.jpg"}
            width={0}
            height={0}
            alt="travel"
            priority
            unoptimized
          ></Image>
        </div>
      </section>

      <section className="onboarding">
        <div className="onboarding-header">
          <h1>Initial Onboarding and Potential</h1>
          <p>
            Upon the initial onboarding of E-Travelsim, the sales were at a
            steady $3000 per day. The potential for growth was evident, and the
            client sought to strategically scale their presence across Google
            Ads to boost revenue. Identifying market potential and crafting a
            strategic approach to sales increment was the cornerstone of this
            successful partnership
          </p>
        </div>
        <div className="onboarding-bottom">
          <div className="onboarding-bottom-box">
            <span>1</span>
            <span>
              <h4>Starting Point</h4>
              <p>
                The journey began with a solid base of $3000 in daily sales,
                setting the stage for growth.
              </p>
            </span>
          </div>

          <div className="onboarding-bottom-box">
            <span>2</span>
            <span>
              <h4>Strategic Scaling</h4>
              <p>
                The focus was on strategic scaling to tap into the account's
                full potential and increase revenue.
              </p>
            </span>
          </div>

          <div className="onboarding-bottom-box">
            <span>3</span>
            <span>
              <h4>Market Analysis</h4>
              <p>
                Market potential was assessed to inform the direction of the
                Google Ads campaigns.
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="scaling">
        <div className="scaling-text">
          <div className="scaling-text-header">
            <h1>Initial Scaling Efforts</h1>
            <p>
              The initial phase of the campaign focused on scaling up the ads.
              However, the performance was not aligning with the set benchmarks,
              leading to a comprehensive review of the campaign strategies.
            </p>
          </div>

          <div className="scaling-text-bottom">
            <div className="scaling-text-bottom-left">
              <Image
                id="des"
                src={"/appliance-line2.png"}
                alt="line"
                width={0}
                height={0}
                priority
                unoptimized
              ></Image>

              <Image
                id="mob"
                src={"/appliance-mob2.png"}
                alt="line"
                width={0}
                height={0}
                priority
                unoptimized
              ></Image>
            </div>
            <div className="scaling-text-bottom-right">
              <div className="scaling-text-bottom-right-box">
                <h3>Scaling Attempts</h3>
                <p>
                  Efforts to amplify the reach and impact of the ads were met
                  with subpar performance, necessitating a reevaluation of
                  tactics.
                </p>
              </div>

              <div className="scaling-text-bottom-right-box">
                <h3>Performance Analysis</h3>
                <p>
                  An in-depth analysis was conducted to understand the reasons
                  behind the lackluster results, revealing the need for a more
                  targeted approach.
                </p>
              </div>

              <div className="scaling-text-bottom-right-box">
                <h3>Strategy Overhaul</h3>
                <p>
                  A strategic overhaul was imperative to address the issues and
                  steer the campaigns towards the desired outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="scaling-background"></div>
      </section>

      <section className="heights">
        <div className="heights-header">
          <h1>Scaling to New Heights</h1>
          <p>
            The ad account experienced a significant scale, jumping from $3000
            to an impressive $10,000 per day. This remarkable increase was a
            result of meticulous planning and execution, ensuring that the
            client's investment yielded substantial returns.
          </p>
        </div>

        <div className="heights-bottom">
          <div className="heights-bottom-money">
            <h1>$3000 ........ $10000</h1>

            <div className="initial-scales">
              <span>
                <h4>Initial Sales</h4>
                <p>Starting daily sales before scaling</p>
              </span>

              <span>
                <h4>Scaled Sales </h4>
                <p>Daily sales after strategic scaling</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="travel-image">
        <Image
          src={"/travel8.png"}
          alt="Travel-image"
          width={0}
          height={0}
          priority
          unoptimized
        ></Image>
      </section>

      <section className="optimization">
        <div className="optimization-header">
          <h1>Optimization and Conversion Performance</h1>
          <p>
            E-Travelsim's campaigns were optimized to maximize conversions,
            resulting in a staggering 6600 conversions at a cost per
            registration (CPR) of $12. This optimization was crucial in ensuring
            that the increase in budget did not negatively impact the
            cost/conversion ratio.
          </p>
        </div>

        <div className="optimization-bottom">
          <div className="optimization-bottom-box">
            <div className="optimization-bottom-box-img">
              <Image
                src={"/appliance-down.png"}
                width={0}
                height={0}
                alt="right-aero"
                unoptimized
                priority
              ></Image>
              <h1>Conversions Achieved</h1>
              <p>
                6600 conversions were generated, showcasing the campaign's
                effectiveness.
              </p>
            </div>
          </div>

          <div className="optimization-bottom-box">
            <div className="optimization-bottom-box-img">
              <Image
                src={"/appliance-down.png"}
                width={0}
                height={0}
                alt="right-aero"
                unoptimized
                priority
              ></Image>
              <h1>Cost Efficiency</h1>
              <p>Maintained an efficient CPR of $12 amidst scaling efforts.</p>
            </div>
          </div>

          <div className="optimization-bottom-box">
            <div className="optimization-bottom-box-img">
              <Image
                src={"/appliance-down.png"}
                width={0}
                height={0}
                alt="right-aero"
                unoptimized
                priority
              ></Image>
              <h1>Budget Management</h1>
              <p>Systematic budget increases ensured sustained performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-targeting">
        <div className="product-targeting-header">
          <h1>Geographic and Product Targeting</h1>
          <p>
            Running search campaigns with multiple products and ad groups under
            a single search campaign, E-Travelsim's ads were optimized for
            conversions in regions with the highest purchase potential. The
            campaigns were broken down by continents for granular analysis, with
            each campaign targeting specific countries and products.
          </p>
        </div>

        <div className="product-targeting-bottom">
          <div className="product-targeting-bottom-box">
            <h3>Global Reach</h3>
            <p>
              Ads were tailored for multiple countries, optimizing for regions
              with high purchase intent.
            </p>
          </div>

          <div className="product-targeting-bottom-box">
            <h3>Algorithmic Precision</h3>
            <p>
              Google's algorithm was leveraged to optimize campaigns based on
              target countries and products.
            </p>
          </div>

          <div className="product-targeting-bottom-box">
            <h3>Continental Breakdown</h3>
            <p>
              Campaigns were segmented by continents for better analysis and
              performance tracking
            </p>
          </div>
        </div>
      </section>

      <section className="collaboration">
        <div className="collaboration-header">
          <h1>Algorithmic Collaboration</h1>
          <p>
            Working in tandem with Google's algorithm, slight adjustments were
            made to the campaigns for enhanced impact. These strategic tweaks
            resulted in positive outcomes across the board, demonstrating the
            effectiveness of a nuanced approach to algorithmic advertising.
          </p>
        </div>

        <div className="collaboration-bottom">
          <div className="collaboration-bottom-box">
            <h3>Algorithmic Assistance</h3>
            <p>
              Google's algorithm played a pivotal role in optimizing ad
              delivery.
            </p>
          </div>

          <div className="collaboration-bottom-box">
            <h3>Strategic Adjustments</h3>
            <p>
              Slight but impactful changes were made to improve campaign
              performance.
            </p>
          </div>

          <div className="collaboration-bottom-box">
            <h3>Positive Outcomes</h3>
            <p>
              The collaboration with the algorithm led to widespread campaign
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="competitive">
        <div className="competitive-header">
          <h1>Competitive Strategy and Brand Communication</h1>
          <p>
            E-Travelsim identified and implemented strategies that were
            effective for competitors, adapting them to communicate the brand's
            unique value proposition. This approach resulted in a positive
            response across the campaigns, distinguishing E-Travelsim in a
            competitive market.
          </p>
        </div>

        <div className="competitive-bottom">
          <div className="competitive-bottom-box" id="back-color">
            <div className="competitive-bottom-box-left">
              Competitor Analysis
            </div>
            <div className="competitive-bottom-box-right">
              Leveraged insights from successful competitor strategies.
            </div>
          </div>

          <div className="competitive-bottom-box">
            <div className="competitive-bottom-box-left">
              Brand Differentiation
            </div>
            <div className="competitive-bottom-box-right">
              Communicated E-Travelsim's unique selling points effectively
            </div>
          </div>

          <div className="competitive-bottom-box" id="back-color">
            <div className="competitive-bottom-box-left">Market Response</div>
            <div className="competitive-bottom-box-right">
              Adapted strategies led to a positive market response and campaign
              success.
            </div>
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
