import React from "react";
import "./dentist.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="main-container">
      <section className="section-one">
        <div className="section-one-df">
          <div className="section-one-left">
            <h1>Dentistry Digital Marketing Overhaul</h1>
            <p>
              Welcome to a comprehensive overview of transforming a large
              dentistry chain's digital marketing strategy. Through meticulous
              analysis, strategic restructuring, and skillful execution, we
              confronted the challenges head-on and leveraged opportunities to
              enhance campaign performance and brand presence in the dental
              industry.
            </p>
            <p>
              Join us as we delve into the challenges faced, strategies
              formulated, and impressive results achieved in this marketing
              success story. Our journey maps the meticulous processes required
              in campaign management, landing page optimization, and
              cost-efficient customer acquisition in the competitive space of
              dentistry services.
            </p>
          </div>
          <div className="section-one-right">
            <Image
              src="/dentist-case.png"
              alt=""
              width={300}
              height={550}
              unoptimized
              priority
            ></Image>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="implementing-header">
          <h1>Initial Challenges Faced</h1>
        </div>
        <div className="implementing-df">
          <div className="autotag">
            <div className="autotag-left">1</div>
            <div className="autotag-right">
              <h1>Complex Campaigns</h1>
              <p>
                Managing over 200 individual campaigns under a single ad account
                presented a significant challenge due to its complexity and the
                requirement for a refined approach to campaign structuring
              </p>
            </div>
          </div>
          <div className="autotag" id="pincode-spec">
            <div className="autotag-left">2</div>
            <div className="autotag-right">
              <h1>Account Hygiene</h1>
              <p>
                Lack of proper account hygiene, reflected in stagnant ad copies
                and an accumulation of irrelevant and high CPC keywords, was
                crippling the campaign's cost-efficiency.
              </p>
            </div>
          </div>
          <div className="autotag" id="section-two-three">
            <div className="autotag-left">3</div>
            <div className="autotag-right">
              <h1>Inconsistent Events</h1>
              <p>
                The campaign suffered from multiple conversion events being
                created with irregular event triggers, leading to unreliable
                conversion tracking.
              </p>
            </div>
          </div>

          <div className="autotag" id="section-two-four">
            <div className="autotag-left">4</div>
            <div className="autotag-right">
              <h1>Multiple Landing Pages to manage</h1>
              <p>
                The enormity of managing over 200+ promotion-tied landing pages
                added to the complexity and reduced overall campaign
                effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three" id="section-three-dentist">
        <div className="section-three-image">
          <Image
            src="/dent-pic-one.jpg"
            alt="dent-pic"
            width={0}
            height={0}
            unoptimized
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className="section-three-color"></div>

        <div className="section-three-text">
          <h1>Cataloging the Marketing Goals</h1>

          <div className="scaling-attempt">
            <div className="scaling-attempt-left">
              <div className="scaling-attempt-left-center">1</div>
              <div className="scaling-attempt-left-right"></div>
            </div>
            <div className="scaling-attempt-right">
              <h3>Data-Driven Decisions</h3>
              <p>
                Better data clarity took precedence to enable optimized campaign
                performance based on concrete analytics. Enhancing account
                hygiene was the foundational goal.
              </p>
            </div>
          </div>

          <div className="performance-analysis">
            <div className="performance-analysis-left">
              <div className="performance-analysis-left-center">2</div>
              <div className="performance-analysis-left-right"></div>
            </div>
            <div className="performance-analysis-right">
              <h3>Nomenclature Precision</h3>
              <p>
                Improving the campaign nomenclature to enable refined analysis
                and filters was fundamental for achieving a streamlined
                workflow.
              </p>
            </div>
          </div>

          <div className="strategy-over">
            <div className="strategy-over-left">
              <div className="strategy-over-left-center">3</div>
              <div className="strategy-over-left-right"></div>
            </div>
            <div className="strategy-over-right">
              <h3>Correct Landing Pages</h3>
              <p>
                Ensuring accurate alignment of landing pages to their
                corresponding city campaigns to avoid visitor misdirection and
                enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="restructuring-header">
          <h1>Strategic Splitting of Campaigns</h1>
        </div>
        <div className="restructuring-camp-df">
          <div className="experimentation">
            <h1>Category Specification</h1>
            <p>
              Campaigns were strategically segregated into three main
              categories: General Dentistry, Implants, and Ortho (Aligners &
              Braces), leading to more targeted advertising and clearer
              performance metrics.
            </p>
          </div>
          <div className="bud-management">
            <h1>Lead Segmentation</h1>
            <p>
              By initiating separate lead recordings for each campaign category,
              we were able to precisely track and analyze the lead flow and
              customer interest in each dental service.
            </p>
          </div>
          <div className="experimentation">
            <h1>UTM Tracking</h1>
            <p>
              The implementation of uniform UTM parameters across campaigns
              enabled accurate traffic sourcing, facilitating in-depth campaign
              analysis and optimizing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-five">
        <div className="conversion-rate1-header">
          <h1>Efficient Execution & Monitoring</h1>
        </div>

        <div className="performance-df">
          <div className="deep-analyse">
            <div className="deep-analyse-left" id="deep-first">
              <div className="triangle-up"></div>
              <h4>1</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Strategic Planning</h1>
              <p>
                Significant efforts were invested in strategizing before
                implementation, ensuring that any modifications to the expansive
                array of campaigns did not adversely affect performance.
              </p>
            </div>
          </div>

          <div className="deep-analyse">
            <div className="deep-analyse-left" id="pinpoint">
              <div className="triangle-up"></div>
              <h4>2</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Page Management</h1>
              <p>
                Our collaborative team approach resulted in the consolidation of
                landing pages - from 200 to 6 - dynamically updated based on UTM
                parameters, significantly simplifying page management.
              </p>
            </div>
          </div>

          <div className="deep-analyse" id="deep-last">
            <div className="deep-analyse-left" id="complex">
              <div className="triangle-up"></div>
              <h4>3</h4>
              <div className="triangle-down"></div>
            </div>
            <div className="deep-analyse-right">
              <h1>Zone-Based Approach</h1>
              <p>
                The division of campaigns into North and South zones based on
                clinic locations provided essential insights for regional
                performance management and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="strategy">
        <Image
          src={"/dentist-case.webp"}
          alt="strategy"
          width={100}
          height={100}
          unoptimized
        ></Image>
      </div>

      <section className="section-six">
        <div className="revamping-header">
          <h1>Optimizing Landing Pages</h1>
        </div>
        <div className="revamping-df" id="revamping-color">
          <div className="delivery-breakdown">
            <h1>Collective Improvements</h1>
            <p>
              Fostering team collaboration led to a considerable enhancement in
              landing page experiences, focusing on user-oriented UI/UX design
              informed by marketing expertise.
            </p>
          </div>
          <div className="warehouse">
            <h1>Keyword Refinement</h1>
            <p>
              Removing overlapping and cannibalizing keywords streamlined
              campaigns, preventing internal competition and waste of ad spend.
            </p>
          </div>
          <div className="delivery-breakdown">
            <h1>Placement Precision</h1>
            <p>
              Negative placements were meticulously curated to reduce irrelevant
              traffic and to focus the budget on reaching the intended audience
              more effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="section-seven">
        <div className="sealing-header">
          <h1>Impressive Campaign Outcomes</h1>
        </div>
        <div className="sealing-df">
          <div className="initial">
            <h1>25%</h1>
            <h3>CTR Boost</h3>
            <p>
              Click-through rates surged by a notable 25%, demonstrating
              enhanced ad relevancy and audience engagement.
            </p>
          </div>
          <div className="scaled">
            <h1>60%</h1>
            <h3>Conversions</h3>
            <p>
              Lead conversions experienced a remarkable 60% increase, signaling
              effective campaign targeting and improved lead quality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-eight">
        <div className="custome-header">
          <h1>Cost Per Clinic Visit</h1>
        </div>

        <div className="custome-label">
          <h3>Cost Per Clinic Visit</h3>
          <p>Rs 600-800</p>
        </div>
        <div className="automatic-label">
          <h3>Lead Calls Increase</h3>
          <p>68%</p>
        </div>
        <div className="custome-label" id="focused">
          <h3>Quality Leads Tracking</h3>
          <p>93%</p>
        </div>
        <p id="eight-last">
          The strategic overhaul not only heightened the marketing performances
          but also drastically diminished the cost of acquiring new clients —
          achieving a cost-effective footfall to the clinics ranging between Rs
          600-800. This judicious approach to client acquisition marked a
          significant milestone in the campaign's success narrative.
        </p>
      </section>

      <section className="section-ten">
        <div className="start-left">
          <Image
            src="/call.png"
            alt="Call logo"
            width={100}
            height={100}
            unoptimized
          ></Image>
        </div>
        <div className="start-right">
          <div className="right-header">
            <h1>Let's get Started</h1>
            <p>
              Schedule a call at your convenient time to help us understand your
              brand, vision & expectations.
            </p>
            <div className="call-btn">
              <a href="https://calendly.com/sayam-unnity/30min">
                <button id="btn-first">Schedule A Call</button>
              </a>
              <a href="mailto:sayam.unnity@gmail.com">
                <button id="btn-second">Send an Email</button>
              </a>
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
            alt="Unnity Logo"
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
            <h6>Email ID : sayam@unnity.in</h6>
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
            <li>Google Ads</li>
            <li>Meta Ads</li>
            <li>UI/UX</li>
            <li>Website Development</li>
            <li>Brand Consultation</li>
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
