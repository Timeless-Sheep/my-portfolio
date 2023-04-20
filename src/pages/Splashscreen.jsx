import React from 'react'
import "../style/splashscreen.css";

const SplashScreen = () => {


    return (
        <div className="splash-screen">
            <div className="loader">
                <div className="waves"></div>
            </div>
            <div className="spinner"></div>
            <div>
                <p className='sp'>FLOW <span>MATIC</span></p>
            </div>
        </div>
    )
}

export default SplashScreen;