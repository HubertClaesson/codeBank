import { ReactNode } from "react"


type SpacingSectionProps = {
    spacingClass: 'margin-section'
    children: ReactNode
}

const SpaceingSectionComponent = ({ children, spacingClass }: SpacingSectionProps) => {
    return (
        <>
            <section className={spacingClass}>
                {children}
            </section>
        </>
    )
}

export default SpaceingSectionComponent;