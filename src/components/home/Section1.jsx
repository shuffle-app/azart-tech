import s from '@/styles/main/Section1.module.css';
import { useRef, useState } from 'react';
import ImgAnimation from '../shared/ImgAnimation';
import { TypeAnimation } from 'react-type-animation';

import { ContactPopup } from '../common/ContactPopup/ContactPopup';
import { createPortal } from 'react-dom';

const Section1 = () => {
  const [showForm, setShowForm] = useState(false);

  const clickButton = () => {
    setShowForm(true);

    window.localStorage.setItem('showHeroForm', true);
  };

  const handleBackClick = () => {
    setShowForm(false);

    window.localStorage.setItem('showHeroForm', false);
  };

  const ref = useRef(null);

  return (
    <section className={s.section_block}>
      <div className={`container ${s.first_block}`}>
        <div className={s.text}>
          <div className={s.hero}>
            <h1>
              Web development that <br />
              wins the hearts of the
            </h1>
            <span>target audience</span>
          </div>

          <TypeAnimation
            className={s.subhero}
            wrapper="h2"
            // cursor={false}
            sequence={[
              // 'In the clip of technology\ncreating digital products from\nlanding pages to applications',
              // () => {
              //   ref.current.innerHTML = `In the clip of technology\ncreating <span>digital products</span> from\nlanding pages to applications`;
              // },
              // 3000,
              'Business process analytics that will take into\n account the user experience of your audience',
              3000,
              'In our state for your tasks -\nbranding and digital marketing',
              3000,
              'inventing. developing. branding.\npromoting. anything',
              3000,
            ]}
            speed={70}
            repeat={Infinity}
            ref={ref}
          ></TypeAnimation>
          <div>
            <button onClick={clickButton} className={s.btn}>
              Got an idea?
            </button>
          </div>
        </div>
        <div className={s.animated}>
          <ImgAnimation />
        </div>
      </div>
      <div className={s.experts}>
        <h2 className="container">We are experts in</h2>
        <div className={`${s.block} ${s.container}`}>
          <div className={s.directions}>
            <p></p>
            <p>FinTech</p>
            <p>E-comm</p>
            <p>Big Data Analysis</p>
            <p>HoReCa</p>
            <p>Entertainment</p>
            <p></p>
          </div>
        </div>
      </div>

      {showForm &&
        createPortal(
          <ContactPopup handleBackClick={handleBackClick} />,
          document.body
        )}
    </section>
  );
};

export default Section1;
