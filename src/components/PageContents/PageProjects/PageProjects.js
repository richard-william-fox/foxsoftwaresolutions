import './PageProjects.css'

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
                </ul>
                <p>Here are some of the projects I'm currently working on.</p>
            </div>
        </div>
    )
}

export default PageContent
