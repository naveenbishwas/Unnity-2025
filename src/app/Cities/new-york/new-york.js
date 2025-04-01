import React from "react";
import "./new-york.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="container">
      <section className="add-navbar">
        <a href="/">
          <div className="logo">
            <Image
              src="/check.png"
              width={0}
              height={0}
              alt="logo-image"
              unoptimized
              priority={true}
            ></Image>
          </div>
        </a>

        <div className="contact-btn">
          <a href="#connect">
            <button className="animate__animated animate__bounceIn">
              Sign up
            </button>
          </a>
          <div className="number">
            <a id="desktop-view" href="#connect">
              <h4>+91 9315003754</h4>
            </a>
            <a id="mobile-view" href="tel:91 93150 03754">
              <h4>9315003754</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
