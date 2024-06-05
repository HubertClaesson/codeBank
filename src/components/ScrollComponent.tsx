
import { ReactNode } from "react"


type ScrollCardProps = {
    scroll: 'overflows'
    children: ReactNode
}

const ScrollComponent = ({ children, scroll }: ScrollCardProps) => {
    return (
        <>
            <section className={scroll}>
                {children}
            </section>
        </>
    )
}

export default ScrollComponent;