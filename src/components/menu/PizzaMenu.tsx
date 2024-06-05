import MenuSectionTitle from "./MenuSectionTitle";
import MenuItem from "./MenuItem"


type props = {
    menuTitle: string
}

const PizzaMenu = (props: props) => {
    return (
        <>
            <section className="menu-padding border-doubble">
                <h2 className="primary-menu-title">{props.menuTitle}</h2>
                <section className="flex-column-2 ">
                    <article className="justify-space-between">
                        <MenuSectionTitle menuSubTitle="Pizzor" menuNumber='1 - 5' />
                        <MenuItem menuItem="1 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="2 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="3 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="4 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="5 Clazone" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                    </article>
                    <article className="">
                        <MenuSectionTitle menuSubTitle="Pizzor" menuNumber='6 - 7' />
                        <MenuItem menuItem="6 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="7 Clazone" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                    </article>
                    <article className="">
                        <MenuSectionTitle menuSubTitle="Pizzor" menuNumber='8 - 9' />
                        <MenuItem menuItem="8 Margareta" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                        <MenuItem menuItem="9 Clazone" menuPrice="120 kr" menuIngrediense="Ost, skinka, tomatsås, champinjoner" />
                    </article>
                </section>
            </section>
        </>
    )
}

export default PizzaMenu;