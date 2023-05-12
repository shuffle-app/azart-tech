import { useEffect, useState } from 'react';
import s from '@/styles/main/Stacks.module.css';

const Accordion = ({ isActive, title, children, onToggle, number }) => {
  const arrowIcon = isActive ? "./assets/icons/arrow-up.svg" : "./assets/icons/arrow-down.svg";

  return (
    <div className={isActive ? s.active_accordion : s.not_active_accordion}>
      <div onClick={onToggle} className={s.active_accordion_header}>
        <div className={s.title}>
          <p className={isActive ? s.active_number : s.number}>{number}</p>
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
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [activeTab, setActiveTab] = useState(2);
  
    const toggleAccordion = (accordionIndex) => {
      setActiveAccordion(activeAccordion === accordionIndex ? null : accordionIndex);
    };
  
    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

  const [uniqueTabs, setUniqueTabs] = useState([]);
  const [accordions, setAccordions] = useState([]);

  useEffect(() => {
    fetch('/accordionData.json')
      .then((response) => response.json())
      .then((data) => {
        setUniqueTabs(data.uniqueTabs);
        setAccordions(
          data.accordions.map((accordion) => ({
            ...accordion,
            tabs: accordion.tabs.map((tabIndex) => data.uniqueTabs[tabIndex]),
          }))
        );
      });
  }, []);
  

  return (
    <section className={`${s.stacks_block}`}>
      <div className={s.mob}>
        <h1>Stacks</h1>
        <img src="./assets/images/5302.svg" alt="" />
      </div>
      <div className={s.accordion}>
        {
            accordions.map((content, index) => (
                <Accordion
                    key={index}
                    number={index + 1}
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
                        {content.tabs.map((tab, tabIndex) => {
                          if (tab.image) {
                            return (
                              <div
                                key={tabIndex}
                                className={activeTab === tabIndex + 1 ? s.active_logo : s.not_active_logo}
                                onClick={() => handleTabClick(tabIndex + 1)}
                              >
                                <img src={tab.image} alt="" />
                              </div>
                            );
                          }
                          return null;
                        })}
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
