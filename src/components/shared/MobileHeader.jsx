import s from '@/styles/MobileHeader.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { ContactPopup } from '../common/ContactPopup/ContactPopup';
import { createPortal } from 'react-dom';

const MobileHeader = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <header className={`container ${menu ? s.active_header : s.header}`}>
      <Link href="/">
        <div>
          <img src="./assets/icons/logo.svg" alt="Azart-tech logo" />
        </div>
      </Link>
      <nav className={s.nav}>
        {menu ? (
          <ul>
            <li>
              <a href="#webdev" onClick={() => setMenu(false)}>
                Web development
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenu(false)}>
                All services
              </a>
            </li>
            <li>
              <a href="#stacks" onClick={() => setMenu(false)}>
                Stack
              </a>
            </li>
            <li>
              <Link href="/cases">Cases</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <a href="#" onClick={() => setMenu(false)}>
                Scheme of work
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  setShowForm(true);
                }}
              >
                Free zoom
              </a>
            </li>

            {showForm &&
              createPortal(
                <ContactPopup handleBackClick={() => setShowForm(false)} />,
                document.body
              )}
          </ul>
        ) : (
          ''
        )}
      </nav>
      <div className={menu ? s.active_btns : s.btns}>
        <a href="https://t.me/+971585025388" target="_blank">
          <img src="./assets/icons/telegram.svg" alt="telegram" />
        </a>
        <Hamburger color="#fff" toggled={menu} toggle={setMenu} />
      </div>
    </header>
  );
};

export default MobileHeader;
