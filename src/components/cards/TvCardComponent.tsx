
type TvCardProps = {
    img: string
    alt: string
    header: string
    text: string
}

const TvCardComponent = (props: TvCardProps) => {
    return (
        <div className="tv-card flex-item-25">
            <div>
                <img className="img-tvcard" src={props.img} alt={props.alt} />
            </div>
            <article>
                <h4 className="m-0 ">{props.header}</h4>
                <p className="m-0 p-0 tv-card-header">{props.text}</p>
            </article>
        </div>
    )
}

export default TvCardComponent;