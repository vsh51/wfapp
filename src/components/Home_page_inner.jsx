import React from 'react'
import './css/home_page_inner.css'

function Home_page_inner() {
    return (
        <div className="wellcome">
            <h1 className="wellcome__title">Your Day, Bright or Gray: <br /> Know Before You Go!</h1>
            <div className="blob">
                <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <path fill="rgba(255,255,255,0.45)" d="M349.5,283.5Q359,327,332,384Q305,441,
                        250.5,407.5Q196,374,182.5,333Q169,292,125.5,266Q82,240,104.5,199Q127,158,
                        149,93.5Q171,29,223,80Q275,131,287.5,164Q300,197,320,218.5Q340,240,349.5,283.5Z" />
                </svg>
            </div>
        </div>
    )
}

export default Home_page_inner