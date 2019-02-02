import React from "react"
import headerStyles from "./header.module.css"

export default () => (
    <div className={headerStyles["ev-header"]}>
        <div class="w3-top w3-hide-small">
            <div class="w3-bar w3-dark-two w3-wide w3-padding w3-card">
                <div class="w3-left">
                    <a href="#home" class="">
                        <img class="ev-image" src="images/ev-logo-color.svg" alt="EarthVectors"/>
                    </a>
                    <a href="#about" class="w3-bar-item w3-button">About</a>
                    <a href="#values" class="w3-bar-item w3-button">Values</a>
                    <a href="#contact" class="w3-bar-item w3-button">Connect</a>
                </div>
            </div>
        </div>
        <div class="w3-top w3-hide-medium w3-hide-large">
            <div class="w3-bar w3-dark-two w3-wide w3-padding w3-card">
                <div class="topnav" id="myTopnav">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#values">Values</a>
                    <a href="#contact">Contact</a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
)
