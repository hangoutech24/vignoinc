import { FlaskConical, Lightbulb, Code, Target, Rocket, TrendingUp } from 'lucide-react'
import './RnDPOC.css'

const RnDPOC = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">R&D and POC for Vigno Inc</h1>
                    <p className="page-subtitle">Innovation through research, development, and proof of concept solutions.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div>
                        <h2 className="section-title text-left">Research & Development</h2>
                        <p className="mb-3">
                            At Vigno Inc, our Research & Development team is dedicated to exploring cutting-edge technologies
                            and innovative solutions that drive business transformation. We invest in continuous research to stay
                            ahead of industry trends and deliver next-generation solutions to our clients.
                        </p>
                        <p>
                            Our R&D initiatives focus on emerging technologies, best practices, and methodologies that can
                            revolutionize how businesses operate in the digital age.
                        </p>
                    </div>
                    <div className="rnd-img-placeholder">
                        <FlaskConical size={120} className="rnd-icon" />
                    </div>
                </div>
            </div>

            <div className="bg-light section">
                <div className="container">
                    <h2 className="section-title">Our R&D Focus Areas</h2>
                    <div className="grid grid-3">
                        <div className="card rnd-card">
                            <div className="card-icon"><Code size={32} /></div>
                            <h3>Emerging Technologies</h3>
                            <p>Exploring AI, Machine Learning, Blockchain, and IoT solutions.</p>
                        </div>
                        <div className="card rnd-card">
                            <div className="card-icon"><Target size={32} /></div>
                            <h3>Cloud Innovation</h3>
                            <p>Researching next-generation cloud architectures and serverless computing.</p>
                        </div>
                        <div className="card rnd-card">
                            <div className="card-icon"><Lightbulb size={32} /></div>
                            <h3>Digital Transformation</h3>
                            <p>Developing frameworks for enterprise digital transformation strategies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <h2 className="section-title">Proof of Concept (POC) Services</h2>
                    <p className="section-subtitle">
                        Validate your ideas before full-scale implementation with our comprehensive POC services.
                    </p>
                    <div className="grid grid-2">
                        <div className="poc-item">
                            <Rocket className="poc-icon" />
                            <h3>Rapid Prototyping</h3>
                            <p>Quickly build and test prototypes to validate concepts and reduce implementation risks.</p>
                        </div>
                        <div className="poc-item">
                            <TrendingUp className="poc-icon" />
                            <h3>Technology Validation</h3>
                            <p>Test new technologies and platforms to ensure they meet your business requirements.</p>
                        </div>
                        <div className="poc-item">
                            <Target className="poc-icon" />
                            <h3>Feasibility Studies</h3>
                            <p>Comprehensive analysis to determine the viability of your technology initiatives.</p>
                        </div>
                        <div className="poc-item">
                            <Lightbulb className="poc-icon" />
                            <h3>Innovation Labs</h3>
                            <p>Collaborative environment to experiment with new ideas and solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-dark text-white">
                <div className="container">
                    <h2 className="section-title text-white">Why Choose Our R&D and POC Services</h2>
                    <div className="grid grid-3">
                        <div className="feature-box">
                            <FlaskConical className="feature-icon" />
                            <h3>Expert Team</h3>
                            <p>Experienced researchers and developers with deep technical expertise.</p>
                        </div>
                        <div className="feature-box">
                            <Rocket className="feature-icon" />
                            <h3>Fast Delivery</h3>
                            <p>Rapid turnaround times for POC development and validation.</p>
                        </div>
                        <div className="feature-box">
                            <Lightbulb className="feature-icon" />
                            <h3>Innovation Focus</h3>
                            <p>Dedicated to exploring and implementing cutting-edge solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RnDPOC

