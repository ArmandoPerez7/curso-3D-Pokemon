import Background from "../components/Background"
import Section from "../components/Section"

function HomePage() {

    return (
        <div>
            <div className="container">
                <Section></Section>
                <Section></Section>
                <Section></Section>
            </div>
            <Background/>
        </div>    
    )
}

export default HomePage