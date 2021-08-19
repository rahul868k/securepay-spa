import React, { useState } from 'react'
import { Data } from './Api/Workapi'

const About = () => {

    const [data, setData] = useState(Data)
    return (
        <>
        {/* one */}
            <section className="section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center our-service-left">
                            <img src="./images/hero3.png" alt="about" className="image-fluid" />
                        </div>
                        <div className="col-12 col-lg-7 our-service-list">
                            <h3 className="mini-title">
                                -- Available in both app and play store
                            </h3>
                            <h1 className="about-heading">How does a Payment App Work?</h1>
                            {
                                data.map((data, index) => {
                                    const { number,heading, para } = data;
                                    return (
                                        <div className="row our-services-info" key={index}>
                                            <div className="col-1 our-services-number">{number}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{heading}</h2>
                                                <p className="about-para">{para}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="row our-services-info">
                                <div className="col-1 our-services-number">1</div>
                                <div className="col-10 our-services-data">
                                    <h2>Sign Up</h2>
                                    <p className="about-para">Registered users will input their phone number and the provider will send them an SMS along with a PIN The user will enter the received PIN, authenticating the number Now the user has to input their credit card information or another payment method if required (not required if the account has already been added) and will proceed to validate the payments</p>
                                </div>
                            </div> */}
                            {/* <ol className="our-services-info">
                                <li className="our-services-data"><h2>Sign up</h2></li>
                                <p className="about-para">Registered users will input their phone number and the provider will send them an SMS along with a PIN The user will enter the received PIN, authenticating the number Now the user has to input their credit card information or another payment method if required (not required if the account has already been added) and will proceed to validate the payments</p>
                                <li className="our-services-data"><h2>Benefits of Payment Apps & e-wallets</h2></li>
                                <p className="about-para">The best advantage of using a payment app is customer convenience as they will be able to make payments using their mobile phones either using the contactless payments or by scanning QR code instantly.hese apps use a technology which is called as Near – Field Communication (NFC) all you have to do is to tap or wave your phone to make payments at the point of service (POS) terminal.</p>
                                <li className="our-services-data"><h2>Features of E-Wallets</h2></li>
                                <p className="about-para">The money transfer between the payer wallet and the payee wallet will happen within a matter of a few seconds, instead of hours or business days in an e wallet account.The emerging technology has helped the e wallet app to store the user’s credit or debit card data, which can be used to make money transactions at any time from anywhere across the globe.</p>
                            </ol> */}
                            <br />
                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>

                    </div>
                </div>
            </section>

            {/* two */}
            <section className="section our-services">
                <div className="container mb-5">
                    <div className="row d-lg-flex flex-lg-row flex-lg-row-reverse reverse">
                        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center our-service-left">
                            <img src="./images/hero4.jpg" alt="about" className="image-fluid" />
                        </div>
                        <div className="col-12 col-lg-7 our-service-list">
                            <h3 className="mini-title">
                                -- Supports in all languages
                            </h3>
                            <h1 className="about-heading">24/7 Customer support</h1>
                            {
                                data.map((data, index) => {
                                    const { number,heading, para } = data;
                                    return (
                                        <div className="row our-services-info" key={index}>
                                            <div className="col-1 our-services-number">{number}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{heading}</h2>
                                                <p className="about-para">{para}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                             <br />
                            <button className="btn-style btn-style-border">Learn more</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
