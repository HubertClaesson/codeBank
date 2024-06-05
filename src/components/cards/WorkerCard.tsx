
type props = {
    workerName: string
    workerJobb: string
    workerNumber: string
    workerEmail: string
    img: string
    alt: string
}

const WorkerCard = (props: props) => {
    return (
        <>
            <section className="card-bodyy flex-item-25">
                <img className="img-header" src={props.img} alt={props.alt} />
                <div className="card-info">
                    <div className="align-self">
                        <div className="text-bold small-title">{props.workerName}</div>
                        <div className="text-bold mb-xs">{props.workerJobb}</div>
                        <div className=""><a href="" className="text-black">{props.workerNumber}</a></div>
                        <div className=""><a href="" className="text-black">{props.workerEmail}</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkerCard;