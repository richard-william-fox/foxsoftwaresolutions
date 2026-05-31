import { useState } from 'react'
import axios from 'axios'
import './PageEstimate.css'

const PageEstimate = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [sent, setSent] = useState('Click to request estimate')

    const requestEstimate = async () => {
        const res = await axios.post('/sendEstimateEmail', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            name: name,
            email: email,
            description: description,
        })

        if (res.status == 200) {
            setSent('Email sent.')
        } else {
            setSent('There was an error, please try again.')
        }
    }

    return (
        <div id="projects" className="mainWrapper">
            <div id="projectContent" className="mainContent">
                <div id="outerP">
                    Requeset an estimate
                    <p>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />
                    </p>
                    <p>
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </p>
                    <p>
                        Description of project:
                        <textarea
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value)
                            }}
                        />
                    </p>
                    <p>
                        <button
                            type="button"
                            onClick={() => {
                                requestEstimate()
                            }}
                        >
                        Request Estimate
                    </button>
                    {sent}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PageEstimate
