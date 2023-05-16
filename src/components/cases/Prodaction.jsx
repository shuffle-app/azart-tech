import s from '@/styles/cases/Prodaction.module.css';

const Prodaction = ({ cases }) => {
  if (cases.promoVideo1 === null) {
    return null;
  }

  return (
    <>
      <section className="container">
        <div className={s.block_05}>
          <p>05</p>
          <h3>Prodaction</h3>
        </div>
        <div className={s.promo}>
          <h3>Made a promo video</h3>
          <p>tricky thing</p>
        </div>
        <div className={s.promo_block}>
          <div className={s.promo_video}>
            <p>
              {cases.promoVideo1} <br />
              <span>{cases.promoVideo2}</span>
            </p>

            <img src="./assets/img/914.png" alt="" />
          </div>
          <div className={s.download}>
            <h3>Download pitch presentation</h3>
            <p>
              We have developed a product presentation material for investors
              and partners (download by button)
            </p>
            <img src="./assets/images/6046.svg" alt="" />
            <button>Download</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prodaction;
