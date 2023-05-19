import s from '@/styles/cases/Production.module.css';

const Production = ({ cases }) => {
  if (cases.promoVideo1 === null && cases.pitchPresentation === null) {
    return null;
  }

  return (
    <>
      <section className="container">
        <div className={s.block_05}>
          <p>05</p>
          <h3>Production</h3>
        </div>
        <div className={s.promo}>
          <h3>Made a promo video</h3>
          <p>tricky thing</p>
        </div>
        <div className={s.promo_block}>
          {cases.promoVideo1 && (
            <div className={s.promo_video}>
              <p>
                {cases.promoVideo1} <br />
                <span>{cases.promoVideo2}</span>
              </p>

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nHW5JcZFyeM"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {cases.pitchPresentation && (
            <div className={s.download}>
              <h3>Download pitch presentation</h3>
              <p>
                We have developed a product presentation material for investors
                and partners (download by button)
              </p>
              <img src="./assets/images/6046.svg" alt="" />
              <a href={cases.pitchPresentation.url} download target="_blank">
                Download
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Production;
