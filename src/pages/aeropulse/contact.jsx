import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { submitForm } from '@/api/utils/submitForm';
import s from '@/styles/Thanks.module.css';
import Head from 'next/head';
import { BackgroundBlur } from '@/components/common/background/BackgroundBlur';
import Footer from '@/components/shared/Footer';

export default function AeropulseContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await submitForm(data, 'Aeropulse Contact');
      reset();
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Aeropulse - Contact Us</title>
        <meta name="description" content="Contact Aeropulse team for further cooperation" />
      </Head>

      <div className="container">
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className={s.form_block} style={{minWidth:'60vh'}}>
            <div className={s.form_header}>
              <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Contact Aeropulse</h1>
              <p>Fill out the request form</p>
            </div>
            
            <form className={s.form} onSubmit={handleSubmit(onSubmit)} style={{minWidth:'60vh'}}>
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
                  placeholder="email"
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
              
              <div>
                {errors.message && <p className="error">This field is required</p>}
                <textarea
                  placeholder="Your message"
                  rows="4"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  {...register('message', { required: true })}
                  style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '4px' }}
                />
              </div>
              
              <button className={s.submit} type="submit">
                Send
              </button>
              
              <div className={s.checkbox}>
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
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    terms of personal data processing
                  </span>
                </p>
              </div>
              
              {errors.tos && (
                <p className="error" style={{ textAlign: 'center', marginTop: '10px' }}>
                  You must agree to the terms
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
      
      <BackgroundBlur zIndex={1} />
      <Footer />
    </>
  );
};