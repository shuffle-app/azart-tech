import s from '@/styles/MobileHeader.module.css'
import Link from 'next/link'
import { useState } from 'react'

const MobileHeader = () => {
    const [menu, setMenu] = useState(false)
    const activeMenu = () => {
        setMenu(!menu)
    }
    return (
        <header className={`container ${menu ? s.active_header : s.header}`}>
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
                                <Link href="/team">Team</Link>
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
            <div className={menu ? s.active_btns : s.btns}>
                <img src="./assets/icons/telegram.svg" alt="telegram" />
                {
                    menu 
                    ? (<img onClick={activeMenu} src="./assets/icons/menu-btn.svg" alt="telegram" />)
                    : (
                        <button onClick={activeMenu} className={s.menu_button}>
                            <div/>
                            <div/>
                        </button>
                    )
                }
            </div>
        </header>
    )
}

export default MobileHeader