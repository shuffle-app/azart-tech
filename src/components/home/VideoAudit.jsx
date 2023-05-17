import s from '@/styles/main/VideoAudit.module.css';
import { useState } from 'react';
import { ContactPopup } from '../common/ContactPopup/ContactPopup';
import { createPortal } from 'react-dom';

const VideoAudit = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={`${s.video_audit}`}>
      <div className={s.section_header}>
        <h1>Video audit of the UI system</h1>
        <button className={s.free}>free</button>
      </div>
      <div className={s.main}>
        <p>
          this is a video analysis of interface types. Useful material that you
          can also get individually by filling out the form
        </p>
        <div className={s.video_play}></div>
        <button className={s.order_btn} onClick={() => setShowForm(true)}>
          Order an audit
        </button>
        {/* <div className={s.glow}></div> */}
        <img className={s.img1} src="./assets/images/ш2 (1).png" alt="" />
        <img className={s.img2} src="./assets/images/ш6.png" alt="" />
      </div>

      <div className={s.glow2}></div>

      {showForm &&
        createPortal(
          <ContactPopup handleBackClick={() => setShowForm(false)} />,
          document.body
        )}
    </section>
  );
};

export default VideoAudit;
