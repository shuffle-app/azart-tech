import Image from 'next/image';
import { useRouter } from 'next/router';

import t from '@/styles/Thanks.module.css';

import thankYouPic from '../../public/assets/images/1932.svg';
import instagramPic from '../../public/assets/icons/instagram.svg';
import telegramPic from '../../public/assets/icons/telegram.svg';
import linkedinPic from '../../public/assets/icons/linkedin.svg';
import Script from 'next/script';
import Head from 'next/head';

const ThankYouPage = () => {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  return (
    <>
      <Script
        id="meta-pixel-code-lead"
        dangerouslySetInnerHTML={{
          __html: `
            if(typeof fbq === 'undefined') {
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2002507826747915');
                fbq('track', 'Lead');
            } else {
                fbq('track', 'Lead');
            }
              `,
        }}
        strategy="afterInteractive"
      />

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
              <Image src={instagramPic} alt="instagram" />
              <a href="#" target="_blank">
                <Image src={telegramPic} alt="telegram" />
              </a>
              <a
                href="https://www.linkedin.com/company/azart-technologies-fzco/"
                target="_blank"
              >
                <Image src={linkedinPic} alt="linkedin" />
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
