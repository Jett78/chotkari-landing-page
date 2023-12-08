"use client"
import { FaArrowRight } from "react-icons/fa";
import './styles/topContainer.css'
import { Link } from 'react-scroll';

export default function TopContainer() {

    return (
        <>
            <div className="text-center mt-8 ck-main-info">
                <h1 className="text-white ck-top-heading">
                    Welcome to Chotkari
                </h1>
                <p className="mt-6 text-lg leading-8 text-white ck-top-paragraph">
                    A powerful tool to enhance and amplify your reading experience.
                </p>

                <div className="button-container">

                    <Link to="join-waitlist" smooth={true} duration={500} className="ck-join-button" style={{ cursor: 'pointer' }}>
                        Join Waitlist <FaArrowRight />
                    </Link>

                </div>


                <div className="ck-info-video-section">
                    <div className="ck-info-para ck-english">
                        <p>Everything in Short</p>
                    </div>

                    <div className="ck-info-video">
                        {/* <iframe src="https://player.vimeo.com/video/891811069?&autoplay=1&loop=1" width="560" height="315" frameBorder="0" allow="autoplay; picture-in-picture" ></iframe> */}

                        <iframe src="https://player.vimeo.com/video/892519221?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" width="560" height="315" frameBorder="0" allow="autoplay;  picture-in-picture" title="Chotkari" loop></iframe>
                    </div>
                    <div className="ck-info-para ck-nepali">
                        <p>अब सबै समाचार छोटकरीमा</p>
                    </div>
                </div>
            </div>
        </>
    )
}