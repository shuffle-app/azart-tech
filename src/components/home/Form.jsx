import { submitForm } from '@/api/utils/submitForm';
import s from '@/styles/main/Form.module.css';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import fromImg from '../../../public/assets/images/from-img.svg';
import { useRouter } from 'next/router';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    await submitForm(data);

    router.push('/thank-you');
  };

  return (
    <section className={`${s.form_block}`}>
      <div className={s.form_header}>
        <h1>Are you ready to work?</h1>
        <Image src={fromImg} alt="" />
      </div>
      <form className={s.from} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="eMail"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <input
            placeholder="Phone"
            aria-invalid={errors.phone ? 'true' : 'false'}
            {...register('phone', { required: true })}
          />
        </div>
        <div className={s.agree}>
          <input
            type="checkbox"
            name=""
            id=""
            aria-invalid={errors.tos ? 'true' : 'false'}
            {...register('tos', { required: true })}
          />
          <p>
            I agree to the{' '}
            <span
              onClick={() => window.open('/privacy', { target: '_blank' })}
              className="tos-link"
            >
              terms of personal data processing
            </span>
          </p>
        </div>

        <button type="submit">Send</button>

        <div className={s.glow1} />
        <div className={s.glow2} />
        <div className={s.glow3} />
      </form>
    </section>
  );
};

export default Form;
