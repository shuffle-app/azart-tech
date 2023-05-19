import { useMounted } from '@/utils/hooks/useMounted';
import styles from './BackgroundBlur.module.css';
import { createPortal } from 'react-dom';

export const BackgroundBlur = ({ zIndex = 100 }) => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={styles.backgroundBlur} style={{ zIndex }}></div>,
    document.body
  );
};
