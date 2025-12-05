import { Upload, Heart, Briefcase, Globe } from 'lucide-react'
import './Careers.css'

const Careers = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Grow Your Future with Vigno Inc</h1>
                    <p className="page-subtitle">Join a team of innovators and problem solvers.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div>
                        <h2 className="section-title text-left">Company Culture</h2>
                        <p className="mb-3">
                            At Vigno, we foster a culture of continuous learning and innovation. We believe in empowering our employees
                            to take ownership of their work and drive meaningful change.
                        </p>
                        <p>
                            We value diversity, collaboration, and work-life balance. Our team is our greatest asset, and we invest
                            heavily in their growth and development.
                        </p>
                    </div>
                    <div className="culture-img-placeholder"></div>
                </div>
            </div>

            <div className="bg-light section">
                <div className="container">
                    <h2 className="section-title">Why Join Us?</h2>
                    <div className="grid grid-3">
                        <div className="card benefit-card">
                            <Heart className="benefit-icon" />
                            <h3>Great Benefits</h3>
                            <p>Comprehensive health insurance, retirement plans, and paid time off.</p>
                        </div>
                        <div className="card benefit-card">
                            <Briefcase className="benefit-icon" />
                            <h3>Career Growth</h3>
                            <p>Clear career paths, mentorship programs, and training opportunities.</p>
                        </div>
                        <div className="card benefit-card">
                            <Globe className="benefit-icon" />
                            <h3>Global Impact</h3>
                            <p>Work on projects that touch millions of lives around the world.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="recruitment-process">
                    <h2 className="section-title">Recruitment Process</h2>
                    <div className="process-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Apply</h3>
                            <p>Submit your resume online.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Screening</h3>
                            <p>Initial phone interview.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Interview</h3>
                            <p>Technical and behavioral rounds.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <h3>Offer</h3>
                            <p>Welcome to the team!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark text-white section text-center">
                <div className="container">
                    <h2 className="text-white mb-3">No vacancies? We’ll keep your resume.</h2>
                    <p className="mb-4 opacity-80">
                        We are always looking for talent. Send us your resume and we'll contact you when a suitable position opens up.
                    </p>
                    <button className="btn btn-primary btn-lg">
                        <Upload size={20} style={{ marginRight: '8px' }} /> Upload Resume
                    </button>
                    <div className="mt-4">
                        <p className="text-sm opacity-60">
                            Note for international applicants: We welcome global talent!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
