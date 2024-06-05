

type AboutIconComponentProps = {
    iconProp: string
    header: string
    text: string
}

const AboutIconComponent = (prop: AboutIconComponentProps) => {
    return (
        <>
            <div className=" card-bodd text-center bg-light-gray p-2 flex-item-25">
                <i className={prop.iconProp}></i>
                <h3 className="">{prop.header}</h3>
                <p>{prop.text}</p>
            </div>
        </>
    )
}

export default AboutIconComponent;