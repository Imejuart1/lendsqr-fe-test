// MoreInfoPopup.tsx
import React from 'react';
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

  const handleViewDetails = () => {
    // Navigate to the user details page with the user object
    navigate(`/user-details/${user.USERNAME}`, { state: { user } });
  };

  return (
    <div className="more-info-popup" style={{ top: positionY, left: positionX, position: 'absolute' }}>
      <div className="popup-content">
        <div className="popup-option" onClick={handleViewDetails}>
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
