import { ArrowRight } from 'lucide-react'
import './Blog.css'

const Blog = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Vigno Insights</h1>
                    <p className="page-subtitle">Latest news, technology trends, and updates from our team.</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    <div className="card blog-card">
                        <div className="blog-img-placeholder"></div>
                        <div className="blog-content">
                            <h3>Web HTML/HTTP Writing Data into File</h3>
                            <p>Learn about writing data into files using HTML and HTTP protocols.</p>
                            <a href="https://ramanapudi.blogspot.com/2013/02/web-htmlhttp-writing-data-into-file.html" target="_blank" rel="noopener noreferrer" className="read-more">
                                Read More <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                    {/* Add more blog placeholders if needed */}
                </div>
            </div>
        </div>
    )
}

export default Blog
