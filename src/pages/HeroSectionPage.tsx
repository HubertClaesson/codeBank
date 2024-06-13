
import SpaceingSectionComponent from "../components/SpacingSectionComponent";
import HeroSection from "../components/heroSections/HeroSection";
import HeroSideComponent from "../components/heroSections/HeroSideComponent";



const HeroSectionPage = () => {
    return (
        <>
            <main className="main-padding">
                <section className="wrap">
                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <HeroSection headerTitle='Peters pizzor'
                            alt='pizzaugn'
                            imgSrc='https://images.unsplash.com/photo-1489564239502-7a532064e1c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </SpaceingSectionComponent>
                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <HeroSideComponent
                            heroheader={"Elstolpar.se"}
                            heroText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde debitis magni recusandae eveniet ullam qui accusamus repudiandae suscipit. Nihil cum"}
                            herTextLabel={"Vi laddar du kör"}
                            heroButton={"Läs mer"} />
                    </SpaceingSectionComponent>
                </section>
            </main>
        </>
    )
}

export default HeroSectionPage;