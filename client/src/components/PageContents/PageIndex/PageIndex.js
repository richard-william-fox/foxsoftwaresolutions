import './PageIndex.css'
import site from './cfc.jpeg'
import paypal from './cfc_paypal.jpeg'
import mongo from './mongo.jpeg'
import mail from './mail.jpeg'
import { Link } from 'react-router-dom'

const PageIndex = () => {
    return (
        <div id="index" className="mainWrapper">
            <div id="indexContent" className="mainContent">
                <p>
                    My name is Richard Fox and I'm a professional software
                    developer. I have over 15 years of experience in the
                    software industry including Quality Assurance, Development
                    and Management. I'm skilled in front and back end work in
                    multiple frameworks, including:
                </p>

                <div id="products">
                    <div className="product">
                        <p id="siteP">
                            Websites
                            <p className="smallP">
                                Professional websites for business or personal
                                use.
                            </p>
                            <img
                                className="productImage"
                                src={site}
                                alt=""
                            ></img>
                        </p>
                    </div>
                    <div className="product">
                        <p id="integrationP">
                            Integrations
                            <p className="smallP">
                                Integrations with other services such as Paypal
                                and Shippo.
                            </p>
                            <img
                                className="productImage"
                                src={paypal}
                                alt=""
                            ></img>
                        </p>
                    </div>
                    <div className="product">
                        <p id="dbP">
                            Database
                            <p className="smallP">
                                Custom SQL or NOSQL database.
                            </p>
                            <img
                                className="productImage"
                                src={mongo}
                                alt=""
                            ></img>
                        </p>
                    </div>
                    <div className="product">
                        <p id="mailP">
                            Hosting
                            <p className="smallP">Hosting and mail setup.</p>
                            <img
                                className="productImage"
                                src={mail}
                                alt=""
                            ></img>
                        </p>
                    </div>
                </div>

                <p className="smallP">
                    And more. Feel free to reach out for an estimate.
                    <Link to="/estimate"> Request an Estimate</Link>
                </p>

                <p>
                    I spent a large portion of my career working for RightNow
                    Technologies (later Oracle) but have also worked for smaller
                    companies. I'm currently providing services as a developer
                    for local businesses. If you have a business and would like
                    to expand your web prescense, or if you'd like a site for
                    any other purpose, please feel free to contact me.
                </p>
            </div>
        </div>
    )
}

export default PageIndex
