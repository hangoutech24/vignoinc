// Main JavaScript file for Vigno Inc website

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');

            // Toggle icon between menu and X
            const isOpen = mainNav.classList.contains('nav-open');
            if (isOpen) {
                mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });
    }

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize carousel if on home page
    const carouselContainer = document.getElementById('heroCarousel');
    if (carouselContainer) {
        const carouselImages = [
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
        ];

        new ImageCarousel('#heroCarousel', carouselImages, {
            autoPlayInterval: 5000
        });
    }

    // Initialize training page tabs if present
    initializeTrainingTabs();
});

// Training page tab functionality
function initializeTrainingTabs() {
    const catalogButtons = document.querySelectorAll('.catalog-tab');
    if (catalogButtons.length === 0) return;

    catalogButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            catalogButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get the category name
            const category = this.textContent.trim();

            // Update the content
            updateCatalogContent(category);
        });
    });
}

function updateCatalogContent(category) {
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
    };

    const catalogContent = document.querySelector('.catalog-content');
    if (!catalogContent) return;

    const courses = courseCatalog[category] || [];
    const coursesHTML = courses.map(course => `<li>${course}</li>`).join('');

    catalogContent.innerHTML = `
        <h3>${category}</h3>
        <ul class="course-list">
            ${coursesHTML}
        </ul>
    `;
}
