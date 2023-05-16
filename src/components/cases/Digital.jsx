import s from '@/styles/cases/Digital.module.css';
import Image from 'next/image';

const Digital = ({ cases }) => {
  if (!cases.digital) {
    return null;
  }

  const blocks = cases.digital;

  return (
    <section className="container">
      <div className={s.block_04}>
        <p>04</p>
        <h3>Digital</h3>
      </div>

      {blocks.map((block, index) => {
        const { purpose, items, heading, stats } = block;

        const renderStats = () => {
          return (
            <div className={s.digital_content_stats}>
              {stats.map((stat, i) => {
                return (
                  <div className={s.digital_content_stat} key={i}>
                    <span className={s.digital_content_stats_first}>
                      {stat.first}
                    </span>
                    &nbsp;
                    <span className={s.digital_content_stats_sep}>
                      {stat.sep}
                    </span>
                    &nbsp;
                    <span className={s.digital_content_stats_second}>
                      {stat.second}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        };

        return (
          <div className={s.digital_block} key={index}>
            <div className={s.digital_block_heading}>
              <div className={s.digital_heading}>{heading}</div>

              <div className={s.purpose}>
                <span className={s.purpose_label}>purpose: </span>
                {purpose}
              </div>
            </div>

            <div className={s.digital_content_items}>
              {items.map((item, i) => {
                return (
                  <div className={s.digital_content} key={i}>
                    <div>
                      <Image src={item.icon} alt="" width={27} height={27} />
                    </div>
                    <p
                      className={s.digital_content_text}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                );
              })}
              {stats && (
                <div className={s.digital_content_stats_desktop}>
                  {renderStats()}
                </div>
              )}
            </div>

            {stats && (
              <div className={s.digital_content_stats_mobile}>
                {renderStats()}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Digital;
