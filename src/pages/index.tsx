import Head from "next/head";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>FLIQ Banking</title>
        <meta name="description" content="Building the future of banking." />
      </Head>
      <div className="bg-black w-full ">
        <Header />
        <main className="py-16 space-y-16">
          <section className="space-y-7 px-5">
            <div className="justify-center cursor-pointer w-max flex gap-4 items-center text-xs sm:text-sm mx-auto px-4 py-1 rounded-full bg-[#9898984a]">
              Introducing Fliq Mobile banking App
              <FaChevronRight />
            </div>
            <h2 className="text-3xl sm:text-6xl w-5/6 sm:w-3/6 sm:leading-20 mx-auto text-center">
              Building the future of banking.
            </h2>
            <p className="text-sm sm:text-lg sub-text text-center w-full sm:w-2/5 mx-auto">
              Experience the future of banking with Fliq. We're here to empower
              your financial journey.
            </p>
          </section>
          <section className="p-5">
            <div
              style={{ height: "380px" }}
              className="relative sm:hidden w-full "
            >
              <Image
                src="/images/hero2.png"
                alt="fliq logo"
                fill
                loading="eager"
              />
            </div>
            <div
              style={{ height: "700px" }}
              className="relative hidden sm:block w-full "
            >
              <Image
                src="/images/hero.png"
                alt="fliq logo"
                fill
                loading="eager"
              />
            </div>
          </section>
          <section className="p-5 space-y-10 ">
            <p className="text-center text-xs sm:text-base uppercase">
              Featured and seen in
            </p>
            <div className="flex sm:hidden gap-3 justify-center items-center">
              <Image
                src="/images/forbes.png"
                alt="fliq logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <Image
                src="/images/cnbc.png"
                alt="fliq logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <Image
                src="/images/bloomberg.png"
                alt="fliq logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <Image
                src="/images/reuters.png"
                alt="fliq logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <Image
                src="/images/cnn.png"
                alt="fliq logo"
                width={50}
                height={50}
                loading="lazy"
              />
            </div>
            <div className="sm:flex hidden gap-24 justify-center items-center">
              <Image
                src="/images/forbes.png"
                alt="fliq logo"
                width={100}
                height={100}
                loading="lazy"
              />
              <Image
                src="/images/cnbc.png"
                alt="fliq logo"
                width={100}
                height={100}
                loading="lazy"
              />
              <Image
                src="/images/bloomberg.png"
                alt="fliq logo"
                width={100}
                height={100}
                loading="lazy"
              />
              <Image
                src="/images/reuters.png"
                alt="fliq logo"
                width={100}
                height={100}
                loading="lazy"
              />
              <Image
                src="/images/cnn.png"
                alt="fliq logo"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
          </section>
          <section className="p-5 space-y-10">
            <p className="text-center uppercase text-xs sm:text-base text-[#6A5ACD]">
              {" "}
              Introducing
            </p>
            <h2 className="text-3xl sm:text-6xl w-5/6 sm:w-3/6 sm:leading-20 mx-auto text-center">
              Introducing Fliq’s Next-Gen Cards
            </h2>
            <p className="text-sm sm:text-lg sub-text text-center w-full sm:w-2/5 mx-auto">
              Discover Fliq’s latest innovation – our new cards. Elevate your
              banking experience with cutting-edge features, security, and
              unprecedented convenience.
            </p>
            <div className="flex pt-10 px-5 justify-center items-center">
              <Image
                src="/images/card.png"
                alt="fliq logo"
                width={350}
                height={240}
                loading="lazy"
              />
            </div>
          </section>
          <section className="p-5">
            <div className="grid sm:px-10 grid-cols-1 sm:grid-cols-3 gap-10">
              <div className="w-full space-y-3">
                <div className="flex gap-2 items-center">
                  <FaRegCopy />
                  <h2 className="text-lg">Contactless Technology</h2>
                </div>
                <p className="text-sm sub-text">
                  Our new cards come equipped with contactless technology,
                  allowing you to make swift, secure payments with a simple tap.
                </p>
              </div>
              <div className="w-full space-y-3">
                <div className="flex gap-2 items-center">
                  <FaRegAddressCard />
                  <h2 className="text-lg">Personalization</h2>
                </div>
                <p className="text-sm sub-text">
                  Customize your card to reflect your unique style. Choose from
                  a range of designs that suit your personality.
                </p>
              </div>
              <div className="w-full space-y-3">
                <div className="flex gap-2 items-center">
                  <FaLock />
                  <h2 className="text-lg">Enhanced Security</h2>
                </div>
                <p className="text-sm sub-text">
                  Your peace of mind is our priority. Our cards feature advanced
                  security measures to protect your transactions and data.
                </p>
              </div>
            </div>
          </section>
        </main>
        <section className="p-5 pt-10 sm:pt-20 sm:px-10">
          <div className="border-b border-[#3D3D3D] pb-5">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/logo.png"
                alt="fliq logo"
                width={80}
                height={80}
                priority
              />
              <h1 className="text-6xl flex flex-col items-end  font-medium">
                Fliq.
                <span className="text-xs mt-1 -translate-x-5 normal-case font-normal">
                  by Blend
                </span>
              </h1>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
