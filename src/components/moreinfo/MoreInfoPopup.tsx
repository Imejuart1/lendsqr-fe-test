import React, { useEffect } from 'react';
import './MoreInfoPopup.scss';

interface MoreInfoPopupProps {
  user: any;
  onClose: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
  positionX: number;
  positionY: number;
}

const MoreInfoPopup: React.FC<MoreInfoPopupProps> = ({ user, onClose, onBlacklist, onActivate, positionX, positionY }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.more-info-popup')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="more-info-popup" style={{ top: positionY, left: positionX, position: 'absolute' }}>
      <div className="popup-content">
        <div className="popup-option" onClick={onClose}>
          <img src='images/view.svg' alt="View Icon" />
          <span>View Details</span>
        </div>
        <div className="popup-option" onClick={onBlacklist}>
          <img src='images/Blacklist.svg' alt="Blacklist Icon" />
          <span>Blacklist User</span>
        </div>
        <div className="popup-option" onClick={onActivate}>
          <img src='images/Activate.svg' alt="Activate Icon" />
          <span>Activate User</span>
        </div>

      </div>
    </div>
  );
};

export default MoreInfoPopup;
