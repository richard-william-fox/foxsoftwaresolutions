import './PageContact.css'

const PageContent = () => {
    return (
        <div id="contact" className="mainWrapper">
            <div id="contactContent" className="mainContent">
                <p>Feel free to reach out by phone or email</p>
                <ul id="contactList">
                    <p>
                        Phone:
                        <li>406-581-3143</li>
                    </p>
                    <p>
                        Email:
                        <li>
                            <a href="mailto:richard.fox@foxsoftwaresolutions.org">
                                richard.fox@foxsoftwaresolutions.org
                            </a>
                        </li>
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default PageContent
