

import { useState } from "react";

const ImageSliderComponent = () => {


    const img = 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const img2 = 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const img3 = 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    const images = [img, img2, img3];

    const [sim, setSim] = useState(0);

    const leftClick = () => {
        setSim(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
        console.log(sim)
    }

    const rightClick = () => {
        setSim(index => {
            if (index === images.length - 1) return 0
            return index + 1;
        })
        console.log(sim)
    }

    return (
        <>
            <div className="slider mb-s">
                <div className="img-box">
                    {
                        images.map((img) => {
                            return (
                                <img style={{ translate: `${-100 * sim}%` }} key={img} className="slider-img" src={img} alt="" />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex-gap-2 ">
                <button onClick={leftClick} className="button-one"><i className="bi bi-arrow-left-short small-title"></i></button>
                <button onClick={rightClick} className="button-one"><i className="bi bi-arrow-right-short small-title"></i></button>
            </div>
        </>
    )
}

export default ImageSliderComponent;