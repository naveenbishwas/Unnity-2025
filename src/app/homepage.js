"use client";

import Image from "next/image";
import "animate.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [designation, setDesignation] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const submitHanlder = (e) => {
    e.preventDefault();

    const serviceId = "service_lc3zqsj";
    const templateId = "template_lgmyk3o";
    const publicKey = "vwQ1UwMU_xiay6xqT";
    const comfirmationTemplateId = "template_dtk82zi";

    const templateParams = {
      to_name: "Sayam",
      from_name: companyName,
      company_name: companyName,
      monthly_marketing_budget: budget,
      client_name: name,
      phone_no: phone,
      email_id: email,
      service_id: service,
      designation: designation,
    };

    const confirmationParams = {
      to_name: name,
      to_email: email,
      user_name: name,
      user_email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setCompanyName("");
        setBudget("");
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setDesignation("");
      })
      .catch((error) => {
        console.log(error);
      });

    emailjs
      .send(serviceId, comfirmationTemplateId, confirmationParams, publicKey)
      .then((response) => {
        console.log("Confirmation email sent sucessfully", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  const carousel = (slider) => {
    const z = 300;
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    });
    slider.on("detailsChanged", rotate);
  };

  const [sliderRef2] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <>
      <div className="main-container">
        <header>
          <div className="logo">
            <Link href={"/"}>
              <Image
                src={"check.png"}
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

        <section className="front-banner">
          <Image
            src={"./UNNITY.png"}
            alt="Unnity Logo"
            width={0}
            height={0}
            unoptimized
            priority
          ></Image>
          <div className="schedule-btn">
            <Link href="https://calendly.com/sayam-unnity/30min?month=2024-07">
              <button>Schedule a call now</button>
            </Link>
          </div>
        </section>

        <section className="sub-form">
          <div className="sub-form-header">
            <h1>
              Empower Your Brand With <br />
              <span id="blue"> UNNITY DIGITAL MARKETING SOLUTIONS</span>
            </h1>
            <p>
              At Unnity, we empower brands to thrive in the digital age. Our
              comprehensive suite of digital marketing solutions is designed to
              amplify your online visibility, engage your audience, and drive
              meaningful conversions. Unleash the full potential of your brand
              with Unnity.
            </p>
          </div>

          <div className="sub-form-bottom-part">
            <div className="sub-form-bottom-part-left-side">
              <Image
                src={"./sayyam2.png"}
                width={0}
                height={0}
                alt="Sayyam Image"
                unoptimized
                priority
              ></Image>
            </div>

            <div className="sub-form-bottom-part-right-side" id="connect">
              <form
                action=""
                className="contact-form needs-validation"
                onSubmit={submitHanlder}
              >
                <div className="was-validated">
                  <input
                    type="text"
                    name=""
                    id="company-name"
                    placeholder="Company Name"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="was-validated">
                  <select
                    required
                    name="budget"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="Monthly Marketing Budget">
                      Monthly Marketing Budget
                    </option>
                    <option value="Less Than Rs 2L Budget">
                      Less Than Rs 2L Budget
                    </option>
                    <option value="Rs 2L to Rs 5L">Rs 2L to Rs 5L</option>
                    <option value="Rs 5L to Rs 25L">Rs 5L to Rs 25L</option>
                    <option value="More Than 50L">More Than 50L</option>
                    <option value="I am Looking For Organic Services">
                      I am Looking For Organic Services
                    </option>
                  </select>
                </div>
                <div className="was-validated">
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="was-validated">
                  <input
                    type="tel"
                    name=""
                    id="phone"
                    placeholder="Phone Number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="was-validated">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="was-validated">
                  <select
                    required
                    name="service"
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Choose A Service</option>
                    <option value="SEO & Content">SEO</option>
                    <option value="Paid Search">
                      Paid Marketing(Google, Facebook & Amazon ads)
                    </option>
                    <option value="MarketPlace Management">UI/UX</option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Website Maintenance">
                      Website Maintenance
                    </option>
                    <option value="Shopify Migration">Shopify Migration</option>
                  </select>
                </div>
                <div className="was-validated">
                  <input
                    type="text"
                    name=""
                    id="designation"
                    placeholder="Designation"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>

                <div id="sub-btn">
                  <input type="submit" value="Submit" id="submit" />
                </div>
              </form>
            </div>
          </div>

          <div className="float" id="color-balls">
            <div className="float-one">
              <h5>CPR</h5>
            </div>
            <div className="float-two">
              <h5>CPM</h5>
            </div>
            <div className="float-three">
              <h5>CTR</h5>
            </div>
            <div className="float-four">
              <h5>Cost Per Purchase</h5>
            </div>
            <div className="float-five">
              <h5>Frequency</h5>
            </div>
            <div className="float-six">
              <h5>Conversion rate</h5>
            </div>
          </div>
        </section>

        <section className="section-three">
          <div className="section-three-left">
            <h1>Boost Your Business Online with Smart Marketing Strategies</h1>
            <p>
              We're here to supercharge your brand's online presence. Our
              effective digital marketing strategies are designed to bring you
              more customers and make your business shine. Discover a new era of
              digital marketing with us. Our team combine creativity and
              strategy to bring you success in the online world. Let us be your
              digital wizards. We'll help your business get notice, captivate
              your audience, and be the talk of the online town.
            </p>
          </div>

          <div className="section-three-right">
            <Image
              src={"./trans-purple.png"}
              width={0}
              height={0}
              alt="Trans Purple Image"
              unoptimized
            ></Image>
          </div>
        </section>

        <section className="section-four">
          <div className="section-four-header">
            <h1>Our Services</h1>
          </div>

          <div className="section-four-top">
            <div className="seo">
              <Image
                src={"./seo2.png"}
                width={0}
                height={0}
                alt="Seo"
                unoptimized
                priority
              ></Image>
              <h2 id="des">Search Engine Optimisation</h2>
              <h2 id="mob">
                Search Engine
                <br /> Optimisation
              </h2>
            </div>

            <div className="meta">
              <Image
                src={"./meta2.png"}
                width={0}
                height={0}
                alt="Meta Logo"
                unoptimized
                priority
              ></Image>
              <h2>Meta Ads</h2>
            </div>

            <div className="ads">
              <Image
                src={"./adwords2.png"}
                width={0}
                height={0}
                alt="Google-ads Logo"
                unoptimized
                priority
              ></Image>
              <h2>Google Ads</h2>
            </div>
          </div>

          <div className="section-four-bottom">
            <div className="ui">
              <Image
                src={"./ui5.png"}
                width={0}
                height={0}
                alt="UI Logo"
                unoptimized
                priority
              ></Image>
              <h2>UI/UX</h2>
            </div>

            <div className="development">
              <Image
                src={"./webiste2.png"}
                width={0}
                height={0}
                alt="Website Logo"
                unoptimized
                priority
              ></Image>
              <h2>Website Development</h2>
            </div>

            <div className="brand">
              <Image
                src={"./consult3.png"}
                width={0}
                height={0}
                alt="Consult Logo"
                unoptimized
                priority
              ></Image>
              <h2>Brand Consultation</h2>
            </div>
          </div>

          <div id="mob-service">
            <div id="seo">
              <Image
                src={"./seo2.png"}
                width={0}
                height={0}
                alt="Seo Logo"
                unoptimized
                priority
              ></Image>

              <h2 id="des">Search Engine Optimisation</h2>
              <h2 id="mob">
                Search Engine
                <br /> Optimisation
              </h2>
            </div>

            <div id="meta">
              <Image
                src={"./meta2.png"}
                width={0}
                height={0}
                alt="Meta Logo"
                unoptimized
                priority
              ></Image>
              <h2>Meta Ads</h2>
            </div>

            <div id="ads">
              <Image
                src={"./adwords2.png"}
                width={0}
                height={0}
                alt="Google-ads Logo"
                unoptimized
                priority
              ></Image>
              <h2>Google Ads</h2>
            </div>

            <div id="ui">
              <Image
                src={"./ui5.png"}
                width={0}
                height={0}
                alt="UI Logo"
                unoptimized
                priority
              ></Image>
              <h2>UI/UX</h2>
            </div>

            <div id="development">
              <Image
                src={"./webiste2.png"}
                width={0}
                height={0}
                alt="Website Logo"
                unoptimized
                priority
              ></Image>
              <h2>Website Development</h2>
            </div>

            <div id="brand">
              <Image
                src={"./consult3.png"}
                width={0}
                height={0}
                alt="Seo Logo"
                unoptimized
                priority
              ></Image>
              <h2>Brand Consultation</h2>
            </div>
          </div>
        </section>

        <section className="section-five" id="video-onee">
          <video muted loop autoPlay controls={false}>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/c67199596e674e68b96af8437c69f5f8.mp4"
              type="video/mp4"
            />
          </video>
        </section>

        <section className="section-six" id="section-sixx">
          <div className="brand-we-worked">
            <div className="brand-we-worked-header">
              <h1>
                Impact <span id="italic"> we </span> created
              </h1>
            </div>

            <hr className="brand-border" />
            <div className="achievement-first" id="cupidclothig"></div>
            <div className="achievement-first" id="auravebrand"></div>

            <div className="naveen-slider">
              <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider" id="naveen-slider">
                  <div
                    className="keen-slider__slide number-slide2"
                    id="dis-grid"
                  >
                    <div className="achievement-first" id="auravebrand">
                      <div className="achieve-name">
                        <Image
                          id="aurave"
                          src="/aurav.avif"
                          width={50}
                          height={60}
                          alt="Aurave Logo"
                          unoptimized
                        ></Image>
                      </div>

                      <div className="achieve-first-row" id="aurave-row">
                        <div className="achieve-numbers">
                          <div className="">
                            {/* <img src="/growth.png" alt="" /> */}
                            <Image
                              id="network"
                              src="/growth.png"
                              width={50}
                              height={50}
                              alt="Growth Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+56%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase{" "}
                              <span className="achieve-color">Revenue</span> in
                              Last 6 months
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/shopping.png"
                              width={50}
                              height={50}
                              alt="Shopping Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+86%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Number of
                              <span className="achieve-color"> Order </span>
                              Increase
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/interest-rate.png"
                              width={50}
                              height={50}
                              alt="Network Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+36%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase in
                              <span className="achieve-color">
                                {" "}
                                Conversion Rate
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="keen-slider__slide number-slide2">
                    <div className="achievement-first" id="cupidbrand">
                      <div className="achieve-name">
                        <svg
                          id="cupid"
                          xmlns="http://www.w3.org/2000/svg"
                          width="108"
                          height="43"
                          viewBox="0 0 108 43"
                          fill="none"
                        >
                          <path
                            d="M22.0234 2.00809C32.8219 -1.65571 40.7807 4.58535 44.3067 8.31215C44.3927 8.40303 44.3824 8.54443 44.2878 8.62639L38.3557 13.7694C38.2628 13.8499 38.1225 13.8388 38.0375 13.7499C36.9196 12.5807 35.043 12.0493 34.2113 11.9278C31.3852 11.7939 29.4429 12.8662 28.6712 13.5412C28.5783 13.6225 28.4375 13.6228 28.3459 13.54C26.6055 11.9654 23.7367 11.8045 22.4848 11.9278C18.4529 12.747 16.8245 15.6339 16.5143 16.9749C15.6785 20.1844 16.507 22.3361 17.5499 23.9631C17.5591 23.9774 17.5699 23.9905 17.5821 24.0023L28.3654 34.4138C28.451 34.4964 28.5867 34.4965 28.6724 34.4139L36.6029 26.7666C36.6841 26.6883 36.8114 26.6837 36.898 26.7561L44.93 33.4631C45.0169 33.5357 45.0379 33.6584 44.9728 33.7511C42.2834 37.5837 33.2498 44.9237 22.0234 40.9024C9.12695 36.2828 7.46859 25.2468 8.08013 19.8652C8.16167 15.4621 11.0645 5.72628 22.0234 2.00809Z"
                            fill="#F87387"
                          ></path>
                          <path
                            d="M24.1133 19.8423L28.5827 24.3583L33.0521 19.8423"
                            stroke="#2ACBD2"
                            stroke-width="11.053"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M52.8262 27.7815C51.533 27.7815 50.4221 27.5328 49.4937 27.0354C48.5652 26.538 47.8523 25.8362 47.3549 24.9298C46.8686 24.0235 46.6254 22.9624 46.6254 21.7465C46.6254 20.8402 46.7636 20.0167 47.0399 19.2762C47.3273 18.5356 47.7363 17.9001 48.2668 17.3695C48.8084 16.839 49.4605 16.4355 50.2232 16.1592C50.9969 15.8718 51.8646 15.7281 52.8262 15.7281C53.3346 15.7281 53.8596 15.7889 54.4012 15.9105C54.9539 16.0211 55.4402 16.1924 55.8602 16.4245C56.1697 16.5903 56.3853 16.8003 56.5069 17.0545C56.6284 17.3087 56.6671 17.5685 56.6229 17.8338C56.5898 18.099 56.4958 18.3367 56.3411 18.5467C56.1863 18.7567 55.9874 18.9004 55.7442 18.9777C55.501 19.0441 55.2358 19.0054 54.9484 18.8617C54.6168 18.7069 54.2852 18.5909 53.9536 18.5135C53.6331 18.4251 53.2959 18.3809 52.9422 18.3809C52.257 18.3809 51.6822 18.5135 51.218 18.7788C50.7648 19.033 50.4221 19.4088 50.19 19.9062C49.9579 20.4036 49.8419 21.017 49.8419 21.7465C49.8419 22.476 49.9579 23.095 50.19 23.6034C50.4221 24.1008 50.7648 24.4822 51.218 24.7474C51.6822 25.0017 52.257 25.1288 52.9422 25.1288C53.2296 25.1288 53.5391 25.0956 53.8707 25.0293C54.2023 24.9519 54.5284 24.8359 54.8489 24.6811C55.1805 24.5374 55.4734 24.4987 55.7276 24.5651C55.9929 24.6314 56.2029 24.764 56.3576 24.963C56.5234 25.1619 56.6284 25.394 56.6726 25.6593C56.7169 25.9135 56.6782 26.1678 56.5566 26.422C56.4461 26.6762 56.2471 26.8807 55.9597 27.0354C55.5729 27.2675 55.0921 27.4499 54.5173 27.5825C53.9536 27.7152 53.3899 27.7815 52.8262 27.7815ZM63.5113 27.7815C62.6602 27.7815 61.9086 27.6765 61.2565 27.4665C60.6044 27.2454 60.0517 26.9194 59.5986 26.4883C59.1564 26.0572 58.8193 25.5211 58.5872 24.8801C58.3661 24.2279 58.2556 23.4763 58.2556 22.6252V17.3032C58.2556 16.7948 58.3882 16.4134 58.6535 16.1592C58.9188 15.8939 59.2946 15.7613 59.7809 15.7613C60.2783 15.7613 60.6541 15.8939 60.9083 16.1592C61.1736 16.4134 61.3062 16.7948 61.3062 17.3032V22.6584C61.3062 23.5095 61.4942 24.1506 61.87 24.5816C62.2458 25.0127 62.7929 25.2282 63.5113 25.2282C64.2187 25.2282 64.7603 25.0127 65.1361 24.5816C65.5119 24.1506 65.6998 23.5095 65.6998 22.6584V17.3032C65.6998 16.7948 65.8269 16.4134 66.0812 16.1592C66.3464 15.8939 66.7222 15.7613 67.2086 15.7613C67.6949 15.7613 68.0652 15.8939 68.3194 16.1592C68.5736 16.4134 68.7007 16.7948 68.7007 17.3032V22.6252C68.7007 23.7637 68.5018 24.7198 68.1039 25.4935C67.717 26.2562 67.1367 26.8309 66.363 27.2178C65.5893 27.5936 64.6387 27.7815 63.5113 27.7815ZM72.2661 27.7483C71.7798 27.7483 71.404 27.6157 71.1387 27.3504C70.8734 27.0741 70.7408 26.6928 70.7408 26.2064V17.4524C70.7408 16.955 70.8734 16.5737 71.1387 16.3084C71.415 16.0432 71.7964 15.9105 72.2827 15.9105H76.3613C77.6876 15.9105 78.7101 16.2532 79.4285 16.9385C80.158 17.6127 80.5228 18.5467 80.5228 19.7404C80.5228 20.9341 80.158 21.8736 79.4285 22.5589C78.7101 23.2332 77.6876 23.5703 76.3613 23.5703H73.7914V26.2064C73.7914 26.6928 73.6643 27.0741 73.4101 27.3504C73.1559 27.6157 72.7746 27.7483 72.2661 27.7483ZM73.7914 21.2326H75.8307C76.4055 21.2326 76.8476 21.111 77.1571 20.8678C77.4666 20.6136 77.6213 20.2378 77.6213 19.7404C77.6213 19.232 77.4666 18.8562 77.1571 18.613C76.8476 18.3698 76.4055 18.2482 75.8307 18.2482H73.7914V21.2326ZM83.4703 27.7483C82.984 27.7483 82.6082 27.6157 82.3429 27.3504C82.0776 27.0741 81.945 26.6872 81.945 26.1899V17.3198C81.945 16.8113 82.0776 16.4245 82.3429 16.1592C82.6082 15.8939 82.984 15.7613 83.4703 15.7613C83.9677 15.7613 84.3435 15.8939 84.5977 16.1592C84.863 16.4245 84.9956 16.8113 84.9956 17.3198V26.1899C84.9956 26.6872 84.8685 27.0741 84.6143 27.3504C84.3601 27.6157 83.9787 27.7483 83.4703 27.7483ZM88.7015 27.5991C88.182 27.5991 87.7841 27.4665 87.5078 27.2012C87.2425 26.9249 87.1099 26.5325 87.1099 26.0241V17.4856C87.1099 16.9771 87.2425 16.5903 87.5078 16.325C87.7841 16.0487 88.182 15.9105 88.7015 15.9105H91.9511C93.9849 15.9105 95.5544 16.419 96.6597 17.4358C97.7761 18.4527 98.3343 19.8896 98.3343 21.7465C98.3343 22.675 98.1906 23.504 97.9032 24.2335C97.6158 24.9519 97.2013 25.5654 96.6597 26.0738C96.1181 26.5712 95.4494 26.9525 94.6536 27.2178C93.8688 27.472 92.968 27.5991 91.9511 27.5991H88.7015ZM90.1605 25.1288H91.7522C92.338 25.1288 92.8409 25.0569 93.2609 24.9132C93.692 24.7695 94.0457 24.5595 94.322 24.2832C94.6094 24.0069 94.8194 23.6587 94.952 23.2387C95.0957 22.8187 95.1676 22.3213 95.1676 21.7465C95.1676 20.597 94.8857 19.7515 94.322 19.2099C93.7583 18.6572 92.9017 18.3809 91.7522 18.3809H90.1605V25.1288Z"
                            fill="black"
                          ></path>
                          <path
                            d="M96.1445 13.022H96.8594C96.9991 13.022 97.1205 13.0428 97.2237 13.0844C97.3268 13.1259 97.4062 13.1875 97.462 13.269C97.5185 13.3505 97.5468 13.4511 97.5468 13.5709C97.5468 13.6749 97.5306 13.7618 97.4981 13.8316C97.4657 13.9015 97.4204 13.9593 97.3622 14.0051C97.3048 14.05 97.2378 14.087 97.1613 14.1161L97.0178 14.1972H96.4177L96.4153 13.8591H96.8594C96.9151 13.8591 96.9613 13.8491 96.9979 13.8291C97.0345 13.8092 97.0619 13.7809 97.0802 13.7443C97.0993 13.7069 97.1089 13.6624 97.1089 13.6108C97.1089 13.5584 97.0993 13.5135 97.0802 13.4761C97.0611 13.4387 97.0328 13.41 96.9954 13.39C96.9588 13.37 96.9134 13.3601 96.8594 13.3601H96.5824V14.8384H96.1445V13.022ZM97.1388 14.8384L96.7371 14.035L97.2012 14.0325L97.6079 14.8197V14.8384H97.1388Z"
                            fill="black"
                          ></path>
                          <circle
                            cx="96.8782"
                            cy="13.9305"
                            r="1.5252"
                            stroke="black"
                            stroke-width="0.284211"
                          ></circle>
                        </svg>
                      </div>

                      <div className="achieve-first-row" id="cupid-row">
                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/growth.png"
                              width={50}
                              height={50}
                              alt="Growth Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+71%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase{" "}
                              <span className="achieve-color">Revenue</span> in
                              Last 6 months
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/shopping.png"
                              width={50}
                              height={50}
                              alt="Shopping Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+60%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Number of
                              <span className="achieve-color"> Order </span>
                              Increase
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/interest-rate.png"
                              width={50}
                              height={50}
                              alt="Interest Logo"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+22%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase in
                              <span className="achieve-color">
                                {" "}
                                Conversion Rate
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="keen-slider__slide number-slide2" id="isu">
                    <div className="achievement-first" id="cupidbrand">
                      <div className="achieve-name">
                        <Image
                          id="isu"
                          src={"/isu.avif"}
                          alt="Isu-Fashion Image"
                          width={100}
                          height={40}
                          unoptimized
                        />
                      </div>

                      <div className="achieve-first-row" id="cupid-row">
                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/growth.png"
                              width={50}
                              height={50}
                              alt="Growth Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+122%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase{" "}
                              <span className="achieve-color">Revenue</span> in
                              Last 6 months
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/shopping.png"
                              width={50}
                              height={50}
                              alt="Shopping Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+101%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Number of
                              <span className="achieve-color"> Order </span>
                              Increase
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/interest-rate.png"
                              width={50}
                              height={50}
                              alt="Interest Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+201%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase in
                              <span className="achieve-color">
                                {" "}
                                Conversion Rate
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="keen-slider__slide number-slide2"
                    id="comforto"
                  >
                    <div className="achievement-first" id="cupidbrand">
                      <div className="achieve-name">
                        <Image
                          id="comforto"
                          src={"/Comforto.avif"}
                          alt="comforto-img"
                          width={130}
                          height={40}
                          unoptimized
                        />
                      </div>

                      <div className="achieve-first-row" id="cupid-row">
                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/growth.png"
                              width={50}
                              height={50}
                              alt="digi"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+71%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase{" "}
                              <span className="achieve-color">Revenue</span> in
                              Last 6 months
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/shopping.png"
                              width={50}
                              height={50}
                              alt="digi"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+33%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Number of
                              <span className="achieve-color"> Order </span>
                              Increase
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/interest-rate.png"
                              width={50}
                              height={50}
                              alt="digi"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+201%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase in
                              <span className="achieve-color">
                                {" "}
                                Conversion Rate
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="keen-slider__slide number-slide2"
                    id="uberlyfe"
                  >
                    <div className="achievement-first" id="cupidbrand">
                      <div className="achieve-name">
                        <Image
                          id="comforto"
                          src={"/uberlyfe.webp"}
                          alt="Comforto Image"
                          width={160}
                          height={50}
                          unoptimized
                        />
                      </div>

                      <div className="achieve-first-row" id="cupid-row">
                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/growth.png"
                              width={50}
                              height={50}
                              alt="Growth Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+107%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase{" "}
                              <span className="achieve-color">Revenue</span> in
                              Last 6 months
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/shopping.png"
                              width={50}
                              height={50}
                              alt="Shopping Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+96%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Number of
                              <span className="achieve-color"> Order </span>
                              Increase
                            </h2>
                          </div>
                        </div>

                        <div className="achieve-numbers">
                          <div className="">
                            <Image
                              id="network"
                              src="/interest-rate.png"
                              width={50}
                              height={50}
                              alt="Interest Image"
                              unoptimized
                            ></Image>
                          </div>
                          <div className="red">
                            <h1>+5%</h1>
                          </div>
                          <div className="catego">
                            <h2>
                              Increase in
                              <span className="achieve-color">
                                {" "}
                                Conversion Rate
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
                {loaded && instanceRef.current && (
                  <div className="dots">
                    {[
                      ...Array(
                        instanceRef.current.track.details.slides.length
                      ).keys(),
                    ].map((idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            instanceRef.current?.moveToIdx(idx);
                          }}
                          className={
                            "dot" + (currentSlide === idx ? " active" : "")
                          }
                        ></button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <hr className="brand-border" id="down" />
          </div>
        </section>

        <section className="section-seven" id="section-sevenn">
          <div className="section-seven-header">
            <h1>Case Study</h1>
            <p>
              Growing a business isn’t easy, but we’ve got your back. Explore
              some of our customers’ top business challenges and learn how can
              we help you leave these problems in the past ?.
            </p>
          </div>

          <div className="case-studies">
            <div className="case-studies-box-one" id="navvv">
              <Link href={"/Case-study/dentist"} id="home-apll">
                <span>
                  <h4>Case Studies of Dentistist</h4>
                </span>
                <Image
                  src={"./debntist-girl.jpg"}
                  alt="Dentist"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span>
                  <p>
                    Welcome to a comprehensive overview of transforming a large
                    dentistry chain's digital marketing strategy....
                  </p>
                </span>
                <span id="learn-btn">
                  <button>Learn More</button>
                </span>
              </Link>
            </div>

            <div className="case-studies-box-two">
              <Link href={"/Case-study/home-appliances"} id="home-apll">
                <span>
                  <h4>Case Study of Home Appliances</h4>
                </span>
                <Image
                  src={"./home7.jpg"}
                  alt="Dentist Image"
                  width={0}
                  height={0}
                  unoptimized
                ></Image>
                <span>
                  <p>
                    Mission to dominate the digital advertising space through
                    Google Ads. The journey began with scaling efforts...
                  </p>
                </span>
                <span id="learn-btn">
                  <button>Learn More</button>
                </span>
              </Link>
            </div>

            <div className="case-studies-box-three">
              <Link href={"/Case-study/travel"} id="home-apll">
                <span>
                  <h4>Case Study of E-Sim</h4>
                </span>
                <Image
                  src={"./travel4.jpg"}
                  alt="Travel Image"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
                <span>
                  <p>
                    Brand E-Travelsim's journey with Google Ads is a testament
                    to strategic scaling and optimization...
                  </p>
                </span>
                <span id="learn-btn">
                  <button>Learn More</button>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-eight" id="section-eightt">
          <h1>Brands We Worked</h1>
          <div className="brand-logo-center">
            <div className="brand-logo-center-df">
              <div className="brand-logo-content">
                <div className="">
                  <svg
                    id="cupid"
                    xmlns="http://www.w3.org/2000/svg"
                    width="108"
                    height="43"
                    viewBox="0 0 108 43"
                    fill="none"
                  >
                    <path
                      d="M22.0234 2.00809C32.8219 -1.65571 40.7807 4.58535 44.3067 8.31215C44.3927 8.40303 44.3824 8.54443 44.2878 8.62639L38.3557 13.7694C38.2628 13.8499 38.1225 13.8388 38.0375 13.7499C36.9196 12.5807 35.043 12.0493 34.2113 11.9278C31.3852 11.7939 29.4429 12.8662 28.6712 13.5412C28.5783 13.6225 28.4375 13.6228 28.3459 13.54C26.6055 11.9654 23.7367 11.8045 22.4848 11.9278C18.4529 12.747 16.8245 15.6339 16.5143 16.9749C15.6785 20.1844 16.507 22.3361 17.5499 23.9631C17.5591 23.9774 17.5699 23.9905 17.5821 24.0023L28.3654 34.4138C28.451 34.4964 28.5867 34.4965 28.6724 34.4139L36.6029 26.7666C36.6841 26.6883 36.8114 26.6837 36.898 26.7561L44.93 33.4631C45.0169 33.5357 45.0379 33.6584 44.9728 33.7511C42.2834 37.5837 33.2498 44.9237 22.0234 40.9024C9.12695 36.2828 7.46859 25.2468 8.08013 19.8652C8.16167 15.4621 11.0645 5.72628 22.0234 2.00809Z"
                      fill="#F87387"
                    ></path>
                    <path
                      d="M24.1133 19.8423L28.5827 24.3583L33.0521 19.8423"
                      stroke="#2ACBD2"
                      stroke-width="11.053"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M52.8262 27.7815C51.533 27.7815 50.4221 27.5328 49.4937 27.0354C48.5652 26.538 47.8523 25.8362 47.3549 24.9298C46.8686 24.0235 46.6254 22.9624 46.6254 21.7465C46.6254 20.8402 46.7636 20.0167 47.0399 19.2762C47.3273 18.5356 47.7363 17.9001 48.2668 17.3695C48.8084 16.839 49.4605 16.4355 50.2232 16.1592C50.9969 15.8718 51.8646 15.7281 52.8262 15.7281C53.3346 15.7281 53.8596 15.7889 54.4012 15.9105C54.9539 16.0211 55.4402 16.1924 55.8602 16.4245C56.1697 16.5903 56.3853 16.8003 56.5069 17.0545C56.6284 17.3087 56.6671 17.5685 56.6229 17.8338C56.5898 18.099 56.4958 18.3367 56.3411 18.5467C56.1863 18.7567 55.9874 18.9004 55.7442 18.9777C55.501 19.0441 55.2358 19.0054 54.9484 18.8617C54.6168 18.7069 54.2852 18.5909 53.9536 18.5135C53.6331 18.4251 53.2959 18.3809 52.9422 18.3809C52.257 18.3809 51.6822 18.5135 51.218 18.7788C50.7648 19.033 50.4221 19.4088 50.19 19.9062C49.9579 20.4036 49.8419 21.017 49.8419 21.7465C49.8419 22.476 49.9579 23.095 50.19 23.6034C50.4221 24.1008 50.7648 24.4822 51.218 24.7474C51.6822 25.0017 52.257 25.1288 52.9422 25.1288C53.2296 25.1288 53.5391 25.0956 53.8707 25.0293C54.2023 24.9519 54.5284 24.8359 54.8489 24.6811C55.1805 24.5374 55.4734 24.4987 55.7276 24.5651C55.9929 24.6314 56.2029 24.764 56.3576 24.963C56.5234 25.1619 56.6284 25.394 56.6726 25.6593C56.7169 25.9135 56.6782 26.1678 56.5566 26.422C56.4461 26.6762 56.2471 26.8807 55.9597 27.0354C55.5729 27.2675 55.0921 27.4499 54.5173 27.5825C53.9536 27.7152 53.3899 27.7815 52.8262 27.7815ZM63.5113 27.7815C62.6602 27.7815 61.9086 27.6765 61.2565 27.4665C60.6044 27.2454 60.0517 26.9194 59.5986 26.4883C59.1564 26.0572 58.8193 25.5211 58.5872 24.8801C58.3661 24.2279 58.2556 23.4763 58.2556 22.6252V17.3032C58.2556 16.7948 58.3882 16.4134 58.6535 16.1592C58.9188 15.8939 59.2946 15.7613 59.7809 15.7613C60.2783 15.7613 60.6541 15.8939 60.9083 16.1592C61.1736 16.4134 61.3062 16.7948 61.3062 17.3032V22.6584C61.3062 23.5095 61.4942 24.1506 61.87 24.5816C62.2458 25.0127 62.7929 25.2282 63.5113 25.2282C64.2187 25.2282 64.7603 25.0127 65.1361 24.5816C65.5119 24.1506 65.6998 23.5095 65.6998 22.6584V17.3032C65.6998 16.7948 65.8269 16.4134 66.0812 16.1592C66.3464 15.8939 66.7222 15.7613 67.2086 15.7613C67.6949 15.7613 68.0652 15.8939 68.3194 16.1592C68.5736 16.4134 68.7007 16.7948 68.7007 17.3032V22.6252C68.7007 23.7637 68.5018 24.7198 68.1039 25.4935C67.717 26.2562 67.1367 26.8309 66.363 27.2178C65.5893 27.5936 64.6387 27.7815 63.5113 27.7815ZM72.2661 27.7483C71.7798 27.7483 71.404 27.6157 71.1387 27.3504C70.8734 27.0741 70.7408 26.6928 70.7408 26.2064V17.4524C70.7408 16.955 70.8734 16.5737 71.1387 16.3084C71.415 16.0432 71.7964 15.9105 72.2827 15.9105H76.3613C77.6876 15.9105 78.7101 16.2532 79.4285 16.9385C80.158 17.6127 80.5228 18.5467 80.5228 19.7404C80.5228 20.9341 80.158 21.8736 79.4285 22.5589C78.7101 23.2332 77.6876 23.5703 76.3613 23.5703H73.7914V26.2064C73.7914 26.6928 73.6643 27.0741 73.4101 27.3504C73.1559 27.6157 72.7746 27.7483 72.2661 27.7483ZM73.7914 21.2326H75.8307C76.4055 21.2326 76.8476 21.111 77.1571 20.8678C77.4666 20.6136 77.6213 20.2378 77.6213 19.7404C77.6213 19.232 77.4666 18.8562 77.1571 18.613C76.8476 18.3698 76.4055 18.2482 75.8307 18.2482H73.7914V21.2326ZM83.4703 27.7483C82.984 27.7483 82.6082 27.6157 82.3429 27.3504C82.0776 27.0741 81.945 26.6872 81.945 26.1899V17.3198C81.945 16.8113 82.0776 16.4245 82.3429 16.1592C82.6082 15.8939 82.984 15.7613 83.4703 15.7613C83.9677 15.7613 84.3435 15.8939 84.5977 16.1592C84.863 16.4245 84.9956 16.8113 84.9956 17.3198V26.1899C84.9956 26.6872 84.8685 27.0741 84.6143 27.3504C84.3601 27.6157 83.9787 27.7483 83.4703 27.7483ZM88.7015 27.5991C88.182 27.5991 87.7841 27.4665 87.5078 27.2012C87.2425 26.9249 87.1099 26.5325 87.1099 26.0241V17.4856C87.1099 16.9771 87.2425 16.5903 87.5078 16.325C87.7841 16.0487 88.182 15.9105 88.7015 15.9105H91.9511C93.9849 15.9105 95.5544 16.419 96.6597 17.4358C97.7761 18.4527 98.3343 19.8896 98.3343 21.7465C98.3343 22.675 98.1906 23.504 97.9032 24.2335C97.6158 24.9519 97.2013 25.5654 96.6597 26.0738C96.1181 26.5712 95.4494 26.9525 94.6536 27.2178C93.8688 27.472 92.968 27.5991 91.9511 27.5991H88.7015ZM90.1605 25.1288H91.7522C92.338 25.1288 92.8409 25.0569 93.2609 24.9132C93.692 24.7695 94.0457 24.5595 94.322 24.2832C94.6094 24.0069 94.8194 23.6587 94.952 23.2387C95.0957 22.8187 95.1676 22.3213 95.1676 21.7465C95.1676 20.597 94.8857 19.7515 94.322 19.2099C93.7583 18.6572 92.9017 18.3809 91.7522 18.3809H90.1605V25.1288Z"
                      fill="black"
                    ></path>
                    <path
                      d="M96.1445 13.022H96.8594C96.9991 13.022 97.1205 13.0428 97.2237 13.0844C97.3268 13.1259 97.4062 13.1875 97.462 13.269C97.5185 13.3505 97.5468 13.4511 97.5468 13.5709C97.5468 13.6749 97.5306 13.7618 97.4981 13.8316C97.4657 13.9015 97.4204 13.9593 97.3622 14.0051C97.3048 14.05 97.2378 14.087 97.1613 14.1161L97.0178 14.1972H96.4177L96.4153 13.8591H96.8594C96.9151 13.8591 96.9613 13.8491 96.9979 13.8291C97.0345 13.8092 97.0619 13.7809 97.0802 13.7443C97.0993 13.7069 97.1089 13.6624 97.1089 13.6108C97.1089 13.5584 97.0993 13.5135 97.0802 13.4761C97.0611 13.4387 97.0328 13.41 96.9954 13.39C96.9588 13.37 96.9134 13.3601 96.8594 13.3601H96.5824V14.8384H96.1445V13.022ZM97.1388 14.8384L96.7371 14.035L97.2012 14.0325L97.6079 14.8197V14.8384H97.1388Z"
                      fill="black"
                    ></path>
                    <circle
                      cx="96.8782"
                      cy="13.9305"
                      r="1.5252"
                      stroke="black"
                      stroke-width="0.284211"
                    ></circle>
                  </svg>
                </div>
                <div className="">
                  <Image
                    id="tic-tac"
                    src={"/tic2.avif"}
                    alt="Tic Tac Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/uk-derma.png"}
                    alt="UK Derma Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    src={"/Empire.png"}
                    alt="Empire Logo"
                    width={100}
                    height={100}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/aurav.avif"}
                    alt="Aurav Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    src={"/bablouie.webp"}
                    alt="Bablouie Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/Comforto.avif"}
                    alt="Comforto Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/globe.avif"}
                    alt="Globe Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/isu.avif"}
                    alt="ISU Fashion Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/lifekraft.avif"}
                    alt="Lifekraft Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/Sain_logo.avif"}
                    alt="Sain Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    id="uberlyf"
                    src={"/uberlyfe.webp"}
                    alt="Uberlyfe Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="edoofa"
                    src={"/EDOOFA.webp"}
                    alt="Edoofa Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="harall"
                    src={"/harall.avif"}
                    alt="Harall Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="mesky"
                    src={"/mesky.webp"}
                    alt="Mesky Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/aqua.png"}
                    alt="Aqua Easy Purifier Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/avom.webp"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/clove.webp"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/craft.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/da-urban.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/dev.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/etravel.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/iyurved.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/verma.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="181"
                  height="16"
                  viewBox="0 0 181 16"
                  fill="none"
                >
                  <mask
                    id="mask0_4978_2044"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="181"
                    height="16"
                  >
                    <path d="M180.418 0H0V16H180.418V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_4978_2044)">
                    <path
                      d="M47.3839 2.20223C47.0311 0.8097 42.4395 1.00729 39.7344 1.25193C37.4245 1.45892 34.7711 1.83999 31.9108 2.36219C31.1628 0.964949 30.3489 0.0287538 29.3845 0.000526751C28.2931 -0.0277002 27.2769 1.07786 26.1995 3.47715C26.1854 3.50068 26.176 3.5289 26.1619 3.55243C25.0328 3.81117 23.8896 4.08874 22.7323 4.38042C20.9258 4.83675 19.1569 5.32132 17.4539 5.81999C16.3813 4.09815 15.3933 3.21841 14.4007 3.06786C12.8811 2.83734 11.6909 4.2581 10.3172 5.90467C10.2184 6.02229 10.1243 6.1399 10.0255 6.25751C8.9999 7.49479 8.67059 7.92761 7.51799 9.21194C7.16044 9.35778 6.80761 9.50362 6.46888 9.64946C6.40772 9.67298 6.35127 9.7012 6.29011 9.72473C3.79673 10.8021 -0.333822 12.8109 0.0237194 14.2034C0.244831 15.0832 2.15486 15.3278 4.21543 15.3278C5.41978 15.3278 6.67118 15.2431 7.66853 15.1537C10.8394 14.8668 14.6547 14.2599 18.7664 13.3942C19.204 13.8647 19.6838 14.194 20.2248 14.3069C21.2739 14.6456 22.2195 14.1658 23.1181 12.8485C23.231 12.6839 23.3392 12.5098 23.4427 12.331C23.852 12.2322 24.2613 12.1287 24.6753 12.0252C27.3427 11.3478 29.9208 10.6186 32.3342 9.86586C33.4398 13.0132 34.503 15.93 36.1966 15.9958C36.2154 15.9958 36.239 15.9958 36.2578 15.9958C37.5139 15.9958 38.8029 14.4245 40.3036 11.0561L40.3366 10.9808C40.7223 10.1058 41.8561 7.41952 42.3266 6.19635L42.3548 6.12108C44.7682 5.00141 47.685 3.37836 47.3839 2.19753M22.8499 4.72385C23.8943 4.45569 24.9293 4.20165 25.9502 3.96642C25.5644 4.76148 25.1881 5.66004 24.7929 6.60564V6.61976C23.7485 9.09432 22.5771 11.9029 21.4198 12.0911C21.0905 12.1428 20.747 11.9641 20.3754 11.5407C20.1543 11.2866 19.9661 10.9761 19.8061 10.5904C19.044 8.76501 18.3336 7.29721 17.6609 6.15872C19.331 5.66004 21.0669 5.18018 22.8452 4.72385M10.4724 7.43364C11.8696 5.84352 12.9188 5.12373 13.6809 5.24134C14.2078 5.32132 14.6406 5.81999 15.0546 6.53978C13.154 7.13725 11.3522 7.74884 9.69617 8.36513C9.9361 8.09227 10.2325 7.73943 10.4724 7.43834M5.34451 14.8197C3.7638 14.8197 2.6206 14.6551 2.04665 14.3116C1.83025 14.1799 1.69852 14.0294 1.65618 13.8553C1.44918 13.0179 3.25571 11.6818 6.63824 10.1387C6.91111 10.0117 7.19338 9.88938 7.48505 9.76236C7.82848 9.61182 8.18602 9.46128 8.55298 9.31073C10.5242 8.50156 12.787 7.69238 15.2428 6.90673C15.4686 7.33955 15.6897 7.82411 15.9202 8.3369C16.0943 8.72267 16.2778 9.12255 16.4706 9.52714C17.1199 10.8726 17.7503 12.1711 18.4795 13.0837C13.1116 14.2034 8.40243 14.8197 5.3351 14.8197M24.5389 11.6771C24.2472 11.7524 23.9602 11.8229 23.6685 11.8982C24.1719 10.9526 24.6424 9.83293 25.1269 8.65681C25.9314 6.72326 26.7594 4.71914 27.7661 3.65592C27.8085 3.60888 27.8555 3.57124 27.8979 3.53361C28.0578 3.40188 28.2413 3.3219 28.4154 3.30779C28.5424 3.29368 28.6694 3.30779 28.7964 3.34543C30.1419 3.72649 31.2193 6.74678 32.1837 9.4848C29.7891 10.2516 27.211 10.995 24.5389 11.6771ZM40.0214 9.33896L40.012 9.35778C39.852 9.74354 38.5394 12.3546 37.6456 13.0461C37.2551 13.3519 37.0199 13.286 36.9446 13.2625C36.159 13.0367 35.4251 11.1878 34.6582 9.11314C37.0434 8.31338 39.2216 7.49479 41.0987 6.68562C41.174 6.65269 41.2445 6.61976 41.3198 6.59153L40.0214 9.34366V9.33896ZM42.0396 5.65063C41.922 5.71179 41.7997 5.76824 41.6773 5.8294C41.1316 6.09756 40.5389 6.37042 39.8943 6.64799C38.3089 7.33484 36.493 8.03111 34.5124 8.71326C34.4983 8.67562 34.4842 8.63328 34.4701 8.59565C34.2725 8.06404 34.0749 7.51361 33.8585 6.95848C33.2657 5.42011 32.6918 3.91938 32.0755 2.70562C36.1072 1.98112 39.5933 1.59065 42.0396 1.59065C43.6203 1.59065 44.7635 1.75531 45.3375 2.09873C45.5539 2.23046 45.6856 2.381 45.7279 2.55507C45.9067 3.27486 44.58 4.37571 42.0396 5.65063Z"
                      fill="#84EB0C"
                    />
                    <path
                      d="M160.193 15.8604C158.782 15.8604 157.582 15.6675 156.594 15.2771C155.601 14.8866 154.849 14.3079 154.331 13.5364C153.814 12.7649 153.555 11.8051 153.555 10.662V10.5302H156.698V10.9254C156.698 11.3817 156.792 11.7487 156.98 12.0263C157.168 12.3038 157.516 12.5108 158.015 12.6426C158.518 12.7743 159.243 12.8401 160.193 12.8401C161.03 12.8401 161.67 12.7931 162.117 12.699C162.564 12.6049 162.87 12.4544 163.039 12.2474C163.209 12.0404 163.289 11.7769 163.289 11.4523C163.289 10.996 163.147 10.6667 162.86 10.4597C162.573 10.2527 162.075 10.088 161.364 9.95154L157.427 9.35878C156.589 9.21294 155.874 8.96831 155.281 8.62958C154.689 8.29086 154.232 7.83923 153.912 7.27469C153.593 6.71015 153.433 6.02329 153.433 5.21412C153.433 4.65428 153.546 4.10385 153.776 3.56284C154.007 3.02182 154.374 2.53255 154.877 2.09974C155.38 1.66692 156.039 1.31879 156.857 1.05534C157.671 0.791882 158.673 0.660156 159.864 0.660156C161.303 0.660156 162.484 0.876563 163.411 1.30938C164.338 1.7422 165.034 2.35378 165.495 3.13943C165.956 3.92508 166.187 4.83305 166.187 5.85863V5.99036H163.025V5.68457C163.025 5.21412 162.931 4.83305 162.743 4.53667C162.555 4.24499 162.207 4.02858 161.708 3.88745C161.204 3.74631 160.485 3.67574 159.553 3.67574C158.8 3.67574 158.208 3.72749 157.784 3.83099C157.361 3.93449 157.055 4.08974 156.872 4.29203C156.688 4.49903 156.599 4.76248 156.599 5.0871C156.599 5.36466 156.655 5.59988 156.768 5.78336C156.881 5.96684 157.055 6.10797 157.29 6.21147C157.526 6.31497 157.841 6.40435 158.231 6.47492L162.169 7.13826C163.218 7.31703 164.051 7.5993 164.672 7.99918C165.293 8.39436 165.744 8.87891 166.022 9.44345C166.299 10.008 166.441 10.629 166.441 11.3065C166.441 12.1015 166.229 12.8448 165.81 13.5411C165.391 14.2374 164.723 14.8019 163.801 15.2253C162.879 15.6534 161.68 15.8651 160.202 15.8651L160.193 15.8604Z"
                      fill="white"
                    />
                    <path
                      d="M62.7534 8.14735L59.465 0.878906H55.2168V15.6369H58.3594V8.14735L58.2324 5.83274H58.4629L59.2768 8.14735L62.2077 14.7572H66.0183L68.9492 8.14735L69.7678 5.83274H69.9983L69.8948 8.14735V15.6369H73.0327V0.878906H68.761L65.5808 8.14735L64.3012 11.6052H64.0707L62.7534 8.14735Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M80.2968 0.878906L74.1621 15.6369H77.6811L79.0166 12.3767H86.0244L87.3535 15.6369H90.9525L84.7755 0.878906H80.2968ZM84.8124 9.40345L83.5005 6.18558L82.6443 3.89449H82.4138L81.5529 6.18558L80.2347 9.40345H84.8124Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M102.944 14.7572C101.848 15.3452 100.545 15.6369 99.0395 15.6369H92.2744V0.878906H99.0395C100.545 0.878906 101.848 1.17058 102.944 1.75864C104.04 2.34671 104.887 3.18881 105.489 4.28966C106.091 5.39052 106.388 6.71248 106.388 8.25556C106.388 9.79863 106.086 11.1206 105.489 12.2214C104.887 13.3223 104.04 14.1691 102.944 14.7572ZM101.354 12.3014C100.775 12.5414 100.004 12.6637 99.0395 12.6637H95.417V3.85215H99.0395C100.004 3.85215 100.775 3.96976 101.354 4.21439C101.932 4.45903 102.356 4.89655 102.629 5.52695C102.901 6.16206 103.038 7.08884 103.038 8.26026C103.038 9.43168 102.901 10.3396 102.629 10.9795C102.36 11.6193 101.932 12.0568 101.354 12.3014Z"
                      fill="white"
                    />
                    <path
                      d="M106.74 0.878906L112.56 15.6369H117.043L122.863 0.878906H119.094L114.95 12.2873H114.738L110.532 0.878906H106.74Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M149.198 1.3925C148.389 1.04907 147.406 0.875 146.249 0.875H138.5V15.6377H141.648V10.284H143.722C144.268 10.284 144.701 10.331 145.03 10.4251C145.355 10.5239 145.623 10.6792 145.835 10.9003C146.042 11.1214 146.244 11.4225 146.442 11.8036L148.366 15.6377H152.007L149.979 11.6718C149.711 11.159 149.424 10.7262 149.118 10.3734C148.813 10.0205 148.342 9.75709 147.717 9.57832V9.39955C148.596 9.31487 149.325 9.09376 149.914 8.75033C150.497 8.4022 150.939 7.94586 151.231 7.37191C151.522 6.79797 151.668 6.11111 151.668 5.30194C151.668 4.36574 151.461 3.56597 151.043 2.90264C150.624 2.23931 150.008 1.73592 149.198 1.3925ZM147.862 7.38603C147.514 7.65889 146.969 7.79532 146.23 7.79532H141.643V3.84824H146.23C146.969 3.84824 147.514 3.98938 147.862 4.27635C148.211 4.56333 148.385 5.07612 148.385 5.81002C148.385 6.59097 148.211 7.11317 147.862 7.38603Z"
                      fill="white"
                    />
                    <path
                      d="M124.368 15.6377V0.879704H125.253V0.875H136.242V3.85295H127.511V6.73681H135.927V9.69123H127.511V12.6645H136.242V15.6377H124.368Z"
                      fill="white"
                    />
                    <path
                      d="M168.543 15.6377H180.418V12.6645H171.686V9.69123H180.102V6.73681H171.686V3.85295H180.418V0.875H169.428V0.879704H168.543V15.6377Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div className="brand-logo-content" id="brand-logo-content-two">
                <div className="">
                  <svg
                    id="cupid"
                    xmlns="http://www.w3.org/2000/svg"
                    width="108"
                    height="43"
                    viewBox="0 0 108 43"
                    fill="none"
                  >
                    <path
                      d="M22.0234 2.00809C32.8219 -1.65571 40.7807 4.58535 44.3067 8.31215C44.3927 8.40303 44.3824 8.54443 44.2878 8.62639L38.3557 13.7694C38.2628 13.8499 38.1225 13.8388 38.0375 13.7499C36.9196 12.5807 35.043 12.0493 34.2113 11.9278C31.3852 11.7939 29.4429 12.8662 28.6712 13.5412C28.5783 13.6225 28.4375 13.6228 28.3459 13.54C26.6055 11.9654 23.7367 11.8045 22.4848 11.9278C18.4529 12.747 16.8245 15.6339 16.5143 16.9749C15.6785 20.1844 16.507 22.3361 17.5499 23.9631C17.5591 23.9774 17.5699 23.9905 17.5821 24.0023L28.3654 34.4138C28.451 34.4964 28.5867 34.4965 28.6724 34.4139L36.6029 26.7666C36.6841 26.6883 36.8114 26.6837 36.898 26.7561L44.93 33.4631C45.0169 33.5357 45.0379 33.6584 44.9728 33.7511C42.2834 37.5837 33.2498 44.9237 22.0234 40.9024C9.12695 36.2828 7.46859 25.2468 8.08013 19.8652C8.16167 15.4621 11.0645 5.72628 22.0234 2.00809Z"
                      fill="#F87387"
                    ></path>
                    <path
                      d="M24.1133 19.8423L28.5827 24.3583L33.0521 19.8423"
                      stroke="#2ACBD2"
                      stroke-width="11.053"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M52.8262 27.7815C51.533 27.7815 50.4221 27.5328 49.4937 27.0354C48.5652 26.538 47.8523 25.8362 47.3549 24.9298C46.8686 24.0235 46.6254 22.9624 46.6254 21.7465C46.6254 20.8402 46.7636 20.0167 47.0399 19.2762C47.3273 18.5356 47.7363 17.9001 48.2668 17.3695C48.8084 16.839 49.4605 16.4355 50.2232 16.1592C50.9969 15.8718 51.8646 15.7281 52.8262 15.7281C53.3346 15.7281 53.8596 15.7889 54.4012 15.9105C54.9539 16.0211 55.4402 16.1924 55.8602 16.4245C56.1697 16.5903 56.3853 16.8003 56.5069 17.0545C56.6284 17.3087 56.6671 17.5685 56.6229 17.8338C56.5898 18.099 56.4958 18.3367 56.3411 18.5467C56.1863 18.7567 55.9874 18.9004 55.7442 18.9777C55.501 19.0441 55.2358 19.0054 54.9484 18.8617C54.6168 18.7069 54.2852 18.5909 53.9536 18.5135C53.6331 18.4251 53.2959 18.3809 52.9422 18.3809C52.257 18.3809 51.6822 18.5135 51.218 18.7788C50.7648 19.033 50.4221 19.4088 50.19 19.9062C49.9579 20.4036 49.8419 21.017 49.8419 21.7465C49.8419 22.476 49.9579 23.095 50.19 23.6034C50.4221 24.1008 50.7648 24.4822 51.218 24.7474C51.6822 25.0017 52.257 25.1288 52.9422 25.1288C53.2296 25.1288 53.5391 25.0956 53.8707 25.0293C54.2023 24.9519 54.5284 24.8359 54.8489 24.6811C55.1805 24.5374 55.4734 24.4987 55.7276 24.5651C55.9929 24.6314 56.2029 24.764 56.3576 24.963C56.5234 25.1619 56.6284 25.394 56.6726 25.6593C56.7169 25.9135 56.6782 26.1678 56.5566 26.422C56.4461 26.6762 56.2471 26.8807 55.9597 27.0354C55.5729 27.2675 55.0921 27.4499 54.5173 27.5825C53.9536 27.7152 53.3899 27.7815 52.8262 27.7815ZM63.5113 27.7815C62.6602 27.7815 61.9086 27.6765 61.2565 27.4665C60.6044 27.2454 60.0517 26.9194 59.5986 26.4883C59.1564 26.0572 58.8193 25.5211 58.5872 24.8801C58.3661 24.2279 58.2556 23.4763 58.2556 22.6252V17.3032C58.2556 16.7948 58.3882 16.4134 58.6535 16.1592C58.9188 15.8939 59.2946 15.7613 59.7809 15.7613C60.2783 15.7613 60.6541 15.8939 60.9083 16.1592C61.1736 16.4134 61.3062 16.7948 61.3062 17.3032V22.6584C61.3062 23.5095 61.4942 24.1506 61.87 24.5816C62.2458 25.0127 62.7929 25.2282 63.5113 25.2282C64.2187 25.2282 64.7603 25.0127 65.1361 24.5816C65.5119 24.1506 65.6998 23.5095 65.6998 22.6584V17.3032C65.6998 16.7948 65.8269 16.4134 66.0812 16.1592C66.3464 15.8939 66.7222 15.7613 67.2086 15.7613C67.6949 15.7613 68.0652 15.8939 68.3194 16.1592C68.5736 16.4134 68.7007 16.7948 68.7007 17.3032V22.6252C68.7007 23.7637 68.5018 24.7198 68.1039 25.4935C67.717 26.2562 67.1367 26.8309 66.363 27.2178C65.5893 27.5936 64.6387 27.7815 63.5113 27.7815ZM72.2661 27.7483C71.7798 27.7483 71.404 27.6157 71.1387 27.3504C70.8734 27.0741 70.7408 26.6928 70.7408 26.2064V17.4524C70.7408 16.955 70.8734 16.5737 71.1387 16.3084C71.415 16.0432 71.7964 15.9105 72.2827 15.9105H76.3613C77.6876 15.9105 78.7101 16.2532 79.4285 16.9385C80.158 17.6127 80.5228 18.5467 80.5228 19.7404C80.5228 20.9341 80.158 21.8736 79.4285 22.5589C78.7101 23.2332 77.6876 23.5703 76.3613 23.5703H73.7914V26.2064C73.7914 26.6928 73.6643 27.0741 73.4101 27.3504C73.1559 27.6157 72.7746 27.7483 72.2661 27.7483ZM73.7914 21.2326H75.8307C76.4055 21.2326 76.8476 21.111 77.1571 20.8678C77.4666 20.6136 77.6213 20.2378 77.6213 19.7404C77.6213 19.232 77.4666 18.8562 77.1571 18.613C76.8476 18.3698 76.4055 18.2482 75.8307 18.2482H73.7914V21.2326ZM83.4703 27.7483C82.984 27.7483 82.6082 27.6157 82.3429 27.3504C82.0776 27.0741 81.945 26.6872 81.945 26.1899V17.3198C81.945 16.8113 82.0776 16.4245 82.3429 16.1592C82.6082 15.8939 82.984 15.7613 83.4703 15.7613C83.9677 15.7613 84.3435 15.8939 84.5977 16.1592C84.863 16.4245 84.9956 16.8113 84.9956 17.3198V26.1899C84.9956 26.6872 84.8685 27.0741 84.6143 27.3504C84.3601 27.6157 83.9787 27.7483 83.4703 27.7483ZM88.7015 27.5991C88.182 27.5991 87.7841 27.4665 87.5078 27.2012C87.2425 26.9249 87.1099 26.5325 87.1099 26.0241V17.4856C87.1099 16.9771 87.2425 16.5903 87.5078 16.325C87.7841 16.0487 88.182 15.9105 88.7015 15.9105H91.9511C93.9849 15.9105 95.5544 16.419 96.6597 17.4358C97.7761 18.4527 98.3343 19.8896 98.3343 21.7465C98.3343 22.675 98.1906 23.504 97.9032 24.2335C97.6158 24.9519 97.2013 25.5654 96.6597 26.0738C96.1181 26.5712 95.4494 26.9525 94.6536 27.2178C93.8688 27.472 92.968 27.5991 91.9511 27.5991H88.7015ZM90.1605 25.1288H91.7522C92.338 25.1288 92.8409 25.0569 93.2609 24.9132C93.692 24.7695 94.0457 24.5595 94.322 24.2832C94.6094 24.0069 94.8194 23.6587 94.952 23.2387C95.0957 22.8187 95.1676 22.3213 95.1676 21.7465C95.1676 20.597 94.8857 19.7515 94.322 19.2099C93.7583 18.6572 92.9017 18.3809 91.7522 18.3809H90.1605V25.1288Z"
                      fill="black"
                    ></path>
                    <path
                      d="M96.1445 13.022H96.8594C96.9991 13.022 97.1205 13.0428 97.2237 13.0844C97.3268 13.1259 97.4062 13.1875 97.462 13.269C97.5185 13.3505 97.5468 13.4511 97.5468 13.5709C97.5468 13.6749 97.5306 13.7618 97.4981 13.8316C97.4657 13.9015 97.4204 13.9593 97.3622 14.0051C97.3048 14.05 97.2378 14.087 97.1613 14.1161L97.0178 14.1972H96.4177L96.4153 13.8591H96.8594C96.9151 13.8591 96.9613 13.8491 96.9979 13.8291C97.0345 13.8092 97.0619 13.7809 97.0802 13.7443C97.0993 13.7069 97.1089 13.6624 97.1089 13.6108C97.1089 13.5584 97.0993 13.5135 97.0802 13.4761C97.0611 13.4387 97.0328 13.41 96.9954 13.39C96.9588 13.37 96.9134 13.3601 96.8594 13.3601H96.5824V14.8384H96.1445V13.022ZM97.1388 14.8384L96.7371 14.035L97.2012 14.0325L97.6079 14.8197V14.8384H97.1388Z"
                      fill="black"
                    ></path>
                    <circle
                      cx="96.8782"
                      cy="13.9305"
                      r="1.5252"
                      stroke="black"
                      stroke-width="0.284211"
                    ></circle>
                  </svg>
                </div>
                <div className="">
                  <Image
                    id="tic-tac"
                    src={"/tic2.avif"}
                    alt="Tic Tac Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/uk-derma.png"}
                    alt="UK Derma Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    src={"/Empire.png"}
                    alt="Empire Logo"
                    width={100}
                    height={100}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/aurav.avif"}
                    alt="Aurav Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    src={"/bablouie.webp"}
                    alt="Bablouie Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/Comforto.avif"}
                    alt="Comforto Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/globe.avif"}
                    alt="Globe Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/isu.avif"}
                    alt="ISU Fashion Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/lifekraft.avif"}
                    alt="Lifekraft Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    src={"/Sain_logo.avif"}
                    alt="Sain Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>
                <div className="">
                  <Image
                    id="uberlyf"
                    src={"/uberlyfe.webp"}
                    alt="Uberlyfe Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="edoofa"
                    src={"/EDOOFA.webp"}
                    alt="Edoofa Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="harall"
                    src={"/harall.avif"}
                    alt="Harall Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="mesky"
                    src={"/mesky.webp"}
                    alt="Mesky Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/aqua.png"}
                    alt="Aqua Easy Purifier Logo"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/avom.webp"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/clove.webp"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/craft.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/da-urban.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/dev.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/etravel.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/iyurved.avif"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <div className="">
                  <Image
                    id="aqua"
                    src={"/verma.png"}
                    alt="Image"
                    width={0}
                    height={0}
                    unoptimized
                  ></Image>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="181"
                  height="16"
                  viewBox="0 0 181 16"
                  fill="none"
                >
                  <mask
                    id="mask0_4978_2044"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="181"
                    height="16"
                  >
                    <path d="M180.418 0H0V16H180.418V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_4978_2044)">
                    <path
                      d="M47.3839 2.20223C47.0311 0.8097 42.4395 1.00729 39.7344 1.25193C37.4245 1.45892 34.7711 1.83999 31.9108 2.36219C31.1628 0.964949 30.3489 0.0287538 29.3845 0.000526751C28.2931 -0.0277002 27.2769 1.07786 26.1995 3.47715C26.1854 3.50068 26.176 3.5289 26.1619 3.55243C25.0328 3.81117 23.8896 4.08874 22.7323 4.38042C20.9258 4.83675 19.1569 5.32132 17.4539 5.81999C16.3813 4.09815 15.3933 3.21841 14.4007 3.06786C12.8811 2.83734 11.6909 4.2581 10.3172 5.90467C10.2184 6.02229 10.1243 6.1399 10.0255 6.25751C8.9999 7.49479 8.67059 7.92761 7.51799 9.21194C7.16044 9.35778 6.80761 9.50362 6.46888 9.64946C6.40772 9.67298 6.35127 9.7012 6.29011 9.72473C3.79673 10.8021 -0.333822 12.8109 0.0237194 14.2034C0.244831 15.0832 2.15486 15.3278 4.21543 15.3278C5.41978 15.3278 6.67118 15.2431 7.66853 15.1537C10.8394 14.8668 14.6547 14.2599 18.7664 13.3942C19.204 13.8647 19.6838 14.194 20.2248 14.3069C21.2739 14.6456 22.2195 14.1658 23.1181 12.8485C23.231 12.6839 23.3392 12.5098 23.4427 12.331C23.852 12.2322 24.2613 12.1287 24.6753 12.0252C27.3427 11.3478 29.9208 10.6186 32.3342 9.86586C33.4398 13.0132 34.503 15.93 36.1966 15.9958C36.2154 15.9958 36.239 15.9958 36.2578 15.9958C37.5139 15.9958 38.8029 14.4245 40.3036 11.0561L40.3366 10.9808C40.7223 10.1058 41.8561 7.41952 42.3266 6.19635L42.3548 6.12108C44.7682 5.00141 47.685 3.37836 47.3839 2.19753M22.8499 4.72385C23.8943 4.45569 24.9293 4.20165 25.9502 3.96642C25.5644 4.76148 25.1881 5.66004 24.7929 6.60564V6.61976C23.7485 9.09432 22.5771 11.9029 21.4198 12.0911C21.0905 12.1428 20.747 11.9641 20.3754 11.5407C20.1543 11.2866 19.9661 10.9761 19.8061 10.5904C19.044 8.76501 18.3336 7.29721 17.6609 6.15872C19.331 5.66004 21.0669 5.18018 22.8452 4.72385M10.4724 7.43364C11.8696 5.84352 12.9188 5.12373 13.6809 5.24134C14.2078 5.32132 14.6406 5.81999 15.0546 6.53978C13.154 7.13725 11.3522 7.74884 9.69617 8.36513C9.9361 8.09227 10.2325 7.73943 10.4724 7.43834M5.34451 14.8197C3.7638 14.8197 2.6206 14.6551 2.04665 14.3116C1.83025 14.1799 1.69852 14.0294 1.65618 13.8553C1.44918 13.0179 3.25571 11.6818 6.63824 10.1387C6.91111 10.0117 7.19338 9.88938 7.48505 9.76236C7.82848 9.61182 8.18602 9.46128 8.55298 9.31073C10.5242 8.50156 12.787 7.69238 15.2428 6.90673C15.4686 7.33955 15.6897 7.82411 15.9202 8.3369C16.0943 8.72267 16.2778 9.12255 16.4706 9.52714C17.1199 10.8726 17.7503 12.1711 18.4795 13.0837C13.1116 14.2034 8.40243 14.8197 5.3351 14.8197M24.5389 11.6771C24.2472 11.7524 23.9602 11.8229 23.6685 11.8982C24.1719 10.9526 24.6424 9.83293 25.1269 8.65681C25.9314 6.72326 26.7594 4.71914 27.7661 3.65592C27.8085 3.60888 27.8555 3.57124 27.8979 3.53361C28.0578 3.40188 28.2413 3.3219 28.4154 3.30779C28.5424 3.29368 28.6694 3.30779 28.7964 3.34543C30.1419 3.72649 31.2193 6.74678 32.1837 9.4848C29.7891 10.2516 27.211 10.995 24.5389 11.6771ZM40.0214 9.33896L40.012 9.35778C39.852 9.74354 38.5394 12.3546 37.6456 13.0461C37.2551 13.3519 37.0199 13.286 36.9446 13.2625C36.159 13.0367 35.4251 11.1878 34.6582 9.11314C37.0434 8.31338 39.2216 7.49479 41.0987 6.68562C41.174 6.65269 41.2445 6.61976 41.3198 6.59153L40.0214 9.34366V9.33896ZM42.0396 5.65063C41.922 5.71179 41.7997 5.76824 41.6773 5.8294C41.1316 6.09756 40.5389 6.37042 39.8943 6.64799C38.3089 7.33484 36.493 8.03111 34.5124 8.71326C34.4983 8.67562 34.4842 8.63328 34.4701 8.59565C34.2725 8.06404 34.0749 7.51361 33.8585 6.95848C33.2657 5.42011 32.6918 3.91938 32.0755 2.70562C36.1072 1.98112 39.5933 1.59065 42.0396 1.59065C43.6203 1.59065 44.7635 1.75531 45.3375 2.09873C45.5539 2.23046 45.6856 2.381 45.7279 2.55507C45.9067 3.27486 44.58 4.37571 42.0396 5.65063Z"
                      fill="#84EB0C"
                    />
                    <path
                      d="M160.193 15.8604C158.782 15.8604 157.582 15.6675 156.594 15.2771C155.601 14.8866 154.849 14.3079 154.331 13.5364C153.814 12.7649 153.555 11.8051 153.555 10.662V10.5302H156.698V10.9254C156.698 11.3817 156.792 11.7487 156.98 12.0263C157.168 12.3038 157.516 12.5108 158.015 12.6426C158.518 12.7743 159.243 12.8401 160.193 12.8401C161.03 12.8401 161.67 12.7931 162.117 12.699C162.564 12.6049 162.87 12.4544 163.039 12.2474C163.209 12.0404 163.289 11.7769 163.289 11.4523C163.289 10.996 163.147 10.6667 162.86 10.4597C162.573 10.2527 162.075 10.088 161.364 9.95154L157.427 9.35878C156.589 9.21294 155.874 8.96831 155.281 8.62958C154.689 8.29086 154.232 7.83923 153.912 7.27469C153.593 6.71015 153.433 6.02329 153.433 5.21412C153.433 4.65428 153.546 4.10385 153.776 3.56284C154.007 3.02182 154.374 2.53255 154.877 2.09974C155.38 1.66692 156.039 1.31879 156.857 1.05534C157.671 0.791882 158.673 0.660156 159.864 0.660156C161.303 0.660156 162.484 0.876563 163.411 1.30938C164.338 1.7422 165.034 2.35378 165.495 3.13943C165.956 3.92508 166.187 4.83305 166.187 5.85863V5.99036H163.025V5.68457C163.025 5.21412 162.931 4.83305 162.743 4.53667C162.555 4.24499 162.207 4.02858 161.708 3.88745C161.204 3.74631 160.485 3.67574 159.553 3.67574C158.8 3.67574 158.208 3.72749 157.784 3.83099C157.361 3.93449 157.055 4.08974 156.872 4.29203C156.688 4.49903 156.599 4.76248 156.599 5.0871C156.599 5.36466 156.655 5.59988 156.768 5.78336C156.881 5.96684 157.055 6.10797 157.29 6.21147C157.526 6.31497 157.841 6.40435 158.231 6.47492L162.169 7.13826C163.218 7.31703 164.051 7.5993 164.672 7.99918C165.293 8.39436 165.744 8.87891 166.022 9.44345C166.299 10.008 166.441 10.629 166.441 11.3065C166.441 12.1015 166.229 12.8448 165.81 13.5411C165.391 14.2374 164.723 14.8019 163.801 15.2253C162.879 15.6534 161.68 15.8651 160.202 15.8651L160.193 15.8604Z"
                      fill="white"
                    />
                    <path
                      d="M62.7534 8.14735L59.465 0.878906H55.2168V15.6369H58.3594V8.14735L58.2324 5.83274H58.4629L59.2768 8.14735L62.2077 14.7572H66.0183L68.9492 8.14735L69.7678 5.83274H69.9983L69.8948 8.14735V15.6369H73.0327V0.878906H68.761L65.5808 8.14735L64.3012 11.6052H64.0707L62.7534 8.14735Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M80.2968 0.878906L74.1621 15.6369H77.6811L79.0166 12.3767H86.0244L87.3535 15.6369H90.9525L84.7755 0.878906H80.2968ZM84.8124 9.40345L83.5005 6.18558L82.6443 3.89449H82.4138L81.5529 6.18558L80.2347 9.40345H84.8124Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M102.944 14.7572C101.848 15.3452 100.545 15.6369 99.0395 15.6369H92.2744V0.878906H99.0395C100.545 0.878906 101.848 1.17058 102.944 1.75864C104.04 2.34671 104.887 3.18881 105.489 4.28966C106.091 5.39052 106.388 6.71248 106.388 8.25556C106.388 9.79863 106.086 11.1206 105.489 12.2214C104.887 13.3223 104.04 14.1691 102.944 14.7572ZM101.354 12.3014C100.775 12.5414 100.004 12.6637 99.0395 12.6637H95.417V3.85215H99.0395C100.004 3.85215 100.775 3.96976 101.354 4.21439C101.932 4.45903 102.356 4.89655 102.629 5.52695C102.901 6.16206 103.038 7.08884 103.038 8.26026C103.038 9.43168 102.901 10.3396 102.629 10.9795C102.36 11.6193 101.932 12.0568 101.354 12.3014Z"
                      fill="white"
                    />
                    <path
                      d="M106.74 0.878906L112.56 15.6369H117.043L122.863 0.878906H119.094L114.95 12.2873H114.738L110.532 0.878906H106.74Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M149.198 1.3925C148.389 1.04907 147.406 0.875 146.249 0.875H138.5V15.6377H141.648V10.284H143.722C144.268 10.284 144.701 10.331 145.03 10.4251C145.355 10.5239 145.623 10.6792 145.835 10.9003C146.042 11.1214 146.244 11.4225 146.442 11.8036L148.366 15.6377H152.007L149.979 11.6718C149.711 11.159 149.424 10.7262 149.118 10.3734C148.813 10.0205 148.342 9.75709 147.717 9.57832V9.39955C148.596 9.31487 149.325 9.09376 149.914 8.75033C150.497 8.4022 150.939 7.94586 151.231 7.37191C151.522 6.79797 151.668 6.11111 151.668 5.30194C151.668 4.36574 151.461 3.56597 151.043 2.90264C150.624 2.23931 150.008 1.73592 149.198 1.3925ZM147.862 7.38603C147.514 7.65889 146.969 7.79532 146.23 7.79532H141.643V3.84824H146.23C146.969 3.84824 147.514 3.98938 147.862 4.27635C148.211 4.56333 148.385 5.07612 148.385 5.81002C148.385 6.59097 148.211 7.11317 147.862 7.38603Z"
                      fill="white"
                    />
                    <path
                      d="M124.368 15.6377V0.879704H125.253V0.875H136.242V3.85295H127.511V6.73681H135.927V9.69123H127.511V12.6645H136.242V15.6377H124.368Z"
                      fill="white"
                    />
                    <path
                      d="M168.543 15.6377H180.418V12.6645H171.686V9.69123H180.102V6.73681H171.686V3.85295H180.418V0.875H169.428V0.879704H168.543V15.6377Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="section-nine">
          <div className="section-nine-header">
            <h1>
              some call it work <br /> we call it <span id="blue">passion</span>
            </h1>
          </div>

          <div className="wrapper">
            <div className="scene">
              <div className="carousel keen-slider" ref={sliderRef2}>
                <div className="carousel__cell number-slide1 ">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/fa59bf45022543dcbc13d7c1a8507db9.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>Bablouie</h3>
                  </div>
                </div>
                <div className="carousel__cell number-slide2">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/4c8d3ce6a6a74f69962673ef4b09b7b7.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>ISU Fashion</h3>
                  </div>
                </div>
                <div className="carousel__cell number-slide3">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/188b2bd282724a5799fdcf3c926b6c8a.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>Cupid Clothing</h3>
                  </div>
                </div>
                <div className="carousel__cell number-slide4">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/cee11c5cdf2c427fa27d7bf3d6e503ed.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>Comforto Bedding</h3>
                  </div>
                </div>
                <div className="carousel__cell number-slide5">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/7e658c4efaf549ad98304be68f8d69dd.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>Aurave</h3>
                  </div>
                </div>
                <div className="carousel__cell number-slide6">
                  <div className="video" id="video-one">
                    <video muted autoPlay={true} loop controls={false}>
                      <source
                        src="https://cdn.shopify.com/videos/c/o/v/e5724ed332c742f6a2255e0218a12c1c.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <h3>Uberlyfe</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 id="portfolio">Work Showcase</h1>

        <section className="project-section">
          <div className="project-width">
            <div className="project-section-df">
              {/* Left Side: Image */}
              <div className="project-image">
                <Image
                  src={"/da-urban2.png"}
                  alt="img"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>

              {/* Right Side: Scrollable Text */}
              <div className="project-content">
                <h2>Shopify Project: Dá Urban Website Build</h2>
                <p>
                  Working with Dá Urban and their parent brand Metro Furniture
                  was a deep dive into performance-driven web architecture. I
                  built a modern, scalable website using{" "}
                  <strong>Shopify</strong> to showcase their wide product range
                  — from CEO chairs to modular workstations. Every component was
                  carefully structured to load quickly, remain SEO-friendly, and
                  be simple to manage.
                  <br />
                  <br />
                  The layout supports massive catalogs, dealer listings, and
                  certification highlights such as <strong>
                    ISO 9001
                  </strong> and <strong>OHSAS 45001</strong>. I implemented
                  scroll animations and responsive elements to make browsing
                  feel smooth across devices. This project also included
                  ecommerce-ready structuring for platforms like Amazon and
                  Flipkart. We made sure their massive 10,000+ monthly chair
                  manufacturing scale and export reach was clearly communicated.
                </p>
              </div>
            </div>

            <div className="project-section-df rotate" id="portfolio-two">
              {/* Left Side: Image */}
              <div className="project-image">
                <Image
                  src={"/devk.png"}
                  alt="img"
                  width={0}
                  height={0}
                  unoptimized
                  priority
                ></Image>
              </div>

              {/* Right Side: Scrollable Text */}
              <div className="project-content">
                <h2>
                  Next.js: Building Innovation with Devkinandan Steel & Metal
                  Industries LLP
                </h2>
                <p>
                  For Devkinandan Steel & Metal Industries LLP, I had the
                  opportunity to work on a robust and scalable digital presence
                  that reflects their industrial strength and modern engineering
                  solutions. The project focused on showcasing their expertise
                  in pre-engineered buildings (PEB), factory sheds, and cold
                  storage structures. I worked closely with their team to
                  understand the core offerings and implemented a design that
                  was both functional and visually impactful. Using Next.js,
                  <br />
                  <br />I created a responsive layout optimized for performance
                  and SEO. The goal was to simplify how clients navigate
                  services while highlighting the brand’s innovation,
                  reliability, and execution capacity. The final outcome ensures
                  their clients can clearly explore PEB solutions and get in
                  touch easily — reinforcing Devkinandan's commitment to
                  engineering excellence.
                </p>
              </div>
            </div>
          </div>
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
                Schedule a call at your convenient time to help us understand
                your brand, vision & expectations.
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

        <span id="mob" className="fixed-btn">
          <Link href={"#connect"}>
            <button>Sign Up</button>
          </Link>
        </span>
      </div>
    </>
  );
}
