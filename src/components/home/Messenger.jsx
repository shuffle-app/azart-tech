import s from '@/styles/main/Messenger.module.css'

const Messenger = () => {
    return (
        <section className={`${s.messenger_block}`}>
            <div className={s.question_blocks}>
                <img src="./assets/images/lupa.png" alt="" />
                <div className={s.question}>
                    <p>Do bugs pop up after <br /> launch?</p>
                </div>
                <div className={s.question}>
                    <p>Does the product not retain user traffic?</p>
                </div>
                <div className={s.question}>
                    <p>The product violated copyright, filed a lawsuit?</p>
                </div>
            </div>
            <div className={s.content}>
                <h1>Find out how to turn these incidents into dust by going to our messenger!</h1>
                <div className={s.contact}>
                    <img className={s.emoji_img} src="./assets/images/emoji.svg" alt="emoji" />
                    <button>
                        go over
                        <img src="./assets/icons/telega-dark.svg" alt="telegram" />
                    </button>
                    <button>
                        go over
                        <img src="./assets/icons/whatsapp.svg" alt="whatsapp" />
                    </button>
                </div>
            </div>

            <div className={s.glow}/>
        </section>
    )
}

export default Messenger