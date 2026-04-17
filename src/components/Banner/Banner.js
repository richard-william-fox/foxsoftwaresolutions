import logo from './logo.gif'
import './Banner.css'

const Banner = () => {
    return (
        <div id="headerContent">
            <div id="headerImg">
                <img src={logo} />
            </div>
            <div id="headerTxt">
                <p>Fox Software Solutions</p>
                <p>Richard Fox</p>
            </div>
        </div>
    )
}

export default Banner
