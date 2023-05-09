import s from '@/styles/main/Zoom.module.css'

const Zoom = () => {
    return (
        <div>
            <div className={s.zoom}>
                <div>
                    <img src="./assets/icons/zm.svg" alt="people" />
                    <p>Have a zoom meeting with an expert!</p>
                </div>
                <button>go zoom</button>
            </div>
        </div>
    )
}

export default Zoom