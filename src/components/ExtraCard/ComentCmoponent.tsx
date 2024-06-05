import { useState } from "react";

const ComentComponent = () => {

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState<string[]>([])

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const EnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' ? sendMessage() : ''
    }

    const sendMessage = () => {
        setShowMessage([...showMessage, message])
        setMessage('')
    }

    const clearMessage = () => {
        setShowMessage([])
        console.log(showMessage)
    }

    return (
        <>
            <input type="text" value={message} onChange={handleMessage} onKeyPress={EnterKeyPress} />
            <button className="ml-1 button-one" onClick={sendMessage}>Skicka</button>
            <button className="button-one ml-1" onClick={clearMessage}>rensa</button>
            <div className="">
                {showMessage.map((m, index) => {
                    return <p key={index} className="text-bold p-s margin-block">{m}</p>
                })}

            </div>
        </>
    )
}

export default ComentComponent;