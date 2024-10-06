import React from 'react';

interface IAlert extends React.PropsWithChildren {
    type: 'warning' | 'success' | 'primary' | 'danger';
    onDismiss?: () => void;
}

const Alert: React.FC<IAlert> = ({ type, onDismiss, children }) => {
    const alertType = `alert alert-${type}`;

    const handleDismiss = () => {
        if (onDismiss) {
            onDismiss();
        }
    };

    return (
        <div className={alertType} role="alert">
            {children}
            {onDismiss && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleDismiss}
                    style={{ float: 'right', marginLeft: '10px' }}
                />
            )}
        </div>
    );
};

export default Alert;
