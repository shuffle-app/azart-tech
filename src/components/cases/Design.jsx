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
                </div>
            </div>
            <div className={s.text2}>
                <div className={s.text2_1}>
                    <div>
                        <p className={s.based}>Based on the structural block diagram of the application, we create a primary prototype, where the potential architecture was reflected. Together with the team, they evaluated and analyzed it, made additions and submitted it for revision.</p>
                    </div>
                    <div className={s.text_img2}>
                        <p>After finalizing the prototype, the designer began to develop the app`s identity: corporate identity (colors and font), logo. <br /> We tried to come to the form that can reflect the style of the Arab world, high technology and simplicity. As a result, we have an authentic, modern and attractive design interface for the application.</p>
                        <img src="./assets/images/9441.png" alt="case" />
                    </div>
                </div>
            </div>
            <p className={s.dashed_text}>The combination of blue and orange color symbolizes the reliability and high quality of the product, which is very important for future customers and the subject of the product as a whole.</p>

        </section>
    )
}

export default Design