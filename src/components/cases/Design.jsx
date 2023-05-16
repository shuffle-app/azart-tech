import s from '@/styles/cases/Design.module.css';

const Design = ({ cases }) => {
  return (
    <section className="container">
      <div className={s.block_02}>
        <p>02</p>
        <h3>Design</h3>
      </div>
      <div className={s.text}>
        <div className={s.text_img}>
          <p>{cases.design1}</p>
          <img src={cases.coverImage.url} alt="case" />
        </div>
        <div>
          <p className={s.text_2}>{cases.design2}</p>
        </div>
      </div>
      <div className={s.text2}>
        <div className={s.text2_1}>
          {cases.design3 && (
            <>
              <div>
                <p className={s.based}>{cases.design3}</p>
              </div>
              <div className={s.text_img2}>
                <p>{cases.design3}</p>
                <img src="./assets/images/9441.png" alt="case" />
              </div>
            </>
          )}
        </div>
      </div>
      <p className={s.dashed_text}>{cases.designResult}</p>
    </section>
  );
};

export default Design;
