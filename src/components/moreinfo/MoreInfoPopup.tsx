import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoreInfoPopup.scss';

interface MoreInfoPopupProps {
  user: {
    USERNAME: string;
    EMAIL: string;
    'PHONE NUMBER': string;
  };
  onClose: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
  positionX: number;
  positionY: number;
}

const MoreInfoPopup: React.FC<MoreInfoPopupProps> = ({
  user,
  onClose,
  onBlacklist,
  onActivate,
  positionX,
  positionY,
}) => {
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = () => {
    navigate(`/user-details/${user.USERNAME}`, { state: { user } });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="more-info-popup"
      style={{ top: positionY, left: positionX, position: 'absolute' }}
      ref={popupRef}
    >
      <div className="popup-content">
        <div className="popup-option" onClick={handleViewDetails}>
          <img src='images/view.svg' alt="View Icon" />
          <span>View Details</span>
        </div>
        <div className="popup-option" onClick={onBlacklist}>
          <img src='images/blacklist.svg' alt="Blacklist Icon" />
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
