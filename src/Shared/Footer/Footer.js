import React from "react";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import instagram from "../../image/instagram.png";
import twitter from "../../image/twitter.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200">
      <div>
        <span className="text-black font-bold text-2xl text-center">
          Location
        </span>
        <a className="link link-hover">Bangladesh</a>
        <a className="link link-hover">Usa</a>
        <a className="link link-hover">India</a>
        <a className="link link-hover">Japan</a>
        <a className="link link-hover">Italy</a>
      </div>
      <div>
        <span className="text-black font-bold text-2xl text-center">
          Quick Link
        </span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Menu</a>
        <a className="link link-hover">Gallary</a>
        <a className="link link-hover">Order</a>
      </div>
      <div>
        <span className="text-black font-bold text-2xl text-center">
          contact
        </span>
        <a className="link link-hover">+880 1642763529</a>
        <a className="link link-hover">+880 1817761428</a>
        <a className="link link-hover">alif123@gmail.com</a>
        <a className="link link-hover">foodshop123@gmail.com</a>
      </div>
      <div>
        <span className="text-black font-bold text-2xl text-center">
          Our Service
        </span>
        <a className="link link-hover">Fast Delivery</a>
        <a className="link link-hover">Easy Payments</a>
        <a className="link link-hover">24 x 7 Service</a>
      </div>
      <div>
        <span className="text-black font-bold text-2xl text-center">
          Follows
        </span>
        <a className="link link-hover grid grid-flow-col">
          <a href="https://www.facebook.com/mdmirajul.alam.7/" target="_blank">
            <img src={facebook} className="h-4 w-6 mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/mirajul-alam-alif-19025b241/"
            target="_blank"
          >
            <img src={linkedin} className="h-4 w-6 mr-2" />
          </a>
          <img src={instagram} className="h-4 w-6 mr-2" />
          <img src={twitter} className="h-4 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
