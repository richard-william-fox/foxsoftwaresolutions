import './PageContainer.css'

import Banner from '../Banner/Banner'
import NavBar from '../NavBar/NavBar'
import PageIndex from '../PageContents/PageIndex/PageIndex'
import PageWork from '../PageContents/PageWork/PageWork'
import PageContact from '../PageContents/PageContact/PageContact'
import PageProjects from '../PageContents/PageProjects/PageProjects'
import Footer from '../Footer/Footer'

const PageContainer = ({ pageName }) => {
    if (pageName == 'home') {
        return (
            <section>
                <Banner />
                <div id="indexPage" className="pageFlex">
                    <NavBar />
                    <PageIndex />
                </div>
                <Footer />
            </section>
        )
    } else if (pageName == 'work') {
        return (
            <section>
                <Banner />
                <div id="workPage" className="pageFlex">
                    <NavBar />
                    <PageWork />
                </div>
                <Footer />
            </section>
        )
    } else if (pageName == 'contact') {
        return (
            <section>
                <Banner />
                <div id="contactPage" className="pageFlex">
                    <NavBar />
                    <PageContact />
                </div>
                <Footer />
            </section>
        )
    } else if (pageName == 'projects') {
        return (
            <section>
                <Banner />
                <div id="projectsPage" className="pageFlex">
                    <NavBar />
                    <PageProjects />
                </div>
                <Footer />
            </section>
        )
    }
}

export default PageContainer
