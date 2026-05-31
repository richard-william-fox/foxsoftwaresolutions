import { useState } from 'react'
import axios from 'axios'
import './PageEstimate.css'

const PageEstimate = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const requestEstimate = () => {
        axios.post('/endEstimateEmail', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            name: name,
            email: email,
            description: description,
        })
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
                    <button
                        type="button"
                        onClick={() => {
                            requestEstimate()
                        }}
                    >
                        Request Estimate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageEstimate
