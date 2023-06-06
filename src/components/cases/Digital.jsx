import s from '@/styles/cases/Digital.module.css';
import { useMounted } from '@/utils/hooks/useMounted';
import { useWindowSize } from '@/utils/hooks/useWindowSize';
import Image from 'next/image';
import { useRef } from 'react';

const Digital = ({ cases }) => {
  const dpHeadingRef = useRef(null);
  const dpRef = useRef(null);

  const toolsRef = useRef(null);
  const { width } = useWindowSize();
  const isShuffleStartup = cases.slug === 'shuffle-start-up';

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

        const shouldRenderTools =
          cases.slug === 'shuffle-start-up' && index === 2;

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
              <div
                className={s.digital_heading}
                ref={shouldRenderTools ? dpHeadingRef : undefined}
              >
                {heading}
              </div>

              {shouldRenderTools && width > 768 && (
                <div
                  className={s.tools_heading}
                  style={{
                    marginLeft:
                      dpRef.current?.offsetWidth -
                      dpHeadingRef.current?.offsetWidth +
                      14,
                    paddingLeft: 50,
                    width: toolsRef.current?.clientWidth + 45,
                  }}
                >
                  tools
                </div>
              )}
              {isShuffleStartup && (
                <div
                  className={s.purpose}
                  style={
                    shouldRenderTools && width > 768
                      ? {
                          maxWidth: 250,
                        }
                      : undefined
                  }
                >
                  <span className={s.purpose_label}>purpose: </span>
                  {purpose}
                </div>
              )}
            </div>

            <div className={s.digital_content_items}>
              {items.map((item, i) => {
                return (
                  <div
                    className={s.digital_content}
                    key={i}
                    ref={
                      shouldRenderTools && i === items.length - 1
                        ? dpRef
                        : undefined
                    }
                  >
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
              {shouldRenderTools && width > 768 && (
                <div className={s.tools} ref={toolsRef}>
                  <div className={s.icons_Apple}>
                    <Image
                      src="/assets/icons/icon-apple.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Apple&nbsp;Search&nbsp;Ads</p>
                  </div>
                  <div className={s.icons_Google}>
                    <Image
                      src="/assets/icons/icon-google.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Google&nbsp;Ads</p>
                  </div>
                  <div className={s.icons_Meta}>
                    <Image
                      src="/assets/icons/icon-meta.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>FaceBook&nbsp;Ads</p>
                  </div>
                </div>
              )}
              {stats && (
                <div className={s.digital_content_stats_desktop}>
                  {renderStats()}
                </div>
              )}
            </div>

            {shouldRenderTools && width <= 768 && (
              <div>
                {' '}
                <div
                  className={s.tools_heading}
                  style={{
                    marginLeft:
                      dpRef.current?.offsetWidth -
                      dpHeadingRef.current?.offsetWidth,
                    width: toolsRef.current?.clientWidth + 45,
                  }}
                >
                  tools
                </div>
                <div className={s.tools} ref={toolsRef}>
                  <div className={s.icons_Apple}>
                    <Image
                      src="/assets/icons/icon-apple.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Apple&nbsp;Search&nbsp;Ads</p>
                  </div>
                  <div className={s.icons_Google}>
                    <Image
                      src="/assets/icons/icon-google.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>Google&nbsp;Ads</p>
                  </div>
                  <div className={s.icons_Meta}>
                    <Image
                      src="/assets/icons/icon-meta.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p>FaceBook&nbsp;Ads</p>
                  </div>
                </div>
              </div>
            )}

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
