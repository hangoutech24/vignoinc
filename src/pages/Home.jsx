import { ArrowRight, CheckCircle, Globe, Award, Users, Server, FlaskConical, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            {/* Image Carousel */}
            <section className="carousel-section">
                <ImageCarousel 
                    images={[
                        {
                            url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
                            title: 'High-performance event platform',
                            description: 'Meaningful business information from events across enterprise to provide true, real-time intelligence'
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
                            title: 'IT SOLUTIONS',
                            description: 'We offer a wide range of Software development Services and IT SOLUTIONS'
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
                            title: 'CONSULTANCY SERVICES',
                            description: 'We offer a broad range of IT consulting and custom programming services'
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
                            title: 'CORPORATE IT TRAINING',
                            description: 'We offer Corporate IT Training in Various Technologies'
                        }
                    ]}
                    autoPlayInterval={5000}
                />
            </section>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title">Software Corporate Training & Consultancy Services</h1>
                    <p className="hero-subtitle">
                        Empowering businesses with top-tier IT solutions, corporate training, and strategic consultancy.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                        <Link to="/solutions" className="btn btn-secondary">Explore Solutions</Link>
                    </div>
                </div>
                <div className="hero-bg"></div>
            </section>

            {/* Corporate IT Training */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Corporate IT Training</h2>
                    <p className="section-subtitle">
                        Empower your team with world-class technical training delivered by industry experts.
                    </p>
                    <div className="grid grid-3">
                        <div className="card training-card">
                            <div className="card-icon"><Server size={32} /></div>
                            <h3>Technical Domains</h3>
                            <p>Master the latest technologies including Java, .NET, and Cloud Computing.</p>
                        </div>
                        <div className="card training-card">
                            <div className="card-icon"><Users size={32} /></div>
                            <h3>Soft Skills</h3>
                            <p>Leadership, communication, and project management certification programs.</p>
                        </div>
                        <div className="card training-card">
                            <div className="card-icon"><Award size={32} /></div>
                            <h3>Certification</h3>
                            <p>Get certified in major enterprise platforms and methodologies.</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/training" className="btn btn-primary">View Training Programs <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* Consultancy Services */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Consultancy Services</h2>
                    <p className="section-subtitle">
                        Strategic guidance to transform your business operations and technology infrastructure.
                    </p>
                    <div className="grid grid-4">
                        <div className="service-tile">
                            <h3>Strategy & Design</h3>
                            <p>Align IT with business goals.</p>
                        </div>
                        <div className="service-tile">
                            <h3>Cloud Migration</h3>
                            <p>Seamless transition to the cloud.</p>
                        </div>
                        <div className="service-tile">
                            <h3>Data Analytics</h3>
                            <p>Turn data into actionable insights.</p>
                        </div>
                        <div className="service-tile">
                            <h3>Cybersecurity</h3>
                            <p>Protect your enterprise assets.</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/services" className="btn btn-secondary">Explore Services</Link>
                    </div>
                </div>
            </section>

            {/* R&D and POC */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">R&D and POC for Vigno Inc</h2>
                    <p className="section-subtitle">
                        Innovation through research, development, and proof of concept solutions that drive business transformation.
                    </p>
                    <div className="grid grid-3">
                        <div className="card training-card">
                            <div className="card-icon"><FlaskConical size={32} /></div>
                            <h3>Research & Development</h3>
                            <p>Exploring cutting-edge technologies and innovative solutions to stay ahead of industry trends.</p>
                        </div>
                        <div className="card training-card">
                            <div className="card-icon"><Rocket size={32} /></div>
                            <h3>Proof of Concept</h3>
                            <p>Validate your ideas with rapid prototyping and comprehensive feasibility studies.</p>
                        </div>
                        <div className="card training-card">
                            <div className="card-icon"><Award size={32} /></div>
                            <h3>Innovation Labs</h3>
                            <p>Collaborative environment to experiment with new technologies and solutions.</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/rnd-poc" className="btn btn-primary">Explore R&D and POC <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* IT Solutions */}
            <section className="section bg-dark text-white">
                <div className="container">
                    <h2 className="section-title text-white">IT Solutions</h2>
                    <div className="grid grid-3">
                        <div className="solution-item">
                            <h3>Project Development</h3>
                            <p>End-to-end software development lifecycle management.</p>
                        </div>
                        <div className="solution-item">
                            <h3>Staff Augmentation</h3>
                            <p>Your own IT staff – just a phone call away.</p>
                        </div>
                        <div className="solution-item">
                            <h3>Managed Services</h3>
                            <p>More than just a response team, we are your partners.</p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/solutions" className="btn btn-primary">Discover Solutions</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Vigno */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Choose Vigno</h2>
                    <div className="grid grid-4">
                        <div className="feature-box">
                            <CheckCircle className="feature-icon" />
                            <h3>Expertise</h3>
                            <p>Decades of combined industry experience.</p>
                        </div>
                        <div className="feature-box">
                            <Globe className="feature-icon" />
                            <h3>Global Delivery</h3>
                            <p>Serving clients across continents.</p>
                        </div>
                        <div className="feature-box">
                            <Award className="feature-icon" />
                            <h3>Certified Trainers</h3>
                            <p>Learning from the best in the field.</p>
                        </div>
                        <div className="feature-box">
                            <Server className="feature-icon" />
                            <h3>End-to-End</h3>
                            <p>Complete IT lifecycle services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Ready to transform your business?</h2>
                    <p>Talk to our experts today and discover how we can help you achieve your goals.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Talk to our experts</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
