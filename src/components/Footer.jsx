import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 px-5 sm:px-14">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
        <div className="w-full sm:w-1/2">
          <div className=" border-2 w-full sm:w-max border-[#3D3D3D] border-dashed p-4 rounded-lg flex gap-5">
            <Image
              src="/images/qr.png"
              alt="fliq logo"
              width={80}
              height={80}
              loading="lazy"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-sm">Hope your test is going well.</h2>
              <div className="flex gap-5 items-center">
                <BiLogoPlayStore />
                <FaApple />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid gap-5 w-full sm:w-max grid-cols-2 sm:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold">About Us</h2>
            <div className="space-y-2">
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Our Company
              </a>
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Careers
              </a>
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Press Kits
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold">Legal</h2>
            <div className="space-y-2">
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Terms of use
              </a>
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                About us
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold">Support</h2>
            <div className="space-y-2">
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                Contact us
              </a>
              <a
                href="#"
                className="cursor-pointer block appearance-none sub-text text-sm hover:opacity-70"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-10 pt-10 sub-text items-center">
        <p className="text-xs">&copy; Fliq co, LLC.</p>
      </div>
    </footer>
  );
}
