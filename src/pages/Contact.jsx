import { MapPin, Phone, Mail, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">We'd love to hear from you. Get in touch with our team.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2 contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="mb-4">
                            Have a question about our services or want to discuss a project?
                            Reach out to us and we'll get back to you within 48 business hours.
                        </p>

                        <div className="info-item">
                            <div className="info-icon"><MapPin /></div>
                            <div>
                                <h3>Address</h3>
                                <p>2613 Bucer Ct, McKinney TX 75071</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Phone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>Tel: 469-420-0462</p>

                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon"><Mail /></div>
                            <div>
                                <h3>Email</h3>
                                <p>hr@vignoinc.com</p>
                                <p>accounts@vignoinc.com</p>
                            </div>
                        </div>

                        <div className="map-placeholder mt-4">
                            {/* Map placeholder */}
                            <div className="map-bg">Map Placeholder</div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
