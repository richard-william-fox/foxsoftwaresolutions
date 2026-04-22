import './PageIndex.css'

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
                <br />
                <br />
                <table>
                    <tr>
                        <th>Languages</th>
                        <th>Frameworks</th>
                        <th>Databases</th>
                        <th>APIs</th>
                        <th>CI/CD</th>
                        <th>Cloud Services</th>
                    </tr>
                    <tr>
                        <td>NodeJS</td>
                        <td>Express, Mongoose</td>
                        <td>MySQL</td>
                        <td>REST</td>
                        <td>Github</td>
                        <td>Amazon Web Services</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>Flask, SQLAlchemy</td>
                        <td>PostgreSQL</td>
                        <td>SOAP</td>
                        <td>Jenkins</td>
                        <td>Oracle Cloud Services</td>
                    </tr>
                    <tr>
                        <td>PHP</td>
                        <td>Laravel, Eloquent</td>
                        <td>SQLite</td>
                        <td>XML</td>
                        <td>Docker</td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td>CodeIgniter</td>
                        <td>MongoDB</td>
                        <td>Rate Limiting</td>
                        <td>Kubernetes</td>
                    </tr>
                    <tr>
                        <td>C#</td>
                        <td>Spring</td>
                        <td>Migrations</td>
                        <td>Caching</td>
                        <td>Helm</td>
                    </tr>
                    <tr>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td>GO</td>
                    </tr>
                </table>
                <br />
                <br />
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
