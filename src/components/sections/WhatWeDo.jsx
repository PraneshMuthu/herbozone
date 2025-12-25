import { services } from '../../data/services';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <section className="whatwedo section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>
                        What We <span className="text-green">Do?</span>
                    </h2>
                    <p>
                        Providing comprehensive solutions for sustainable agriculture and aquaculture
                    </p>
                </div>

                <div className="whatwedo__grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="whatwedo__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="whatwedo__icon">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h3 className="whatwedo__title">{service.title}</h3>
                            <p className="whatwedo__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
