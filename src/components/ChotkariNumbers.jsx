"use client";
import Image from "next/image";
import phone from "../../public/iPhone 14.svg";
import gPlay from "../../public/googleplay.svg";
import appStore from "../../public/app-store.svg";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function ChotkariNumbers() {
  const [counterOn, setCounterOn] = useState(false);
  const formatNumber = (value) => {
    if (value >= 1e3 && value < 1e6) {
      return (value / 1e3).toFixed(value % 1e3 !== 0 ? 1 : 0) + "K";
    } else if (value >= 1e6 && value < 1e9) {
      return (value / 1e6).toFixed(value % 1e6 !== 0 ? 1 : 0) + "M";
    } else if (value >= 1e9) {
      return (value / 1e9).toFixed(value % 1e9 !== 0 ? 1 : 0) + "B";
    } else {
      return value;
    }
  };

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
     <div className=" bg-gray-500 rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-20 max-w-[874px] h-[722px] mx-auto grid justify-center p-2 my-20 ">
     <div className=" bg-gray-500 rounded-xl  bg-opacity-50 max-w-[1094px] h-[639px] mx-auto grid justify-center mt-8 ">
     <div
        style={{
          borderRadius: "24px",
          backgroundColor: "#001C2F",
          padding: "80px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="number-animate overflow-hidden bg-stoke lg:w-[1320px] w-[1100px] h-[601px] mx-auto my-4"
      >
        <div
          style={{
            flex: 1.2,
          }}
        >
          <div>
            <p
              style={{
                color: "#ffffff",
                fontWeight: 600,
                lineHeight: "78.3px",
              }}
              className="whitespace-nowrap lg:text-[51px]"
            >
              Chotkari{" "}
              <span
                style={{
                  fontWeight: 400,
                }}
              >
                in
              </span>{" "}
              <span
                style={{
                  fontWeight: 400,
                  color: "#FFA500",
                }}
              >
                Numbers
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: "40px",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "41.02px",
                  lineHeight: "59.47px",
                  color: "#006696",
                }}
              >
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={1000}
                    duration={3}
                    delay={0}
                    formattingFn={(value) => formatNumber(value)}
                  />
                ) : (
                  "0"
                )}
                +
              </p>{" "}
              <p
                style={{
                  color: "#686163",
                  fontWeight: 400,
                  fontSize: "15.19px",
                  lineHeight: "22.03px",
                }}
              >
                News
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "41.02px",
                  lineHeight: "59.47px",
                  color: "#9A1F33",
                }}
              >
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={50}
                    duration={3}
                    delay={0}
                    formattingFn={(value) => formatNumber(value)}
                  />
                ) : (
                  "0"
                )}
                +
              </p>{" "}
              <p
                style={{
                  color: "#686163",
                  fontWeight: 400,
                  fontSize: "15.19px",
                  lineHeight: "22.03px",
                }}
              >
                Authors
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "41.02px",
                  lineHeight: "59.47px",
                  color: "#D42A5B",
                }}
              >
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={300}
                    duration={3}
                    delay={0}
                    formattingFn={(value) => formatNumber(value)}
                  />
                ) : (
                  "0"
                )}
                +
              </p>{" "}
              <p
                style={{
                  color: "#686163",
                  fontWeight: 400,
                  fontSize: "15.19px",
                  lineHeight: "22.03px",
                }}
              >{`Downloads (Beta)`}</p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "41.02px",
                  lineHeight: "59.47px",
                  color: "#12A758",
                }}
              >
                {counterOn ? (
                  <CountUp
                    start={0}
                    end={300}
                    duration={3}
                    delay={0}
                    formattingFn={(value) => formatNumber(value)}
                  />
                ) : (
                  "0"
                )}
                +
              </p>{" "}
              <p
                style={{
                  color: "#686163",
                  fontWeight: 400,
                  fontSize: "15.19px",
                  lineHeight: "22.03px",
                }}
              >{`Users (Testing)`}</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "80px",
            }}
          >
            <button className=" mb-4 w-[120px] h-30px mx-auto border rounded-2xl text-gray-500 text-[14px] z-50">
              Available on
            </button>

            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.chotkari.app&pcampaignid=web_share"
                }
                target="_blank"
              >
                <Image src={gPlay} alt="google-play" className="gPlay" />{" "}
              </Link>
              <div>
                <Link
                  href={"https://apps.apple.com/nz/app/chotkari/id6478438264"}
                  target="_blank"
                >
                  <Image
                    src={appStore}
                    className="gPlay"
                    alt="app-store-link"
                    height={60}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

       <div className="lg:flex hidden pl-24">
          <img src="./screens/image 55.png" alt="" className="w-[235px] h-[500px] mt-20 "/>
          <img src="./screens/image 51.png" alt="" className="w-[282px] h-[600px]" />
          <img src="./screens/image 52 (1).png" alt="" className="w-[235px] h-[500px] mt-20"/>
       </div>
      </div>
     </div>
     </div>
    </ScrollTrigger>
  );
}
