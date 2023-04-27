import { useState } from 'react';
import s from '@/styles/main/Stacks.module.css';

const Accordion = ({ isActive, title, children, onToggle }) => {
    const arrowIcon = isActive ? "./assets/icons/arrow-up.svg" : "./assets/icons/arrow-down.svg";
  
    return (
      <div className={isActive ? s.active_accordion : s.not_active_accordion}>
        <div className={s.active_accordion_header}>
          <div className={s.title}>
            <p className={isActive ? s.active_number : s.number}>1</p>
            <h4>{title}</h4>
          </div>
          <button onClick={onToggle}><img src={arrowIcon} alt="" /></button>
        </div>
        {isActive && children}
      </div>
    );
  };

const Tab = ({ isActive, label, onClick }) => (
  <button
    className={isActive ? s.active_tab : s.not_active_tab}
    onClick={onClick}
  >
    {label}
  </button>
);

const TabContent = ({ isVisible, children }) => (
  isVisible && (
    <div className={s.tab_content}>
      {children}
    </div>
  )
);

const Stacks = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeTab, setActiveTab] = useState(1);
  
    const toggleAccordion = (accordionIndex) => {
      setActiveAccordion(activeAccordion === accordionIndex ? null : accordionIndex);
    };
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  

    const accordions = [
        {
            title: 'Backend',
            text: 'business analysis that will help your ideas shine',
            tabs: [
                {
                label: 'node.js',
                tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
            ],
        },
        {
            title: 'Backend',
            text: 'business analysis that will help your ideas shine',
            tabs: [
                {
                label: 'node.js',
                tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
                {
                    label: 'node.js',
                    tabText: 'Node.js is a software platform based on the V8 engine , which turns JavaScript from a highly specialized language into a general—purpose language.',
                    image: './assets/icons/nodejs.svg',
                },
            ],
        },
    ];


  return (
    <section className={`container ${s.stacks_block}`}>
      <h1>Stacks</h1>
      <div className={s.accordion}>
        {
            accordions.map((content, index) => (
                <Accordion
                    key={index}
                    isActive={activeAccordion === index}
                    title={content.title}
                    onToggle={() => toggleAccordion(index)}
  
                >
                <div className={s.accordion_content}>
                    <div className={s.tabs_block}>
                        <p>{content.text}</p>
                    <div className={s.tabs}>
                    {content.tabs.map((tab, tabIndex) => (
                        <Tab
                        key={tabIndex}
                        isActive={activeTab === tabIndex + 1}
                        label={tab.label}
                        onClick={() => handleTabClick(tabIndex + 1)}
                        />
                    ))}
                    </div>
                        {content.tabs.map((tab, tabIndex) => (
                            <TabContent key={tabIndex} isVisible={activeTab === tabIndex + 1}>
                                <p>{tab.tabText}</p>
                            </TabContent>
                        ))}
                    </div>

                    <div className={s.tabs_logo}>
                        {content.tabs.map((tab, tabIndex) => (
                            <div
                                key={tabIndex}
                                className={activeTab === tabIndex + 1 ? s.active_logo : s.not_active_logo}
                                >
                                <img src={tab.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                </Accordion>
            ))
        }
      </div>
      <div className={s.line}/>
    </section>
  );
};

export default Stacks;
