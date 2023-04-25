import s from '@/styles/Header.module.css'

const Header = () => {
    return (
        <header className={`container ${s.header}`}>
            <div>
                <img src="./assets/icons/logo.svg" alt="Azart-tech logo" />
            </div>
            <nav className={s.nav}>
                <img src="./assets/icons/telegram.svg" alt="telegram" />
                <button className={s.menu_button}>
                    <div/>
                    <div/>
                </button>
            </nav>
        </header>
    )
}

export default Header