import s from '@/styles/main/Websites.module.css'

const Websites = () => {
    return (
        <section className={s.white_bg}>
            <img className={s.bg} src="./assets/images/websites-line.png" alt="" />
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
                                <img className={s.img} src="./assets/images/services-img1.png" alt="" />
                                <div>
                                    <h3>Delivery</h3>
                                    <p>for fast deliveries, fast and simple functionality for their customers</p>
                                </div>
                                <img className={s.img} src="./assets/images/services-img2.png" alt="" />
                            </div>
                        </div>
                        <div className={s.btn}>
                            <p>form <span>3000 $</span></p>
                            <button>more detailis</button>
                        </div>
                    </div>
                    <div className={s.sites}>
                        <h4>sites</h4>
                        <div className={s.sites_block}>
                            <div className={s.purple_blocks}>
                                <div>
                                    <h3>Landing page</h3>
                                    <p>a one-page solution that can be your business card or selling tool</p>
                                </div>
                                <img className={s.img} src="./assets/images/sites-img1.png" alt="" />
                                <div>
                                    <h3>Websites</h3>
                                    <p>a multi-page and modern website of any complexity for your tasks</p>
                                </div>
                                <img className={s.img} src="./assets/images/sites-img2.png" alt="" />
                            </div>
                        </div>
                        <div className={s.btn}>
                            <p>form <span>2000 $</span></p>
                            <button>more detailis</button>
                        </div>
                    </div>
                    <div className={s.form_block}>
                        <h4>any solutions for your request</h4>
                        <div className={s.form}>
                            <h3>Need something unusual?</h3>
                            <p>we can prepare unique format for your request</p>
                            <div className={s.inputs}>
                                <div>
                                    <input type="number" placeholder='phone'/>
                                </div>
                                <div>
                                    <input type="text" placeholder='description'/>
                                </div>
                            </div>
                            <div className={s.submits}>
                                <input type="checkbox" />
                                <text>
                                    I agree to the
                                    <span> terms of personal data processing</span>
                                </text>
                                <button>
                                    <img src="./assets/icons/arrow.svg" alt="arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Websites