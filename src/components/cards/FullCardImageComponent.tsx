
type FulCardImageProp = {
    img: string
    alt: string
    imgHeader: string
}


const FullCardImageComponent = (prop: FulCardImageProp) => {
    return (
        <>
            <section className="img-full-card-wrap">
                <div className="overlay-layer" />
                <img className="img-style" src={prop.img} alt={prop.alt} />
                <div className="absolut-center hero-header">{prop.imgHeader}</div>
            </section>
        </>
    )
}

export default FullCardImageComponent;