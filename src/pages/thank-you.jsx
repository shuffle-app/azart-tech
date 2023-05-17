import Image from 'next/image';
import { useRouter } from 'next/router';

import t from '@/styles/Thanks.module.css';

import thankYouPic from '../../public/assets/images/1932.svg';
import instagramPic from '../../public/assets/icons/instagram.svg';
import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';
import { IconLinkedin } from '@/components/common/icons/IconLinkedin';
import { IconTelegram } from '@/components/common/icons/IconTelegram';
import { IconInstagram } from '@/components/common/icons/IconInstagram';

const ThankYouPage = () => {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  useEffect(() => {
    window.fbq('track', 'Lead');
  }, []);

  return (
    <>
      <Head>
        <title>Thank You!</title>
      </Head>

      <section className={t.t_wrapper} style={{ border: 'none' }}>
        <div className={t.thanks_block}>
          <div className={t.thanks_text}>
            <Image className={t.img} src={thankYouPic} alt="" />
            <h3>
              <span>Thank you</span> for your application!
            </h3>

            <p>Our manager will contact you soon</p>
            <div className={t.line} />
            <h5>By the way, visit our social networks</h5>
            <div className={t.social}>
              <a href="#" target="_blank">
                <IconInstagram />
              </a>
              <a href="#" target="_blank">
                <IconTelegram />
              </a>
              <a
                href="https://www.linkedin.com/company/azart-technologies-fzco/"
                target="_blank"
              >
                <IconLinkedin />
              </a>
            </div>
          </div>
          <button className={t.back_main} onClick={goHome}>
            Back to home page
          </button>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
