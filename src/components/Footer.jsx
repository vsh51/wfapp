import React from 'react'
import './css/footer.css'

function Footer() {
    return (
        <footer>
            <div className="flex_container">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/3d">Three days forecast</a>
                    <a href='/7d'>Secen days forecast</a>
                    <a href="/14d">Fourteen days forecast</a>
                </div>
                <div className="information">
                    <p>
                        The current verion works with <a href="https://www.weatherapi.com">https://www.weatherapi.com</a> API
                        and requires API key. The API key which is used in this version allow to query weather forecast for only
                        three days. Trial subscription to the weather service let us use 14-days forecast. Make sure to gain valid
                        API key to use application.
                    </p>
                </div>
            </div>
            <div className="rights">
                <span>© 2024 vsh51. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer