import { ReactNode } from "react"


type FlexGridProps = {
    cardGrid: 'card-grid'
    children: ReactNode
}

const FlexGridComponent = ({ children, cardGrid }: FlexGridProps) => {
    return (
        <>
            <section className={cardGrid}>
                {children}
            </section>
        </>
    )
}

export default FlexGridComponent;