// import MenuItem from "./MenuItem"

type props = {
    menuSubTitle: string
    menuNumber: string
}


const MenuSectionTitle = (props: props) => {
    return (
        <>
            <section className="">
                <div className="flex-gap-2 sub-menu-title">
                    <h3 className="">{props.menuSubTitle}</h3>
                    <h3 className="">{props.menuNumber}</h3>
                </div>
            </section>
        </>
    )
}

export default MenuSectionTitle;