import s from '@/styles/cases/Digital.module.css'

const Digital = ({cases}) => {
    return (
        <section className="container">
            <div className={s.block_04}>
                <p>04</p>
                <h3>Digital</h3>
            </div>
            <div className={s.digital_block}>
                <div className={s.digital_content}>
                    <div>
                        <img src="./assets/icons/1206.svg" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet, sapiente a exercitationem consequatur minima, voluptas laudantium doloremque temporibus earum quas deleniti tenetur voluptatem. Delectus rerum minima, veniam nam ullam corporis aliquid accusamus deleniti dolore!</p>
                </div>
                <div className={s.digital_content}>
                    <div>
                        <img src="./assets/icons/1206.svg" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet, sapiente a exercitationem consequatur minima, voluptas laudantium doloremque temporibus earum quas deleniti tenetur voluptatem. Delectus rerum minima, veniam nam ullam corporis aliquid accusamus deleniti dolore!</p>
                </div>
                <div className={s.digital_content}>
                    <div>
                        <img src="./assets/icons/1206.svg" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet, sapiente a exercitationem consequatur minima, voluptas laudantium doloremque temporibus earum quas deleniti tenetur voluptatem. Delectus rerum minima, veniam nam ullam corporis aliquid accusamus deleniti dolore!</p>
                </div>
                <div className={s.digital_content}>
                    <div>
                        <img src="./assets/icons/1206.svg" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet, sapiente a exercitationem consequatur minima, voluptas laudantium doloremque temporibus earum quas deleniti tenetur voluptatem. Delectus rerum minima, veniam nam ullam corporis aliquid accusamus deleniti dolore!</p>
                </div>
            </div>
            <p className={s.dashed_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Saepe asperiores dignissimos itaque atque quae numquam ex quibusdam. Iste, distinctio dolore?</p>
        </section>
    )
}

export default Digital