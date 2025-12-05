import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Solutions.css'

const Solutions = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Reshape your Enterprise with Vigno Expert Solutions</h1>
                    <p className="page-subtitle">Innovative solutions for complex business challenges.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div className="solution-card">
                        <div className="solution-icon">
                            <Check size={32} />
                        </div>
                        <div className="solution-content">
                            <h3>Project Development & Management</h3>
                            <p>
                                We handle the entire software development lifecycle, from initial concept to final deployment and maintenance.
                                Our agile methodologies ensure timely delivery and high-quality results.
                            </p>
                        </div>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <Check size={32} />
                        </div>
                        <div className="solution-content">
                            <h3>Your Own IT Staff</h3>
                            <p>
                                Just a phone call away. We provide dedicated IT professionals who integrate seamlessly with your team,
                                giving you the flexibility to scale up or down as needed without the overhead of hiring.
                            </p>
                        </div>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <Check size={32} />
                        </div>
                        <div className="solution-content">
                            <h3>Your Own Project Manager</h3>
                            <p>
                                Experienced project managers to lead your initiatives. We ensure your projects stay on track,
                                within budget, and meet all business objectives.
                            </p>
                        </div>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <Check size={32} />
                        </div>
                        <div className="solution-content">
                            <h3>More Than a Response Team</h3>
                            <p>
                                We are proactive partners in your success. Beyond fixing issues, we identify opportunities for improvement
                                and help you leverage technology for strategic advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light section">
                <div className="container text-center">
                    <h2>Ready to get started?</h2>
                    <p className="mb-3">Contact us to discuss your specific needs.</p>
                    <Link to="/contact" className="btn btn-primary">Get in Touch <ArrowRight size={16} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Solutions
