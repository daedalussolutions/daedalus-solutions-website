import * as React from "react";
import logo from "../assets/images/transistor-white.png"

function Home() {
    return (
        <div className="Home">
            <div className="home-container">
                <div className="front-page-text">
                    <h1>Daedalus<br/>Solutions</h1>
                    <h2>Professional, modern development.</h2>
                </div>
                <div>
                    <img src={logo} className="front-page-logo" height={600} />
                </div>
            </div>
        </div>
    );
}

export default Home;