import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Technological Advancements",
            description: "We focus on cutting-edge R&D to deliver breakthrough solutions in aquaculture, agriculture, and animal care.",
            icon: "🔬"
        },
        {
            title: "Global Affiliations",
            description: "We collaborate with top specialists in construction, aquaculture, and poultry to ensure the best solutions.",
            icon: "🌐"
        },
        {
            title: "Melding Technology",
            description: "Integrating advanced technology with responsibly trained staff to offer top-quality technical support.",
            icon: "💻"
        },
        {
            title: "Technical Support",
            description: "Comprehensive technical service support is a key component of our solutions bouquet, ensuring success.",
            icon: "🎧"
        }
    ];

    return (
        <section className="why-choose section section-light" id="why-choose-us">
            <div className="container">
                <div className="why-choose__grid">
                    <div className="why-choose__content">
                        <h2 className="why-choose__title">
                            Why Choose <span className="text-green">Us</span>
                        </h2>
                        <p className="why-choose__description">
                            We help minimize the use of natural resources using Herbozone Lab Products.
                            Revitalizing aquaculture ponds, agricultural lands, and ensuring animal health
                            through sustainable inputs for soil, water, and animals.
                        </p>
                    </div>
                    <div className="why-choose__features">
                        {reasons.map((reason, index) => (
                            <div key={index} className="why-choose__card">
                                <div className="why-choose__card-icon">{reason.icon}</div>
                                <div className="why-choose__card-content">
                                    <h3 className="why-choose__card-title">{reason.title}</h3>
                                    <p className="why-choose__card-description">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
