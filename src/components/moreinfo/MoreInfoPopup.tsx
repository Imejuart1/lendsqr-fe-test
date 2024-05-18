import React, { useEffect, useRef, useState } from 'react';
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
  const [adjustedPositionX, setAdjustedPositionX] = useState(positionX);
  const [initialViewportWidth, setInitialViewportWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      const viewportWidthDifference = window.innerWidth - initialViewportWidth;
      setAdjustedPositionX(prevX => prevX + viewportWidthDifference);
      setInitialViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialViewportWidth]);

  const adjustedPositionY = positionY > 600 ? 600 : positionY;

  return (
    <div
      className="more-info-popup"
      style={{ top: adjustedPositionY, left: adjustedPositionX, position: 'absolute' }}
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
          <img src='images/activate.svg' alt="Activate Icon" />
          <span>Activate User</span>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoPopup;
