import Analytics from "@/components/cases/Analytics"
import Design from "@/components/cases/Design"
import Development from "@/components/cases/Development"
import Digital from "@/components/cases/Digital"
import Members from "@/components/cases/Members"
import Preview from "@/components/cases/Preview"
import Prodaction from "@/components/cases/Prodaction"
import Stack from "@/components/cases/Stack"
import Form from "@/components/home/Form"
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

const Case = () => {
    return (
        <main>
            <Header/>

            <Preview/>
            <Stack/>
            <Analytics/>
            <Design/>
            <Development/>
            <Digital/>
            <Prodaction/>
            <Members/>
            


            <Form/>
            <Footer/>
        </main>
    )
}

export default Case