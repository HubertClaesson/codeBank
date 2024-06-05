
type FullCardprops = {
    FullCardLarge: string
    FullCardMedium: string
    FullCardSmall: string
    FullCardIcon: string
    FullCardBackground: string
}

const FullCard = (props: FullCardprops) => {
    return (
        <>
            <section className={`full-card-wrap ${props.FullCardBackground}`}>
                <div className="flex-space-between full-card">
                    <section className="text-white align-self">
                        <i className={props.FullCardIcon}></i>
                    </section>
                    <article className="text-white align-self">
                        <div className="small-title">{props.FullCardMedium}</div>
                        <div className="section-title">{props.FullCardLarge}</div>
                        <p>{props.FullCardSmall}</p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default FullCard;