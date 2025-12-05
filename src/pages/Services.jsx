import { Database, Cloud, Shield, Smartphone, Globe, Layers, BarChart, Server, Briefcase, Code } from 'lucide-react'
import './Services.css'

const Services = () => {
    const enterpriseSolutions = [
        { icon: <BarChart />, title: 'Analytics', desc: 'Data-driven insights for better decision making.' },
        { icon: <Briefcase />, title: 'Asset Management', desc: 'Optimize your IT asset lifecycle.' },
        { icon: <Database />, title: 'Big Data', desc: 'Handle massive datasets with ease.' },
        { icon: <Cloud />, title: 'Cloud Computing', desc: 'Scalable cloud infrastructure solutions.' },
        { icon: <Code />, title: 'DevOps', desc: 'Streamline development and operations.' },
        { icon: <Shield />, title: 'Security', desc: 'Robust cybersecurity measures.' },
        { icon: <Smartphone />, title: 'Mobile Enterprise', desc: 'Empower your mobile workforce.' },
        { icon: <Layers />, title: 'Virtualization', desc: 'Efficient resource utilization.' },
        { icon: <Globe />, title: 'Web Experience', desc: 'Engaging web applications.' },
    ]

    const itServices = [
        'Business Continuity',
        'Data Center',
        'Enterprise Mobility',
        'Strategy & Design',
        'Technical Support',
        'Outsourcing Services',
        'Application Management',
        'IT Infrastructure Services'
    ]

    const additionalServices = [
        'IT Services Financing',
        'Project Financing',
        'Working Capital'
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Vigno Spectrum of Information Technology Services</h1>
                    <p className="page-subtitle">Comprehensive IT services tailored to your business needs.</p>
                </div>
            </div>

            <div className="container section">
                <h2 className="section-title">Enterprise IT Solutions</h2>
                <div className="grid grid-3">
                    {enterpriseSolutions.map((item, index) => (
                        <div key={index} className="card service-card">
                            <div className="service-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-light section">
                <div className="container">
                    <h2 className="section-title">IT Services</h2>
                    <div className="grid grid-4">
                        {itServices.map((item, index) => (
                            <div key={index} className="card service-mini-card">
                                <Server size={24} className="text-primary mb-2" />
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container section">
                <h2 className="section-title">Additional Services</h2>
                <div className="grid grid-3">
                    {additionalServices.map((item, index) => (
                        <div key={index} className="card service-card text-center">
                            <h3>{item}</h3>
                            <p>Flexible financial solutions for your IT projects.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
