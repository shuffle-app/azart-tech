import s from '@/styles/Header.module.css';
import { useRef, useState } from 'react';
import MobileHeader from './MobileHeader';
import Link from 'next/link';
import { ContactPopup } from '@/components/common/ContactPopup/ContactPopup';
import { createPortal } from 'react-dom';
import { IconTelegram } from '@/components/common/icons/IconTelegram';
import { Hamburger } from './Hamburger';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      <header className={`container ${s.header} ${menu && s.opened}`}>
        <Link href="/" className={s.logo_container}>
          <div className={s.logo_bg}></div>
          <img
            src="./assets/icons/logo_no_background.svg"
            alt="Azart-tech logo"
            width="115"
            height="98"
          />
        </Link>
        <nav className={s.nav}>
          <Transition nodeRef={nodeRef} in={menu} timeout={duration}>
            {(state) => {
              return (
                <ul
                  ref={nodeRef}
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <li>
                    <a href="#webdev">Web development</a>
                  </li>
                  <li>
                    <a href="#services">All services</a>
                  </li>
                  <li>
                    <a href="#stacks">Stack</a>
                  </li>
                  <li>
                    <Link href="/cases">Cases</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <a href="#">Scheme of work</a>
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
                      <ContactPopup
                        handleBackClick={() => setShowForm(false)}
                      />,
                      document.body
                    )}
                </ul>
              );
            }}
          </Transition>
        </nav>
        <div className={s.btns}>
          <a href="https://t.me/+971585025388" target="_blank">
            <IconTelegram />
          </a>
          <Hamburger toggled={menu} toggle={setMenu} />
        </div>
      </header>
      <div className={s.mob_header}>
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
