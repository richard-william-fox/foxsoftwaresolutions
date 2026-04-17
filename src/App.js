import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

//components
import PageContainer from './components/PageContainer/PageContainer'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageContainer pageName="home" />} />
                <Route
                    path="/work"
                    element={<PageContainer pageName="work" />}
                />
                <Route
                    path="/contact"
                    element={<PageContainer pageName="contact" />}
                />
                <Route
                    path="/projects"
                    element={<PageContainer pageName="projects" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
