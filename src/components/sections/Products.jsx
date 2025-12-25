import { useState } from 'react';
import { products, productCategories } from '../../data/products';
import Modal from '../ui/Modal';
import './Products.css';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('herbalDyeing');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const closeModal = () => setSelectedProduct(null);

    return (
        <section className="products section section-light" id="solutions">
            <div className="container">
                <div className="section-header">
                    <h2>
                        Our <span className="text-green">Solutions</span>
                    </h2>
                    <p>
                        Innovative bioenzyme solutions for sustainable growth across industries
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="products__tabs">
                    {productCategories.map((category) => (
                        <button
                            key={category.id}
                            className={`products__tab ${activeCategory === category.id ? 'products__tab--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="products__tab-icon">{category.icon}</span>
                            <span className="products__tab-label">{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Product Cards */}
                <div className="products__grid">
                    {products[activeCategory]?.map((product) => (
                        <div key={product.id} className="products__card">
                            <div className="products__card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="products__card-content">
                                <h3 className="products__card-title">{product.name}</h3>
                                <p className="products__card-description">{product.description}</p>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedProduct}
                title={selectedProduct?.name}
                onClose={closeModal}
            >
                {!!selectedProduct?.image && (
                    <div className="products__modal-hero">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                    </div>
                )}

                {!!selectedProduct?.description && (
                    <p className="products__modal-description">{selectedProduct.description}</p>
                )}

                {!!selectedProduct?.advantages?.length && (
                    <div className="products__modal-section">
                        <h4 className="products__modal-heading">Advantages</h4>
                        <ul className="products__modal-list">
                            {selectedProduct.advantages.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {!!selectedProduct?.benefits?.length && (
                    <div className="products__modal-section">
                        <h4 className="products__modal-heading">Benefits</h4>
                        <ul className="products__modal-list">
                            {selectedProduct.benefits.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {!!selectedProduct?.composition && (
                    <div className="products__modal-section">
                        <h4 className="products__modal-heading">Composition</h4>
                        <p className="products__modal-text">{selectedProduct.composition}</p>
                    </div>
                )}

                {!!selectedProduct?.dosage && (
                    <div className="products__modal-section">
                        <h4 className="products__modal-heading">Dosage</h4>
                        <p className="products__modal-text">{selectedProduct.dosage}</p>
                    </div>
                )}

                <div className="products__modal-actions">
                    <a href="#contact" className="btn btn-primary" onClick={closeModal}>
                        Contact Us
                    </a>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </Modal>
        </section>
    );
};

export default Products;
