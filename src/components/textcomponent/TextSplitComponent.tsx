import { Link } from "react-router-dom";

type TextSplitComponentProps = {

    TextSplitHeader: string
    TextSplitText: string
    TextSplitSmallHeader: string
}

const TextSplitComponent = (props: TextSplitComponentProps) => {
    return (
        <>
            <article>
                <h3 className="m-0 p-0 big-title">{props.TextSplitHeader}</h3>
                <p className="text-width m-0 mb-s">{props.TextSplitText}</p>
                <div className="small-title">{props.TextSplitSmallHeader}</div>
                <button className="btn-pill"><Link className="text-black text-dec-none" to='#'>Läs mer</Link></button>
            </article>
        </>
    )
}

export default TextSplitComponent;

