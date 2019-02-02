import React from "react"

export default () => (
    <div className="w3-container w3-padding-32 w3-dark-two" id="contact">
        <div className="w3-row">
            <div className="w3-col s0 m3 l4"></div>
            <div className="w3-col s12 m3 l4">
                <h2 className="w3-padding-16 w3-text-health-blue ev-connect-h2">Connect</h2>
                <form action="/action_page.php" target="_blank">
                    <label className="w3-text-health-blue ev-connect-label w3-padding-16"
                           htmlFor="nameForm">Name</label>
                    <input className="w3-input w3-section w3-border-0 w3-dark w3-text-white" type="text"
                           placeholder="Name" required name="Name" id="nameForm"/>
                    <label className="w3-text-health-blue ev-connect-label w3-margin-top"
                           htmlFor="emailForm">Email</label>
                    <input className="w3-input w3-section w3-border-0 w3-dark" type="email" placeholder="Email"
                           required
                           name="Email" id="emailForm"/>
                    <label className="w3-text-health-blue ev-connect-label"
                           htmlFor="messageForm">Message</label>
                    <textarea className="w3-input w3-section w3-border-0 w3-dark" type="text"
                              placeholder="Personal message..." required
                              name="Subject" id="messageForm"></textarea>
                    <button className="w3-button w3-black w3-section w3-code-green w3-text-white" type="submit">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    </div>
)