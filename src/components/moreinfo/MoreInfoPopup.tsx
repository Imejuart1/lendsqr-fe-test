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
    const handleScroll = () => {
      if (popupRef.current) {
        const { top, left, bottom, right } = popupRef.current.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        
        // Check if any part of the popup is outside the viewport
        const isOutsideTop = top < 0;
        const isOutsideBottom = bottom > innerHeight;
        const isOutsideLeft = left < 0;
        const isOutsideRight = right > innerWidth;

        // If any part is outside, adjust the position
        if (isOutsideTop || isOutsideBottom || isOutsideLeft || isOutsideRight) {
          const newY = isOutsideTop ? window.scrollY : positionY;
          const newX = isOutsideLeft ? window.scrollX : positionX;
          
          popupRef.current.style.top = `${newY}px`;
          popupRef.current.style.left = `${newX}px`;
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [positionX, positionY]);

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
      
