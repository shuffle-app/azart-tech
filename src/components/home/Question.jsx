import s from '@/styles/main/Question.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import minusIcon from '../../../public/assets/icons/arr-minus.svg';
import plusIcon from '../../../public/assets/icons/arr-plus.svg';

const data = [
  {
    id: 1,
    title: 'Customer development',
    text: 'conducting field marketing research through interaction with potential consumers of the target product based on surveys, observations, as well as experimental research through offline and online environments',
  },
  {
    id: 2,
    title: 'TDD',
    text: 'test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.',
  },
  {
    id: 3,
    title: 'Minimum loveable product',
    text: 'a demo version of a digital product that aims to interact with the end user, based on user experience. all the emphasis is on getting the loyalty of the target audience',
  },
  {
    id: 4,
    title: 'Pitch creating',
    text: 'development of a sales presentation for investors and partners, with an emphasis on evaluating the profitable potential and prospects of a digital product after launch (or consulting in development)',
  },
  {
    id: 5,
    title: 'UI',
    text: 'the user interface, that is, what the user sees and interacts with when using the software or device.',
  },
  {
    id: 6,
    title: 'Big Data',
    text: 'providing the necessary technology stack to work with products designed for processing large databases',
  },
];

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onClickAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className={`${s.question_block}`}>
      <h1>Questions</h1>

      {data.map((item, index) => (
        <div className={s.accordion} key={item.id}>
          <div className={s.accordion_header}>
            <h4>{item.title}</h4>
            <button onClick={() => onClickAccordion(index)}>
              {activeIndex === index ? (
                <Image src={minusIcon} alt="" />
              ) : (
                <Image src={plusIcon} alt="" />
              )}
            </button>
          </div>
          <ContentTransition index={index} activeIndex={activeIndex}>
            <div className={s.text}>
              <div className={s.line} />
              <p>{item.text}</p>
            </div>
          </ContentTransition>
        </div>
      ))}
    </section>
  );
};

const ContentTransition = ({ index, activeIndex, children }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(activeIndex === index ? contentRef.current.scrollHeight : 0);
  }, [activeIndex, index]);

  return (
    <div
      ref={contentRef}
      style={{
        height,
        overflow: 'hidden',
        transition: 'height 200ms ease',
        willChange: 'height',
      }}
    >
      {children}
    </div>
  );
};

export default Question;
