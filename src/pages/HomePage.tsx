import FullCard from "../components/cards/FullCard";
import ArrowInfoCompoent from "../components/modal/ArrowInfoCard";
import CtaSectionAbout from "../components/buttons/CtaSectionAbout";
import TextImageComponent from "../components/textcomponent/TextImageCompoent";
import FourCardComponent from "../components/cards/FourCardCompoent";
import FullCardImageComponent from "../components/cards/FullCardImageComponent";
import StaffCardCompoent from "../components/cards/StaffCard";
import HeroSideComponent from "../components/heroSections/HeroSideComponent";
import AboutIconComponent from "../components/cards/AboutIconComponent";
import FlexGridComponent from "../components/FlexGridCompoent";
import SpaceingSectionComponent from "../components/SpacingSectionComponent";


const HomePage = () => {
    return (
        <>
            <HeroSideComponent
                heroheader={"Elstolpar.se"}
                heroText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde debitis magni recusandae eveniet ullam qui accusamus repudiandae suscipit. Nihil cum"}
                herTextLabel={"Vi laddar du kör"}
                heroButton={"Läs mer"} />

            <main className="main-padding">
                <section className="wrap">
                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FullCard
                            FullCardMedium='Elstolpar.se'
                            FullCardLarge='Störst i Sverige på elstolpar'
                            FullCardSmall='När du behöver ladda bilen är vi där'
                            FullCardIcon={'bi bi-battery-charging'}
                            FullCardBackground={"bg-primary"} />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <CtaSectionAbout
                                buttonLable="Läs mer"
                                ctaTextHeader="Installation"
                                text="Lorem ipsum dolor 
                            sit amet, consectetur 
                            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                            />
                            <CtaSectionAbout
                                buttonLable="Läs mer"
                                ctaTextHeader="Garanti"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
                            />
                            <CtaSectionAbout
                                buttonLable="Läs mer"
                                ctaTextHeader="Service"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                            />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FullCardImageComponent
                            img={"https://images.unsplash.com/photo-1567409378873-888d6fa7debc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt={"elbil laddar"}
                            imgHeader={"Laddare"} />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <ArrowInfoCompoent
                            arrowButtonLabel={"Visa mer info"}
                            arrowInfo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum similique magni assumenda vitae, labore delectus rem vel porro molestias dolore? Obcaecati quos tenetur commodi soluta labore officia est blanditiis?"}
                        />
                        <ArrowInfoCompoent
                            arrowButtonLabel={"Visa mer info"}
                            arrowInfo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum similique magni assumenda vitae, labore delectus rem vel porro molestias dolore? Obcaecati quos tenetur commodi soluta labore officia est blanditiis?"}
                        />
                        <ArrowInfoCompoent
                            arrowButtonLabel={"Visa mer info"}
                            arrowInfo={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum similique magni assumenda vitae, labore delectus rem vel porro molestias dolore? Obcaecati quos tenetur commodi soluta labore officia est blanditiis?"}
                        />

                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <AboutIconComponent
                                iconProp="bi bi-lightning-charge under-title"
                                header={"Ladda"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "} />
                            <AboutIconComponent
                                iconProp="bi bi-car-front-fill under-title"
                                header={"Bilen"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "} />

                            <AboutIconComponent
                                iconProp="bi bi-house-door-fill under-title"
                                header={"Hemma"}
                                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <TextImageComponent
                            img="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="el-stolpe"
                        />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <FourCardComponent
                                img={"https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={""}
                                header={"elbil"} />
                            <FourCardComponent
                                img={"https://images.unsplash.com/photo-1615903214534-582a77a2a85e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"Drink"}
                                header={"elbil"} />
                            <FourCardComponent
                                img={"https://images.unsplash.com/photo-1639302610362-4c86747e8680?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"Drink"}
                                header={"elbil"} />
                            <FourCardComponent
                                img={"https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"Elbil laddar"}
                                header={""} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"hans.hansson@info.com"} tele={"015-4453"} job={"VD"} name={"Hans Hansson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"Erik.svensson@info.com"} tele={" 015-4645"} job={"IT - konsult"} name={"Erik Svensson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"andrea.andersson@info.com"} tele={"015-4645"} job={"Säljare"} name={"Andrea Andersson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"jonas.stensson@info.com"} tele={"015-4645"} job={"Säljare"} name={"Jonas Stensson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"emil.andersson@info.com"} tele={"015-4645"} job={"Installatör"} name={" Emil Andersson"} />
                            <StaffCardCompoent img={"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"johan.skog@info.com"} tele={"015-4645"} job={"Säljare"} name={"Johan Skog"} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>
                </section>
            </main>

        </>
    )
}

export default HomePage;