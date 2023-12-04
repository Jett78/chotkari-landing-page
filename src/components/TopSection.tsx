
import { FaArrowRight } from "react-icons/fa";
import './styles/topContainer.css'
export default function TopContainer() {
    return (
        <>
            <div className="text-center mt-8 ck-main-info">
                <h1 className=" font-bold tracking-tight text-white sm:text-6xl">
                    Welcome to Chotkari
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                    A powerful tool to enhance and amplify your reading experience.
                </p>
                <br />
                <br />
                <div className="button-container">
                    <button className="my-button">
                        Join Waitlist <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="ck-info-video-section">
                <div className="ck-info-para">
                    <p>Everything in Short</p>
                </div>

                <div className="ck-info-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z3pb2TNoEsc?si=oMIChl_NTOia2I95&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="ck-info-para">
                    <p>अब सबै समाचार छोटकरीमा</p>
                </div>
            </div>

        </>
    )
}