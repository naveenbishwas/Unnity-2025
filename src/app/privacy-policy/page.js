import Head from "next/head";
import "./privacy-policy.css"; // Basic import of external CSS
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
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
      <Head>
        <title>Privacy Policy – Unnity</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how Unnity handles your personal data, cookies, and security."
        />
      </Head>
      <div className="privacy-container">
        <h1>Privacy Policy – Unnity</h1>
        <p>
          <strong>Effective Date:</strong> 1st January 2024
        </p>
        <p>
          At <strong>Unnity</strong>, we are committed to protecting your
          privacy. This Privacy Policy outlines how we collect, use, and manage
          your personal information when you visit or use our website.
        </p>

        <hr />

        <h2>SECTION 1 – THIRD-PARTY SERVICES</h2>
        <p>
          For certain services, we engage third-party providers. We encourage
          you to review their privacy policies to understand how they manage
          your personal information.
        </p>
        <p>
          Please be aware that some of these providers may be located in, or
          have facilities in, jurisdictions different from yours or ours. If you
          choose to proceed with a transaction involving a third-party service
          provider, your information may become subject to the laws of the
          jurisdiction(s) where the provider or its data centers are located.
        </p>
        <p>
          Once you leave our website or are redirected to a third-party
          platform, this Privacy Policy and our Terms of Service no longer
          apply.
        </p>

        <h2>SECTION 2 – COLLECTION OF PERSONAL INFORMATION</h2>
        <p>
          When you interact with our website or services, we may collect
          personal information such as your name, email address, phone number,
          and any other information you voluntarily provide. This data is used
          solely for providing services, communication, and improving user
          experience.
        </p>

        <h2>SECTION 3 – CONSENT</h2>
        <p>
          When you provide us with personal information to complete a
          transaction, verify your identity, or engage our services, you imply
          your consent for us to collect and use that information for those
          specific purposes.
        </p>
        <p>
          If we ask for your information for a secondary reason (like
          marketing), we will either ask for your explicit consent or provide
          you with an option to decline.
        </p>

        <h2>SECTION 4 – DISCLOSURE</h2>
        <p>
          We may disclose your personal information if required by law or if you
          violate our Terms of Service.
        </p>

        <h2>SECTION 5 – PAYMENT</h2>
        <p>
          We use <strong>PayPal</strong> as our primary payment gateway.
          Payments made through PayPal are encrypted and processed securely. We
          do not store your credit card details on our servers. Please review{" "}
          <a
            href="https://www.paypal.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal’s privacy policy
          </a>{" "}
          for further information on how they handle your data.
        </p>

        <h2>SECTION 6 – LINKS</h2>
        <p>
          Our website may contain links that redirect you to other sites. We are
          not responsible for the privacy practices of these third-party
          websites and encourage you to read their respective privacy policies
          before sharing any personal information.
        </p>

        <h2>SECTION 7 – SECURITY</h2>
        <p>
          We implement reasonable security measures and follow industry best
          practices to ensure your personal information is not improperly
          accessed, disclosed, altered, or destroyed.
        </p>
        <p>
          However, no method of transmission over the internet or electronic
          storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2>SECTION 8 – COOKIES</h2>
        <p>
          We use cookies to maintain your session and enhance your experience on
          our site. These cookies do not personally identify you on other
          websites and are used purely for functionality and analytics within
          our platform.
        </p>

        <h2>SECTION 9 – AGE OF CONSENT</h2>
        <p>
          By using our website, you confirm that you are at least the age of
          majority in your state or province of residence, or that you are the
          age of majority and have given consent for any minor dependents to use
          our site.
        </p>

        <h2>SECTION 10 – CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time.
          Changes take effect immediately upon being posted on our site. If we
          make significant updates, we will notify you here so that you are
          aware of the changes.
        </p>
        <p>
          In the event that our business is acquired or merged with another
          company, your information may be transferred to the new entity in
          order to continue providing services to you.
        </p>

        <h2>QUESTIONS AND CONTACT INFORMATION</h2>
        <p>
          For questions, access to your data, or to request a correction or
          deletion of your personal information, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:sayam@unnity.in">sayam@unnity.in</a>
          </li>
          <li>
            <strong>Phone:</strong> +91 93150 03754
          </li>
          <li>
            <strong>Address:</strong>
            &nbsp; Unnity &nbsp; SF-40, 2nd Floor, Pearl Omaxe
            <br />
            Netaji Subhash Place, Pitampura
            <br />
            New Delhi – 110034
            <br />
            India
          </li>
        </ul>
      </div>

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
                fillRule="evenodd"
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

        <div className="form-boottom" id="privacy-policy">
          <div className="footer-services">
            <h4>Pages</h4>
            <Link href="privacy-policy">
              <li>Privacy Policy</li>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
