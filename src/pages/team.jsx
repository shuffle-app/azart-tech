import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import BestMember from "@/components/teamPage/BestMember"

const TeamPage = () => {
    return (
        <main>
            <Header/>
            <div className="container">
                <BestMember/>
            </div>
        </main>
    )
}

export default TeamPage