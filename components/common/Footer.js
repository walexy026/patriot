"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-8 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img
              src="/header_logo.png"
              alt=""
              className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain"
            />
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
              <b>Address:</b> Rajasthan Technical University
              <br />
              Akelgarh, Rawatbhata Road, Kota - 324010 <br />
              <b>Email:</b> admin@teamhnm.org
              <br />
              <b>Mobile:</b> +919024689024
            </div>
            <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                  href="https://itsvg.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" sm:text-center sm:text-base transition-all ease-in-out"
                >
                  {"</>"} with 💛 WALEXYDEV{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non urna vel libero auctor euismod.
              </p>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: example@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>

            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size="2rem" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size="2rem" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size="2rem" />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Subscribe to our Newsletter</h3>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          footer {
            background-color: red;
            color: #fff;
            padding: 40px 0;
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .footer-section {
            margin-bottom: 20px;
          }

          .social-links {
            display: flex;
            gap: 10px;
          }

          form {
            display: flex;
            gap: 10px;
          }

          input {
            padding: 10px;
            width: 200px;
          }

          button {
            padding: 10px 20px;
            background-color: #fff;
            color: #333;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </footer>
    </>
  );
}
