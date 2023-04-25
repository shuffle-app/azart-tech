import s from '@/styles/main/Section1.module.css'

const Section1 = () => {
    return (
        <section className={`container ${s.section_block}`}>
            <div className={s.first_block}>
                <div className={s.text}>
                    <h1>inventing. developing. <br />
                    branding. promoting.</h1>
                    <span>anything</span>
                    <div>
                        <button className={s.btn}>Got an idea?</button>
                    </div>
                </div>
                <img src="./assets/images/cubs.png" alt="images" />
            </div>
            <div className={s.experts}>
                <h2>We are experts in</h2>
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
        </section>
    )
}

export default Section1