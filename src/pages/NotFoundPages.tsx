import { Link } from "react-router-dom";

const NotFoundPages = () => {
    return (
        <>
            <div className="flex-center margin-virt">
                <div className="">
                    <div className="big-title"> 404 page not found</div>
                    <Link className="small-title" to={'/'}>Home</Link>
                </div>
            </div>

        </>
    )
}

export default NotFoundPages;