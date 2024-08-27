import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

function Footer() {
  return (
    <div className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="./footer-grid.svg"
          className="w-full h-full opacity-50"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45wv]">
          Ready to Take <span className="text-purple">Your</span> Digital
          Presence to Next Level?
        </h1>
        <p className="text-white-200 md:mt-10 mt-5 text-center">
          Reach out to me today and let's discuses how I can help you achieve
          your goals.
        </p>
        <a href="mailto:shoaibfateh21@yahoo.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex m-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright @ 2024 Fateh
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-r-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
