import s from '@/styles/cases/Development.module.css'
import { useState } from 'react'

const Development = () => {
    const data = [
        { title: "Accordion title 1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
        { title: "Accordion title 2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
        { title: "Accordion title 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
        { title: "Accordion title 4", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
        { title: "Accordion title 5", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
        { title: "Accordion title 6", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum quam blanditiis voluptates corrupti molestiae quod beatae voluptatibus ducimus ratione!"},
    ]


    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className={s.dev_section}>
            <section className='container'>
                <div className={s.block_03}>
                    <p>03</p>
                    <h3>Development</h3>
                </div>

                

                <div className={s.accordion_block}>
                    <div className={s.accordions}>
                        {
                            data.map((item, index) => {
                                const isActive = index === activeIndex;
                                const arrowIcon = isActive ? './assets/icons/arrow-up.svg' : './assets/icons/arrow-down.svg';

                                return (
                                    <div className={isActive ? s.active_accordion : s.accordion} key={index}>
                                        <div className={s.accordion_header}>
                                            <div>
                                                <h4 className={isActive ? s.setNumber : s.number}>{index + 1}</h4>
                                                <h5>{item.title}</h5>
                                            </div>
                                            <button onClick={() => setActiveIndex(isActive ? null : index)}>
                                                <img src={arrowIcon} alt="" />
                                            </button>
                                        </div>
                                        {isActive && <p>{item.content}</p>}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={s.methodology}>
                        <h3>Title</h3>
                        <p>methodology</p>
                        <img className={s.met_img} src="./assets/img/methodology-arr.svg" alt="" />
                        <img className={s.m_line} src="./assets/img/linee.svg" alt="l" />
                    </div>
                </div>

                <div className={s.tech}>
                    <div className={s.stacks}>
                        <h3>Stack</h3>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>UX/UI</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>UX/UI</p>
                            <p>HTML</p>
                        </div>
                    </div>
                    <div>
                    <div className={s.stacks}>
                        <h3>Platforms</h3>
                        <div className={s.platforms}>
                            <p>Tablets</p>
                            <p>Mobile</p>
                            <p>Desktop</p>
                        </div>
                        <h3>Working hours <span>160</span></h3>
                    </div>
                    </div>
                </div>
            </section>
            <img className={`lines2 ${s.lines_img}`} src="./assets/images/lines2.svg" alt="324" />
        </section>
    )
}

export default Development