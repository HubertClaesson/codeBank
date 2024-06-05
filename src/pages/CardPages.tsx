
import SplitCard from "../components/cards/SplitCard";
import FullCard from "../components/cards/FullCard";
import SplitCardReverse from "../components/cards/SplitCardReverse";
import PizzaMenu from "../components/menu/PizzaMenu";
import TextComponent from "../components/cards/TextComponent";
import ListComponent from "../components/cards/ListComponent";
import FlexGridComponent from "../components/FlexGridCompoent";
import TvCardComponent from "../components/cards/TvCardComponent";
import WorkerCard from "../components/cards/WorkerCard";
import WorkerCardComponent from "../components/cards/WorkerCardComponent";
import SpaceingSectionComponent from "../components/SpacingSectionComponent";
import CardComponent from "../components/cards/CardCompnent";
import { Consumer } from "../contexts/TestConsumer";
import { NewContextProvider } from "../contexts/NewContext";
import ButtonOneCompoent from "../components/buttons/DynamicButtonComponent";
import FetchToggleHookComponent from "../hooks/FetchToggleHookComponent";
import UseLocalstorage from "../hooks/useDemo";
import TextSplitComponent from "../components/textcomponent/TextSplitComponent";
import ImageSliderComponent from "../components/modal/ImageSlider";
import ModalComponent from "../components/modal/Modal";
import FourCardComponent from "../components/cards/FourCardCompoent";
import StaffCardCompoent from "../components/cards/StaffCard";
import ArrowInfoCompoent from "../components/modal/ArrowInfoCard";
import FullCardImageComponent from "../components/cards/FullCardImageComponent";
import AboutIconComponent from "../components/cards/AboutIconComponent";
import TextImageComponent from "../components/textcomponent/TextImageCompoent";
import CtaSectionAbout from "../components/buttons/CtaSectionAbout";




const CardPage = () => {
    return (
        <>
            <main className="main-padding">
                <section className="wrap">
                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <SplitCard splitTitleLarge='Vi har pizza'
                            splitTitleMedium='Prova våra pizzor som bakas i en riktig vedeldad pizzaung'
                            img='https://plus.unsplash.com/premium_photo-1680367655825-84e0302d2fa2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='pizza' />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FullCard
                            FullCardSmall='Alla våra pizzor är bakade i en  italiensk vedledad pizza ugn.'
                            FullCardMedium='Den bästa pizzan'
                            FullCardLarge='Smaker från Italien'
                            FullCardIcon={'bi bi-pie-chart'}
                            FullCardBackground={"bg-black"} />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FullCardImageComponent
                            img={"https://images.unsplash.com/photo-1567409378873-888d6fa7debc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt={"elbil laddar"}
                            imgHeader={"Laddare"} />
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
                        <SplitCardReverse splitTitleLarge='Pizza ungenen'
                            splitTitleMedium='Vi har varit på studieresas! Det var roligt och vi lärde oss hur man gör sushi'
                            img='https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='pizza' />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <TextImageComponent
                            img="https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="el-stolpe"
                        />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <CardComponent
                                cardHeader={"Coffee"}
                                img={"https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"food"}
                                color={"bg-primary text-white"} />
                            <CardComponent
                                cardHeader={"Coffee"}
                                img={"https://images.unsplash.com/photo-1587022058028-c084ee8dc31f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"food"}
                                color={"bg-secondary "} />
                            <CardComponent
                                cardHeader={"Coffee"}
                                img={"https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"food"}
                                color={"bg-dark-green"} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <CtaSectionAbout
                                buttonLable="Läs mer"
                                ctaTextHeader="Instalation"
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

                    <SpaceingSectionComponent spacingClass={"margin-section"} >
                        <PizzaMenu menuTitle='Peters pizzor' />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <TextComponent textComponentbackground={"bg-light-gray"} />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <ListComponent
                            listHedaer='Rubrik'
                            listSubHeader="rubrik"
                            listText="Lorem ipsum dolor sit, amet adipisicing elit. Laudantium consequuntur, veritatis ipsam enim illo inventore expedita fuga. Autem eos minus eius natus ratione voluptatibus quasi rerum exercitationem animi. Beatae, consequuntur." />
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

                    <SpaceingSectionComponent spacingClass={"margin-section"} >
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <WorkerCard workerName='Jonas Jonasson' workerJobb='Bagare' workerEmail='jonas.andersson@pizza.se' workerNumber='070-334567' img='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <WorkerCard workerName='Claes Kristersson' workerJobb='Kock' workerEmail='claes.kristersson.se' workerNumber='070-334567' img='https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <WorkerCard workerName='Bertil Gran' workerJobb='Bagare' workerEmail='bertil.gran@pizza.se' workerNumber='070-334567' img='https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <WorkerCard workerName='Johan Johansson' workerJobb='Optiker' workerEmail='johan.johansson@pizza.se' workerNumber='070-334567' img='https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <WorkerCard workerName='Jan Carlsson' workerJobb='Elektriker' workerEmail='jan.carlsson@pizza.se' workerNumber='070-334567' img='https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                            <WorkerCard workerName='Sten Skogsson' workerJobb='Lärare' workerEmail='sten.skogsson@pizza.se' workerNumber='070-334567' img='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"hans.hansson@info.com"} tele={"015-4453"} job={"VD"} name={"Hans Hansson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"Erik.andersson@info.com"} tele={" 015-4645"} job={"IT - konsult"} name={"Erik Svensson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"johannna.andersson@info.com"} tele={"015-4645"} job={"Säljare"} name={"Andrea Andersson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"jonas.andersson@info.com"} tele={"015-4645"} job={"Säljare"} name={"Jonas Stensson"} />
                            <StaffCardCompoent img={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"emil.andersson@info.com"} tele={"015-4645"} job={"Installatör"} name={" Emil Andersson"} />
                            <StaffCardCompoent img={"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} email={"johan.andersson@info.com"} tele={"015-4645"} job={"Säljare"} name={"Johan Skog"} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <TvCardComponent
                                img="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="tv" header={"Webb"} text={"Design"} />
                            <TvCardComponent
                                img="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="tv" header={"Music"} text={"Vibe"} />
                            <TvCardComponent
                                img="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="tv" header={"Solutions"} text={"Ideas"} />
                        </FlexGridComponent>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"} >
                        <FlexGridComponent cardGrid={"card-grid"}>
                            <WorkerCardComponent img={"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                name={"Stefan Andersson"}
                                job={"Konsult"}
                                phoneNumber={"08995 453"}
                                email={"företag.info@gmail.com"} />
                            <WorkerCardComponent img={"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                name={"Stefan Andersson"}
                                job={"Konsult"}
                                phoneNumber={"08995 453"}
                                email={"företag.info@gmail.com"} />
                            <WorkerCardComponent img={"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                name={"Stefan Andersson"}
                                job={"Konsult"}
                                phoneNumber={"08995 453"}
                                email={"företag.info@gmail.com"} />
                        </FlexGridComponent>

                        <NewContextProvider>
                            <Consumer />
                        </NewContextProvider>
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <ButtonOneCompoent buttonLable="btn-one" buttonClass={"button-one"} />
                        <ButtonOneCompoent buttonLable="btn-pill" buttonClass={"btn-pill ml-1"} />
                        <ButtonOneCompoent buttonLable="btn-cta" buttonClass={"btn-cta ml-1"} />
                        <ButtonOneCompoent buttonLable="btn-invert" buttonClass={"btn-invert ml-1"} />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <FetchToggleHookComponent />
                    </SpaceingSectionComponent>


                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <UseLocalstorage />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <TextSplitComponent
                            TextSplitHeader={"Rubrik"}
                            TextSplitText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima officia consequatur. Ex minus voluptatibus optio ducimus. Commodi quo soluta repudiandae voluptatibus dolorem delectus explicabo atque vel dolor! Et, hic! delectus explicabo atque vel dolor! Et, hic!delectus explicabo atque vel dolor! Et, hic!delectus explicabo atque vel dolor! Et, hic!"}
                            TextSplitSmallHeader={"Lite mer text om allt"} />
                    </SpaceingSectionComponent>


                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <ImageSliderComponent />
                    </SpaceingSectionComponent>

                    <SpaceingSectionComponent spacingClass={"margin-section"}>
                        <ModalComponent />
                    </SpaceingSectionComponent>

                </section>
            </main >
        </>
    )
}

export default CardPage;