type Cardprops = {
    color: string
    cardHeader: string
    img: string
    alt: string

}

const CardComponent = (props: Cardprops) => {
    return (
        <>
            <section className={`card-body flex-item-25 ${props.color}`}>
                <div className="image-wrapper">
                    <img className="image" src={props.img} alt={props.alt} />
                </div>
                <article>
                    <h3 className="pl-2">{props.cardHeader}</h3>
                </article>
            </section>
        </>
    )
}

export default CardComponent;