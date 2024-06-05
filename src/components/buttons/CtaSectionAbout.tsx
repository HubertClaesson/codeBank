import { Link } from "react-router-dom";


type buttonAboutProps = {
    buttonLable: string
    text: string
    ctaTextHeader: string

}

const CtaSectionAbout = (props: buttonAboutProps) => {
    return (
        <>
            <section className="text-center flex-item-25">
                <h3 className="m-0 small-title">{props.ctaTextHeader}</h3>
                <p>{props.text}</p>
                <button className="cta-button-about"><Link to='/'>{props.buttonLable}</Link></button>
            </section>
        </>
    )
}

export default CtaSectionAbout;