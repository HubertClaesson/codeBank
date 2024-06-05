import { useState } from "react"

const PostComponent = () => {


    const [post, setPost] = useState('');
    const [showPost, setShowPost] = useState<string[]>([])

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value);
    }

    const sendMessage = () => {
        setShowPost([...showPost, post]);
        setPost('');
    }

    const EnterKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' ? sendMessage() : ''
    }

    return (
        <>
            {/* <form id="comentform "> */}
            <textarea value={post} onChange={handlePost} onKeyPress={EnterKeyPress} name="comment" form="comentform" placeholder="Skriv ett meddelande!"></textarea>
            <button className="button-one ml-1" onClick={sendMessage} type="submit">Skicka</button>
            <div className="">
                {showPost.map((message, index) => {
                    return (
                        <p className="small-title" key={index}>{message}</p>
                    )
                })

                }
            </div>
            {/* </form> */}

        </>
    )
}

export default PostComponent;