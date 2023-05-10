import s from '@/styles/cases/Development.module.css'
import { useState } from 'react'

const Development = () => {
    const [accordion, setAccordion] = useState([false, false, false, false, false, false, false, false]);
    const clickAccordion = (index) => {
        const newAccordionState = accordion.map((state, i) => (i === index ? !state : state));
        setAccordion(newAccordionState);
    };

    return (
        <section className={s.dev_section}>
            <section className='container'>
                <div className={s.block_03}>
                    <p>03</p>
                    <h3>Development</h3>
                </div>

                <div className={s.accordion_block}>
                    <div className={s.accordions}>
                        {accordion.map((state, index) => (
                            <div key={index} className={state ? s.active_accordion : null}>
                                <div className={s.accordion}>
                                    <h4 className={`${s.number} ${state ? s.setNumber : ''}`}>{index + 1}</h4>
                                    <div>
                                        <h5>First</h5>
                                        {state ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto officia dicta eveniet, sed illo.</p> : ''}
                                    </div>
                                    <button onClick={() => clickAccordion(index)}>
                                        <img src='./assets/icons/arrow-down.svg' alt='' />
                                    </button>
                                </div>
                            </div>
                        ))}
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