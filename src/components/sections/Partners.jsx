import './Partners.css';

const Partners = () => {
    const partnerTypes = [
        { title: 'Research Collaborators', description: 'Institutions driving innovation', icon: '🔬' },
        { title: 'Pilot Partners / Farmers', description: 'Real-world validation partners', icon: '👨‍🌾' },
        { title: 'Government Engagements', description: 'Policy and compliance alignment', icon: '🏛️' },
        { title: 'Commercial Partners', description: 'Distribution and scaling', icon: '🤝' }
    ];

    return (
        <section className="partners section" id="partners">
            <div className="container">
                <div className="section-header">
                    <h2>Our <span className="text-green">Partners</span></h2>
                    <p>Collaborating for a better ecosystem</p>
                </div>

                <div className="partners__grid">
                    {partnerTypes.map((partner, index) => (
                        <div key={index} className="partners__card">
                            <div className="partners__icon">{partner.icon}</div>
                            <h3>{partner.title}</h3>
                            <p>{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
