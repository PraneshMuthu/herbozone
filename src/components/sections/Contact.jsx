import './Contact.css';

const Contact = () => {
    return (
        <section className="contact section section-dark" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get in <span className="text-green">Touch</span></h2>
                    <p>Partner with us for a sustainable future</p>
                </div>

                <div className="contact__grid">
                    <form className="contact__form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" className="form-control" required></textarea>
                        </div>
                        <button type="submit" className="btn btn--primary">Send Message</button>
                    </form>

                    <div className="contact__info">
                        <div className="contact__item">
                            <h3>Address</h3>
                            <p>HerboZone Bio-Solutions<br />123 Innovation Drive,<br />Tech Park, City - 560001</p>
                        </div>
                        <div className="contact__item">
                            <h3>Email</h3>
                            <p>info@herbozone.com</p>
                        </div>
                        <div className="contact__item">
                            <h3>Phone</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
