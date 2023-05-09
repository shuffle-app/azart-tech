import s from '@/styles/cases/Members.module.css'

const Members = () => {
    return (
        <section className='container'>
            <h3 className={s.h3}>Members</h3>
            <div className={s.members}>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className={s.member}>
                    <img src="./assets/images/stanislav.svg" alt="" />
                    <div>
                        <h5>Name Name</h5>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
            </div>
            <div className={s.reviews_block}>
                <div>
                    <h4 className={s.h4}>Reviews</h4>
                    <div className={s.reviews_header}>
                        <img src="./assets/images/vladimir.svg" alt="" />
                        <button>Watch video</button>
                        <button>Listen voice</button>
                    </div>
                    <div className={s.review}>
                        <h4>Vladimir Melnikov</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum, fugit dicta, nam earum, deleniti vero suscipit impedit rerum eligendi sed! Necessitatibus incidunt blanditiis </p>
                    </div>
                </div>
                <img className={s.img} src="./assets/images/6047.svg" alt="" />
            </div>
        </section>
    )
}

export default Members