import { useState } from "react";
import ComentComponent from "./ComentCmoponent";
import PostComponent from "./PostCompoent";


export const EmployeeCard = () => {

    const [toggleLike, setTogggleLikes] = useState<boolean>(false)
    const [number] = useState<number>(0)

    const toggle = () => {
        // const dollar = document.querySelector('.dollar');

        // dollar ? dollar?.classList.toggle('green') : console.log('Hej');

        setTogggleLikes(!toggleLike)

    }

    return <>
        <section className="border-pink card-kropp">
            <img src="https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=2780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-red circle mb-s" />
            <article className="pb-s">
                <div className="text-bold pb-xs">Robert</div>
                <div className="text-italic">Carlsson</div>
            </article>
            <article>
                <div className="mb-s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nobis distinctio cumque ratione temporibus laborum, in assumenda ullam accusantium vel ab optio sit labore quasi rem, fugit provident officiis quaerat.</div>
                <section>
                    <PostComponent />
                    <ComentComponent />
                    <div className="text-bold">{toggleLike ? number + 1 : number}</div>
                    <div onClick={toggle} className={`text-bold dollar ${toggleLike ? "green" : ""}`}>£</div>
                    {/* <i className="bi bi-hand-thumbs-up"></i> */}
                </section>
            </article>
        </section>
    </>
}