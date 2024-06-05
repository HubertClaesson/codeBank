
type WorkerCard = {
    img: string
    name: string
    job: string
    phoneNumber: string
    email: string

}

const WorkerCardComponent = (prop: WorkerCard) => {
    return (
        <>
            <section className="worker-card-bod flex-item-25">
                <img src={prop.img} alt={prop.name} className=" img-worker pb-s" />
                <article className="text-bold pb-1">
                    <p className="p-0 m-0 pb-xs">Stefan Andersson</p>
                    <p className="p-0 m-0">Konsult</p>
                </article>
                <article>
                    <p className="p-0 m-0"><a href={`tel:${prop.phoneNumber}`} className="text-dec-none text-black">tele: {prop.phoneNumber}</a></p>
                    <p className="p-0 m-0"><a href={`mailto:${prop.email}`} className="text-dec-none text-black ">e-mail: {prop.email}</a></p>
                </article>
            </section>
        </>
    )
}

export default WorkerCardComponent;