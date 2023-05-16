import Link from 'next/link';
import menuIcon from '../../../../public/assets/icons/menu-btn.svg';
import Image from 'next/image';
import styles from './Cookie.module.css';
import { useState } from 'react';

export const Cookie = () => {
  const [justAccepted, setJustAccepted] = useState(false);
  const acceptCookie = () => {
    setJustAccepted(true);
    window.localStorage.setItem('cookie', 'true');
  };

  if (justAccepted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking “Accept
        All”, you consent to the use of ALL the cookies. However, you may visit
        &apos;Cookie Settings&apos; to provide a controlled consent.
      </div>

      <div className={styles.controls}>
        <Link href="/privacy" target="_blank" className={styles.settings}>
          Cookie Settings
        </Link>

        <button className={styles.accept} onClick={acceptCookie}>
          Accept All
        </button>
      </div>

      <button className={styles.close} onClick={acceptCookie}>
        <Image src={menuIcon} alt="close icon" />
      </button>
    </div>
  );
};
