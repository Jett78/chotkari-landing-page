"use client"
import Image from "next/image";
import phone from '../../public/iPhone 14.svg'
import gPlay from '../../public/googleplay.svg'
import appStore from '../../public/app-store.svg'
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function ChotkariNumbers() {
    const [counterOn, setCounterOn] = useState(false)
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
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div style={{
                borderRadius: '24px',
                backgroundColor: '#001C2F',
                width:'75%',
                margin:'10em auto',
                padding: '80px',
                display: 'flex',
                justifyContent: 'space-between'
            }} className="number-animate bg-stoke">

                <div style={{
                    flex: 1.2
                }}>
                    <div>
                        <p style={{
                            color: '#14673C',
                            fontWeight: 600,
                            fontSize: '51px',
                            lineHeight: '78.3px',

                        }}>Chotkari <span style={{
                            fontWeight: 400,

                        }}>in</span> <span
                            style={{
                                fontWeight: 400,
                                color: '#FFA500'
                            }}>Numbers</span></p>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        gap: '40px'
                    }}>
                        <div>
                            <p style={{
                                fontWeight: 500,
                                fontSize: '41.02px',
                                lineHeight: '59.47px',
                                color: "#006696"
                            }}>{counterOn ? <CountUp start={0} end={1000} duration={3} delay={0} formattingFn={(value) => formatNumber(value)} /> : "0"}+</p> <p style={{
                                color: '#686163',
                                fontWeight: 400,
                                fontSize: '15.19px',
                                lineHeight: "22.03px"
                            }}>News</p>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: 500,
                                fontSize: '41.02px',
                                lineHeight: '59.47px',
                                color: "#9A1F33"
                            }}>{counterOn ? <CountUp start={0} end={50} duration={3} delay={0} formattingFn={(value) => formatNumber(value)} /> : "0"}+</p> <p style={{
                                color: '#686163',
                                fontWeight: 400,
                                fontSize: '15.19px',
                                lineHeight: "22.03px"
                            }}>Authors</p>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: 500,
                                fontSize: '41.02px',
                                lineHeight: '59.47px',
                                color: "#D42A5B"
                            }}>{counterOn ? <CountUp start={0} end={300} duration={3} delay={0} formattingFn={(value) => formatNumber(value)} /> : "0"}+</p> <p style={{
                                color: '#686163',
                                fontWeight: 400,
                                fontSize: '15.19px',
                                lineHeight: "22.03px"
                            }}>{`Downloads (Beta)`}</p>
                        </div>
                        <div>
                            <p style={{
                                fontWeight: 500,
                                fontSize: '41.02px',
                                lineHeight: '59.47px',
                                color: "#12A758"
                            }}>{counterOn ? <CountUp start={0} end={300} duration={3} delay={0} formattingFn={(value) => formatNumber(value)} /> : "0"}+</p> <p style={{
                                color: '#686163',
                                fontWeight: 400,
                                fontSize: '15.19px',
                                lineHeight: "22.03px"
                            }}>{`Users (Testing)`}</p>
                        </div>

                    </div>

                    <div style={{
                        marginTop: '80px'
                    }}>
                        <p style={{
                            color: '#006696',
                            fontWeight: '400',
                            fontSize: '20px',
                            letterSpacing: '0.1px',
                            lineHeight: '20px',
                            marginBottom: '20px'
                        }}>Download Our App from</p>

                        <div style={{
                            display: 'flex',
                            gap: '20px'
                        }}>
                            <Link href={"https://play.google.com/store/apps/details?id=com.chotkari.app&pcampaignid=web_share"} target="_blank"><Image src={gPlay} alt="google-play" className="gPlay" /> </Link>
                            <div>
                               <Link href={"https://apps.apple.com/nz/app/chotkari/id6478438264"} target="_blank"><Image src={appStore} className="gPlay" alt="app-store-link" height={60} priority /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    flex: 1
                }}>
                    <Image src={phone} alt="" />
                </div>


            </div>
        </ScrollTrigger >
    )
}