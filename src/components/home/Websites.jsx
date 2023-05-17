import { submitForm } from '@/api/utils/submitForm';
import s from '@/styles/main/Websites.module.css';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    await submitForm(data);

    router.push('/thank-you');
  };

  const { width } = useWindowSize();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form_form}>
      <div className={s.form_block}>
        <h4>any solutions for your request</h4>
        <div className={s.form}>
          <h3>Need something unusual?</h3>
          <p>we can prepare unique format for your request</p>
          <div className={s.inputs}>
            <div>
              <input
                placeholder="phone"
                aria-invalid={errors.phone ? 'true' : 'false'}
                {...register('phone', { required: true })}
              />
            </div>
            <div>
              <input
                className={s.desc}
                type="text"
                placeholder="description"
                aria-invalid={errors.message ? 'true' : 'false'}
                {...register('message', { required: true })}
              />
            </div>
          </div>
          {width > 768 && (
            <div className={s.submits}>
              <input
                type="checkbox"
                aria-invalid={errors.tos ? 'true' : 'false'}
                {...register('tos', { required: true })}
              />
              <div>
                I agree to the&nbsp;
                <span
                  onClick={() => window.open('/privacy', { target: '_blank' })}
                  className="tos-link"
                >
                  terms of personal data processing
                </span>
              </div>
              <button type="submit" className="active-btn">
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          )}
        </div>
      </div>
      {width <= 768 && (
        <div className={s.mob_submit}>
          <button type="submit">Send</button>
          <div className={s.checkbox}>
            <input type="checkbox" name="" id="" />
            <p>
              I agree to the&nbsp;
              <span
                onClick={() => window.open('/privacy', { target: '_blank' })}
                className="tos-link"
              >
                terms of personal data processing
              </span>{' '}
            </p>
          </div>
        </div>
      )}
    </form>
  );
};

const Websites = () => {
  return (
    <section className={s.white_bg}>
      <img className={s.bg} src="./assets/images/websites-line.png" alt="" />
      <div className={`container ${s.sections_block}`}>
        <div className={s.header}>
          <h1>Websites as part of IT</h1>
          <button>web development for any task</button>
        </div>

        <div className={s.blocks}>
          <div className={s.services}>
            <h4>services</h4>
            <div className={s.services_block}>
              <div className={s.green_blocks}>
                <div>
                  <h3>Marketplaces</h3>
                  <p>user-friendly interface that will lead to the purchase</p>
                </div>
                <img
                  className={s.img}
                  src="./assets/images/services-img1.png"
                  alt=""
                />
                <div>
                  <h3>Delivery</h3>
                  <p>
                    for fast deliveries, fast and simple functionality for their
                    customers
                  </p>
                </div>
                <img
                  className={s.img}
                  src="./assets/images/services-img2.png"
                  alt=""
                />
              </div>
            </div>
            <div className={s.btn}>
              <p>
                from <span>3000 $</span>
              </p>
              <Link href="/cases">more details</Link>
            </div>
          </div>
          <div className={s.sites}>
            <h4>sites</h4>
            <div className={s.sites_block}>
              <div className={s.purple_blocks}>
                <div>
                  <h3>Landing page</h3>
                  <p>
                    a one-page solution that can be your business card or
                    selling tool
                  </p>
                </div>
                <img
                  className={s.img}
                  src="./assets/images/sites-img1.png"
                  alt=""
                />
                <div>
                  <h3>Websites</h3>
                  <p>
                    a multi-page and modern website of any complexity for your
                    tasks
                  </p>
                </div>
                <img
                  className={s.img}
                  src="./assets/images/sites-img2.png"
                  alt=""
                />
              </div>
            </div>
            <div className={s.btn}>
              <p>
                from <span>2000 $</span>
              </p>
              <Link href="/cases">more details</Link>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Websites;
