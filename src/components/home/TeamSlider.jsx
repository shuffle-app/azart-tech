import s from '@/styles/main/TeamSlider.module.css';
import TeamCard from '../cards/TeamCard';
import { useForm } from 'react-hook-form';
import { submitForm } from '@/api/utils/submitForm';

const TeamSlider = ({ teamMembers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await submitForm(data);

    reset();

    window.open('/assets/files/checklist.pdf', { target: '_blank' });
  };

  return (
    <section className={`${s.team_section}`}>
      <div className="container">
        <div className={s.header}>
          <h1>Team</h1>
          <p>
            when it comes to the team, there can be no exceptions. Only the best
            remain. Competence + productivity + punctuality + honesty =
            azart.tech
          </p>
          <div>
            <img className={s.img1} src="/assets/images/цепь.png" alt="" />
            <img className={s.img2} src="/assets/images/цепь.png" alt="" />
          </div>
        </div>
      </div>
      <div className={`${s.team_slider} ${s.container}`}>
        <TeamCard teamMembers={teamMembers} />
      </div>

      <div className="container">
        <div className={s.download_block}>
          <p className={s.text}>
            Fill out the feedback form and get a useful bonus to your work
          </p>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.from_input}>
              <input
                type="text"
                placeholder="Name"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', { required: true })}
              />
              <input
                type="text"
                placeholder="Phone"
                aria-invalid={errors.phone ? 'true' : 'false'}
                {...register('phone', { required: true })}
              />
            </div>
            <div className={s.btn_block}>
              <button className={s.btn} type="submit">
                Download
              </button>
              <div className={s.checkbox}>
                <input
                  type="checkbox"
                  aria-invalid={errors.tos ? 'true' : 'false'}
                  {...register('tos', { required: true })}
                />
                <p>
                  I agree to the <span>terms of personal data processing</span>{' '}
                </p>
              </div>
            </div>
          </form>
          <div className={s.glow} />
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
