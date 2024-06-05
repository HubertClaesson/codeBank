type props = {
    header: string
    headerSmall: string
    ParaSection1: string
    ParaSection2: string
    ParaSection3: string
}

const LongTextComponent = (props: props) => {
    return (
        <>
            <h2 className=" section-title text-bold">{props.header}</h2>
            <p className="p-0 m-0">{props.ParaSection1}</p>
            <p className="">{props.ParaSection2}</p>
            <h3 className="under-title m-0">{props.headerSmall}</h3>
            <p className="">{props.ParaSection3}</p>

        </>
    )
}

export default LongTextComponent;