import './Impact.css';

const Impact = () => {
    const metrics = [
        { label: 'Increase in Crop Yield', value: '0%', icon: '🌾' },
        { label: 'Decrease in Chemical Load', value: '0%', icon: '📉' },
        { label: 'Decrease in Cement Addition', value: '0%', icon: '🏗️' },
        { label: 'Emission Reduction', value: '0%', icon: '🌱' }
    ];

    return (
        <section className="impact section section-dark" id="impact">
            <div className="container">
                <div className="section-header">
                    <h2>Our <span className="text-green">Impact</span></h2>
                    <p>Measuring our contribution to a sustainable future</p>
                </div>

                <div className="impact__grid">
                    {metrics.map((metric, index) => (
                        <div key={index} className="impact__card">
                            <div className="impact__icon">{metric.icon}</div>
                            <h3 className="impact__value">{metric.value}</h3>
                            <p className="impact__label">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
