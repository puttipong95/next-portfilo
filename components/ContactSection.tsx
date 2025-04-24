import React from "react";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import { FaLine } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="text-center space-y-1 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl pb-4 font-bold">Let's Connect</h1>
      <div className="flex gap-3">
        <div className="phone flex gap-2 items-center pb-1 border-r-2 pr-3">
          <Button className="p-5 rounded-full" variant={"outline"}>
            <Phone />
          </Button>
          <h1 className="text-2xl">095-5456-916</h1>
        </div>
        <div className="line flex gap-2 items-center pb-1 border-r-2 pr-3">
          <Button className="p-5 rounded-full bg-green-500 hover:bg-green-600 text-white">
            <FaLine />
          </Button>
          <h1 className="text-2xl">puttipong.com</h1>
        </div>
        <div className="mail flex gap-2 items-center">
          <Button className="p-5 rounded-full bg-red-500 hover:bg-red-600 text-white">
            <Mail />
          </Button>
          <h1 className="text-2xl">puttipongseangpor@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
