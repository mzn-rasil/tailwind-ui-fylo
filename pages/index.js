import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Fragment } from "react";
import HeroImage from "../public/images/illustration-1.svg";
import Illustration2 from "../public/images/illustration-2.svg";
import QuoteIcon from "../public/images/icon-quotes.svg";
import Avatar from "../public/images/avatar-testimonial.jpg";
import Logo from "../public/images/logo.svg";
import PhoneLogo from "../public/images/icon-phone.svg";
import EmailLogo from "../public/images/icon-email.svg";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import MobileCurveBg from "../public/images/bg-curve-mobile.svg";
import DesktopCurveBg from "../public/images/bg-curve-desktop.svg";

export default function Home() {
  return (
    <Fragment>
      <nav className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="basis-24 flex items-center">
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>

        <ul className="flex space-x-4 font-raleway text-sm tracking-tight text-dark-blue
                      md:space-x-16">
          <li className="hover:text-moderate-cyan hover:cursor-pointer">Features</li>
          <li className="hover:text-moderate-cyan hover:cursor-pointer">Team</li>
          <li className="hover:text-moderate-cyan hover:cursor-pointer">Sign In</li>
        </ul>
      </nav>

      <section className="container mx-auto mt-16 px-4 flex flex-col space-y-8 items-center justify-center md:flex-row-reverse md:space-y-0 md:gap-20">
        <div>
          <Image
            src={HeroImage}
            alt="Hero image"
            fill="cover"
          />
        </div>

        <div>
          <h2 className="font-raleway font-bold text-center text-dark-blue text-xl leading-relaxed md:text-start md:text-4xl md:leading-[3.2rem]">
            All your files in one secure location, accessible anywhere.
          </h2>

          <p className="font-open-sans text-center text-sm px-6 mt-4 leading-normal md:text-start md:px-0 md:text-lg">
            Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
          </p>

          <form className="px-6 mt-6 flex flex-col space-y-4 md:px-0 md:flex-row md:space-y-0 md:gap-4">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="w-full border border-slate-500 py-2 px-4 rounded-sm font-open-sans focus:outline-none md:w-1/2"
              required
            />

            <button className="w-full  bg-bright-blue hover:opacity-80 text-grayish-blue font-raleway font-bold p-2 rounded-md drop-shadow-md md:w-1/2">
              Get Started
            </button>
          </form>
        </div>
      </section>

      <section className="relative z-50">
        <div className="z-10 block md:hidden">
          <Image
            src={MobileCurveBg}
            alt="Mobile Background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="z-10 hidden md:block ">
          <Image
            src={DesktopCurveBg}
            alt="Desktop Background"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="container z-50 mx-auto px-4 mt-24 py-24 flex flex-col space-y-8
        md:flex-row-reverse md:gap-20 md:space-y-0 md:mt-72 md:pb-72">
          <div className="z-50">
            <Image
              src={Illustration2}
              alt="Illustration-2"
            />
          </div>

          <div className="z-50 flex flex-col space-y-6">
            <h2 className="font-raleway font-bold text-center text-xl text-dark-blue tracking-tight leading-relaxed md:text-start md:text-4xl">
              Stay productive, wherever you are
            </h2>

            <p className="font-open-sans text-sm text-dark-blue leading-normal md:text-lg">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            </p>

            <p className="font-open-sans text-sm text-dark-blue leading-normal md:text-lg">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
            </p>

            <div className="text-center mb-8 md:text-start">
              <span className="text-moderate-cyan font-open-sans border-b-2 border-moderate-cyan pb-1 hover:cursor-pointer hover:opacity-80">
                See how Fylo works
                <BsFillArrowRightCircleFill className="inline ml-2" />
              </span>
            </div>

            {/* Testimonial */}
            <div className="relative w-72 h-fit mx-auto top-4 p-4 bg-white drop-shadow-lg rounded-md md:mx-0 md:w-80 md:p-6">
              <span>
                <Image
                  src={QuoteIcon}
                  alt="Quote"
                  width="16px"
                  height="16px"
                />
              </span>
              <blockquote className="font-open-sans text-sm leading-[1.8rem] tracking-tight text-dark-blue">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
              </blockquote>

              <div className="flex items-center space-x-2 mt-4">
                <div>
                  <Image
                    src={Avatar}
                    alt="Avatar"
                    width="30px"
                    height="30px"
                    className="rounded-full"
                  />
                </div>

                <div>
                  <h3 className="font-raleway font-bold text-sm">Kyle Burton</h3>
                  <p className="font-open-sans text-xs text-slate-500">Founded & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-8 bg-desat-blue px-8 py-16 md:px-16 md:py-32">
        <div className="container mx-auto md:flex md:flex-row md:justify-between md:items-center md:gap-4">
          <div className="space-y-6 max-w-xl">
            <h3 className="font-raleway font-bold text-xl text-center text-grayish-blue md:text-3xl md:text-start">
              Get early access today
            </h3>

            <p className="font-open-sans text-base text-grayish-blue text-center md:text-start md:text-lg">
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </div>

          <form className="px-10 mt-6 flex basis-1/2 flex-col space-y-4">
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border border-slate-500 py-2 px-4 rounded-sm font-open-sans focus:outline-none"
              required
            />

            <button className="w-full bg-bright-blue text-grayish-blue font-raleway font-bold p-2 rounded-md drop-shadow-md hover:cursor-pointer hover:opacity-80 md:w-64">
              Get Started For Free
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-dark-blue text-grayish-blue px-8 py-16 font-open-sans text-base md:px-16 md:py-32">
        <div className="relative w-64 h-24">
          <Image
            src={Logo}
            alt="Logo"
          />
        </div>

        <div className="flex flex-col space-y-16 md:flex-row md:justify-between md:items-start md:space-y-0">
          <div className=" flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <span><Image src={PhoneLogo} alt="Phone logo" /></span>
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <span><Image src={EmailLogo} alt="Email logo" /></span>
              <span>example@fylo.com</span>
            </div>
          </div>

          <ul className="flex flex-col space-y-4">
            <li className="hover:cursor-pointer hover:text-bright-blue">About Us</li>
            <li className="hover:cursor-pointer hover:text-bright-blue">Jobs</li>
            <li className="hover:cursor-pointer hover:text-bright-blue">Press</li>
            <li className="hover:cursor-pointer hover:text-bright-blue">Blog</li>
          </ul>

          <ul className="flex flex-col space-y-4">
            <li className="hover:cursor-pointer hover:text-bright-blue">Contact Us</li>
            <li className="hover:cursor-pointer hover:text-bright-blue">Terms</li>
            <li className="hover:cursor-pointer hover:text-bright-blue">Privacy</li>
          </ul>

          <div className="flex space-x-6 justify-center items-center">
            <span className="p-2 rounded-full border border-white hover:cursor-pointer hover:text-bright-blue hover:border-bright-blue">
              <RiFacebookFill />
            </span>
            <span className="p-2 rounded-full border border-white hover:cursor-pointer hover:text-bright-blue hover:border-bright-blue">
              <RiInstagramFill />
            </span>
            <span className="p-2 rounded-full border border-white hover:cursor-pointer hover:text-bright-blue hover:border-bright-blue">
              <RiTwitterFill />
            </span>
          </div>
        </div >
      </footer >
    </Fragment >
  )
}
