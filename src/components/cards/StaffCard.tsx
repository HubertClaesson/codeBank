
type StaffcardProps = {
    img: string
    alt: string
    email: string
    tele: string
    job: string
    name: string
}

const StaffCardCompoent = (prop: StaffcardProps) => {
    return (
        <>
            <section className="card-bodyn bg-black flex-item-25">
                <img className="img-stil" src={prop.img} alt={prop.alt} />
                {/* </section> */}
                <article className=" card-contents text-center text-white p-1">
                    <h3 className="m-0 p-0">{prop.name}</h3>
                    <p className="text-italic">{prop.job}</p>
                    <div className="flex-center mb-xs">
                        <article >
                            <p className="m-0 p-0 mb-xs"><a className=" text-white text-dec-none" href={`tel:${prop.tele}`}>{prop.tele}</a><i className="bi bi-telephone ml-1"></i></p>
                            <p className="m-0 p-0"><a className="text-white text-dec-none " href={`mailto:${prop.email}`}>{prop.email}</a><i className="bi bi-envelope ml-1"></i></p>
                        </article>
                    </div>
                </article >
            </section >
        </>
    )
}

export default StaffCardCompoent;