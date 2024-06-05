import TextSplitComponent from "../textcomponent/TextSplitComponent"

type props = {
    splitTitleLarge?: string
    splitTitleMedium?: string
    img: string
    alt: string
}

const SplitCardReverse = (props: props) => {
    return (
        <>
            <div className="split-card-wrapper reverse bg-light-gray">
                <article className=" flex-center split-section">
                    <div className="p-2 align-self">
                        <TextSplitComponent
                            TextSplitHeader={"Rubrik"}
                            TextSplitText={"Lorem ipsum dolor sit amet consectetur elit. Eum minima officia consequatur. Ex minus voluptatibus optio. Commodi quo soluta repudiandae voluptatibus dolorem delectus explicabo atque vel dolor! Et, hic! delectus explicabo atque vel dolor! Et"}
                            TextSplitSmallHeader={"Lite mer text om allt"} />
                    </div>
                </article >
                <section className="split-section">
                    <img className="img-style"
                        src={props.img}
                        alt={props.alt}
                    />
                </section>
            </div >
        </>
    )
}

export default SplitCardReverse;