import s from '@/styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.footer_block}`}>
                <p className={s.email}>contact@azart.tech</p>
                <Link href="/">
                    <img src="./assets/icons/footer-logo.svg" alt="logo" />
                </Link>
                <div className={s.social}>
                    <div><a href="#">Pinterest</a></div>
                    <div><a href="#">You Tube</a></div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer