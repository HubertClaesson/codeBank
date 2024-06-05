import { useState } from "react";




const ModalComponent = () => {

    const [modal, setModal] = useState<boolean>(false)

    const handleOutsideClick = () => {
        setModal(false);
    };

    return (
        <>
            <div onBlur={() => setModal((prev) => !prev)}>
                <div>
                    {modal && (
                        <div className="modal-box " onClick={handleOutsideClick}>
                            <div className="modal">Hej på dig</div>
                            <button className="button-modal relative " onClick={() => setModal(false)}>X</button>
                        </div>
                    )}
                    <button className="btn-invert" onClick={() => setModal(!modal)}>Modal</button>
                </div>
            </div>
        </>
    )
}

export default ModalComponent;