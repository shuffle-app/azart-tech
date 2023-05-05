import s from '@/styles/Header.module.css'
import { useState } from 'react'
import MobileHeader from './MobileHeader'
import Link from 'next/link'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const activeMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <header className={`container ${s.header}`}>
                <Link href="/">
                    <div>
                        <img src="./assets/icons/logo.svg" alt="Azart-tech logo" />
                    </div>
                </Link>
                <nav className={s.nav}>
                    {
                        menu ? (
                            <ul>
                                <li>
                                    <a href="#">Web development</a>
                                </li>
                                <li>
                                    <a href="#">All services</a>
                                </li>
                                <li>
                                    <a href="#">Stack</a>
                                </li>
                                <li>
                                    <a href="#">Cases</a>
                                </li>
                                <li>
                                    <Link href='/team'>Team</Link>
                                </li>
                                <li>
                                    <a href="#">Scheme of work</a>
                                </li>
                                <li>
                                    <a href="#">Free zoom</a>
                                </li>
                            </ul>
                        ) : ''
                    }
                </nav>
                <div className={s.btns}>
                    <img src="./assets/icons/telegram.svg" alt="telegram" />
                    {
                        menu 
                        ? (<img onClick={activeMenu} src="./assets/icons/menu-btn.svg" alt="telegram" />)
                        : (
                            <div onClick={activeMenu} className={s.burger_button}>
                                <span className={`${s.line} ${s.line1}`}></span>
                                <span className={`${s.line} ${s.line2}`}></span>
                            </div>
                        )
                    }
                </div>
            </header>
            <div className={s.mob_header}>
                <MobileHeader/>
            </div>
        </>
    )
}

export default Header