import { Link } from "react-router-dom";




const SeeThroughNavbar = () => {
    return (
        <>
            <nav className="absolute-nav border-pink">
                <section className="align-self">
                    <button>Boka bord</button>
                </section>
                <menu className="align-self">
                    <li className=""><Link to=''>Rum</Link></li>
                    <li className=""><Link to=''>Spa</Link></li>
                    <li className=""><Link to=''>Restaurang</Link></li>
                </menu>
            </nav>
        </>
    )
}

export default SeeThroughNavbar;