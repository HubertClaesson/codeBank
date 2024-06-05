// import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";


type ArrowInfoProps = {
    arrowInfo: string
    arrowButtonLabel: string
}


const ArrowInfoCompoent = (prop: ArrowInfoProps) => {

    const [value, toggleValue] = useToggle(false);

    return (
        <>
            <div onClick={toggleValue} className="arrow-container mb-s">
                <div className="arrow-box flex-space-between">
                    <h3 className="small-title p-0 m-0">{prop.arrowButtonLabel}</h3>  <i className={value === true ? "bi bi-arrow-up-short" : "bi bi-arrow-down-short"}></i>
                </div>
                <div className={`card-arrow-info ${value === true ? 'show' : 'hide'}`}>
                    <article className="article">
                        <p className="p-0 m-0">{prop.arrowInfo}</p>
                    </article>
                </div>
            </div>
        </>
    )
}

export default ArrowInfoCompoent;