import './Resources.css';

const Resources = () => {
    const resources = [
        { title: 'Product One-Pagers', type: 'Flyers', link: '#' },
        { title: 'Technical Datasheets', type: 'TDS & Reports', link: '#' },
        { title: 'Compliance Guidelines', type: 'Documentation', link: '#' },
        { title: 'Discussion Topics', type: 'Blog/Forum', link: '#' }
    ];

    return (
        <section className="resources section section-light" id="resources">
            <div className="container">
                <div className="section-header">
                    <h2><span className="text-green">Resources</span></h2>
                    <p>Knowledge and technical information</p>
                </div>

                <div className="resources__list">
                    {resources.map((res, index) => (
                        <a key={index} href={res.link} className="resources__item">
                            <span className="resources__type">{res.type}</span>
                            <span className="resources__title">{res.title}</span>
                            <span className="resources__arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
