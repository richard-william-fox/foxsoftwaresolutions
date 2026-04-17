import resume from './resume.docx'
import './PageWork.css'

const PageWork = ({ pageName }) => {
    return (
        <div id="index" className="mainWrapper">
            <div id="indexContent" className="mainContent">
                <p>Work History</p>
                <ul>
                    <li>02/2019 - Present : Fox Software Solutions</li>
                    <li>
                        06/2022 - 11/2023 : Engineering Manager, Soaren
                        Management
                    </li>
                    <li>
                        10/2021 - 06/2022 : Integration Engineer, Soaren
                        Management
                    </li>
                    <li>
                        07/2013 - 10/2021 : Senior/Principal Applications
                        Engineer, Oracle Corp.
                    </li>
                    <li>
                        07/2010 - 07/2013 : Quality Assurance Engineer, Oracle
                        Corp.
                    </li>
                </ul>
                <br />
                <br />
                <p>Education and Trainings</p>
                <ul>
                    <li>
                        B.S. Computer Science, Montana State University
                        (Bozeman) : May 2009
                    </li>
                    <li>REST APIs with Flask and Python</li>
                    <li>
                        Docker Mastery: The Complete Toolset From a Docker
                        Captain
                    </li>
                    <li>The Complete Node.js Developer Course</li>
                    <li>
                        Management Skills Training for New and Experienced
                        Managers
                    </li>
                    <li>
                        PHP 8 REST API: Laravel 8, MySQL, Oath2, JWT, Role-Based
                    </li>
                    <li>React – The Complete Guide</li>
                    <li>
                        New Relic One: Observability From Beginner to Advanced
                    </li>
                    <li>GO: The Complete Developers Guide (Golang)</li>
                </ul>
                <p>
                    Download <a href={resume}>Resume</a>
                </p>
            </div>
        </div>
    )
}

export default PageWork
