import s from '@/styles/MobileHeader.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'


const MobileHeader = () => {
    const [menu, setMenu] = useState(false)

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
                                <Link href="/case">Cases</Link>
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
                <Hamburger color='#fff' toggled={menu} toggle={setMenu} />
            </div>
        </header>
    )
}

export default MobileHeader