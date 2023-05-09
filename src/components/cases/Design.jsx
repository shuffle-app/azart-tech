import s from '@/styles/cases/Design.module.css'

const Design = () => {
    return (
        <section className='container'>
            <div className={s.block_02}>
                <p>02</p>
                <h3>Design</h3>
            </div>
            <div className={s.text}>
                <div className={s.text_img}>
                    <p>The design was made in light colors and minimalistic style. We tried to convey all the information as simply and clearly as possible, without unnecessary details and overload, since the main target audience perceived the information more than visual and graphical solutions. This means that design, first of all, simplifies the perception of information and decorates it.</p>
                    <img src="./assets/images/13pro.png" alt="case" />
                </div>
                <div>
                    <p className={s.text_2}>The combination of blue and orange color symbolizes the reliability and high quality of the product, which is very important for future customers and the subject of the product as a whole.</p>
                    <p className={s.dashed_text}>The combination of blue and orange color symbolizes the reliability and high quality of the product, which is very important for future customers and the subject of the product as a whole.</p>
                </div>
            </div>
        </section>
    )
}

export default Design