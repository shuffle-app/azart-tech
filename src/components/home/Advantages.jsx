import s from '@/styles/main/Advantages.module.css';

const Advantages = () => {
  return (
    <section className={`${s.advantages}`}>
      <h1>Advantages</h1>
      <div className={s.blocks}>
        <div className={s.block}>
          <div className={s.bg1} />
          <p className={s.number}>01</p>
          <div>
            <p className={s.title}>5700</p>
            <p className={s.text}>working days in digital/business area</p>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.bg2} />
          <p className={s.number}>02</p>
          <div>
            <p className={s.title}>Top business</p>
            <p className={s.text}>
              analysis due to the fact that we have our own business projects
            </p>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.bg3} />
          <p className={s.number}>03</p>
          <div>
            <p className={s.title}>Great digital - marketing</p>
            <p className={s.text}>
              due to our expertise in business and business analysis
            </p>
          </div>
        </div>
        <div className={s.block}>
          <div className={s.bg2} />
          <p className={s.number}>04</p>
          <div>
            <p className={s.title}>Well-built</p>
            <p className={s.text}>onboarding process</p>
          </div>
        </div>
        <div className={s.block_none}>
          <div className={s.block}>
            <div className={s.bg3} />
            <p className={s.number}>05</p>
            <div>
              <p className={s.title}>more coming soon</p>
              <p className={s.text}>more coming soon</p>
            </div>
          </div>
        </div>
        <div className={s.block_none}>
          <div className={s.block}>
            <div className={s.bg1} />
            <p className={s.number}>06</p>
            <div>
              <p className={s.title}>more coming soon</p>
              <p className={s.text}>more coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.glow} />
    </section>
  );
};

export default Advantages;
