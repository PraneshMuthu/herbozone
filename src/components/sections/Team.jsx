import { useState, useRef } from 'react';
import { teamMembers } from '../../data/team';
import Modal from '../ui/Modal';
import './Team.css';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 300;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const closeModal = () => setSelectedMember(null);

    return (
        <section className="team section section-light" id="team">
            <div className="container">
                <div className="section-header">
                    <h2>
                        Meet Our <span className="text-green">Team</span>
                    </h2>
                    <p>
                        The dedicated professionals behind HerboZone's success
                    </p>
                </div>

                <div className="team__carousel-wrapper">
                    <button
                        className="team__nav-btn team__nav-btn--prev"
                        onClick={() => scroll('left')}
                        aria-label="Previous member"
                    >
                        ←
                    </button>

                    <div className="team__carousel" ref={scrollContainerRef}>
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="team__card"
                                onClick={() => setSelectedMember(member)}
                            >
                                <div className="team__image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team__info">
                                    <h3 className="team__name">{member.name}</h3>
                                    <p className="team__role">{member.role}</p>
                                    <span className="team__more">Read Bio &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="team__nav-btn team__nav-btn--next"
                        onClick={() => scroll('right')}
                        aria-label="Next member"
                    >
                        →
                    </button>
                </div>
            </div>

            <Modal
                isOpen={!!selectedMember}
                title={selectedMember?.name}
                onClose={closeModal}
            >
                {!!selectedMember && (
                    <div className="team__modal-content">
                        <div className="team__modal-header">
                            <div className="team__modal-image">
                                <img src={selectedMember.image} alt={selectedMember.name} />
                            </div>
                            <div>
                                <h4 className="team__modal-role">{selectedMember.role}</h4>
                            </div>
                        </div>
                        <div className="team__modal-bio">
                            {selectedMember.bio.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Team;
