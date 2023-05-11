import s from '@/styles/main/ResentProject.module.css'
import Header from "@/components/shared/Header"
import Link from 'next/link'

const CasePage = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <section className={`container ${s.bm_section}`}>
                <div className={s.text_content}>
                    <h1>
                        Pay attention <br /> to our <span>our work</span>
                    </h1>
                    <p>Here are collected cases on various topics. We specialize not only in IT, but also in other similar areas</p>
                    <div>
                        <h3>Our destinations</h3>
                    </div>
                    <div className={s.tags}>
                        <p>Digital</p>
                        <p>IT</p>
                        <p>Service</p>
                    </div>
                </div>
                <div className={s.project_card}>
                    <h2>Resent project</h2>
                    <div className={s.card}>
                        <div className={s.card_text}>
                            <h3>Shuffle start-up</h3>
                            <p>an honest and unique application that will suggest you find places, people, food, entertainment, etc.</p>
                            <div className={s.card_tags}>
                                <p>UX/UI</p>
                                <p>app</p>
                                <p>dev</p>
                            </div>
                            <div className={s.card_ft}>
                                <a href="#">more datails</a>
                                <p>28 jan. 2023</p>
                            </div>
                        </div>
                        <img src="./assets/img/shuffle.svg" alt="" />
                    </div>
                </div>

                <div className={s.glow1}/>
                <div className={s.glow2}/>
                <div className={s.glow3}/>

                </section>
            </main>
        </>
    )
}

export default CasePage