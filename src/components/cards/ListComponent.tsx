

type props = {
    listHedaer: string
    listSubHeader: string
    listText: string
}

const ListComponent = (props: props) => {
    return (
        <>
            <div className="split-card-wrapper">
                <article className="split-section flex-center bg-dark-green">
                    <div className="align-self p-4">
                        <div className="section-title">{props.listHedaer}</div>
                        <div className="small-title">{props.listSubHeader}</div>
                        <p className="">{props.listText}</p>
                        <button className="btn-cta">Köp</button>
                    </div>
                </article>
                <section className="split-section">
                    <img className="img-style" src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </section>
            </div>
        </>
    )
}

export default ListComponent;