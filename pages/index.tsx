import Background from "../components/Background"
import Section from "../components/Section"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"


function HomePage() {

    return (
        <div>
            <div id="container">
                <Section></Section>
                <Section2></Section2>
                <Section3></Section3>
            </div>
            <Background/>
        </div>    
    )
}

export default HomePage