import SeeThroughNavbar from "../navbar/SeeThroughNavbar"
import { Link } from "react-router-dom"



type props = {
    headerTitle: string,
    imgSrc: string
    alt: string
}

const HeroSectionSplit = (props: props) => {
    return (
        <>
            {/* Header-section  */}

            <div className=" hero-split m-0 margin-block  ">
                <div className="overlay-split" />
                <img className="relative img-cover"
                    src={props.imgSrc}
                    alt={props.alt}
                />
                <SeeThroughNavbar />
                {/* <div className=" cta-section text-white border-pink">
                    <h1 className="herosplit-header">{props.headerTitle}</h1>
                    <h2 className="under-title ">Hej</h2>
                </div> */}
                <div className="absolut">
                    <div className=" hero-header">Hej på dig</div>
                    <p className="small-title">Boka rum</p>
                    <button className="button-one "> <Link to='/cards'>Boka</Link></button>
                </div>


            </div>
        </>
    )
}

export default HeroSectionSplit;