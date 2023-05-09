import s from '@/styles/main/VideoAudit.module.css'

const VideoAudit = () => {
    return (
        <section className={`${s.video_audit}`}>
            <div className={s.section_header}>
                <h1>Video audit of the UI system</h1>
                <button className={s.free}>free</button>
            </div>
            <div className={s.main}>
                <p>this is a video analysis of interface types. Useful material that you can also get individually by filling out the form</p>
                <div className={s.video_play}></div>
                <button className={s.order_btn}>Order an audit</button>
                {/* <div className={s.glow}></div> */}
                <img className={s.img1} src="./assets/images/ш2 (1).png" alt="" />
                <img className={s.img2} src="./assets/images/ш6.png" alt="" />
            </div>


            <div className={s.glow2}></div>

        </section>
    )
}

export default VideoAudit