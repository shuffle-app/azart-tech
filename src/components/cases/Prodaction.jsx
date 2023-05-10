import s from '@/styles/cases/Prodaction.module.css'

const Prodaction = () => {
    return (
        <section className="container">
            <div className={s.block_05}>
                <p>05</p>
                <h3>Prodaction</h3>
            </div>
            <div className={s.promo}>
                <h3>Made a promo video</h3>
                <p>tricky thing</p>
            </div>
            <div className={s.promo_block}>
                <div className={s.promo_video}>
                        <p>Screen capture. Formation of the text under the video row. Professional voice acting.Screen capture. Formation of the text under the video row. Professional voice acting.</p>
                    <img src="./assets/img/914.png" alt="" />
                </div>
                <div className={s.download}>
                    <h3>Download pitch presentation</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, sit voluptas nobis ipsam provident ex!</p>
                    <img src="./assets/images/6046.svg" alt="" />
                    <button>Download</button>
                </div>
            </div>
        </section>
    )
}

export default Prodaction