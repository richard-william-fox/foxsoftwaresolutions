import './PageProjects.css'
import monster from './08_monster_redux.png'
import lilGuy from './09_new_lil_guy_v1.png'
import logoImg from './logo.png'
import furnace from './wip_anim.gif'

const PageContent = ({ pageName }) => {
    return (
        <div id="projects" className="mainWrapper">
            <div id="projectContent" className="mainContent">
                <p>Projects and Cohorts</p>
                <ul>
                    <li>
                        <a href="https://clairefoxcreations.store">
                            Claire Fox Creations
                        </a>
                    </li>
                    <ul class="innerList">
                        <li>
                            <a href="https://github.com/richard-william-fox/claireart">
                                Github repo.
                            </a>
                        </li>
                    </ul>
                    <li>
                        The{' '}
                        <a href="https://tabletopsupercrew.net">
                            Tabletop Super Crew
                        </a>
                    </li>
                    <ul class="innerList">
                        <li>
                            <a href="https://github.com/richard-william-fox/ttsg-web-server">
                                Github repo.
                            </a>
                        </li>
                    </ul>
                    <li>
                        A site dedicated to{' '}
                        <a href="https://normanafox.com">Norman Fox</a>
                    </li>
                    <li>Pixel Art</li>
                    <div id="pixelArts">
                        <img src={monster} alt="" />
                        <img src={lilGuy} style={{ height: '20px' }} alt="" />
                        <img src={logoImg} alt="" />
                        <img src={furnace} alt="" />
                    </div>
                </ul>
                <p>Here are some of the projects I'm currently working on.</p>
            </div>
        </div>
    )
}

export default PageContent
