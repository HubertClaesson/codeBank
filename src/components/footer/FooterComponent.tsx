

const FooterComponent = () => {
    return (
        <>
            <footer className="footer">
                <section className="footer-content ">
                    <div className="footer-list-content">
                        <ul className="">
                            <h2 className="text-bold fotter-header">Kontakt</h2>
                            <li className="">tele: 0734535</li>
                            <li className="">mail: elstolpar.se@info.se</li>
                            <li className="">Pizzavägen 4</li>
                            <div className="flex-gap-2 mt-2"><i className="bi bi-facebook text-white"></i><i className="bi bi-instagram text-white"></i></div>
                        </ul>
                        <ul className="">
                            <h2 className="text-bold fotter-header">Information</h2>
                            <li className="">Priser</li>
                            <li className="">Grundades 2012</li>
                        </ul>
                        <ul className="">
                            <h2 className="text-bold fotter-header">Socialamedier</h2>
                            <li className="">Facebook</li>
                            <li className="">Instagram</li>
                        </ul>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default FooterComponent;