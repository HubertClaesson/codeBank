import { useNewContext } from "./NewContext";


export const Consumer = () => {

    const { hello } = useNewContext();


    return (
        <>
            <button onClick={hello} className="button-one">console</button>
        </>
    )
}