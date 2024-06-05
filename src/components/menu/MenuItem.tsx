type props = {
    menuItem: string
    menuPrice: string
    menuIngrediense: string
}

const MenuItem = (props: props) => {
    return (
        <>
            <section className="flex-space-between text-bold mb-xs third-sub-title border-bottom">
                <div>{props.menuItem}</div>
                <div>{props.menuPrice}</div>
            </section>
            <div className="text-italic pb-2">{props.menuIngrediense}</div>
        </>
    )
}

export default MenuItem;