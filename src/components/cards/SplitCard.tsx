
type props = {
    splitTitleLarge: string
    splitTitleMedium: string
    img: string
    alt: string
}

const SplitCard = (props: props) => {
    return (
        <>

            <div className="split-card-wrapper">
                <article className="flex-center bg-light-gray split-section border-radius">
                    <div className=" align-self p-2 ">
                        <div className="big-title text-bold">{props.splitTitleLarge}</div>
                        <div className="under-title">
                            {props.splitTitleMedium}
                        </div>
                    </div>
                </article>
                <section className="split-section border-radius">
                    <img className="img-style"
                        src={props.img}
                        alt={props.alt}
                    />
                </section>
            </div>
        </>
    )
}

export default SplitCard;