
import { FaArrowRight } from "react-icons/fa";
import './styles/topContainer.css'
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
                    <button className="ck-join-button">
                        Join Waitlist <FaArrowRight />
                    </button>
                </div>

                <div className="ck-info-video-section">
                    <div className="ck-info-para ck-english">
                        <p>Everything in Short</p>
                    </div>

                    <div className="ck-info-video">
                        <iframe src="https://player.vimeo.com/video/891811069?&autoplay=1&loop=1" width="560" height="315" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
                    </div>
                    <div className="ck-info-para ck-nepali">
                        <p>अब सबै समाचार छोटकरीमा</p>
                    </div>
                </div>
            </div>
        </>
    )
}