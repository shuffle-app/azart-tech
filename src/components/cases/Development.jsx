import s from '@/styles/cases/Development.module.css';
import { useState } from 'react';

import lockPic from '../../../public/assets/images/6042.png';
import Image from 'next/image';

const Development = ({ cases }) => {
  const data = [
    {
      title: 'Accordion title 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
    {
      title: 'Accordion title 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
    {
      title: 'Accordion title 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
    {
      title: 'Accordion title 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
    {
      title: 'Accordion title 5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
    {
      title: 'Accordion title 6',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={s.dev_section}>
      <section className="container">
        <div className={s.block_03}>
          <p>03</p>
          <h3>Development</h3>
        </div>

        <div className={s.accordion_block}>
          <div className={s.accordions}>
            {cases.development.accordion?.map((item, index) => {
              const isActive = index === activeIndex;
              const arrowIcon = isActive
                ? './assets/icons/arrow-up.svg'
                : './assets/icons/arrow-down.svg';

              return (
                <div
                  className={isActive ? s.active_accordion : s.accordion}
                  key={index}
                >
                  <div className={s.accordion_header}>
                    <div>
                      <h4 className={isActive ? s.setNumber : s.number}>
                        {index + 1}
                      </h4>
                      <h5>{item.title}</h5>
                    </div>
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                    >
                      <img src={arrowIcon} alt="" />
                    </button>
                  </div>
                  {isActive && <p>{item.content}</p>}
                </div>
              );
            })}
          </div>
          <div className={s.methodology}>
            <h3>{cases.techTitle}</h3>
            <p>{cases.tech}</p>
            <img
              className={s.met_img}
              src="./assets/img/methodology-arr.svg"
              alt=""
            />
            <img className={s.m_line} src="./assets/img/linee.svg" alt="l" />
          </div>
        </div>

        <div className={s.tech}>
          <div className={s.stacks}>
            <h3>Stack</h3>
            <div>
              {cases.stacks2.stack?.map((stack, index) => (
                <p key={index}>{stack}</p>
              ))}
            </div>
          </div>
          <div className={s.lock_image}>
            <Image src={lockPic} alt="" />
            <div className={s.glow1} />
          </div>
          <div>
            <div className={s.stacks}>
              <h3>Platforms</h3>
              <div className={s.platforms}>
                {cases.platforms.platform?.map((platform, index) => (
                  <p key={index}>{platform}</p>
                ))}
              </div>
              <h3>
                Working hours <span>{cases.workingHours}</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <img
        className={`lines2 ${s.lines_img}`}
        src="./assets/images/lines2.svg"
        alt="324"
      />
    </section>
  );
};

export default Development;
