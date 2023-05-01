import s from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.footer_block}`}>
                <p className={s.email}>contact@azart.tech</p>
                <img src="./assets/icons/footer-logo.svg" alt="logo" />
                <div className={s.social}>
                    <div><a href="#">Pinterest</a></div>
                    <div><a href="#">You Tube</a></div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer