
import HeroSection from "../components/heroSections/HeroSection";
import HeroSideComponent from "../components/heroSections/HeroSideComponent";



const HeroSectionPage = () => {
    return (
        <>

            <div className="margin-section"></div>
            {/* <div className="big-title text-center margin-block">Hero Sections</div> */}

            <HeroSection headerTitle='Peters pizzor'
                alt='pizzaugn'
                imgSrc='https://images.unsplash.com/photo-1489564239502-7a532064e1c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div className="margin-section"></div>
            <HeroSideComponent />
            <div className="margin-section"></div>
        </>
    )
}

export default HeroSectionPage;