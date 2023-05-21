import s from '@/styles/main/Zoom.module.css';

import zoomPic from '../../../public/assets/icons/zm.svg';
import Image from 'next/image';
import { useState } from 'react';
import { ContactPopup } from '../common/ContactPopup/ContactPopup';
import { createPortal } from 'react-dom';

const Zoom = ({ className }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className={`${s.zoom} ${className}`}>
        <div>
          <Image src={zoomPic} alt="people" />
          <p>Have a zoom meeting with an expert!</p>
        </div>
        <button className="active-btn" onClick={() => setShowForm(true)}>
          go zoom
        </button>
      </div>

      {showForm &&
        createPortal(
          <ContactPopup handleBackClick={() => setShowForm(false)} />,
          document.body
        )}
    </>
  );
};

export default Zoom;
