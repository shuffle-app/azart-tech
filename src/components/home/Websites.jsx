import s from '@/styles/main/Websites.module.css'

const Websites = () => {
    return (
        <section className={s.white_bg}>
            <div className={`container ${s.sections_block}`}>
                <div className={s.header}>
                    <h1>Websites as part of IT</h1>
                    <button>web development for any task</button>
                </div>

                <div className={s.blocks}>
                    <div className={s.services}>
                        <h4>services</h4>
                        <div className={s.services_block}>
                            <div className={s.green_blocks}>
                                <div>
                                    <h3>Marketplaces</h3>
                                    <p>user-friendly interface that will lead to the purchase</p>
                                </div>
                                <div>
                                    <h3>Delivery</h3>
                                    <p>for fast deliveries, fast and simple functionality for their customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Websites