import s from '@/styles/main/Section1.module.css'
import t from '@/styles/Thanks.module.css'
import { useState } from 'react'

const Section1 = () => {
    const [form, setForm] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const clickButton = () => {
        setForm(!form)
        setSubmitted(false)
    }

    const handleBackClick = () => {
        setForm(false)
        setSubmitted(false)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        if (name === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Email is not valid');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!/^\d{10}$/.test(phone)) {
            setPhoneError('Phone number is not valid');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (isValid) {
            // отправить данные формы, например:
            fbq('track', 'Lead');

            setName('');
            setEmail('');
            setPhone('');

            setSubmitted(true)
        }
    };

    return (
        <section className={s.section_block}>
            <div className={`container ${s.first_block}`}>
                <div className={s.text}>
                    <h1>inventing.
                     <br className={s.br} />
                      developing. <br />
                    branding.<br className={s.br} />
                     promoting.</h1>
                    <span>anything</span>
                    <div>
                        <button onClick={clickButton} className={s.btn}>Got an idea?</button>
                    </div>
                </div>
                <img src="./assets/images/cubs.png" alt="images" />
            </div>
            <div className={s.experts}>
                <h2 className='container'>We are experts in</h2>
                <div className={`${s.block} ${s.container}`}>
                    <div className={s.directions}>
                        <p></p>
                        <p>FinTech</p>
                        <p>E-comm</p>
                        <p>Big Data Analysis</p>
                        <p>HoReCa</p>
                        <p>Entertainment</p>
                        <p></p>
                    </div>
                </div>
            </div>

            {
                form ? (
                    submitted ? (
                        <section className={t.t_wrapper}>
                            <div className={t.thanks_block}> 
                                <div className={t.thanks_text}>
                                    <img className={t.img} src="./assets/images/1932.svg" alt="" />
                                    <h3><span>Thank you</span> for your application!</h3>

                                    <p>Our manager will contact you soon</p>
                                    <div className={t.line}/>
                                    <h5>By the way, visit our social networks</h5>
                                    <div className={t.social}>
                                        <img src="./assets/icons/instagram.svg" alt="instagram" />
                                        <img src="./assets/icons/telegram.svg" alt="telegram" />
                                        <img src="./assets/icons/fb.svg" alt="fb" />
                                    </div>
                                </div>
                                <button className={t.back_main} onClick={handleBackClick}>Back to home page</button>
                            </div>
                        </section>
                    ) : (
                        <section className={t.t_wrapper}>
                            <div className={t.form_block}>
                                <div className={t.form_header}>
                                    <p>Fill out the feedback form for further cooperation</p>
                                    <button onClick={clickButton}><img src="./assets/icons/menu-btn.svg" alt="" /></button>
                                </div>
                                <form className={t.form} onSubmit={handleSubmit} noValidate>
                                    <div>
                                        {nameError && <p className="error">{nameError}</p>}
                                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div>
                                        {emailError && <p className="error">{emailError}</p>}
                                        <input type="email" placeholder='eMail' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div>
                                        {phoneError && <p className="error">{phoneError}</p>}
                                        <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} pattern="^\d{10}$" />
                                    </div>
                                    <button className={t.submit} type="submit">Send</button>
                                    <div className={t.checkbox}>
                                        <input type="checkbox" required />
                                        <p>I agree to the <span>terms of personal data processing</span> </p>
                                    </div>
                                </form>
                            </div>
                        </section>
                    )
                ) : null
            }
        </section>
    )
}

export default Section1

