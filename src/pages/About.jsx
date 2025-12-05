import { Target, Globe, Users, Award } from 'lucide-react'
import './About.css'

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About Vigno Inc</h1>
                    <p className="page-subtitle">A global leader in enterprise IT solutions and training.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div>
                        <h2 className="section-title text-left">Who We Are</h2>
                        <p className="mb-3">
                            Vigno Inc is a premier IT solutions provider dedicated to helping enterprises transform their business
                            through technology. With a focus on innovation and excellence, we deliver high-performance solutions
                            that drive real business value.
                        </p>
                        <p>
                            Our team of experts brings deep industry knowledge and technical expertise to every project, ensuring
                            that our clients stay ahead in a rapidly evolving digital landscape.
                        </p>
                    </div>
                    <div className="about-img-placeholder"></div>
                </div>
            </div>

            <div className="bg-light section">
                <div className="container">
                    <h2 className="section-title">Our Mission</h2>
                    <div className="mission-content text-center max-w-800 mx-auto">
                        <p className="mission-text">
                            "To empower businesses with cutting-edge technology solutions and world-class training, enabling them to achieve their full potential."
                        </p>
                    </div>
                </div>
            </div>

            <div className="container section">
                <h2 className="section-title">Why Vigno?</h2>
                <div className="grid grid-4">
                    <div className="card about-card">
                        <Target className="about-icon" />
                        <h3>Client Focus</h3>
                        <p>We prioritize long-term client success over short-term gains.</p>
                    </div>
                    <div className="card about-card">
                        <Award className="about-icon" />
                        <h3>IT Expertise</h3>
                        <p>Deep technical knowledge across a wide range of domains.</p>
                    </div>
                    <div className="card about-card">
                        <Users className="about-icon" />
                        <h3>Global Team</h3>
                        <p>A diverse team of professionals from around the world.</p>
                    </div>
                    <div className="card about-card">
                        <Globe className="about-icon" />
                        <h3>Partnerships</h3>
                        <p>Strong alliances with leading technology providers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
