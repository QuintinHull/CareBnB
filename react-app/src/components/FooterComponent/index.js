import React from "react"
import "./FooterComponent.css"

const FooterComponent = () => {

    const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

    return (
        <div className="footer">
            <div className="image_container">
                <a href="https://github.com/mustafaomousa">
                    <img className="pic" src="https://avatars.githubusercontent.com/u/70066469?s=400&v=4"></img>
                </a>
                <a href="https://www.linkedin.com/in/mustafa-mousa-8b8053157/">
                    {<img className="pic" src={`${imagePath}/linkedIn.png`} alt="github logo"></img>}
                </a>
            </div>
            <div className="image_container">
                <a href="https://github.com/lanejohns">
                    <img className="pic" src="https://avatars.githubusercontent.com/u/67983315?s=400&u=b3585036a4be3bd5d5b6fa6e95fab5b180bfa4af&v=4"></img>
                </a>
                <a href="https://www.linkedin.com/in/lane-johns-8880b5121/">
                    {<img className="pic" src={`${imagePath}/linkedIn.png`} alt="github logo"></img>}
                </a>
            </div>
            <div className="the_developers">CareBnB Devs</div>
            <div className="image_container">
                <a href="https://github.com/QuintinHull">
                    <img className="pic" src="https://avatars2.githubusercontent.com/u/70037265?s=460&u=c4f09b24fc3acea13c4c81e5f0eef835bf54780b&v=4"></img>
                </a>
                <a href="https://www.linkedin.com/in/quintinhull92/">
                    {<img className="pic" src={`${imagePath}/linkedIn.png`} alt="github logo"></img>}
                </a>
            </div>
            <div className="image_container">
                <a href="https://github.com/Jummies">
                    <img className="pic" src="https://avatars.githubusercontent.com/u/74935506?s=400&u=c948c56b7e17b692ef7eb87d04ca46bfbad62c92&v=4" ></img>
                </a>
                <a href="https://www.linkedin.com/in/jung-park-7ab9501bb/">
                    {<img className="pic" src={`${imagePath}/linkedIn.png`} alt="github logo"></img>}
                </a>
            </div>
        </div>
    )
}

export default FooterComponent