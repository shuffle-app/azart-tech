import s from '@/styles/cases/Preview.module.css'

const Preview = () => {
    return (
        <section className="container">
            <div className={s.preview_block}>
                <img src="./assets/images/case.png" alt="case" />
                <div className={s.text}>
                    <h1>Auto-boutique <span>online-store</span></h1>
                    <div className={s.t_block}>
                        <h3>Problem</h3>
                        <p>- this company contacted us with an already existing website, whose task is to sell accessories and equipment for cars. regardless of the amount of advertising traffic that came to their previous market, the dynamics of orders did not change</p>
                    </div>
                    <div className={s.t_block}>
                        <h3>Decision</h3>
                        <p>- we had to conduct a global audit of the processes of visitors' interaction with the previous site in order to find out the reasons for the low conversion of their online store. we managed to detect more than a dozen errors, including those related to the interface, which stops progress. based on their negative experience, we have built an effective solution</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Preview