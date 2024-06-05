import { Link } from "react-router-dom";

type props = {
    headerTitle: string,
    imgSrc: string
    alt: string
}

const HeroSection = (props: props) => {
    return (
        <>
            {/* Header-section  */}
            <section className="margin-section">
                <div className="container">
                    <div className="overlay-layer"></div>
                    <img className="img-hero"
                        src={props.imgSrc}
                        alt={props.alt}
                    />
                    <div className=" hero-cta-section ">
                        <h1 className=" hero-header m-0 mb-2">{props.headerTitle}</h1>
                        <div className="flex-center">
                            <div className="cta-wrapper flex-gap-2">
                                <h2 className="text-white under-title m-0">Goda pizzor</h2>
                                <button className="button-one"><Link to="#">Meny</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;