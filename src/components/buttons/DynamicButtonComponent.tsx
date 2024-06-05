
type ButtonOneProps = {
    buttonLable: string
    buttonClass: string
}

const ButtonOneCompoent = (props: ButtonOneProps) => {
    return (
        <>
            <button className={props.buttonClass}>{props.buttonLable}</button>
        </>
    )
}

export default ButtonOneCompoent;