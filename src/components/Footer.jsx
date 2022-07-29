import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className="items-center bg-[#202942] h-[400px]  text-white">
      <div className="flex justify-center gap-10 leading-9">
        <div className="mt-5">
          <h1 className="text-[32px]">Guides</h1>
          <h3>
            GUIDES GROUP E-TİCARET VE PAZARLAMA <br /> LİMİTED ŞİRKETİ
          </h3>
          <p>
            <LocationOnIcon className="text-sky-600" /> Zafer, Yıldırım Beyazıt
            Cd. No:56, 34194 Bahçelievler/İstanbul
          </p>
          <p>
            <LocalPhoneIcon className="text-sky-600" /> +90 555 444 33 22
          </p>
          <p>
            <EmailIcon className="text-sky-600" />
            info@guidesistanbul.com
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-[24px] mb-5">Useful Links</h1>
          <ul className="ml-3">
            <li>Ramada Hotel</li>
            <li>Serif Aga Oglu</li>
            <li>Shehba Tourism</li>
            <li>Tarbus Gold</li>
            <li>Nisantasi laundry</li>
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="text-[24px] mb-5">Useful Number</h1>
          <ul className="ml-3">
            <li>Beyt El Decac Restaurant</li>
            <li>Alagar Doner</li>
            <li>Is bankas</li>
            <li>Hilton Istanbul Hotel</li>
            <li>Yurtici Karg</li>
          </ul>
        </div>
        <div className="mt-5">
          <h1>Newsletter</h1>
          <p>
            Sign up and recieve the latest tips
            <br /> via email.
          </p>
          <p>Write your email</p>
          <input
            placeholder="Your email:"
            type="email"
            className="bg-sky-900 px-10 rounded w-[100%]"
          />
          <div className="flex justify-center my-3">
            <FacebookIcon className="mx-2 cursor-pointer" />
            <TwitterIcon className="mx-2 cursor-pointer" />
            <InstagramIcon className="mx-2 cursor-pointer" />
            <LinkedInIcon className="mx-2 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly my-20">
        <div>
          <div className="flex justify-evenly">
            <p>
              2022 <CopyrightIcon /> Copyright
              <span className="text-sky-800">Guides Istanbul.</span>
              All Rights Reserved{" "}
            </p>
            <div>
              <a href="/">Terms of Condition</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="gap-2 flex">
          <a href="/">Terms of Condition</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
