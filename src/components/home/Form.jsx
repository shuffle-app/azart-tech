import s from '@/styles/main/Form.module.css'

const Form = () => {
    return (
        <section className={`${s.form_block}`}>
            <div className={s.form_header}>
                <h1>Are you ready to work?</h1>
                <img src="./assets/images/from-img.svg" alt="" />
            </div>
            <form className={s.from} action="#">
                <div>
                    <input type="text" placeholder='Name'/>
                </div>
                <div>
                    <input type="email" placeholder='eMail'/>
                </div>
                <div>
                    <input type="number" placeholder='Phone'/>
                </div>
                <div className={s.agree}>
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the <span>terms of personal data processing</span></p>
                </div>

                <button>Send</button>

                <div className={s.glow1}/>
                <div className={s.glow2}/>
                <div className={s.glow3}/>
            </form>
        </section>
    )
}

export default Form