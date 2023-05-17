import s from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.footer_block}`}>
        <p className={s.footer_contacts}>
          <span>azart technologies fzco</span> <br />
          <br />
          Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE
          <br />
          <br />
          IFZA Business park
          <br />
          Premises number 23963 - 00
          <br />
          Makani number A2 - 3645879076
          <br />
          <br />
          License number 23963
          <br />
          <br />
          General manager phone number +971585025388
        </p>
        <div className={s.footer_center}>
          <Link href="/">
            <img src="./assets/icons/footer-logo.svg" alt="logo" />
          </Link>
          <a href="mailto:intouch@azarties.com" className={s.email}>
            intouch@azarties.com
          </a>
        </div>

        <div className={s.social}>
          <div>
            <a
              href="https://www.linkedin.com/company/azart-technologies-fzco/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a href="#">Instagram</a>
          </div>
          <div>
            <a href="#">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
