import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, title, children, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose?.();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal" role="dialog" aria-modal="true" aria-label={title || 'Dialog'}>
            <button className="modal__backdrop" onClick={onClose} aria-label="Close dialog" />
            <div className="modal__content" role="document">
                <div className="modal__header">
                    <h3 className="modal__title">{title}</h3>
                    <button className="modal__close" onClick={onClose} aria-label="Close">
                        ×
                    </button>
                </div>
                <div className="modal__body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
