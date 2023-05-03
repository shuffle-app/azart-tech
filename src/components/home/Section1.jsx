import s from '@/styles/main/Section1.module.css'

const Section1 = () => {
    return (
        <section className={s.section_block}>
            <div className={`container ${s.first_block}`}>
                <div className={s.text}>
                    <h1>inventing.
                     <br className={s.br} />
                      developing. <br />
                    branding.<br className={s.br} />
                     promoting.</h1>
                    <span>anything</span>
                    <div>
                        <button className={s.btn}>Got an idea?</button>
                    </div>
                </div>
                <img src="./assets/images/cubs.png" alt="images" />
            </div>
            <div className={s.experts}>
                <h2 className='container'>We are experts in</h2>
                    <div className={`${s.block} ${s.container}`}>
                        <div className={s.directions}>
                            <p></p>
                            <p>FinTech</p>
                            <p>E-comm</p>
                            <p>Big Data Analysis</p>
                            <p>HoReCa</p>
                            <p>Entertainment</p>
                            <p></p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Section1