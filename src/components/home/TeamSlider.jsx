import s from '@/styles/main/TeamSlider.module.css';
import TeamCard from '../cards/TeamCard';

const TeamSlider = ({ teamMembers }) => {
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
          <div className={s.form}>
            <div className={s.from_input}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
            </div>
            <div className={s.btn_block}>
              <div className={s.btn}>Download</div>
              <div className={s.checkbox}>
                <input type="checkbox" />
                <p>
                  I agree to the <span>terms of personal data processing</span>{' '}
                </p>
              </div>
            </div>
          </div>
          <div className={s.glow} />
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
