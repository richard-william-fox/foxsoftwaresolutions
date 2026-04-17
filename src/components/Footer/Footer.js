import './Footer.css'
import ghIcon from './gh.png'
import liIcon from './li.png'

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <div id="socialLinks">
                    <a href="https://www.linkedin.com/in/richard-fox-a46397a5/">
                        <img src={liIcon} />
                    </a>
                    <a href="https://github.com/richard-william-fox">
                        <img src={ghIcon} />
                    </a>
                </div>
                <div id="copyright">
                    <p>&copy; Fox Software Solutions</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
