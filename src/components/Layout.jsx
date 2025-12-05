import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import vignoLogo from '../assets/vigno-logo.png'
import vignoIcon from '../assets/vigno-icon.png'
import './Layout.css'

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsMenuOpen(false)
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="app-container">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <img src={vignoIcon} alt="Vigno Icon" className="logo-icon" />
                        <img src={vignoLogo} alt="Vigno Inc. - Software Corporate Training & Consultancy services" className="logo-img" />
                    </Link>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <Link to="/" className="nav-link">Home</Link>
                        <div className="nav-item-dropdown">
                            <Link to="/solutions" className="nav-link">Solutions <ChevronDown size={14} /></Link>
                            {/* Dropdown content could be added here if needed, keeping it simple for now */}
                        </div>
                        <div className="nav-item-dropdown">
                            <Link to="/services" className="nav-link">Services <ChevronDown size={14} /></Link>
                        </div>
                        <div className="nav-item-dropdown">
                            <Link to="/training" className="nav-link">Training <ChevronDown size={14} /></Link>
                        </div>
                        <Link to="/rnd-poc" className="nav-link">R&D & POC</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/careers" className="nav-link">Careers</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/contact" className="btn btn-primary nav-cta">Contact Us</Link>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-logo">
                                <img src={vignoIcon} alt="Vigno Icon" className="footer-logo-icon" />
                                <img src={vignoLogo} alt="Vigno Inc. - Software Corporate Training & Consultancy services" className="footer-logo-img" />
                            </div>
                            <p className="footer-desc">
                                Premier provider of software corporate training and consultancy services.
                                Empowering enterprises with cutting-edge IT solutions and expert guidance.
                            </p>
                            <div className="social-icons">
                                <a href="#"><Linkedin size={20} /></a>
                                <a href="#"><Twitter size={20} /></a>
                                <a href="#"><Facebook size={20} /></a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/solutions">Solutions</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/training">Training</Link></li>
                                <li><Link to="/rnd-poc">R&D and POC</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/services">Analytics</Link></li>
                                <li><Link to="/services">Cloud Computing</Link></li>
                                <li><Link to="/services">DevOps</Link></li>
                                <li><Link to="/services">Security</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul className="contact-list">
                                <li><MapPin size={16} /> 2613 Bucer Ct, McKinney TX 75071</li>
                                <li><Phone size={16} /> 469-420-0462</li>
                                <li><Mail size={16} /> hr@vignoinc.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Vigno Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
