import React from "react"
import Header from "../components/header/header"
import Values from "../components/values/values"
import Contact from "../components/contact/contact"
import About from "../components/about/about"
import Footer from "../components/footer/footer"

export default () => (
    <div>
        <Header />
        <div className="w3-content w3-padding" id="home">
            <About/>
            <Values/>
            <Contact/>
        </div>
        <Footer/>
    </div>
)
