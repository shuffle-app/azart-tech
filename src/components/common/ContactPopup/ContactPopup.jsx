import Image from 'next/image';
import { useForm } from 'react-hook-form';

import t from '@/styles/Thanks.module.css';
import menuIcon from '../../../../public/assets/icons/menu-btn.svg';
import { useRouter } from 'next/router';
import { submitForm } from '@/api/utils/submitForm';

export const ContactPopup = ({ handleBackClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    await submitForm(data, 'Попап');

    router.push('/thank-you');
  };

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
                className="tos-link"
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
