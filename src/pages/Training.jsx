import { useState } from 'react'
import { BookOpen, Award, Users, ChevronDown, ChevronUp } from 'lucide-react'
import './Training.css'

const Training = () => {
    const [activeTab, setActiveTab] = useState('WebSphere & WebLogic')

    const categories = [
        { title: 'Master Analytical Skills', icon: <BookOpen /> },
        { title: 'Communication & Leadership', icon: <Users /> },
        { title: 'Project Management', icon: <Award /> },
        { title: 'Technical Domains', icon: <BookOpen /> },
    ]

    const courseCatalog = {
        'WebSphere & WebLogic': ['WebSphere Admin', 'WebLogic Admin', 'JBoss Admin'],
        'QA / Testing': ['Manual Testing', 'Automation (Selenium)', 'Performance Testing (LoadRunner)'],
        'Data Warehousing': ['Informatica', 'Cognos', 'DataStage', 'Ab Initio'],
        'DBA': ['Oracle DBA', 'SQL Server DBA', 'DB2 DBA'],
        'Java Technologies': ['Core Java', 'Advanced Java', 'Spring', 'Hibernate'],
        'Mobile Technologies': ['iOS Development', 'Android Development'],
        'SAP': ['SAP FICO', 'SAP MM', 'SAP SD', 'SAP HR'],
        '.NET Technologies': ['C#', 'ASP.NET', 'VB.NET'],
        'Oracle HRMS': ['Oracle Apps Technical', 'Oracle Apps Functional']
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">IT Training at Vigno with Industry Experts</h1>
                    <p className="page-subtitle">Enhance your skills and advance your career.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <div>
                        <h2 className="section-title text-left">Training Philosophy</h2>
                        <p className="mb-3">
                            We believe in practical, hands-on training that prepares you for real-world challenges.
                            Our courses are designed by industry veterans who bring years of experience to the classroom.
                        </p>
                        <p>
                            Whether you are a beginner looking to start a career in IT or a professional seeking to upgrade your skills,
                            we have the right program for you.
                        </p>
                    </div>
                    <div className="training-philosophy-img">
                        {/* Placeholder for image */}
                        <div className="img-placeholder"></div>
                    </div>
                </div>
            </div>

            <div className="bg-light section">
                <div className="container">
                    <h2 className="section-title">Course Categories</h2>
                    <div className="grid grid-4">
                        {categories.map((cat, index) => (
                            <div key={index} className="card category-card">
                                <div className="cat-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container section">
                <h2 className="section-title">Detailed Course Catalog</h2>
                <div className="catalog-container">
                    <div className="catalog-sidebar">
                        {Object.keys(courseCatalog).map((key) => (
                            <button
                                key={key}
                                className={`catalog-tab ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                    <div className="catalog-content">
                        <h3>{activeTab}</h3>
                        <ul className="course-list">
                            {courseCatalog[activeTab].map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training
