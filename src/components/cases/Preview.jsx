import s from '@/styles/cases/Preview.module.css';

const Preview = ({ cases }) => {
  return (
    <section className="container">
      <div className={s.preview_block}>
        <img src={cases.previewImg?.url} alt="case" />
        <div className={s.text}>
          <h1>
            {cases.title}&nbsp;<span>{cases.niche}</span>
          </h1>
          <div className={s.t_block}>
            <h3>Problem</h3>
            <p>{cases.problem}</p>
          </div>
          <div className={s.t_block}>
            <h3>Decision</h3>
            <p>{cases.decision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
