

type FourCardProps = {
    img: string
    alt: string
    header: string
}

const FourCardComponent = (prop: FourCardProps) => {
    return (
        <>
            <div className="flex-item-50 relative border-radius">
                <img className="img-style relative border-radius"
                    src={prop.img}
                    alt={prop.alt} />
                <div className="overlay-layer border-radius" />
                <div className="absolute hero-header">{prop.header}</div>
            </div>
        </>
    )
}

export default FourCardComponent;