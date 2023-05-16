import s from '@/styles/main/Section1.module.css';
import t from '@/styles/Thanks.module.css';
import { useState } from 'react';
import ImgAnimation from '../shared/ImgAnimation';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import thankYouPic from '../../../public/assets/images/1932.svg';
import instagramPic from '../../../public/assets/icons/instagram.svg';
import telegramPic from '../../../public/assets/icons/telegram.svg';
import fbPic from '../../../public/assets/icons/fb.svg';
import menuIcon from '../../../public/assets/icons/menu-btn.svg';

const HeroForm = ({ handleBackClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await submitForm(data);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={t.t_wrapper}>
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
              <Image src={telegramPic} alt="telegram" />
              <Image src={fbPic} alt="fb" />
            </div>
          </div>
          <button className={t.back_main} onClick={handleBackClick}>
            Back to home page
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={t.t_wrapper}>
      <div className={t.form_block}>
        <div className={t.form_header}>
          <p>Fill out the feedback form for further cooperation</p>
          <button onClick={handleBackClick}>
            <Image src={menuIcon} alt="" />
          </button>
        </div>
        <form className={t.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            {errors.name && <p className="error">This field is required</p>}
            <input
              type="text"
              placeholder="Name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', { required: true })}
            />
          </div>
          <div>
            {errors.email && <p className="error">This field is required</p>}
            <input
              type="email"
              placeholder="eMail"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: true })}
            />
          </div>
          <div>
            {errors.phone && <p className="error">This field is required</p>}
            <input
              placeholder="Phone"
              aria-invalid={errors.phone ? 'true' : 'false'}
              {...register('phone', { required: true })}
            />
          </div>
          <button className={t.submit} type="submit">
            Send
          </button>
          <div className={t.checkbox}>
            <input
              type="checkbox"
              aria-invalid={errors.tos ? 'true' : 'false'}
              {...register('tos', { required: true })}
            />
            <p>
              I agree to the{' '}
              <span
                onClick={() => window.open('/privacy', { target: '_blank' })}
              >
                terms of personal data processing
              </span>{' '}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

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

  return (
    <section className={s.section_block}>
      <div className={`container ${s.first_block}`}>
        <div className={s.text}>
          <h1>
            inventing.
            <br className={s.br} />
            developing. <br />
            branding.
            <br className={s.br} />
            promoting.
          </h1>
          <span>anything</span>
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

      {showForm && <HeroForm handleBackClick={handleBackClick} />}
    </section>
  );
};

export default Section1;
